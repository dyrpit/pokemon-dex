import { FC } from 'react';

import { StyledNavItem, StyledLink } from './NavigationItem.styles';

interface IProps {
	title: string;
}

const NavigationItem: FC<IProps> = ({ title }) => {
	return (
		<StyledNavItem>
			<StyledLink to={`/${title}`}>{title}</StyledLink>
		</StyledNavItem>
	);
};

export default NavigationItem;
