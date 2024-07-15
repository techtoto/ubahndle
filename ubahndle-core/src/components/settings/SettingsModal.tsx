import { FC, FormEvent, useState } from 'react';
import { Modal, Header, Grid, Checkbox, Icon, Popup, CheckboxProps } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import './SettingsModal.scss'
import { useDarkMode, useSettings } from '../../settings';
import { defaultSettings } from '../../utils/settings';

export const SettingsModal: FC<{
  open: boolean,
  handleClose: () => void,
}> = ({ open, handleClose }) => {
  const isDarkMode = useDarkMode();
  const { settings, setSettings } = useSettings();

  const showAnswerStatusBadgesToggleChanged = (_: FormEvent, value: CheckboxProps) => {
    const settings = { ...defaultSettings };

    if (value.checked !== undefined) {
      settings.display.showAnswerStatusBadges = value.checked;
    };

    setSettings(settings);
  }

  const darkModeToggleChanged = (_: FormEvent, value: CheckboxProps) => {
    const settings = { ...defaultSettings };

    if (value.checked !== undefined) {
      settings.display.darkMode = value.checked;
    }

    setSettings(settings);
  }

  const { t } = useTranslation();

  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny' className={isDarkMode ? 'settings-modal dark' : 'settings-modal'}>
      <Modal.Header>{t('settings.title')}</Modal.Header>
      <Modal.Content scrolling>
        <Header>{t('settings.display.title')}</Header>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column className='fourteen wide'>
              {t('settings.display.show_badges')}&nbsp;
              <Popup inverted={isDarkMode} content={t('settings.display.show_badges_hint')}
                trigger={
                  <Icon inverted={isDarkMode} name='question circle outline' size='large' link />
                }
              />
            </Grid.Column>
            <Grid.Column className='two wide'>
              <Checkbox toggle className='float-right'
                name='showAnswerStatusBadgesToggle'
                onChange={showAnswerStatusBadgesToggleChanged}
                checked={settings.display.showAnswerStatusBadges} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className='fourteen wide'>
              {t('settings.display.darkMode')}
            </Grid.Column>
            <Grid.Column className='two wide'>
              <Checkbox toggle className='float-right'
                name='darkModeToggle'
                onChange={darkModeToggleChanged}
                checked={settings.display.darkMode} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
}
