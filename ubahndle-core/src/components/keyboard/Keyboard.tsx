import { Grid, Button } from 'semantic-ui-react';
import { Key } from './Key';

import './Keyboard.scss';
import { FC } from 'react';
import { useDarkMode } from '../../settings';

type Props = {
  onChar: (id: string) => void,
  onDelete: () => void,
  onEnter: () => void,
  correctRoutes: string[],
  presentRoutes: string[],
  absentRoutes: string[],
  keys: string[],
}

const KeyRow: FC<{
  keys: string[],
  onClick: (id: string) => void,
  isCorrect: (id: string) => boolean,
  isPresent: (id: string) => boolean,
  isAbsent: (id: string) => boolean,
}> = ({ keys, onClick, isCorrect, isPresent, isAbsent }) =>
    <Grid.Row columns={3}>
      {keys.map(id => <Key id={id} key={id} onClick={onClick} isCorrect={isCorrect(id)} isPresent={isPresent(id)} isAbsent={isAbsent(id)} />)}
    </Grid.Row>

export const Keyboard: FC<Props> = ({ onChar, onDelete, onEnter, correctRoutes, presentRoutes, absentRoutes, keys }) => {
  const handleEnter = () => {
    onEnter();
  }
  const isDarkMode = useDarkMode();

  let rows = [];
  let index = 0;

  if (keys.length % 3 == 2) {
    throw new Error("Keyboard currently only supports /3 or /3 + 1 keys")
  }

  while (index < keys.length - 1) {
    const rowKeys = keys.slice(index, index + 3);
    rows.push(
      <KeyRow
        key={`${keys[index]}_${keys[index + 1]}_${keys[index + 2]}`}
        keys={rowKeys}
        onClick={onChar}
        isCorrect={id => correctRoutes.includes(id)}
        isPresent={id => presentRoutes.includes(id)}
        isAbsent={id => absentRoutes.includes(id)}
      />
    )
    index += 3;
  }

  const middleButton = keys.at(index)

  return (
    <Grid centered columns={3} className='keyboard'>
      {rows}
      <Grid.Row columns={middleButton === undefined ? 2 : 3}>
        <Grid.Column className='key' stretched>
          <Button onClick={handleEnter} inverted={isDarkMode}>
            Enter
          </Button>
        </Grid.Column>
        {middleButton && <Key
          id={middleButton}
          onClick={onChar}
          isCorrect={correctRoutes.includes(middleButton)}
          isPresent={presentRoutes.includes(middleButton)}
          isAbsent={absentRoutes.includes(middleButton)}
        />}
        <Grid.Column className='key' stretched>
          <Button onClick={onDelete} inverted={isDarkMode}>
            Delete
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
