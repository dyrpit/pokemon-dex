import 'styled-components';

declare module 'styled-components' {
	export interface ColorTheme {
		text: string;
		lightText: string;
		mediumText: string;
		male: string;
		female: string;
		element: string;
		background: string;
		rock: string;
		ghost: string;
		steel: string;
		water: string;
		grass: string;
		psychic: string;
		ice: string;
		dark: string;
		fairy: string;
		normal: string;
		fighting: string;
		flying: string;
		poison: string;
		ground: string;
		bug: string;
		fire: string;
		electric: string;
		dragon: string;
		hp: string;
		attack: string;
		defense: string;
		speed: string;
	}
	export interface DefaultTheme {
		color: ColorTheme;
		fontSize: {
			m: string;
			l: string;
			xl: string;
		};
		fontWeight: {
			regular: number;
			bold: number;
		};
	}
}
