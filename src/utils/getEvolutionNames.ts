import { EvolutionChain } from '../components/Evolutions/Evolutions';

export const getEvolutionNames = (data: EvolutionChain): string[] => {
	const evolutions: string[] = [];

	const addEvolutionName = (data: EvolutionChain) => {
		const dataObj: EvolutionChain = Array.isArray(data) ? data[0] : data;

		for (const key in dataObj) {
			if (key === 'species') {
				evolutions.push(dataObj[key].name);
			}

			if (key === 'evolves_to') {
				addEvolutionName(dataObj[key]);
			}
		}
	};
	addEvolutionName(data);

	return evolutions.reverse();
};
