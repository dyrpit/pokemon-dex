import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
`;

interface IProps {
	width?: number;
	height?: number;
	isPlaying?: boolean;
	speed?: number;
}

export const StyledSpinnerWrapper = styled.div<IProps>`
	position: relative;
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	background-color: #e0e0e0;
	border-radius: 50%;
`;

export const StyledSpinnerBar = styled.div<IProps>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: 15%;
	width: 100%;
	background-color: white;
	animation: ${({ speed }) => `${speed}s`} linear infinite ${spin};
	animation-play-state: ${({ isPlaying }) => (isPlaying ? 'running' : 'paused')};
`;

export const StyledSpinnerCenter = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	width: 50%;
	height: 50%;
	border-radius: 50%;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #e0e0e0;
		height: 50%;
		width: 50%;
		border-radius: 50%;
	}
`;
