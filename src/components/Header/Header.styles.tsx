import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	padding: 20px;
	box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
	z-index: 1000;
`;

export const StyledHeaderTitle = styled.h1`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
