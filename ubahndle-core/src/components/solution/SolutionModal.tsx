import React, { useState, useRef, useEffect, FC, ElementRef } from 'react';
import { Modal, Header, Button, Icon, ModalProps } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import './SolutionModal.scss';
import { AnswerValidator, Guess } from '../../utils/answerValidator';
import { shareStatus } from '../../utils/share';
import { MapFrame } from '../map/MapFrame';
import { useData } from '../..';
import { useDarkMode } from '../../settings';
import { Stats } from '../stats/Stats';
import { TrainLabel } from '../TrainLabel';

const BUTTON_PROMPT_MS = 2000;

type Props = {
  open: boolean,
  handleModalClose: () => void,
  isGameWon: boolean,
  stats: any,
  guesses: Guess[],
  validator: AnswerValidator,
};

export const SolutionModal: FC<Props> = ({ open, handleModalClose, isGameWon, stats, guesses, validator }) => {
  const { stations } = useData();
  const isDarkMode = useDarkMode();
  const [isShareButtonShowCopied, setIsShareButtonShowCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalHidden, setIsModalHidden] = useState(false);
  const modal = useRef<any>(null);
  const { t } = useTranslation();
  const trip = validator.todaysTrip;
  const solution = validator.todaysSolution;
  const isIos = /iP(ad|od|hone)/i.test(window.navigator.userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));

  const handleShareClick = () => {
    shareStatus(validator, guesses, !isGameWon);
    if (!navigator.share || !isIos) {
      setIsShareButtonShowCopied(true);
      setTimeout(() => {
        setIsShareButtonShowCopied(false)
      }, BUTTON_PROMPT_MS);
    }
  }

  const handleClose = () => {
    setIsModalHidden(true);
    handleModalClose();
  }

  useEffect(() => {
    if (isModalHidden && modal.current !== null) {
      modal.current.ref.current.parentElement.setAttribute("style", "display: none !important");
      modal.current.ref.current.parentElement.parentElement.classList.remove("dimmable");
      modal.current.ref.current.parentElement.parentElement.classList.remove("dimmed");
    } else {
      if (modal.current !== null && modal.current.ref.current) {
        modal.current.ref.current.parentElement.setAttribute("style", "display: flex !important");
        modal.current.ref.current.parentElement.parentElement.classList.add("dimmable");
        modal.current.ref.current.parentElement.parentElement.classList.add("dimmed");
      }
    }
  }, [isModalHidden]);

  useEffect(() => {
    if (open) {
      setIsModalHidden(false);
      setIsModalOpen(true);
    }
  }, [open]);

  const stationNamePairs = [
    [stations[solution.origin], stations[solution.first_transfer_arrival]],
    [stations[solution.first_transfer_departure], stations[solution.second_transfer_arrival]],
    [stations[solution.second_transfer_departure], stations[solution.destination]],
  ].map((pair) => pair.map((s) => s.name));

  return (
    <Modal closeIcon open={isModalOpen} onClose={handleClose} ref={modal} size='small' className={isDarkMode ? 'solution-modal dark' : 'solution-modal'}>
      {
        isGameWon && <Modal.Header>{t('solution.win_message')}</Modal.Header>
      }
      {
        !isGameWon && <Modal.Header>{t('solution.lose_message')}</Modal.Header>
      }
      <Modal.Content>
        <Modal.Description>
          {<MapFrame validator={validator} />}
          <Header as='h3'>{t('solution.title')}</Header>
          {
            stationNamePairs.map((pair, i) => {
              const origin = pair[0];
              const destination = pair[1];
              return (
                <React.Fragment key={i}>
                  <TrainLabel id={trip[i]} /> <Trans i18nKey="solution.direction">from {{ origin }} to {{ destination }}</Trans><br />
                </React.Fragment>
              )
            })
          }
          <Stats isDarkMode={isDarkMode} stats={stats} />
          <Button positive icon labelPosition='right' onClick={handleShareClick} className='share-btn'>
            {isShareButtonShowCopied ? t('solution.copied') : t('solution.share')}
            <Icon name={isShareButtonShowCopied ? 'check' : 'share alternate'} />
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
