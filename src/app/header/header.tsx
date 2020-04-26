// @flow
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Logo from '../logo/logo';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import headerStyles from './header.jss';
import { Typography } from '@material-ui/core';
import { HideOnScroll } from '../miscellaneous';

const useStyle = makeStyles(headerStyles);

export default function Sd90srlsHeader() {
	const classes = useStyle();
	const [t] = useTranslation();
	return (
		<HideOnScroll>
			<AppBar position="sticky">
				<Toolbar>
					<Logo className={classes.logo} />
					<Typography className={classes.title} variant="h3">
						{t('header.title')}
					</Typography>
					<IconButton aria-label={t('header.cookie')} color="inherit">
						<MoreVertIcon />
					</IconButton>
					<IconButton aria-label={t('header.theme')} color="inherit">
						<Brightness4Icon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}
