import * as React from 'react';
import {makeStyles, Container, Typography, Divider} from '@material-ui/core';
import footerJss from './footer.jss';
import {useTranslation} from 'react-i18next';
import Sd90srlsCopyright from './copyright';

const useStyle = makeStyles(footerJss);

export default function Sd90srlsFooter() {
  const classes = useStyle();
  const [t] = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h6" >{t('footer.title')}</Typography>
        <Divider variant="middle"/>
        <Sd90srlsCopyright/>
      </Container>
    </footer>
  );
}

