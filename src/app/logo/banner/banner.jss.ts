import { Theme, createStyles } from '@material-ui/core/styles';

import bannerDark1 from '../../../assets/images/section/banner/banner@1px.jpg';
import bannerDark2 from '../../../assets/images/section/banner/banner@2px.jpg';
import bannerLight1 from '../../../assets/images/section/banner/banner_light@1px.jpg';
import bannerLight2 from '../../../assets/images/section/banner/banner_light@2px.jpg';

export default function bannerJss(theme: Theme) {
  const isLight = theme.palette.type === 'light';
	return createStyles({
    root: {
      minHeight: '100vh',
      backgroundColor: isLight ? theme.palette.primary.main : theme.palette.background.default,
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${isLight ? bannerLight1 : bannerDark1})`,
      [theme.breakpoints.up('md')] : {
        backgroundImage: `url(${isLight ? bannerLight2: bannerDark2})`
      }
    },
    container: {
        marginTop: theme.spacing(3),
    }
	});
}
