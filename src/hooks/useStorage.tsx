import { useState } from 'react';

enum Keys {
	FAVOURITE_KEY = 'favouritePokemons',
}

export const useStorage = () => {
	const [favourites, setFavourites] = useState<string[]>(
		JSON.parse(localStorage.getItem(Keys.FAVOURITE_KEY) || '[]')
	);

	const setStorage = (data: string[]) => {
		const stringifyData = JSON.stringify(data);

		localStorage.setItem(Keys.FAVOURITE_KEY, stringifyData);
		setFavourites(data);
	};

	return { favourites, setStorage };
};
