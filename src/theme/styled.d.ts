import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			text: string;
			element: string;
			background: string;
		};
		fontSize: {
			m: string;
			l: string;
			xl: string;
		};
		fontWeight: {
			regular: number;
			bold: number;
		};
	}
}
