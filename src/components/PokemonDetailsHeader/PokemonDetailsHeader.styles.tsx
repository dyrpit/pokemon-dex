import styled from 'styled-components';

export const StyledDetailsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledDetailsPokedexNum = styled.span`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.m};
	color: white;
`;

export const StyledDetailsFavouriteImg = styled.img`
	width: 15px;
	margin-right: 10px;
	cursor: pointer;
`;

export const StyledDetailsImg = styled.img`
	display: block;
	margin: 0 auto;
	min-height: 350px;
`;

export const StyledItemTitle = styled.h2`
	color: white;
	text-align: center;
	text-transform: capitalize;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;
