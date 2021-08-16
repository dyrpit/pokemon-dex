import { motion } from 'framer-motion';
import styled, { ColorTheme } from 'styled-components';

const barVariants = {
	fill: (width: string) => ({
		width,
		transition: { duration: 1, delay: 0.5, ease: 'backOut' },
	}),
};

interface IProps {
	color?: string;
}

export const StyledStatItemWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledStatName = styled.p`
	width: 145px;
	text-align: right;
	text-transform: capitalize;
`;

export const StyledStatValue = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-right: 20px;
	margin-left: 20px;
`;

export const StyledStatBar = styled.div`
	position: relative;
	height: 6px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.15);
	border-radius: 15px;
`;

export const AnimatedStatBar = styled(motion.div).attrs(() => ({
	variants: barVariants,
	animate: 'fill',
}))<IProps>`
	position: absolute;
	height: 100%;
	background-color: ${({ color, theme }) => theme.color[color as keyof ColorTheme]};
	border-radius: 15px;
`;
