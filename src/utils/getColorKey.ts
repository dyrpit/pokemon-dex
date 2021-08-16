export const getColorKey = (statName: string): string => {
	const splited = statName.split('-');

	return splited[splited.length - 1];
};
