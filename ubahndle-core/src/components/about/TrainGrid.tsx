import { FC, ReactNode } from "react";
import { Grid, Icon, Label, Segment, SemanticICONS } from "semantic-ui-react";
import { TrainLabel, useDarkMode } from "../..";
import { loadSettings } from "../../utils/settings";

type Props = {
  children: ReactNode[]
};

export const TrainGrid: FC<Props> = ({ children }) => {
  const isDarkMode = useDarkMode();
  return <Segment basic>
    <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
      <Grid.Row>
        {children}
      </Grid.Row>
    </Grid>
  </Segment>
}

type TrainType = 'correct' | 'absent' | 'present';

const typeIcons: Record<TrainType, SemanticICONS> = {
  "correct": "check",
  "present": "arrows alternate horizontal",
  "absent": "x",
} as const;

export const Train: FC<{ children: string, type?: TrainType }> = ({ children, type }) => {
  const settings = loadSettings();
  return <Grid.Column>
    <Segment placeholder className={type}>
      {type !== undefined && settings.display.showAnswerStatusBadges &&
        <Label as='a' floating circular size="tiny">
          <Icon name={typeIcons[type]} fitted />
        </Label>
      }
      <TrainLabel id={children} />
    </Segment>
  </Grid.Column>
}
