// @flow
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Logo from '../logo/logo';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import headerStyles from './header.jss';
import { Typography, MenuItem, Menu, Button } from '@material-ui/core';
import { HideOnScroll } from '../miscellaneous';
import TranslateIcon from '@material-ui/icons/Translate';
import { supportedLanguages } from '../i18n';

const useStyle = makeStyles(headerStyles);

export default function Sd90srlsHeader() {
  const classes = useStyle();
  const [t, i18n] = useTranslation();
  const [openLangMenu, setOpenLangMenu] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState(i18n.language);
  const anchorRef = React.useRef(null);

  const reactToLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenLangMenu(true);
  };

  const reactToCloseLangMenu = () => {
    setOpenLangMenu(false);
  }

  const reactToClosLangItem = (idx: number) => {
    setOpenLangMenu(false);
    setSelectedLang(supportedLanguages[idx]);
    i18n.changeLanguage(supportedLanguages[idx])
  }

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar>
          <Logo className={classes.logo} />
          <Typography className={classes.title} variant="h3">
            {t('header.title')}
          </Typography>
          <Button 
            ref={anchorRef}
            color="inherit" 
            aria-controls="language-menu" 
            aria-haspopup="true"
            startIcon= {<TranslateIcon/>}
            onClick={reactToLangClick}>
            {t(`lang.${selectedLang}`)}
          </Button>
          <Menu id="language-menu" 
            keepMounted
            anchorEl={anchorRef.current}
            open={openLangMenu} 
            onClose={reactToCloseLangMenu}>
            {supportedLanguages.map((k, idx) => <MenuItem 
              key={k} 
              disabled={k === selectedLang}
              selected={k === selectedLang}
              onClick={() => reactToClosLangItem(idx)}>{t(`lang.${k}`)}</MenuItem>)}
          </Menu>
          <IconButton aria-label={t('header.cookie')} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <IconButton aria-label={t('header.theme')} color="inherit">
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
