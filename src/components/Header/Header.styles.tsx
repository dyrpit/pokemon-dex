import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	padding: 20px;
`;

export const StyledHeaderTitle = styled.h1`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
