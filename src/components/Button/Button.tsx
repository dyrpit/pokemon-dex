import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledButton } from './Button.styles';

interface IProps {
	title: string;
}

const Button: FC<IProps> = ({ title }) => {
	const history = useHistory();

	return (
		<StyledButton
			whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
			onClick={() => history.push('/')}
		>
			<i className='fas fa-arrow-left'></i>
			{title}
		</StyledButton>
	);
};

export default Button;
