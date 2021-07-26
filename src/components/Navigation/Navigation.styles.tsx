import styled from 'styled-components';
import { motion } from 'framer-motion';

const navVariants = {
	open: {
		x: '0px',
		y: '0',
		transition: { duration: 0.5 },
	},
	closed: {
		x: '-210px',
		y: '0',
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};

const navListVariants = {
	open: {
		transition: { staggerChildren: 0.3, delayChildren: 0.3 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const overlayVariants = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	closed: {
		opacity: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};

export const StyledNav = styled(motion.div).attrs(() => ({
	initial: 'closed',
	variants: navVariants,
}))`
	position: absolute;
	top: 90px;
	left: 0;
	width: 200px;
	background-color: white;
	height: calc(100vh - 90px);
	box-shadow: 8px 0 4px -4px rgba(0, 0, 0, 0.3);
	z-index: 500;
`;

export const StyledNavList = styled(motion.ul).attrs(() => ({
	variants: navListVariants,
}))`
	list-style-type: none;
	padding: 10px;
`;

export const StyledOverlay = styled(motion.div).attrs(() => ({
	initial: 'closed',
	variants: overlayVariants,
}))`
	position: absolute;
	top: 90px;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	height: calc(100vh - 90px);
	width: 100vw;
`;
