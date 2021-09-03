import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPokemonDetails, PokemonType } from '../../api/api';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

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
		getPokemonDetails(name)
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
					{pokemonTypes &&
						pokemonTypes.map(({ type }) => <TypeDisplay type={type.name} key={type.name} />)}
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
