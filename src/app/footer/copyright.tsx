import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';

export default function Sd90srlsCopyright() {
  const [t] = useTranslation();
  return (
    <Typography variant="body2" color="inherit">
      {t('footer.copyright')}
    </Typography>
  );
}

