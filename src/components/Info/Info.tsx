import { FC, useEffect, useState } from 'react';

import { getPokemonWeightOrHeight } from '../../utils/getPokemonWeightOrHeight';
import { getPokemonGenders } from '../../utils/getPokemonGenders';

import { PokemonDetailsData } from '../PokemonItem/PokemonItem';

import male from '../../images/male.svg';
import female from '../../images/female.svg';

import AnimatedDetails from '../AnimatedDetails/AnimatedDetails';

import { StyledInfoItem, StyledItemValue, StyledItemName, StyledItemImg } from './Info.styles';

interface IProps {
	details: PokemonDetailsData;
	isActive: boolean;
}

const Info: FC<IProps> = ({ details, isActive }) => {
	const [detailsText, setDetailsText] = useState<string>('');
	const [genderRate, setGenderRate] = useState<number>(0);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`)
			.then((res) => res.json())
			.then((data) => {
				setDetailsText(data.flavor_text_entries[0].flavor_text.split('\f').join(' '));
				setGenderRate(data.gender_rate);
			})
			.catch((e) => console.warn(e));
	}, [details.id]);

	return (
		<AnimatedDetails isActive={isActive}>
			<StyledInfoItem animate='visible' custom={1}>
				{detailsText}
			</StyledInfoItem>
			<StyledInfoItem custom={2} animate='visible'>
				<StyledItemName>Height: </StyledItemName>
				<StyledItemValue>{getPokemonWeightOrHeight(details.height)} m</StyledItemValue>
			</StyledInfoItem>
			<StyledInfoItem custom={3} animate='visible'>
				<StyledItemName>Weight: </StyledItemName>
				<StyledItemValue>{getPokemonWeightOrHeight(details.weight)} kg</StyledItemValue>
			</StyledInfoItem>
			<StyledInfoItem custom={4} animate='visible'>
				<StyledItemName>Abilities: </StyledItemName>
				{details.abilities.map(({ ability }, id) => (
					<StyledItemValue>
						{ability.name}
						{id === details.abilities.length - 1 ? '' : ','}
					</StyledItemValue>
				))}
			</StyledInfoItem>
			<StyledInfoItem custom={5} animate='visible'>
				<StyledItemName>Genders: </StyledItemName>
				{getPokemonGenders(genderRate).map((gender, id) => (
					<StyledItemValue color={!id ? 'male' : 'female'}>
						<StyledItemImg src={!id ? male : female} alt={!id ? 'male icon' : 'female icon'} />
						{gender}%
					</StyledItemValue>
				))}
			</StyledInfoItem>
		</AnimatedDetails>
	);
};

export default Info;
