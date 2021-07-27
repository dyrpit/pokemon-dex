import styled from 'styled-components';
import { motion } from 'framer-motion';

const mainVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: 0.3,
		},
	},
	exit: {
		x: '-100vw',
		transition: {
			duration: 0.3,
		},
	},
};

export const StyledMain = styled(motion.main).attrs(() => ({
	variants: mainVariants,
	initial: 'hidden',
	exit: 'exit',
}))`
	margin-top: 90px;
`;
