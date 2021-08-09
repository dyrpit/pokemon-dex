import { FC } from 'react';
import { getProperTypeImg } from '../../utils/getProperTypeImg';

import { StyledTypeWrapper, StyledTypeImg, StyledTypeTitle } from './TypeDisplay.styles';

interface IProps {
	type: string;
}

const TypeDisplay: FC<IProps> = ({ type }) => {
	return (
		<StyledTypeWrapper typeColor={type}>
			<StyledTypeImg src={getProperTypeImg(type)} alt={`${type} type icon`} />
			<StyledTypeTitle>{type}</StyledTypeTitle>
		</StyledTypeWrapper>
	);
};

export default TypeDisplay;
