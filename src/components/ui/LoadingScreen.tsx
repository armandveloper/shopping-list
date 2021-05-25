import styled from 'styled-components';
import Loader from './Loader';

const Styled = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function LoadingScreen() {
	return (
		<Styled>
			<Loader size="xlg" />
		</Styled>
	);
}

export default LoadingScreen;
