import { FC, useState } from 'react';

import MenuToggle from '../MenuToggle/MenuToggle';
import Navigation from '../Navigation/Navigation';

import { StyledHeader, StyledHeaderTitle } from './Header.styles';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<StyledHeader>
			<MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
			<StyledHeaderTitle>Pokédex</StyledHeaderTitle>
			<Navigation isOpen={isOpen} />
		</StyledHeader>
	);
};

export default Header;
