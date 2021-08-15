import { useEffect, useState } from 'react';
import { useStorage } from './useStorage';

export const useFavourites = (name: string | undefined) => {
	const [isFavourite, setIsFavourite] = useState<boolean>(false);
	const { favourites, setStorage } = useStorage();

	const toggleFavourite = (name: string | undefined): void => {
		if (!name) return;

		let updatedFavourites;

		if (favourites.includes(name)) {
			updatedFavourites = favourites.filter((favourite: string) => favourite !== name);
		} else {
			updatedFavourites = [...favourites, name];
		}

		setStorage(updatedFavourites);
		setIsFavourite((prev) => !prev);
	};

	useEffect(() => {
		if (!name) return;

		if (favourites.includes(name)) {
			setIsFavourite(true);
		}
	}, [name, favourites]);

	return { isFavourite, toggleFavourite };
};
