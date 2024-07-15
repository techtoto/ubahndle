const GAME_EPOCH = new Date('May 23, 2022 00:00:00').valueOf();

const now = Date.now();

export type Guess = [string, string, string];

export class AnswerValidator {
  constructor(
    private solutions: Record<string, any>,
    private answers: Record<string, any>,
  ) { }

  isValidGuess(guess: Guess): boolean {
    const flattenedGuess = guess.join('-');
    return !!this.solutions[flattenedGuess];
  }

  isWinningGuess(guess: Guess): boolean {
    return guess.join("-") === this.flattenedTodaysTrip;
  }

  get todaysTrip(): Guess {
    const index = todayGameIndex();
    return this.answers[index % this.answers.length];
  }

  get flattenedTodaysTrip() {
    return this.todaysTrip.join('-')
  }

  get todaysSolution() {
    return this.solutions[this.flattenedTodaysTrip];
  }

  updateGuessStatuses(
    guesses: Guess[],
    setCorrectRoutes: (routes: string[]) => void,
    setPresentRoutes: (routes: string[]) => void,
    setAbsentRoutes: (routes: string[]) => void,
    correctRoutes?: string[],
    presentRoutes?: string[],
    absentRoutes?: string[],
  ) {
    const correct = correctRoutes || [];
    const present = presentRoutes || [];
    const absent = absentRoutes || [];

    guesses.forEach((guess) => {
      const remainingRoutes: string[] = [];
      const remainingGuessPositions: number[] = [];

      this.todaysTrip.forEach((routeId, index) => {
        if (guess[index] === routeId) {
          correct.push(routeId);
        } else {
          remainingRoutes.push(routeId);
          remainingGuessPositions.push(index);
        }
      });

      remainingGuessPositions.forEach((index) => {
        if (remainingRoutes.includes(guess[index])) {
          present.push(guess[index]);
        } else {
          absent.push(guess[index]);
        }
      });
    });

    setCorrectRoutes(correct);
    setPresentRoutes(present);
    setAbsentRoutes(absent);
  }

  checkGuessStatus(guess: Guess): [string, string, string] {
    const results: [string, string, string] = ['absent', 'absent', 'absent'];
    const remainingRoutes: string[] = [];
    const remainingGuessPositions: number[] = [];

    this.todaysTrip.forEach((routeId, index) => {
      if (guess[index] === routeId) {
        results[index] = 'correct';
      } else {
        remainingRoutes.push(routeId);
        remainingGuessPositions.push(index);
      }
    });

    remainingGuessPositions.forEach((index) => {
      if (remainingRoutes.includes(guess[index])) {
        results[index] = 'present';
      }
    });

    return results;
  }
}

export const todayGameIndex = () => {
  return Math.floor(Math.max(daysBetween(GAME_EPOCH, now), 0));
}

const treatAsUTC = (date: number) => {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

const daysBetween = (startDate: number, endDate: number) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate).getTime() - treatAsUTC(startDate).getTime()) / millisecondsPerDay;
}
