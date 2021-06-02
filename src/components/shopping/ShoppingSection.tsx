import styled from 'styled-components';
import { IItem, IItemByCategory } from '../../interfaces/shopping.interface';
import SectionList from '../layout/SectionList';
import AddItemButton from './AddItemButton';
import ShoppingItem from './ShoppingItem';

const StyledShoppingSection = styled.section`
	margin-bottom: 1.6rem;
`;

const Headline = styled.h2`
	font-size: 1.8rem;
	font-weight: 500;
	margin: 0 0 1.8rem 0;
`;

function ShoppingSection({ category, items }: IItemByCategory) {
	return (
		<StyledShoppingSection>
			<Headline>{category}</Headline>
			<SectionList>
				{items.map((item: IItem) => (
					<ShoppingItem key={item._id} item={item} />
				))}
				{items.length === 0 && (
					<AddItemButton>Add an item</AddItemButton>
				)}
			</SectionList>
		</StyledShoppingSection>
	);
}

export default ShoppingSection;
