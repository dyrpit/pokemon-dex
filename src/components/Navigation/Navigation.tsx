import { FC } from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import { StyledNav, StyledNavList, StyledOverlay } from './Navigation.styles';

const listItems = ['types', 'regions', 'about'];

interface IProps {
	isOpen: boolean;
}

const Navigation: FC<IProps> = ({ isOpen }) => {
	return (
		<>
			<StyledNav animate={isOpen ? 'open' : 'closed'}>
				<StyledNavList>
					{listItems.map((item) => (
						<NavigationItem key={item} title={item} />
					))}
				</StyledNavList>
			</StyledNav>
			<StyledOverlay animate={isOpen ? 'open' : 'closed'} />
		</>
	);
};

export default Navigation;
