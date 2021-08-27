import styled from 'styled-components';

export const StyledAboutTitle = styled.h2`
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	font-size: ${({ theme }) => theme.fontSize.xl};
	margin-bottom: 20px;
`;

export const StyledAboutText = styled.p`
	font-size: ${({ theme }) => theme.fontSize.l};
	margin-bottom: 20px;

	& span {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

export const StyledAboutLink = styled.a`
	color: inherit;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
