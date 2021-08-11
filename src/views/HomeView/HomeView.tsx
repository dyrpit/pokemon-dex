import { FC } from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PokemonItem from '../../components/PokemonItem/PokemonItem';

import { StyledHomeSectionWrapper } from './HomeView.styles';

interface PokemonData {
	name: string;
	url: string;
}
interface IProps {
	data: PokemonData[];
}

const HomeView: FC<IProps> = ({ data }) => {
	return (
		<ContentContainer>
			<StyledHomeSectionWrapper>
				{data.map((pokemon: PokemonData) => (
					<PokemonItem key={pokemon.name} {...pokemon} />
				))}
			</StyledHomeSectionWrapper>
		</ContentContainer>
	);
};

export default HomeView;
