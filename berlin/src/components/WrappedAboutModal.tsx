import { AboutModal } from "@ubahndle/core";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Header } from "semantic-ui-react";

export const WrappedAboutModal: FC<{ open: boolean, handleClose: () => void }> = (props) => {
  const { t } = useTranslation();
  return <AboutModal {...props}>
    <Trans i18nKey="brand:about.intro" />

    <AboutModal.TrainExamples exampleTrainIds={{
      correct: ["U1", "U9", "S41"],
      present: ["S25", "U8", "S45"],
      absent: ["S41", "U3", "S9"],
    }} />

    <Trans i18nKey="about.explanation" />

    <Header as='h4'>{t('about.about.title')}</Header>

    <p>
      <Trans i18nKey="brand:about.fork">
        This game is forked from the original <a href="https://ubahndle.hangzhi.de/">Berlin version</a>, which is a fork of the original <a href="https://www.subwaydle.com" target="_blank">Subwaydle</a> game based on the NYC Subway system.
      </Trans>
    </p>
    <AboutModal.AroundTheWorld />
    <AboutModal.InspirationNote />
    <p>
      <Trans i18nKey="brand:about.created">
        Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a>, adapted to the Berlin rapid transit system by <a href="https://www.hangzhi.de/" target="_blank">Hangzhi Yu</a> and modernized by <a href="https://www.github.com/techtoto">techtoto</a> and <a href="https://www.github.com/nycodeghg">Marie</a>.
      </Trans>
    </p>
    <AboutModal.VersatilesNote />
    <AboutModal.SourceCodeNote />
    <AboutModal.OSMNote />
  </AboutModal>
}
