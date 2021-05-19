import styled from 'styled-components';
import ItemActions from './ItemActions';
// import Checkbox from '../ui/Checkbox';

const StyledShoppingListItem = styled.li`
	font-size: 1.4rem;
	display: grid;
	grid-template-columns: 2.4rem 1fr 6.8rem;
	/* Dps columnas el el modo de edición */
	grid-template-columns: 1fr 17.4rem;
	gap: 1.6rem;
	align-items: center;
	&:not(:last-of-type) {
		margin-bottom: 2.4rem;
	}
`;

function ShoppingListItem() {
	return (
		<StyledShoppingListItem>
			{/* <Checkbox /> */}
			Avocado
			{/* <Quantity>1 pcs</Quantity> */}
			<ItemActions />
		</StyledShoppingListItem>
	);
}

export default ShoppingListItem;
