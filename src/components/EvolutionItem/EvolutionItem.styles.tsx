import styled from 'styled-components';

import { ReactComponent as ArrowDown } from '../../images/angle-down.svg';

interface IProps {
	top?: number;
}

export const SyledEvolutionItemWrapper = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledEvolutionName = styled.p`
	text-transform: capitalize;
`;

export const StyledEvolutionNumber = styled.span`
	margin-left: 10px;
`;

export const StyledTypesWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 10px 0;
`;

export const StyledArrowsWrapper = styled.div`
	position: relative;
	height: 40px;
`;

export const StyledArrow = styled(ArrowDown)<IProps>`
	position: absolute;
	transform: translateX(-50%);
	width: 20px;
	top: ${({ top }) => (top ? `${top}px` : '0')};
`;
