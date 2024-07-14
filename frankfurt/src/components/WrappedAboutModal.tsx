import { AboutModal } from "@ubahndle/core";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Header } from "semantic-ui-react";

export const WrappedAboutModal: FC<{ open: boolean, handleClose: () => void }> = (props) => {
  const { t } = useTranslation();
  return <AboutModal {...props}>
    <Trans i18nKey="brand:about.intro" />

    <AboutModal.TrainExamples exampleTrainIds={{
      correct: ["U6", "S4", "S7"],
      present: ["S2", "U8", "U9"],
      absent: ["S9", "U4", "U7"],
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
