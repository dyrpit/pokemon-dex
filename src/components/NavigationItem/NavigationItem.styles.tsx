import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const navItemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1500 },
		},
	},
};

export const StyledNavItem = styled(motion.li).attrs(() => ({
	variants: navItemVariants,
}))`
	padding: 10px 0;
	text-align: center;
	text-transform: capitalize;
`;

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.color.text};
`;
