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
                  <TrainLabel id='16' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='15' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='1' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <p><TrainLabel id='16' size='small' /> { t('about.examples.correct') }</p>
        <hr />

        <Segment basic>
          <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='4' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='present'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="arrows alternate horizontal" fitted />
                    </Label>
                  }
                  <TrainLabel id='13' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='5' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='13' size='small' /> { t('about.examples.present') }</p>
        <hr />

        <Segment basic>
          <Grid centered columns={3} className={isDarkMode ? 'game-grid dark' : 'game-grid'}>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='7' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainLabel id='12' size='small' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='absent'>
                  {settings.display.showAnswerStatusBadges &&
                    <Label as='a' floating circular size='tiny'>
                      <Icon name="x" fitted />
                    </Label>
                  }
                  <TrainLabel id='18' size='small' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p><TrainLabel id='18' size='small' /> { t('about.examples.absent') }</p>

        <Trans i18nKey="brand:about.explanation">
          <p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to
          find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p>
          <p>
            Routing for each train line is based on <strong>weekday off-peak schedule</strong>.
            Current construction work or deviations in night traffic are not taken into account. The provisional lines 14 and 19, as well as the separation of lines 13 and 18, are also currently not taken into account.
          </p>
        </Trans>

        <Header as='h4'>{ t('about.about.title') }</Header>
        <p>
          <Trans i18nKey="about.about.subwaydle">
            This game was forked from the <a href="https://github.com/Hnagzhi/subwaydle-berlin/">Berlin version</a> of the original New York <a href="https://github.com/blahblahblah-/subwaydle">Subwaydle</a>.
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
            Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a> and adapted to the Cologne rapid transit system by <a href="https://github.com/nycodeghg" target="_blank">Marie</a>.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="brand:about.kvb_notice">
            Special Thanks to the <a href="https://kvb.koeln" target="_blank">KVB</a> for their <a href="https://kvb.koeln/service/open_data.html" target="_blank">Open Data service</a>!
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.versatiles">
            Special Thanks to <a href="https://versatiles.org/">Versatiles</a> for hosting the map tiles.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="about.about.source_code">
            <a href="https://github.com/techtoto/ubahndle/tree/cologne" target="_blank">Source Code</a> licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU Affero General Public License Version 3.0</a>.
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
