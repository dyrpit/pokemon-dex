import { FC } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import SectionContainer from '../../components/SectionContainer/SectionConatiner';
import { StyledAboutText, StyledAboutTitle, StyledAboutLink } from './About.styles';

const AboutView: FC = () => {
	return (
		<ContentContainer>
			<SectionContainer>
				<StyledAboutTitle>About</StyledAboutTitle>
				<StyledAboutText>
					Made by <span>Piotr Dyrda</span>. Anything you want to ask or has any suggestions? Email
					me: <span>piotr.dyrda88@gmail.com</span>
				</StyledAboutText>
				<StyledAboutText>
					Pokémon-dex-app data thanks to:{' '}
					<StyledAboutLink href='https://pokeapi.co' target='_blank'>
						PokéApi
					</StyledAboutLink>
				</StyledAboutText>
				<StyledAboutText>Inspired by:</StyledAboutText>
				<StyledAboutText>
					Pokémon © 2002-2021 Pokémon. © 1995-2021 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and
					Pokémon character names are trademarks of Nintendo.
				</StyledAboutText>
			</SectionContainer>
		</ContentContainer>
	);
};

export default AboutView;
