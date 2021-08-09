import { FC, useEffect, useState } from 'react';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import {
	StyledItemLink,
	StyledItemContent,
	StyledItemNumber,
	StyledItemName,
} from './PokemonItem.styles';

interface IProps {
	name: string;
	url: string;
}

export interface PokemonDetailsData {
	id: number;
	species: {
		name: string;
		url: string;
	};
	sprites: {
		front_default: string;
	};
	types: { slot: number; type: { name: string } }[];
	weight: number;
	height: number;
	stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
	abilities: { ability: { name: string } }[];
}
const PokemonItem: FC<IProps> = ({ name, url }) => {
	const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsData | null>(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPokemonDetails(data))
			.catch((e) => console.warn(e));
	}, [url]);

	if (!pokemonDetails) return null;

	return (
		<StyledItemLink to={`${pokemonDetails?.id}`} typeColor={pokemonDetails?.types[0].type.name}>
			<StyledItemNumber>{getPokedexNumber(pokemonDetails.id)}</StyledItemNumber>
			<StyledItemContent whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}>
				<img src={pokemonDetails?.sprites.front_default} alt={name} style={{ width: '90%' }} />
				<StyledItemName typeColor={pokemonDetails?.types[0].type.name}>{name}</StyledItemName>
			</StyledItemContent>
		</StyledItemLink>
	);
};

export default PokemonItem;
