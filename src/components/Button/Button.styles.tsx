import styled from 'styled-components';
import { motion } from 'framer-motion';

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
