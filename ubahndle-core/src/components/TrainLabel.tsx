import { Label } from 'semantic-ui-react';
import { FC, useContext } from 'react';
import { DataContext } from '..';

const style = (train: any) => {
  const { color, text_color } = train;
  let styleHash = {
    backgroundColor: `${color}`,
    color: text_color || '#ffffff',
    margin: 0,
  };

  return styleHash;
}

export const TrainLabel: FC<{ id: string }> = ({ id }) => {
  const { routes } = useContext(DataContext)
  const train = routes[id];
  const name = train.name;
  const size = 'small';

  return (
    <Label style={style(train)} size={size}>
      {name}
    </Label>
  );
}
