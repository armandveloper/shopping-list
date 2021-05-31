import styled from 'styled-components';
import { StyledCartItem } from './CartItem';
import CartItemActions from './CartItemActions';

interface CartItemEditProps {
	item: any;
}

const StyledCartItemEdit = styled(StyledCartItem)`
	grid-template-columns: 1fr 17.4rem;
`;

function CartItemEdit({ item }: CartItemEditProps) {
	return (
		<StyledCartItemEdit>
			{item.name}
			<CartItemActions quantity={item.quantity} />
		</StyledCartItemEdit>
	);
}

export default CartItemEdit;
