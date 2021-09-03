import { FC } from 'react';

import { useFavourites } from '../../hooks/useFavourites';
import { getPokedexNumber } from '../../utils/getPokedexNumber';

import Button from '../Button/Button';

import heart from '../../images/heart.svg';
import heartFilled from '../../images/heart-solid.svg';

import {
	StyledDetailsHeader,
	StyledDetailsPokedexNum,
	StyledDetailsFavouriteImg,
	StyledDetailsImg,
	StyledItemTitle,
} from './PokemonDetailsHeader.styles';

interface IProps {
	id: number;
	name: string;
	sprite: string;
}

const PokemonDetailsHeader: FC<IProps> = ({ id, name, sprite }) => {
	const { isFavourite, toggleFavourite } = useFavourites(name);

	return (
		<>
			<StyledDetailsHeader>
				<Button title='Back' />
				<StyledDetailsPokedexNum>
					<StyledDetailsFavouriteImg
						src={isFavourite ? heartFilled : heart}
						alt='heart'
						onClick={() => toggleFavourite(name)}
					/>
					{getPokedexNumber(id)}
				</StyledDetailsPokedexNum>
			</StyledDetailsHeader>
			<StyledDetailsImg src={sprite} alt={name} />
			<StyledItemTitle>{name}</StyledItemTitle>
		</>
	);
};

export default PokemonDetailsHeader;
