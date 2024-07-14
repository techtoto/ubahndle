import { Grid, Button } from 'semantic-ui-react';

import './Key.scss';
import { TrainLabel } from '../TrainLabel';
import { FC } from 'react';
import { useDarkMode } from '../..';

type Props = {
  id: string,
  disabled?: boolean,
  onClick: (id: string) => void,
  isCorrect: boolean,
  isPresent: boolean,
  isAbsent: boolean,
};

export const Key: FC<Props> = ({ id, disabled, onClick, isCorrect, isPresent, isAbsent }) => {
  const isDarkMode = useDarkMode();

  const handleClick = () => {
    onClick(id);
  }

  let className = '';

  if (isCorrect) {
    className = 'correct';
  } else if (isPresent) {
    className = 'present';
  } else if (isAbsent) {
    className = 'absent'
  }

  return (
    <Grid.Column className='key' stretched>
      <Button disabled={disabled} onClick={handleClick} className={className} inverted={isDarkMode}>
        <TrainLabel id={id} />
      </Button>
    </Grid.Column>
  )
}
