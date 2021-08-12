export const getPokemonGenders = (femaleRate: number): [number, number] => {
	const female = (femaleRate / 8) * 100;
	const male = 100 - female;

	return [male, female];
};
