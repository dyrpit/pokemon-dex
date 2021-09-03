import styled, { ColorTheme } from 'styled-components';

interface IProps {
	typeColor?: string;
}

export const StyledDetailsWrapper = styled.div<IProps>`
	background-color: ${({ theme, typeColor }) =>
		typeColor ? theme.color[typeColor as keyof ColorTheme] : 'black'};
	padding: 5px;
`;

export const StyledTypesContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const StyledSubMenuContainer = styled.div`
	background-color: white;
	padding: 10px;
	margin: 0 auto;
	border-radius: 5px;
	max-width: 800px;
`;

export const StyledSubSectionContainer = styled.div`
	margin-top: 30px;
`;
