import { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useFavourites } from '../../hooks/useFavourites';
import { PokemonDetailsData } from '../../components/PokemonItem/PokemonItem';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Spinner from '../../components/Spinner/Spinner';
import SubNavigation from '../../components/SubNavigation/SubNavigation';
import TypeDisplay from '../../components/TypeDisplay/TypeDisplay';

import heart from '../../images/heart.svg';
import heartFilled from '../../images/heart-solid.svg';

import {
	StyledDetailsWrapper,
	StyledButton,
	StyledDetailsHeader,
	StyledDetailsPokedexNum,
	StyledItemTitle,
	StyledTypesContainer,
	StyledSubMenuContainer,
	StyledSubSectionContainer,
	StyledDetailsFavouriteImg,
} from './PokemonDetailsView.styles';

interface IParam {
	id: string;
}

const PokemonDetailsView: FC = () => {
	const [details, setDetails] = useState<PokemonDetailsData | null>(null);

	const { isFavourite, toggleFavourite } = useFavourites(details?.name);

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

	const { name, species, sprites, types } = details;

	return (
		<ContentContainer>
			<StyledDetailsWrapper typeColor={types[0].type.name}>
				<StyledDetailsHeader>
					<StyledButton
						whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
						onClick={() => history.push('/')}
					>
						<i className='fas fa-arrow-left'></i>
						{species.name}
					</StyledButton>
					<StyledDetailsPokedexNum>
						<StyledDetailsFavouriteImg
							src={isFavourite ? heartFilled : heart}
							alt='heart'
							onClick={() => toggleFavourite(name)}
						/>
						{getPokedexNumber(details?.id)}
					</StyledDetailsPokedexNum>
				</StyledDetailsHeader>
				<div style={{ position: 'relative' }}>
					<img
						src={sprites.front_default}
						alt={species.name}
						style={{ display: 'block', margin: '0 auto', minHeight: '150px' }}
					/>
				</div>
				<StyledItemTitle>{species.name}</StyledItemTitle>

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
