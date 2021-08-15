import styled from 'styled-components';

interface IProps {
	isActive: boolean;
}

export const StyledSubNav = styled.nav``;

export const StyledSubNavList = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 10px;
`;

export const StyledSubNavItem = styled.li<IProps>`
	position: relative;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-transform: capitalize;
	border-bottom: ${({ isActive }) => (isActive ? '3px solid rgba(0, 0, 0, 0.4)' : 'none')};
	cursor: pointer;
`;
