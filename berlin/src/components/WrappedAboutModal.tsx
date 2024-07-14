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

    <AboutModal.ForkNote />
    <AboutModal.AroundTheWorld />
    <AboutModal.InspirationNote />
    <AboutModal.CreationNote />
    <AboutModal.VersatilesNote />
    <AboutModal.SourceCodeNote />
    <AboutModal.OSMNote />
  </AboutModal>
}
