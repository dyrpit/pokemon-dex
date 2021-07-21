import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme/theme';

import Header from './components/Header/Header';

import GlobalStyles from './theme/GlobalStyles';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
			</ThemeProvider>
		</>
	);
};

export default App;
