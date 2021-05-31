import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightPadding } from '../../styles/mixins';
import CartListSection from './CartListSection';
import Title from './CartCategoryTitle';
import CartActions from './CartActions';

export const StyledCartList = styled.div`
	flex: 1;
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;
	.content {
		${sidebarRightPadding}
		flex: 1;
	}
`;

const getUniqueCategories = (categories: string[]) => {
	return [...Array.from(new Set<string>(categories))];
};

function CartList() {
	const cart = useSelector((state: RootState) => state.cart);

	const [categories, setCategories] = useState(
		getUniqueCategories(cart.items.map((item: any) => item.category))
	);

	return (
		<StyledCartList>
			<div className="content">
				<Title>Hola</Title>
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
