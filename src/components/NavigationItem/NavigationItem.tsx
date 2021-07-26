import { FC } from 'react';

import { StyledNavItem } from './NavigationItem.styles';

interface IProps {
	title: string;
}

const NavigationItem: FC<IProps> = ({ title }) => {
	return <StyledNavItem>{title}</StyledNavItem>;
};

export default NavigationItem;
