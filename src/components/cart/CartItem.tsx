import styled from 'styled-components';
import Checkbox from '../ui/Checkbox';
import QuantityChip from '../ui/QuantityChip';

export const StyledCartItem = styled.li`
	font-size: 1.4rem;
	display: grid;
	grid-template-columns: 2.4rem 1fr 6.8rem;
	gap: 1.6rem;
	align-items: center;
	&:not(:last-of-type) {
		margin-bottom: 2.4rem;
	}
`;

function CartItem() {
	return (
		<StyledCartItem>
			<Checkbox />
			Avocado
			<QuantityChip>1 pcs</QuantityChip>
		</StyledCartItem>
	);
}

export default CartItem;
