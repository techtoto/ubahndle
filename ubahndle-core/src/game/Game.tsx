import { useState, useEffect, useMemo, FC, ReactNode } from 'react';
import { Header, Segment, Icon, Message } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import './Game.scss';
import { useData } from '..';
import { GameGrid } from '../components/gamegrid/GameGrid';
import { Keyboard } from '../components/keyboard/Keyboard';
import { SettingsModal } from '../components/settings/SettingsModal';
import { SolutionModal } from '../components/solution/SolutionModal';
import { StatsModal } from '../components/stats/StatsModal';
import { useDarkMode, useSettings } from '../settings';
import { AnswerValidator } from '../utils/answerValidator';
import { loadGameStateFromLocalStorage, isNewToGame, saveGameStateToLocalStorage } from '../utils/localStorage';
import { loadStats, addStatsForCompletedGame } from '../utils/stats';

const ATTEMPTS = 6;
const ALERT_TIME_MS = 2000;

export const Game: FC<{ about: FC<{ open: boolean, handleClose: () => void }> }> = ({ about: AboutComponent }) => {
  const { solutions, answers, routes, stations } = useData();
  const validator = useMemo(() => new AnswerValidator(solutions, answers), [solutions, answers]);

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotEnoughRoutes, setIsNotEnoughRoutes] = useState(false);
  const [isGuessInvalid, setIsGuessInvalid] = useState(false);
  const [absentRoutes, setAbsentRoutes] = useState<string[]>([]);
  const [presentRoutes, setPresentRoutes] = useState<string[]>([]);
  const [correctRoutes, setCorrectRoutes] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(() => {
    const loaded = loadGameStateFromLocalStorage();
    if (loaded?.answer !== validator.flattenedTodaysTrip) {
      if (isNewToGame() && window.location === window.parent.location) {
        setIsAboutOpen(true);
      }
      return [];
    }
    const gameWasWon = loaded.guesses.map((g: string[]) => g.join('-')).includes(validator.flattenedTodaysTrip)
    if (gameWasWon) {
      setIsGameWon(true);
      setIsSolutionsOpen(true);
    }
    if (loaded.guesses.length === 6 && !gameWasWon) {
      setIsGameLost(true)
      setIsSolutionsOpen(true);
    }
    validator.updateGuessStatuses(loaded.guesses, setCorrectRoutes, setPresentRoutes, setAbsentRoutes);
    return loaded.guesses;
  });
  const [stats, setStats] = useState(() => loadStats());

  const { t } = useTranslation();

  const solution = validator.todaysSolution;

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, answer: validator.flattenedTodaysTrip })
  }, [guesses])

  const onChar = (routeId: string) => {
    if (!isStatsOpen && !isGameWon && currentGuess.length < 3 && guesses.length < ATTEMPTS) {
      setCurrentGuess([...currentGuess, routeId]);
    }
  }

  const onDelete = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    }
  }

  const onEnter = () => {
    const guessCount = guesses.length;
    if (isGameWon || isGameLost || guessCount === 6) {
      return;
    }

    if (currentGuess.length !== 3) {
      setIsNotEnoughRoutes(true);
      setTimeout(() => {
        setIsNotEnoughRoutes(false)
      }, ALERT_TIME_MS);
      return;
    }
    let guess = currentGuess as [string, string, string];

    if (!validator.isValidGuess(guess)) {
      setIsGuessInvalid(true);
      setTimeout(() => {
        setIsGuessInvalid(false)
      }, ALERT_TIME_MS);
      return;
    }

    const winningGuess = validator.isWinningGuess(guess);
    const newGuesses = [...guesses, currentGuess];

    validator.updateGuessStatuses(
      [guess],
      setCorrectRoutes,
      setPresentRoutes,
      setAbsentRoutes,
      correctRoutes,
      presentRoutes,
      absentRoutes,
    );

    setGuesses(newGuesses);
    setCurrentGuess([]);

    if (winningGuess) {
      const updatedStats = addStatsForCompletedGame(stats, guessCount);
      setStats(updatedStats);
      setIsGameWon(true);
      setIsSolutionsOpen(true);
      return;
    }

    if (newGuesses.length === 6) {
      const updatedStats = addStatsForCompletedGame(stats, guessCount + 1);
      setStats(updatedStats);
      setIsGameLost(true);
      setIsSolutionsOpen(true);
    }
  }

  const onSolutionsClose = () => {
    setIsSolutionsOpen(false);
  }

  const onStatsClose = () => {
    setIsStatsOpen(false);
  }

  const onAboutClose = () => {
    setIsAboutOpen(false);
  }

  const onSettingsClose = () => {
    setIsSettingsOpen(false);
  }

  const handleStatsOpen = () => {
    if (isGameWon || isGameLost) {
      setIsSolutionsOpen(true);
    } else {
      setIsStatsOpen(true);
    }
  }

  const handleSettingsOpen = () => {
    setIsSettingsOpen(true);
  }

  const handleAboutOpen = () => {
    setIsAboutOpen(true);
  }

  const origin = stations[solution.origin].name;
  const destination = stations[solution.destination].name;

  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Segment basic className='app-wrapper' inverted={isDarkMode}>
      <Segment clearing basic className='header-wrapper' inverted={isDarkMode}>
        <Header floated='left'>Ubahndle</Header>
        <Icon className='float-right' inverted={isDarkMode} name='cog' size='large' link onClick={handleSettingsOpen} />
        <Icon className='float-right' inverted={isDarkMode} name='chart bar' size='large' link onClick={handleStatsOpen} />
        <Icon className='float-right' inverted={isDarkMode} name='question circle outline' size='large' link onClick={handleAboutOpen} />
      </Segment>
      <Header as='h5' textAlign='center' className='hint'>
        <Trans i18nKey="hint">
          Travel from {{ origin }} to {{ destination }} with 2 interchanges.
        </Trans>
      </Header>
      <Segment basic className='game-grid-wrapper'>
        {
          isNotEnoughRoutes &&
          <Message negative floating attached='top'>
            <Message.Header>{t('error.not_enough')}</Message.Header>
          </Message>
        }
        {
          isGuessInvalid &&
          <Message negative>
            <Message.Header>{t('error.not_valid')}</Message.Header>
          </Message>
        }
        <GameGrid
          currentGuess={currentGuess}
          guesses={guesses}
          attempts={ATTEMPTS}
          inPlay={!isGameWon && !isGameLost && guesses.length < 6}
          validator={validator}
        />
      </Segment>
      <Segment basic>
        <Keyboard
          keys={Object.keys(routes)}
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          correctRoutes={correctRoutes}
          presentRoutes={presentRoutes}
          absentRoutes={absentRoutes}
        />
      </Segment>
      <AboutComponent open={isAboutOpen} handleClose={onAboutClose} />
      <SolutionModal open={isSolutionsOpen} isGameWon={isGameWon} handleModalClose={onSolutionsClose} stats={stats} guesses={guesses} validator={validator} />
      <StatsModal open={isStatsOpen} isDarkMode={isDarkMode} stats={stats} handleClose={onStatsClose} />
      <SettingsModal open={isSettingsOpen} handleClose={onSettingsClose} />
    </Segment>
  );
}
