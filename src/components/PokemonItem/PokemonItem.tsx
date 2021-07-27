import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
	name: string;
	url: string;
}

interface PokemonDetailsData {
	id: number;
	sprites: {
		front_default: string;
	};
}
const PokemonItem: FC<IProps> = ({ name, url }) => {
	const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsData | null>(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPokemonDetails(data))
			.catch((e) => console.warn(e));
	}, [url]);

	if (!pokemonDetails) return null;

	return (
		<Link to={`${pokemonDetails?.id}`}>
			<div>
				<p>{name}</p>
				<img src={pokemonDetails?.sprites.front_default} alt={name} />
			</div>
		</Link>
	);
};

export default PokemonItem;
