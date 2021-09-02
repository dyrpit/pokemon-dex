import { FC, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { BasicPokemonData, getBasicPokemons } from '../../api/api';

import HomeView from '../../views/HomeView/HomeView';
import PokemonDetailsView from '../../views/PokemonDetailsView/PokemonDetailsView';
import AboutView from '../../views/AboutView/AboutView';

const AnimatedSwitch: FC = () => {
	const [data, setData] = useState<BasicPokemonData[] | []>([]);
	const location = useLocation();

	useEffect(() => {
		getBasicPokemons()
			.then((data) => setData(data))
			.catch((e) => console.warn(e));
	}, []);

	return (
		<AnimatePresence>
			<Switch location={location} key={location.key}>
				<Route exact path='/' render={() => <HomeView data={data} />} />
				<Route path='/about' render={() => <AboutView />} />
				<Route path='/:id' render={() => <PokemonDetailsView />} />
			</Switch>
		</AnimatePresence>
	);
};

export default AnimatedSwitch;
