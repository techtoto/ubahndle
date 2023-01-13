import { useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Key from './Key';
import routes from '../data/routes.json';

import './Keyboard.scss';

const KEYBOARD_MAPPING = {
}

const Keyboard = (props) => {
  const { onChar, onDelete, onEnter, isDarkMode, correctRoutes, presentRoutes, absentRoutes } = props;

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase()
        if (KEYBOARD_MAPPING[key]) {
          onChar(KEYBOARD_MAPPING[key]);
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  const handleDelete = () => {
    onDelete();
  }

  const handleEnter = () => {
    onEnter();
  }


  return (
    <Grid centered columns={3} className='keyboard'>
      <Grid.Row>
        {
          ["1", "3", "4"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
      </Grid.Row>
      <Grid.Row>
        {
          ["5", "7", "9"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row>
        {
          ["12", "13", "15"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row>
        {
          ["16", "17", "18"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                isDarkMode={isDarkMode}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column className='key' stretched>
            <Button onClick={handleEnter} inverted={isDarkMode}>
              Enter
            </Button>
          </Grid.Column>
          <Grid.Column className='key' stretched>
            <Button onClick={handleDelete} inverted={isDarkMode}>
              Delete
            </Button>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Keyboard;
