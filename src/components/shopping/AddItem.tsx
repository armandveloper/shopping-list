import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import AddItemForm from './AddItemForm';

const StyledAddItem = styled.div`
	${sidebarRightStyles}
	@media (min-width: 56.25em) {
		padding-top: 3.4rem;
	}
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 2.4rem;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 3rem;
`;

function AddItem() {
	const ui = useSelector((state: RootState) => state.ui);

	return (
		<StyledAddItem className={ui.showAddItem ? 'show' : ''}>
			<Title>Add a new Item</Title>
			<AddItemForm />
		</StyledAddItem>
	);
}

export default AddItem;
