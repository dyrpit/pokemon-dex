import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme/theme';

import Header from './components/Header/Header';

import GlobalStyles from './theme/GlobalStyles';
import AnimatedSwitch from './components/AnimatedSwitch/AnimatedSwitch';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Router>
					<AnimatedSwitch />
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
