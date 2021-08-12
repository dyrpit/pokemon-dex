import { motion } from 'framer-motion';
import styled, { ColorTheme } from 'styled-components';

const itemVariants = {
	hidden: {
		x: '100%',
		opacity: 0,
	},
	visible: (delay: number) => ({
		x: '0',
		opacity: 1,
		transition: {
			delay: delay * 0.4,
		},
	}),
};

interface IProps {
	color?: string;
}

export const StyledInfoWrapper = styled.div`
	display: flex;
`;

export const StyledInfoItem = styled(motion.div).attrs(() => ({
	initial: 'hidden',
	variants: itemVariants,
}))`
	margin-bottom: 15px;
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.color.lightText};
`;

export const StyledItemValue = styled.span<IProps>`
	display: inline-block;
	color: ${({ theme, color }) =>
		color ? theme.color[color as keyof ColorTheme] : theme.color.mediumText};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-right: 5px;

	&::first-letter {
		text-transform: uppercase;
	}
`;
