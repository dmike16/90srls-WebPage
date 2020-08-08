import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, makeStyles} from '@material-ui/core';
import footerJss from './footer.jss';

const useStyle = makeStyles(footerJss); 

export default function Sd90Links(){
  const [t] = useTranslation();
  const classes = useStyle();
  const links = [
    { key: 'sermetra' , value: t('footer.links.sermetra')}
    , {key: 'unasca', value: t('footer.links.unasca')}
    , {key: 'cna', value: t('footer.links.cna')}
    , {key: 'motorizzazione',value: t('footer.links.motorizzazione')}
  ];
  return (
    <div className={classes.links}>
      {links.map((link) => <Link key={link.key} href={link.value}>{link.key.toUpperCase()}</Link>)}
    </div>
  );
}
