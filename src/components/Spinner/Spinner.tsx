import { FC } from 'react';

import { StyledSpinnerWrapper, StyledSpinnerBar, StyledSpinnerCenter } from './Spinner.styles';

interface IProps {
	width?: number;
	height?: number;
	isPlaying?: boolean;
	speed?: number;
}

const Spinner: FC<IProps> = ({ width = 100, height = 100, isPlaying = true, speed = 3 }) => {
	return (
		<StyledSpinnerWrapper width={width} height={height}>
			<StyledSpinnerBar isPlaying={isPlaying} speed={speed} />
			<StyledSpinnerCenter />
		</StyledSpinnerWrapper>
	);
};

export default Spinner;
