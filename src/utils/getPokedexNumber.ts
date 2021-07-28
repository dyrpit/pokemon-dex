export const getPokedexNumber = (id: number): string =>
	id >= 100 ? `#${id}` : id >= 10 ? `#0${id}` : `#00${id}`;
