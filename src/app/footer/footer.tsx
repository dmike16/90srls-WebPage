import * as React from 'react';
import {makeStyles, Container, Typography, Divider} from '@material-ui/core';
import footerJss from './footer.jss';
import {useTranslation} from 'react-i18next';
import Sd90srlsCopyright from './copyright';
import Sd90Links from './links';

const useStyle = makeStyles(footerJss);

export default function Sd90srlsFooter() {
  const classes = useStyle();
  const [t] = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <div className={classes.section1}>
           <Typography variant="h6" className={classes.title}>{t('footer.title')}</Typography>
          <Sd90Links/>
        </div>
        <Divider variant="middle"/>
        <Sd90srlsCopyright/>
      </Container>
    </footer>
  );
}

