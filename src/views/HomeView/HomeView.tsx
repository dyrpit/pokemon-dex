import { FC } from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PokemonItem from '../../components/PokemonItem/PokemonItem';

interface IProps {
	data: [];
}

const HomeView: FC<IProps> = ({ data }) => {
	console.log(data);

	return (
		<ContentContainer>
			{data.map((pokemon: { name: string; url: string }) => (
				<PokemonItem key={pokemon.name} {...pokemon} />
			))}
		</ContentContainer>
	);
};

export default HomeView;
