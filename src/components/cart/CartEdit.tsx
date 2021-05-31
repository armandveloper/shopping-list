import { ICartItem } from '../../interfaces/cart.interface';
import CartItemEdit from './CartItemEdit';

interface CartEditProps {
	items: ICartItem[];
}

function CartEdit({ items }: CartEditProps) {
	return (
		<ul>
			{items.map((item: ICartItem) => (
				<CartItemEdit key={item.item} item={item} />
			))}
		</ul>
	);
}

export default CartEdit;
