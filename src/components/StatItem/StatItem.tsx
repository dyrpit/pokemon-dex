import { FC } from 'react';

import { PokemonStats } from '../../api/api';
import { getColorKey } from '../../utils/getColorKey';

import {
	AnimatedStatBar,
	StyledStatBar,
	StyledStatItemWrapper,
	StyledStatName,
	StyledStatValue,
} from './StatItem.styles';

interface IProps {
	statItem: PokemonStats;
}

const StatItem: FC<IProps> = ({ statItem }) => {
	const { stat, base_stat } = statItem;

	return (
		<StyledStatItemWrapper>
			<StyledStatName>{stat.name}</StyledStatName>
			<StyledStatValue>{base_stat}</StyledStatValue>
			<StyledStatBar>
				<AnimatedStatBar custom={`${(base_stat / 255) * 100}%`} color={getColorKey(stat.name)} />
			</StyledStatBar>
		</StyledStatItemWrapper>
	);
};

export default StatItem;
