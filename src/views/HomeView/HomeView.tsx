import { FC } from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PokemonItem from '../../components/PokemonItem/PokemonItem';

import { StyledHomeSectionWrapper } from './HomeView.styles';

interface IProps {
	data: [];
}

const HomeView: FC<IProps> = ({ data }) => {
	return (
		<ContentContainer>
			<StyledHomeSectionWrapper>
				{data.map((pokemon: { name: string; url: string }) => (
					<PokemonItem key={pokemon.name} {...pokemon} />
				))}
			</StyledHomeSectionWrapper>
		</ContentContainer>
	);
};

export default HomeView;
