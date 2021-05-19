import styled from 'styled-components';
import ShoppingItem from './ShoppingItem';

// interface Props {
//   category: string;
//   items: ShoppingItems[];
// }

const StyledShoppingSection = styled.section`
	margin-bottom: 1.6rem;
`;

const Headline = styled.h2`
	font-size: 1.8rem;
	font-weight: 500;
	margin: 0 0 1.8rem 0;
`;

const SectionList = styled.ul`
	display: grid;
	gap: 2.4rem 0.8rem;
	@media (min-width: 36em) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 75em) {
		grid-template-columns: repeat(4, 1fr);
		gap: 4rem 2rem;
	}
`;

function ShoppingSection() {
	return (
		<StyledShoppingSection>
			<Headline>Fruit and vegetables</Headline>
			<SectionList>
				<ShoppingItem />
				<ShoppingItem />

				<ShoppingItem />
				<ShoppingItem />
				<ShoppingItem />
			</SectionList>
		</StyledShoppingSection>
	);
}

export default ShoppingSection;
