import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { showItemInfo } from '../../redux/actions/ui';

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
	const dispatch = useDispatch();

	const viewDetails = () => {
		dispatch(showItemInfo());
	};

	const addCart = (e: MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<StyledShoppingItem onClick={viewDetails}>
			Avocado
			<AddListButton
				type="button"
				title="Add Item to the list"
				onClick={addCart}
			>
				<MdAdd size={24} color="currentColor" />
			</AddListButton>
		</StyledShoppingItem>
	);
}

export default ShoppingItem;
