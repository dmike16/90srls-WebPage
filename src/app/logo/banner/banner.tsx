import * as React from 'react';
import {Paper, makeStyles, Container, Typography} from '@material-ui/core';
import bannerJss from './banner.jss';
import {useTranslation} from 'react-i18next';

const useStyle = makeStyles(bannerJss);

export default function Sd90Banner(props: {children: React.ReactElement}) {
  const {children} = props;
  const classes = useStyle();
  const [t] = useTranslation();

  return (
    <Paper elevation={0} className={classes.root}>
      {children}
      <Container maxWidth="md">
        <div className={classes.container}>
          <Typography variant="h1" align="center">
            {t('banner.title')}
          </Typography>
          <Typography variant="h4" align="center">
            {t('banner.subTitle')}
          </Typography>
        </div>
      </Container>
    </Paper>
  );
}

