import { FC, Dispatch, SetStateAction } from 'react';

import closedPokeball from '../../images/pokeball.png';
import openPokeball from '../../images/pokeball-open.png';

import { StyledMenuButton, StyledMenuIcon } from './MenuToggle.styles';

interface IProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuToggle: FC<IProps> = ({ isOpen, setIsOpen }) => {
	return (
		<StyledMenuButton onClick={() => setIsOpen(!isOpen)}>
			<StyledMenuIcon
				src={isOpen ? openPokeball : closedPokeball}
				alt={`${isOpen ? 'open' : 'closed'} pokeball menu icon`}
			/>
		</StyledMenuButton>
	);
};

export default MenuToggle;
