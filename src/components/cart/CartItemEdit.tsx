import styled from 'styled-components';
import { ICartItem } from '../../interfaces/cart.interface';
import { StyledCartItem } from './CartItem';
import CartItemActions from './CartItemActions';

interface CartItemEditProps {
	item: ICartItem;
}

const StyledCartItemEdit = styled(StyledCartItem)`
	grid-template-columns: 1fr 17.4rem;
`;

function CartItemEdit({ item }: CartItemEditProps) {
	return (
		<StyledCartItemEdit>
			{item.name}
			<CartItemActions id={item.item} quantity={item.quantity} />
		</StyledCartItemEdit>
	);
}

export default CartItemEdit;
