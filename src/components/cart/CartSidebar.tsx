import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import CartBanner from './CartBanner';
import CartNoItems from './CartNoItems';
import CartList from './CartList';
import CartEditList from './CartEditList';

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
			<CartBanner />
			{cart.items.length === 0 ? (
				<>
					<CartNoItems />
				</>
			) : cart.isEditing ? (
				<CartEditList />
			) : (
				<CartList />
			)}
		</Sidebar>
	);
}

export default CartSidebar;
