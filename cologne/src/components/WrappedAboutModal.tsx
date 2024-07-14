import { AboutModal } from "@ubahndle/core";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Header } from "semantic-ui-react";

export const WrappedAboutModal: FC<{ open: boolean, handleClose: () => void }> = (props) => {
  const { t } = useTranslation();
  return <AboutModal {...props}>
    <Trans i18nKey="brand:about.intro" />

    <AboutModal.TrainExamples exampleTrainIds={{
      correct: ["16", "15", "1"],
      present: ["4", "13", "5"],
      absent: ["7", "12", "18"],
    }} />

    <Trans i18nKey="about.explanation" />

    <Header as='h4'>{t('about.about.title')}</Header>

    <AboutModal.ForkNote />
    <AboutModal.AroundTheWorld />
    <AboutModal.InspirationNote />
    <AboutModal.CreationNote />
    <p>
      <Trans i18nKey="brand:about.kvb_notice">
        Special Thanks to the <a href="https://kvb.koeln" target="_blank">KVB</a> for their <a href="https://kvb.koeln/service/open_data.html" target="_blank">Open Data service</a>!
      </Trans>
    </p>
    <AboutModal.VersatilesNote />
    <AboutModal.SourceCodeNote />
    <AboutModal.OSMNote />
  </AboutModal>
}
