import { t } from 'i18next';
import { todayGameIndex, Guess, AnswerValidator } from './answerValidator';

export function shareStatus(validator: AnswerValidator, guesses: Guess[], lost: any) {
  const title = `${t("brand:brand.game_name")} ${todayGameIndex()}`;
  const text = `${title} ${lost ? 'X' : guesses.length}/6\n\n` +
    generateEmojiGrid(validator, guesses);
  if (navigator.share) {
    navigator.share({text: text});
  } else {
    navigator.clipboard.writeText(text);
  }
}

function generateEmojiGrid(validator: AnswerValidator, guesses: Guess[]) {
  return guesses
    .map((guess) => {
      const status = validator.checkGuessStatus(guess);
      return status.map((s) => {
          switch (s) {
            case 'correct':
              return '🟢';
            case 'similar':
              return '🔵';
            case 'present':
              return '🟡';
            default:
              return '⚪';
          }
        })
        .join('');
    })
    .join('\n');
}
