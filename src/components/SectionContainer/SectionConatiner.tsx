import { FC } from 'react';

import { StyledSection } from './SectionContainer.styles';

const SectionContainer: FC = ({ children }) => {
	return <StyledSection>{children}</StyledSection>;
};

export default SectionContainer;
