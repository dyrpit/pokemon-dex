import { FC } from 'react';
import { BasicPokemonData } from '../../api/api';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PokemonItem from '../../components/PokemonItem/PokemonItem';

import { StyledHomeSectionWrapper } from './HomeView.styles';
interface IProps {
	data: BasicPokemonData[];
}

const HomeView: FC<IProps> = ({ data }) => {
	return (
		<ContentContainer>
			<StyledHomeSectionWrapper>
				{data.map((pokemon: BasicPokemonData) => (
					<PokemonItem key={pokemon.name} {...pokemon} />
				))}
			</StyledHomeSectionWrapper>
		</ContentContainer>
	);
};

export default HomeView;
