import { FC, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomeView from '../../views/HomeView/HomeView';
import PokemonDetailsView from '../../views/PokemonDetailsView/PokemonDetailsView';

const AnimatedSwitch: FC = () => {
	const [data, setData] = useState<[]>([]);
	const location = useLocation();

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then((res) => res.json())
			.then((data) => setData(data.results))
			.catch((e) => console.warn(e));

		console.log('mount');

		return () => console.log('unmount');
	}, []);

	return (
		<AnimatePresence>
			<Switch location={location} key={location.key}>
				<Route exact path='/' render={() => <HomeView data={data} />} />
				<Route path='/:id' render={() => <PokemonDetailsView />} />
			</Switch>
		</AnimatePresence>
	);
};

export default AnimatedSwitch;
