import styled from 'styled-components';
import { sidebarRightPadding } from '../../styles/mixins';
import ShoppingListSection from './ShoppingListSection';

const StyledShoppingListContainer = styled.div`
	flex: 1;
	margin-top: 3.2rem;
	margin-bottom: 2.5rem;
	${sidebarRightPadding}
	display: flex;
	flex-direction: column;
`;

const Title = styled.h3`
	font-size: 2.4rem;
	margin-top: 0;
	margin-bottom: 3.5rem;
`;

function ShoppingListContainer() {
	return (
		<StyledShoppingListContainer>
			<Title>Shopping list</Title>
			<ShoppingListSection />
			<ShoppingListSection />
			<ShoppingListSection />
			<ShoppingListSection />
		</StyledShoppingListContainer>
	);
}

export default ShoppingListContainer;
