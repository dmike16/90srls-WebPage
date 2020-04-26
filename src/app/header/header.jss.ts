import { Theme, createStyles } from '@material-ui/core/styles';
export default function headerJss(theme: Theme) {
	return createStyles({
		logo: {
			width: '24%',
			[theme.breakpoints.up('xs')] :{
				width: '14%'
			},
			[theme.breakpoints.up('md')]: {
				width:'8%'
			}
		},
		title: {
			flexGrow: 1
		}
	});
}
