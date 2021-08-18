import { FC } from 'react';

import { PokemonDetailsData } from '../PokemonItem/PokemonItem';

import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEvolutionNames } from '../../utils/getEvolutionNames';
import EvolutionItem from '../EvolutionItem/EvolutionItem';

interface IProps {
	details: PokemonDetailsData;
	isActive: boolean;
}

export interface EvolutionChain {
	evolves_to: EvolutionChain;
	species: {
		name: string;
		url: string;
	};
}

const Evolutions: FC<IProps> = ({ details, isActive }) => {
	const [evolutionChain, setEvolutionChain] = useState<string[] | []>([]);

	useEffect(() => {
		fetch(details.species.url)
			.then((res) => res.json())
			.then((data) => fetch(data.evolution_chain.url))
			.then((res) => res.json())
			.then((data) => setEvolutionChain(getEvolutionNames(data.chain)))
			.catch((e) => console.warn(e));
	}, [details.species.url]);

	return (
		<AnimatedDetails isActive={isActive}>
			{evolutionChain.map((evolution) => (
				<EvolutionItem key={evolution} name={evolution} />
			))}
		</AnimatedDetails>
	);
};

export default Evolutions;
