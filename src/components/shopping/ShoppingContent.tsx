import styled from 'styled-components';
import Header from '../layout/Header';
import ShoppingItemsHolder from './ShoppingItemsHolder';
import ShoppingSection from './ShoppingSection';

const StyledShoppingContent = styled.div`
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) var(--color-bg-2);
`;

function ShoppingContent() {
	return (
		<StyledShoppingContent>
			<Header />
			<ShoppingItemsHolder>
				<ShoppingSection />
			</ShoppingItemsHolder>
			<ShoppingItemsHolder>
				<ShoppingSection />
			</ShoppingItemsHolder>
			<ShoppingItemsHolder>
				<ShoppingSection />
			</ShoppingItemsHolder>
			<ShoppingItemsHolder>
				<ShoppingSection />
			</ShoppingItemsHolder>
		</StyledShoppingContent>
	);
}

export default ShoppingContent;
