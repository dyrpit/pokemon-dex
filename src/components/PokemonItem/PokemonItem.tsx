import { FC, useEffect, useState } from 'react';

import { BasicPokemonData, getPokemonDetails, PokemonDetailsData } from '../../api/api';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import {
	StyledItemLink,
	StyledItemContent,
	StyledItemNumber,
	StyledItemName,
	StyledItemImg,
} from './PokemonItem.styles';

interface IProps extends BasicPokemonData {}

const PokemonItem: FC<IProps> = ({ name }) => {
	const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsData | null>(null);

	useEffect(() => {
		getPokemonDetails(name)
			.then((data) => setPokemonDetails(data))
			.catch((e) => console.warn(e));
	}, [name]);

	if (!pokemonDetails) return null;

	const { id, name: pkmName, sprites, types } = pokemonDetails;

	return (
		<StyledItemLink to={`${pkmName}`} color={types[0].type.name}>
			<StyledItemNumber>{getPokedexNumber(id)}</StyledItemNumber>
			<StyledItemContent whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}>
				<StyledItemImg src={sprites.front_default} alt={pkmName} />
				<StyledItemName color={types[0].type.name}>{pkmName}</StyledItemName>
			</StyledItemContent>
		</StyledItemLink>
	);
};

export default PokemonItem;
