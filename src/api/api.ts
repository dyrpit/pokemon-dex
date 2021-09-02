import axios from 'axios';

enum URL {
	DETAILS = 'https://pokeapi.co/api/v2/pokemon/',
	KANTO = 'https://pokeapi.co/api/v2/pokemon?limit=151',
	JOHTO = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
	HOENN = 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
}

export interface BasicPokemonData {
	name: string;
	url: string;
}

export interface PokemonType {
	slot: number;
	type: { name: string };
}

export interface PokemonStats {
	base_stat: number;
	effort: number;
	stat: { name: string; url: string };
}

export interface PokemonSpecies {
	name: string;
	url: string;
}

export interface PokemonDetailsData {
	id: number;
	name: string;
	species: PokemonSpecies;
	sprites: {
		front_default: string;
	};
	types: PokemonType[];
	weight: number;
	height: number;
	stats: PokemonStats[];
	abilities: { ability: { name: string } }[];
}

export const getBasicPokemons = async (): Promise<BasicPokemonData[]> => {
	return await axios
		.get(URL.KANTO)
		.then((res) => (res.status === 200 ? res.data.results : []))
		.catch((e) => console.warn(e));
};

export const getPokemonDetails = async (id: string): Promise<PokemonDetailsData> => {
	return await axios
		.get(`${URL.DETAILS}${id}`)
		.then((res) => (res.status === 200 ? res.data : null))
		.catch((e) => console.warn(e));
};
