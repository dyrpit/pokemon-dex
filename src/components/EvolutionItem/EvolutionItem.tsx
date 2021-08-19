import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPokedexNumber } from '../../utils/getPokedexNumber';
import { PokemonType } from '../PokemonItem/PokemonItem';

import TypeDisplay from '../TypeDisplay/TypeDisplay';

import {
	SyledEvolutionItemWrapper,
	StyledEvolutionName,
	StyledEvolutionNumber,
	StyledTypesWrapper,
	StyledArrowsWrapper,
	StyledArrow,
} from './EvolutionItem.styles';
interface IProps {
	name: string;
	isLast: boolean;
}

const EvolutionItem: FC<IProps> = ({ name, isLast }) => {
	const [pokemonImg, setPokemonImg] = useState<string>('');
	const [pokedexId, setPokedexId] = useState<number>(0);
	const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => {
				setPokemonImg(data.sprites.front_default);
				setPokedexId(data.id);
				setPokemonTypes(data.types);
			})
			.catch((e) => console.warn(e));
	}, [name]);

	return (
		<>
			<SyledEvolutionItemWrapper>
				<Link to={`${pokedexId}`}>
					<img src={pokemonImg} alt={name} />
				</Link>
				<StyledEvolutionName>
					{name}
					<StyledEvolutionNumber>{getPokedexNumber(pokedexId)}</StyledEvolutionNumber>
				</StyledEvolutionName>
				<StyledTypesWrapper>
					{pokemonTypes && pokemonTypes.map(({ type }) => <TypeDisplay type={type.name} />)}
				</StyledTypesWrapper>
				{isLast && (
					<StyledArrowsWrapper>
						<StyledArrow />
						<StyledArrow top={10} />
					</StyledArrowsWrapper>
				)}
			</SyledEvolutionItemWrapper>
		</>
	);
};

export default EvolutionItem;
