import { FC } from 'react';

import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';

import { PokemonDetailsData } from '../PokemonItem/PokemonItem';

interface IProps {
	// details: PokemonDetailsData;
	isActive: boolean;
	details: string;
}

const Info: FC<IProps> = ({ details, isActive }) => {
	console.log(details);

	return <AnimatedDetails isActive={isActive}>{details}</AnimatedDetails>;
};

export default Info;
