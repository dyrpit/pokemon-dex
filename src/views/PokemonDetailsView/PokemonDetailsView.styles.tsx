import { motion } from 'framer-motion';
import styled, { ColorTheme } from 'styled-components';

interface IProps {
	typeColor?: string;
}

export const StyledDetailsWrapper = styled.div<IProps>`
	background-color: ${({ theme, typeColor }) =>
		typeColor ? theme.color[typeColor as keyof ColorTheme] : 'black'};
	padding: 5px;
`;

export const StyledDetailsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledDetailsPokedexNum = styled.span`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: white;
`;

export const StyledButton = styled(motion.button)`
	color: white;
	background-color: transparent;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.l};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-transform: capitalize;
	border: none;
	outline: none;
	cursor: pointer;

	& i {
		margin-right: 10px;
	}
`;

export const StyledItemTitle = styled.h2`
	color: white;
	text-align: center;
	text-transform: capitalize;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledTypesContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const StyledSubMenuContainer = styled.div`
	background-color: white;
	padding: 10px;
	border-radius: 5px;
`;

export const StyledSubSectionContainer = styled.div`
	margin-top: 30px;
`;
