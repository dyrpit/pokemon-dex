import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FC } from 'react';
import { PokemonDetailsData } from '../PokemonItem/PokemonItem';

import { StyledSubNav, StyledSubNavList, StyledSubNavItem } from './SubNavigation.styles';

interface IProps {
	details: PokemonDetailsData;
}

const subNavList = ['info', 'stats', 'evolutions'];

const SubNavigation: FC<IProps> = ({ details }) => {
	const [currentActive, setCurrentActive] = useState<string>('info');

	return (
		<>
			<StyledSubNav>
				<StyledSubNavList>
					{subNavList.map((item, id) => (
						<StyledSubNavItem
							key={item}
							onClick={() => setCurrentActive(item)}
							isActive={item === currentActive}
						>
							{item}
						</StyledSubNavItem>
					))}
				</StyledSubNavList>
			</StyledSubNav>
			<AnimatePresence>
				{subNavList.map((v, id) => {
					console.log(v);

					return (
						<div key={v}>
							{currentActive === v && (
								<motion.div
									initial={{ x: '50%' }}
									exit={{ x: '-100%' }}
									animate={{ x: '0%' }}
									drag='x'
									dragConstraints={{ left: 0, right: 0 }}
								>
									{v}
								</motion.div>
							)}
						</div>
					);
				})}
			</AnimatePresence>
			{/* {currentActive === 'info' && (
				<div>
					<div>Weigth: {details.weight}</div>
					<div>Height: {details.height}</div>
					<div>
						Abilities:{' '}
						{details.abilities.map(({ ability }) => (
							<p>{ability.name}</p>
						))}
					</div>
				</div>
			)}
			{currentActive === 'stats' && (
				<div>
					{details.stats.map((statItem) => (
						<div>
							<p>{statItem.stat.name}</p>
							<span>{statItem.base_stat}</span>
						</div>
					))}
				</div>
			)} */}
		</>
	);
};

export default SubNavigation;
