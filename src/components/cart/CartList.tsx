import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { RootState } from '../../redux/store';
import { enableEditMode } from '../../redux/actions/cart';
import { getUniqueCategories } from '../../helpers/categories';
import { cartListHeader, sidebarRightPadding } from '../../styles/mixins';
import CartListSection from './CartListSection';
import CartTitle from './CartTitle';
import CartIcon from './CartIcon';
import CartActions from './CartActions';

export const StyledCartList = styled.div`
	flex: 1;
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;
	${cartListHeader};
	.content {
		${sidebarRightPadding}
		flex: 1;
	}
`;

function CartList() {
	const dispatch = useDispatch();

	const { cart } = useSelector((state: RootState) => state.cart);

	const categories = getUniqueCategories(
		cart.items.map((item: any) => item.category)
	);

	const handleEditCart = () => dispatch(enableEditMode());

	return (
		<StyledCartList>
			<div className="content">
				<div className="header">
					<CartTitle>{cart.name}</CartTitle>
					<CartIcon onClick={handleEditCart} title="Edit Cart">
						<MdEdit size={24} color="currentColor" />
					</CartIcon>
				</div>

				{/* TODO: Por cada categoriía hacer un map para mostrar los items */}
				{categories.map((cat: string) => (
					<CartListSection
						key={cat}
						category={cat}
						items={cart.items.filter(
							(item: any) => item.category === cat
						)}
					/>
				))}
			</div>
			<CartActions />
		</StyledCartList>
	);
}

export default CartList;
