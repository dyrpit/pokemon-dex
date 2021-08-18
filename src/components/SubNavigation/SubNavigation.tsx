import { useState, FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import Evolutions from '../Evolutions/Evolutions';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';

import { PokemonDetailsData } from '../PokemonItem/PokemonItem';

import { StyledSubNav, StyledSubNavList, StyledSubNavItem } from './SubNavigation.styles';

interface IProps {
	details: PokemonDetailsData;
}

const subNavList = ['info', 'stats', 'evolutions'];

const SubNavigation: FC<IProps> = ({ details }) => {
	const [currentActive, setCurrentActive] = useState<number>(0);

	return (
		<>
			<StyledSubNav>
				<StyledSubNavList>
					{subNavList.map((item, id) => (
						<StyledSubNavItem
							key={item}
							onClick={() => setCurrentActive(id)}
							isActive={id === currentActive}
						>
							{item}
						</StyledSubNavItem>
					))}
				</StyledSubNavList>
			</StyledSubNav>
			<AnimatePresence>
				{subNavList.map((v, id) => {
					if (id === 0) {
						return <Info details={details} key={id} isActive={currentActive === id} />;
					} else if (id === 1) {
						return <Stats stats={details.stats} key={id} isActive={currentActive === id} />;
					} else {
						return <Evolutions key={id} details={details} isActive={currentActive === id} />;
					}
				})}
			</AnimatePresence>
		</>
	);
};

export default SubNavigation;
