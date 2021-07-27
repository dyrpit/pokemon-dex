import { FC } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import ContentContainer from '../../components/ContentContainer/ContentContainer';

interface IParam {
	id: string;
}

const PokemonDetailsView: FC = () => {
	const { id } = useParams<IParam>();
	const history = useHistory();

	return (
		<ContentContainer>
			<button onClick={() => history.push('/')}>Go back</button>
			<Link to={String(Number(id) + 1)}>{Number(id) + 1}</Link>
		</ContentContainer>
	);
};

export default PokemonDetailsView;
