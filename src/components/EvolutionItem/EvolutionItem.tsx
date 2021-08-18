import { useState } from 'react';
import { FC, useEffect } from 'react';

interface IProps {
	name: string;
}

const EvolutionItem: FC<IProps> = ({ name }) => {
	const [pokemonImg, setPokemonImg] = useState<string>('');

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => setPokemonImg(data.sprites.front_default))
			.catch((e) => console.warn(e));
	}, [name]);

	console.log(pokemonImg);

	return (
		<div style={{ textAlign: 'center' }}>
			<img src={pokemonImg} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default EvolutionItem;
