import { useState } from 'react';
import { FC, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { PokemonDetailsData } from '../../components/PokemonItem/PokemonItem';
import Spinner from '../../components/Spinner/Spinner';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import heart from '../../images/heart.svg';

import {
	StyledDetailsWrapper,
	StyledButton,
	StyledDetailsHeader,
	StyledDetailsPokedexNum,
	StyledItemTitle,
	StyledTypesContainer,
	StyledSubMenuContainer,
	StyledSubSectionContainer,
} from './PokemonDetailsView.styles';
import TypeDisplay from '../../components/TypeDisplay/TypeDisplay';
import SubNavigation from '../../components/SubNavigation/SubNavigation';

interface IParam {
	id: string;
}

const PokemonDetailsView: FC = () => {
	const [details, setDetails] = useState<PokemonDetailsData | null>(null);

	const { id } = useParams<IParam>();
	const history = useHistory();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}
    `)
			.then((res) => res.json())
			.then((data) => setDetails(data))
			.catch((e) => console.warn(e));
	}, [id]);

	if (!details) return null;

	console.log(details);

	return (
		<ContentContainer>
			<StyledDetailsWrapper typeColor={details?.types[0].type.name}>
				<StyledDetailsHeader>
					<StyledButton
						whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
						onClick={() => history.push('/')}
					>
						<i className='fas fa-arrow-left'></i>
						{details?.species.name}
					</StyledButton>
					<StyledDetailsPokedexNum>
						<img src={heart} alt='heart' style={{ width: '20px' }} />
						{getPokedexNumber(details?.id)}
					</StyledDetailsPokedexNum>
				</StyledDetailsHeader>
				<div style={{ position: 'relative' }}>
					<img
						src={details.sprites.front_default}
						alt={details.species.name}
						style={{ display: 'block', margin: '0 auto', minHeight: '150px' }}
					/>
				</div>
				<StyledItemTitle>{details.species.name}</StyledItemTitle>

				{/* <Link to={String(Number(id) + 1)}>{Number(id) + 1}</Link> */}
				<StyledSubMenuContainer>
					<StyledTypesContainer>
						{details.types.map(({ type }) => (
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
