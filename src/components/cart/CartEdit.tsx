import CartItemEdit from './CartItemEdit';

interface CartEditProps {
	items: any[];
}

function CartEdit({ items }: CartEditProps) {
	return (
		<ul>
			{items.map((item: any) => (
				<CartItemEdit key={item.name} item={item} />
			))}
		</ul>
	);
}

export default CartEdit;
