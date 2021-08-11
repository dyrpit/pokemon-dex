import { FC } from 'react';
import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';

interface IProps {
	// details: PokemonDetailsData;
	isActive: boolean;
	details: string;
}

const Stats: FC<IProps> = ({ details, isActive }) => {
	return <AnimatedDetails isActive={isActive}>{details}</AnimatedDetails>;
};

export default Stats;
