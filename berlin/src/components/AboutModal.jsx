import { Modal, Header, Grid, Segment, Icon, Label } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import { TrainLabel } from '@ubahndle/core';
import { loadSettings } from '../utils/settings';

import './AboutModal.scss';

const AboutModal = (props) => {
  const { open, handleClose, isDarkMode } = props;
  const { t, i18n } = useTranslation();
  const settings = loadSettings();
  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny' className={isDarkMode ? 'about-modal dark' : 'about-modal'}>
      <Modal.Header>{ t('about.title') }</Modal.Header>
      <Modal.Content scrolling>
        <Trans i18nKey="brand:about.intro" />
        <Header as='h4'>{ t('about.examples.title') }</Header>
        <Segment basic>
          <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder className='correct'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="check" fitted />
                    </Label>
                  }
                  <TrainLabel id='U1' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='U9' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='S41' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p><TrainLabel id='U1' size='small' /> { t('about.examples.correct') }</p>
        <hr />

        <Segment basic>
          <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='S25' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='present'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="arrows alternate horizontal" fitted />
                    </Label>
                  }
                  <TrainLabel id='U8' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='S45' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='U8' size='small' /> { t('about.examples.present') }</p>
        <hr />

        <Segment basic>
          <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='S41' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='U3' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='absent'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="x" fitted />
                    </Label>
                  }
                  <TrainLabel id='S9' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='S9' size='small' /> { t('about.examples.absent') }</p>

        <Trans i18nKey="about.explanation">
          <p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to
          find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p>
          <p>Routing for each train line is based on <strong>weekday off-peak schedule</strong> (i.e. no S3 line express trains).</p>
        </Trans>

        <Header as='h4'>{ t('about.about.title') }</Header>
        <p>
          <Trans i18nKey="about.about.subwaydle">
            This game is forked from the original <a href="https://ubahndle.hangzhi.de/">Berlin version</a>, which is a fork of the original <a href="https://www.subwaydle.com">Subwaydle</a> game based on the NYC Subway system.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.around_the_world">
            Subwaydles around the world:
          </Trans>
          <ul>
            <li><a href="https://www.subwaydle.com" target="_blank">New York</a></li>
            <li><a href="https://hk.subwaydle.com" target="_blank">Hong Kong</a></li>
            <li><a href="https://london.subwaydle.com/" target="_blank">London</a></li>
            <li><a href="https://berlin.ubahndle.techtoto.dev" target="_blank">Berlin</a></li>
            <li><a href="https://frankfurt.ubahndle.techtoto.dev" target="_blank">Frankfurt</a></li>
            <li><a href="https://stadtbahndle-cologne.marie.cologne" target="_blank">{t("city.cologne")}</a></li>
          </ul>
        </p>

        <p>
          <Trans i18nKey="about.about.inspirations">
            Inspired by <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>, <a href="https://nerdlegame.com/" target="_blank">Nerdle</a>, and <a href="https://www.nytransitmuseum.org/">New York Transit Museum</a> Trivia Nights.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.created">
            Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a>, adapted to the Berlin rapid transit system by <a href="https://www.hangzhi.de" target="_blank">Hangzhi Yu</a> and modernized by <a href="https://github.com/techtoto">techtoto</a> and <a href="https://github.com/nycodeghg">Marie</a>.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.versatiles">
            Special Thanks to <a href="https://versatiles.org/">Versatiles</a> for hosting the map tiles.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.source_code">
            <a href="https://github.com/techtoto/ubahndle/tree/berlin" target="_blank">Source Code</a> licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU Affero General Public License Version 3.0</a>.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.geo">
            Geolocation data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>.
          </Trans>
        </p>
      </Modal.Content>
    </Modal>
  );
}

export default AboutModal;
