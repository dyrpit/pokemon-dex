import styled, { ColorTheme } from 'styled-components';

interface IProps {
	typeColor?: string;
}

export const StyledTypeWrapper = styled.div<IProps>`
	display: flex;
	justify-content: space-evenly;
	padding: 5px 10px;
	background-color: ${({ theme, typeColor }) =>
		typeColor ? theme.color[typeColor as keyof ColorTheme] : 'black'};
	color: white;
	max-width: 150px;
	border-radius: 25px;
	text-transform: capitalize;
	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.6);
`;

export const StyledTypeImg = styled.img`
	width: 15px;
	margin-right: 10px;
`;

export const StyledTypeTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSize.m};
`;
