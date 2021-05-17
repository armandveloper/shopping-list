import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import ShoppingSidebar from './ShoppingSidebar';
import AddItem from '../shopping/AddItem';

const StyledContent = styled.main`
	height: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: 100% 39rem;
	@media (min-width: 56.25em) {
		grid-template-columns: 1fr 39rem;
	}
`;

function Content() {
	const ui = useSelector((state: RootState) => state.ui);

	return (
		<StyledContent>
			<div>
				<p>Hola</p>
			</div>
			<ShoppingSidebar />
			{ui.showAddItem && <AddItem />}
		</StyledContent>
	);
}

export default Content;
