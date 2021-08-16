import { FC, useEffect, useState } from 'react';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import {
	StyledItemLink,
	StyledItemContent,
	StyledItemNumber,
	StyledItemName,
	StyledItemImg,
} from './PokemonItem.styles';

interface IProps {
	name: string;
	url: string;
}

export interface PokemonStats {
	base_stat: number;
	effort: number;
	stat: { name: string; url: string };
}
export interface PokemonDetailsData {
	id: number;
	name: string;
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
	stats: PokemonStats[];
	abilities: { ability: { name: string } }[];
}
const PokemonItem: FC<IProps> = ({ url }) => {
	const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsData | null>(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPokemonDetails(data))
			.catch((e) => console.warn(e));
	}, [url]);

	if (!pokemonDetails) return null;

	const { id, name, sprites, types } = pokemonDetails;

	return (
		<StyledItemLink to={`${id}`} color={types[0].type.name}>
			<StyledItemNumber>{getPokedexNumber(id)}</StyledItemNumber>
			<StyledItemContent whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}>
				<StyledItemImg src={sprites.front_default} alt={name} />
				<StyledItemName color={types[0].type.name}>{name}</StyledItemName>
			</StyledItemContent>
		</StyledItemLink>
	);
};

export default PokemonItem;
