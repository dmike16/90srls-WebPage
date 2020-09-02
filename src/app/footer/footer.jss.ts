import { Theme, createStyles } from '@material-ui/core/styles';
export default function footerJss(theme: Theme) {
  return createStyles({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      color: theme.palette.common.white,
      backgroundColor:
      theme.palette.type === 'light' ? 
      theme.palette.primary.main : theme.palette.background.paper
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
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2)
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
