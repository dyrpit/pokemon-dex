import styled, { ColorTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IProps {
	typeColor?: string;
}

export const StyledItemLink = styled(Link)<IProps>`
	position: relative;
	margin: 0 10px 20px 10px;
	min-width: 150px;
	overflow: hidden;
	color: ${({ theme, typeColor }) =>
		typeColor ? theme.color[typeColor as keyof ColorTheme] : 'black'};
	transition: 0.3s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const StyledItemContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	border: 2px solid black;
	border-color: inherit;
	border-radius: 10px;
`;

export const StyledItemNumber = styled.span`
	position: absolute;
	top: 5px;
	right: 10px;
	color: inherit;
	font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledItemName = styled.p<IProps>`
	align-self: stretch;
	color: white;
	background-color: ${({ theme, typeColor }) =>
		typeColor ? theme.color[typeColor as keyof ColorTheme] : 'black'};
	border-radius: 0 0 10px 10px;
	padding: 5px;
	margin: -12px;
	text-transform: capitalize;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledItemImg = styled.img`
	width: 90%;
`;
