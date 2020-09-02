import * as React from 'react';
import {makeStyles, Container,  Divider, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
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
          <Sd90Links/>
          <div className={classes.socials}>
            <Link aria-label="facebook" color='inherit' href={t('footer.socials.facebook')}>
              <FacebookIcon/>
            </Link>
            <Link aria-label="instagram" color='inherit'>
              <InstagramIcon/>
             </Link>
           </div>
        </div>
        <Divider variant="middle" light/>
        <Sd90srlsCopyright/>
      </Container>
    </footer>
  );
}

