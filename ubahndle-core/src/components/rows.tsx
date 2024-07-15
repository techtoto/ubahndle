import { FC } from 'react';
import { Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { AnswerValidator, Guess } from '../utils/answerValidator';
import { loadSettings } from '../utils/settings';
import { TrainLabel } from './TrainLabel';

export const CompletedRow: FC<{ guess: Guess, validator: AnswerValidator }> = ({ guess, validator }) => {
  const classNameArrays = validator.checkGuessStatus(guess)
  const settings = loadSettings();

  return (
    <Grid.Row>
      {
        guess.map((routeId, index) => {
          return (
            <Grid.Column key={`guess-${index}`}>
              <Segment placeholder className={classNameArrays[index]}>
                {settings.display.showAnswerStatusBadges &&
                  <Label as='a' floating circular size='tiny'>
                    {
                      classNameArrays[index] === 'present' ?
                        <Icon name="arrows alternate horizontal" fitted /> :
                        classNameArrays[index] === 'correct' ?
                          <Icon name="check" fitted /> :
                          classNameArrays[index] === 'similar' ?
                            <Icon name="sync alternate" fitted /> :
                            <Icon name="x" fitted />
                    }
                  </Label>
                }
                <TrainLabel id={routeId} />
              </Segment>
            </Grid.Column>
          );
        })
      }
    </Grid.Row>
  );
}

export const CurrentRow: FC<{ currentGuess: string[] }> = ({ currentGuess }) => {
  const emptyGuesses = [...Array(3).keys()];
  return (
    <Grid.Row>
      {
        currentGuess.map((routeId, index) => {
          emptyGuesses.pop();
          return (
            <Grid.Column key={`guess-${index}`}>
              <Segment placeholder>
                <TrainLabel id={routeId} />
              </Segment>
            </Grid.Column>
          );
        })
      }
      {
        emptyGuesses.map((i) => {
          return (
            <Grid.Column key={i}>
              <Segment placeholder></Segment>
            </Grid.Column>
          );
        })
      }
    </Grid.Row>
  );
}

export function EmptyRow() {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment placeholder></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment placeholder></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment placeholder></Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
