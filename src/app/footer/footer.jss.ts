import { Theme, createStyles } from '@material-ui/core/styles';
export default function footerJss(theme: Theme) {
  return createStyles({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
      theme.palette.type === 'light' ? 
      theme.palette.secondary.light : theme.palette.secondary.dark,
    },
    title: {
      flex: '0 0 auto',
      marginRight: theme.spacing(1)
    },
    section1: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
      flexShrink : 1,
      flexGrow: 1,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > a': {
        marginRight: theme.spacing(1)
      }
    },
    socials: {
      display: 'flex',
      flexDirection: 'row'
    }
  });
}
