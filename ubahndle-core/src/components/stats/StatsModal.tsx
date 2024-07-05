import { Modal } from 'semantic-ui-react';
import { Stats } from './Stats';

import './StatsModal.scss';
import { FC } from 'react';

export const StatsModal: FC<{ open: boolean, handleClose: () => void, isDarkMode: boolean, stats: any }> = ({ open, handleClose, isDarkMode, stats }) => {
  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny' className={isDarkMode ? 'stats-modal dark' : 'stats-modal'}>
      <Modal.Content>
        <Stats stats={stats} isDarkMode={isDarkMode} />
      </Modal.Content>
    </Modal>
  );
}
