import { ReactNode } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Modal, Header } from "semantic-ui-react";
import { TrainLabel } from "../TrainLabel";
import { Train, TrainGrid } from "./TrainGrid";

import './AboutModal.scss';
import { useDarkMode } from "../../settings";

type Props = {
  open: boolean,
  handleClose: () => void,
  children?: ReactNode,
};

type TrainExample = {
  correct: [string, string, string],
  present: [string, string, string],
  absent: [string, string, string],
};

function AboutModal({ open, handleClose, children }: Props) {
  const { t } = useTranslation();
  const isDarkMode = useDarkMode();
  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny' className={isDarkMode ? 'about-modal dark' : 'about-modal'}>
      <Modal.Header>{t('about.title')}</Modal.Header>
      <Modal.Content scrolling>
        {children}
      </Modal.Content>
    </Modal>
  );
};

AboutModal.TrainExamples = ({ exampleTrainIds }: { exampleTrainIds: TrainExample }) => {
  const { t } = useTranslation();
  return <>
    <Header as='h4'>{t('about.examples.title')}</Header>
    <TrainGrid>
      <Train type="correct">{exampleTrainIds.correct[0]}</Train>
      <Train>{exampleTrainIds.correct[1]}</Train>
      <Train>{exampleTrainIds.correct[2]}</Train>
    </TrainGrid>
    <p><TrainLabel id={exampleTrainIds.correct[0]} /> {t('about.examples.correct')}</p>
    <hr />

    <TrainGrid>
      <Train>{exampleTrainIds.present[0]}</Train>
      <Train type="present">{exampleTrainIds.present[1]}</Train>
      <Train>{exampleTrainIds.present[2]}</Train>
    </TrainGrid>
    <p><TrainLabel id={exampleTrainIds.present[1]} /> {t('about.examples.present')}</p>
    <hr />

    <TrainGrid>
      <Train>{exampleTrainIds.absent[0]}</Train>
      <Train>{exampleTrainIds.absent[1]}</Train>
      <Train type="absent">{exampleTrainIds.absent[2]}</Train>
    </TrainGrid>
    <p><TrainLabel id={exampleTrainIds.absent[2]} /> {t('about.examples.absent')}</p>
    <hr />
  </>
};

AboutModal.AroundTheWorld = () => {
  const { t } = useTranslation();
  return <p>
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
  </p>;
};

AboutModal.ForkNote = () =>
  <p>
    <Trans i18nKey="about.about.subwaydle">
      This game is forked from the <a href="https://ubahndle.hangzhi.de/">Berlin version</a>, which is a fork of the original <a href="https://www.subwaydle.com" target="_blank">Subwaydle</a> game based on the NYC Subway system.
    </Trans>
  </p>;

AboutModal.InspirationNote = () =>
  <p>
    <Trans i18nKey="about.about.inspirations">
      Inspired by <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>, <a href="https://nerdlegame.com/" target="_blank">Nerdle</a>, and <a href="https://www.nytransitmuseum.org/">New York Transit Museum</a> Trivia Nights.
    </Trans>
  </p>;

AboutModal.VersatilesNote = () =>
  <p>
    <Trans i18nKey="about.about.versatiles">
      Special Thanks to <a href="https://versatiles.org/">Versatiles</a> for hosting the map tiles.
    </Trans>
  </p>;

AboutModal.SourceCodeNote = () =>
  <p>
    <Trans i18nKey="about.about.source_code">
      <a href="https://github.com/techtoto/ubahndle" target="_blank">Source Code</a> licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU Affero General Public License Version 3.0</a>.
    </Trans>
  </p>;

AboutModal.OSMNote = () =>
  <p>
    <Trans i18nKey="about.about.geo">
      Geolocation data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>.
    </Trans>
  </p>;

export {
  AboutModal,
};
