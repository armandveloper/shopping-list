import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import Header from '../layout/Header';
import ShoppingItemsHolder from './ShoppingItemsHolder';
import ShoppingSection from './ShoppingSection';

const StyledShoppingContent = styled.div`
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) var(--color-bg-2);
`;

function ShoppingContent() {
	const { categories, items } = useSelector(
		(state: RootState) => state.shopping
	);

	return (
		<StyledShoppingContent>
			<Header />
			{categories.map((cat: any) => (
				<ShoppingItemsHolder key={cat.lowercase}>
					<ShoppingSection
						category={cat.category}
						items={items.filter(
							(item: any) => item.category === cat.category
						)}
					/>
				</ShoppingItemsHolder>
			))}
		</StyledShoppingContent>
	);
}

export default ShoppingContent;
