import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdEdit } from 'react-icons/md';
import { showAddItem, showItemInfo } from '../../redux/actions/ui';
import { showItem } from '../../redux/actions/shopping';
import { addItemToCart } from '../../redux/actions/cart';
import { IItem } from '../../interfaces/shopping.interface';
import ItemButton from './ItemButton';

interface ShoppingItemProps {
	item: IItem;
}

const StyledShoppingItem = styled.div`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	cursor: default;
	padding: 1.2rem 1.6rem;
	display: grid;
	grid-template-columns: 1fr repeat(2, 2.4rem);
	gap: 0.8rem;
	align-items: start;
	${ItemButton}:first-of-type {
		opacity: 0.7;
	}
`;

function ShoppingItem({ item }: ShoppingItemProps) {
	const dispatch = useDispatch();

	const viewDetails = () => {
		dispatch(showItem(item));
		dispatch(showItemInfo());
	};

	const addCart = (e: MouseEvent) => {
		e.stopPropagation();
		dispatch(
			addItemToCart({
				name: item.name,
				quantity: 1,
				category: item.category,
				completed: false,
				item: item._id,
			})
		);
	};

	const showEditPanel = (e: MouseEvent) => {
		e.stopPropagation();
		dispatch(showItem(item));
		dispatch(showAddItem());
	};

	return (
		<StyledShoppingItem onClick={viewDetails}>
			{item.name}
			<ItemButton type="button" title="Edit Item" onClick={showEditPanel}>
				<MdEdit size={24} color="currentColor" />
			</ItemButton>
			<ItemButton
				type="button"
				title="Add Item to the list"
				onClick={addCart}
			>
				<MdAdd size={24} color="currentColor" />
			</ItemButton>
		</StyledShoppingItem>
	);
}

export default ShoppingItem;
