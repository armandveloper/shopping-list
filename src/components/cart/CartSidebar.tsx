import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import CartBanner from './CartBanner';
import CartNoItems from './CartNoItems';
import CartList from './CartList';
import CartEditList from './CartEditList';
import Loader from '../ui/Loader';

const Sidebar = styled.aside`
	${sidebarRightStyles}
	display: flex;
	flex-direction: column;
	.loader {
		flex: 1;
		margin-top: 6rem;
	}
`;

function CartSidebar() {
	const ui = useSelector((state: RootState) => state.ui);
	const { isLoading, isEditMode, cart, unsavedCart } = useSelector(
		(state: RootState) => state.cart
	);
	return (
		<Sidebar className={ui.showSidebarRight ? 'show' : ''}>
			<CartBanner />
			{isLoading ? (
				<div className="loader">
					<Loader center={true} size="lg" />
				</div>
			) : cart.items.length === 0 && unsavedCart.items.length === 0 ? (
				<>
					<CartNoItems />
				</>
			) : isEditMode ? (
				<CartEditList />
			) : (
				<CartList />
			)}
		</Sidebar>
	);
}

export default CartSidebar;
