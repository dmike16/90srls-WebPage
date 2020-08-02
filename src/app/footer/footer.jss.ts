import { Theme, createStyles } from '@material-ui/core/styles';
export default function footerJss(theme: Theme) {
  return createStyles({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
      theme.palette.type === 'light' ? 
      theme.palette.secondary.light : theme.palette.secondary.dark,
    }
  });
}
