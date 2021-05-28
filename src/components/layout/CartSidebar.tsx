import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import Banner from '../shopping/Banner';
import NoItems from '../shopping/NoItems';
import SaveShoppingList from '../shopping/SaveShoppingList';
import ShoppingListActions from '../shopping/ShoppingListActions';
import ShoppingListContainer from '../shopping/ShoppingListContainer';

const Sidebar = styled.aside`
	${sidebarRightStyles}
	display: flex;
	flex-direction: column;
`;

function CartSidebar() {
	const ui = useSelector((state: RootState) => state.ui);
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<Sidebar className={ui.showSidebarRight ? 'show' : ''}>
			<Banner />
			{cart.items.length === 0 ? (
				<>
					<NoItems />
				</>
			) : (
				<>
					<ShoppingListContainer />
					{cart.isEditing ? (
						<SaveShoppingList />
					) : (
						<ShoppingListActions />
					)}
				</>
			)}
		</Sidebar>
	);
}

export default CartSidebar;
