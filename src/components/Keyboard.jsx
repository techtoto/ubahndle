import { useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Key from './Key';
import routes from '../data/routes.json';

import './Keyboard.scss';

const KEYBOARD_MAPPING = {
}

const Keyboard = (props) => {
  const { onChar, onDelete, onEnter, correctRoutes, presentRoutes, absentRoutes } = props;

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
          ["U1", "U2", "U3"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["U4", "U5", "U6"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["U7", "U8", "U9"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["S1", "S2", "S25"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["S26", "S3", "S41"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["S42", "S45", "S46"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["S47", "S5", "S7"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
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
          ["S75", "S8", "S85"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column className='key' stretched>
            <Button onClick={handleEnter}>
              Enter
            </Button>
          </Grid.Column>
        {
          ["S9"].map((routeId) => {
            return (
              <Key
                id={routeId}
                key={routeId}
                onClick={onChar}
                isCorrect={correctRoutes.includes(routeId)}
                isPresent={presentRoutes.includes(routeId)}
                isAbsent={absentRoutes.includes(routeId)}
              />
            )
          })
        }
          <Grid.Column className='key' stretched>
            <Button onClick={handleDelete}>
              Delete
            </Button>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Keyboard;
