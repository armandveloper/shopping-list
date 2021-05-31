import { StyledCartList } from './CartList';
import CartListSection from './CartListSection';
import Title from './CartCategoryTitle';
import SaveCart from './SaveCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';

const getUniqueCategories = (categories: string[]) => {
	return [...Array.from(new Set<string>(categories))];
};

function CartEditList() {
	const cart = useSelector((state: RootState) => state.cart);

	const [categories, setCategories] = useState(
		getUniqueCategories(cart.items.map((item: any) => item.category))
	);

	useEffect(() => {
		setCategories(
			getUniqueCategories(cart.items.map((item: any) => item.category))
		);
	}, [cart.items]);

	const [items, setItems] = useState(cart.items);

	useEffect(() => {
		setItems(cart.items);
	}, [cart.items]);

	return (
		<StyledCartList>
			<div className="content">
				<Title>{cart.name}</Title>
				{/* TODO: Por cada categoriía hacer un map para mostrar los items */}
				{categories.map((cat: string) => (
					<CartListSection
						key={cat}
						category={cat}
						items={items.filter(
							(item: any) => item.category === cat
						)}
					/>
				))}
			</div>
			<SaveCart name={cart.name} />
		</StyledCartList>
	);
}

export default CartEditList;
