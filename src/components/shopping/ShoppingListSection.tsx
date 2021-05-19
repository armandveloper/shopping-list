import styled from 'styled-components';
import ShoppingListItem from './ShoppingListItem';

const StyledShoppingListSection = styled.section`
	margin-bottom: 2.5rem;
`;

const Headline = styled.h4`
	font-size: 1.4rem;
	font-weight: 500;
	margin: 0 0 2rem 0;
	opacity: 0.79;
`;

function ShoppingListSection() {
	return (
		<StyledShoppingListSection>
			<Headline>Fruits and vegetables</Headline>
			<ul>
				<ShoppingListItem />
				<ShoppingListItem />
				<ShoppingListItem />
				<ShoppingListItem />
			</ul>
		</StyledShoppingListSection>
	);
}

export default ShoppingListSection;
