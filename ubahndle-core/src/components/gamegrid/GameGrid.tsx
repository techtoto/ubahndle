import { Grid } from 'semantic-ui-react';

import './GameGrid.scss';
import { FC } from 'react';
import { AnswerValidator, Guess } from '../../utils/answerValidator';
import { useDarkMode } from '../../settings';
import { CompletedRow, CurrentRow, EmptyRow } from '../rows';

export const GameGrid: FC<{
  currentGuess: string[], guesses: Guess[], attempts: number, inPlay: boolean, validator: AnswerValidator
}> = ({ currentGuess, guesses, attempts, inPlay, validator }) => {
  const isDarkMode = useDarkMode();
  const emptyRows = [...Array(inPlay ? (attempts - 1) : attempts).keys()];
  return (
    <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
      {
        guesses.slice().map((g, i) => {
          emptyRows.pop();
          return (
            <CompletedRow guess={g} key={i} validator={validator} />
          )
        })
      }
      {
        inPlay &&
        <CurrentRow currentGuess={currentGuess} />
      }
      {
        emptyRows.map((r, i) => {
          return (
            <EmptyRow key={i} />
          );
        })
      }
    </Grid>
  );
}
