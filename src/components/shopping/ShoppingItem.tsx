import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const StyledShoppingItem = styled.div`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	cursor: default;
	padding: 1.2rem 1.6rem;
	display: grid;
	grid-template-columns: 1fr 2.4rem;
	gap: 1.2rem;
	align-items: start;
`;

const AddListButton = styled.button`
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

function ShoppingItem() {
	return (
		<StyledShoppingItem>
			Avocado
			<AddListButton type="button" title="Add Item to the list">
				<MdAdd size={24} color="currentColor" />
			</AddListButton>
		</StyledShoppingItem>
	);
}

export default ShoppingItem;
