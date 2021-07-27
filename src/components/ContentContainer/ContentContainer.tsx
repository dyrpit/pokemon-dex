import { FC } from 'react';

import { StyledMain } from './ContentContainer.styles';

const ContentContainer: FC = ({ children }) => {
	return <StyledMain animate='visible'>{children}</StyledMain>;
};

export default ContentContainer;
