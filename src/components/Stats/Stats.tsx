import { FC } from 'react';

import { PokemonStats } from '../../api/api';

import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';
import StatItem from '../StatItem/StatItem';

interface IProps {
	stats: PokemonStats[];
	isActive: boolean;
}

const Stats: FC<IProps> = ({ stats, isActive }) => {
	return (
		<AnimatedDetails isActive={isActive}>
			{stats.map((stat) => (
				<StatItem key={stat.stat.name} statItem={stat} />
			))}
		</AnimatedDetails>
	);
};

export default Stats;
