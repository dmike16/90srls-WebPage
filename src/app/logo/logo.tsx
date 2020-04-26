import * as React from 'react';

import logo1x from '../../assets/images/icon/logo@1x.png';
import logo2x from '../../assets/images/icon/logo@2x.png';

export default function Logo(props?: { className?: string }) {
	const { className } = props;
	return (
		<img
			src={logo1x}
			srcSet={logo2x + ' 2x'}
			alt="Logo agenzia"
			className={className}
		/>
	);
}
