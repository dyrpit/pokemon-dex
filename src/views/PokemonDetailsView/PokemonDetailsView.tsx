import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPokemonDetails, PokemonDetailsData } from '../../api/api';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PokemonDetailsHeader from '../../components/PokemonDetailsHeader/PokemonDetailsHeader';
import SubNavigation from '../../components/SubNavigation/SubNavigation';
import TypeDisplay from '../../components/TypeDisplay/TypeDisplay';

import {
	StyledDetailsWrapper,
	StyledTypesContainer,
	StyledSubMenuContainer,
	StyledSubSectionContainer,
} from './PokemonDetailsView.styles';

interface IParam {
	id: string;
}

const PokemonDetailsView: FC = () => {
	const [details, setDetails] = useState<PokemonDetailsData | null>(null);

	const { id } = useParams<IParam>();

	useEffect(() => {
		getPokemonDetails(id)
			.then((data) => setDetails(data))
			.catch((e) => console.warn(e));
	}, [id]);

	if (!details) return null;

	const { name, sprites, types } = details;

	return (
		<ContentContainer>
			<StyledDetailsWrapper typeColor={types[0].type.name}>
				<PokemonDetailsHeader name={name} id={details.id} sprite={sprites.front_default} />
				{/* <Link to={String(Number(id) + 1)}>{Number(id) + 1}</Link> */}
				<StyledSubMenuContainer>
					<StyledTypesContainer>
						{types.map(({ type }) => (
							<TypeDisplay key={type.name} type={type.name} />
						))}
					</StyledTypesContainer>
					<StyledSubSectionContainer>
						<SubNavigation details={details} />
					</StyledSubSectionContainer>
				</StyledSubMenuContainer>
			</StyledDetailsWrapper>
		</ContentContainer>
	);
};

export default PokemonDetailsView;
