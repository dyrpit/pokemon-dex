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
	stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
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

	console.log(pokemonDetails);

	return (
		<StyledItemLink to={`${pokemonDetails?.id}`} typeColor={pokemonDetails?.types[0].type.name}>
			<StyledItemNumber>{getPokedexNumber(pokemonDetails.id)}</StyledItemNumber>
			<StyledItemContent whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}>
				<StyledItemImg src={pokemonDetails?.sprites.front_default} alt={pokemonDetails?.name} />
				<StyledItemName typeColor={pokemonDetails?.types[0].type.name}>
					{pokemonDetails?.name}
				</StyledItemName>
			</StyledItemContent>
		</StyledItemLink>
	);
};

export default PokemonItem;
