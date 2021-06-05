import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IItem, IItemByCategory } from '../../interfaces/shopping.interface';
import { RootState } from '../../redux/store';
import { mainContent, scrollbarY } from '../../styles/mixins';
import Header from '../layout/Header';
import Loader from '../ui/Loader';
import ShoppingItemsHolder from './ShoppingItemsHolder';
import ShoppingSection from './ShoppingSection';
import AddItemButton from './AddItemButton';

const StyledShoppingContent = styled.div`
	${scrollbarY};
	.space {
		margin-top: 4rem;
	}
	.no-data {
		${mainContent};
		h2 {
			font-weight: 500;
		}
	}
`;

function ShoppingContent() {
	const ui = useSelector((state: RootState) => state.ui);

	const { items, isLoading, searchTerm } = useSelector(
		(state: RootState) => state.shopping
	);

	const filterItems = (): IItemByCategory[] => {
		if (!searchTerm) return items;
		const newItems = items.map((item: IItemByCategory) => ({
			category: item.category,
			items: item.items.filter((item: IItem) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			),
		}));
		const filteredItems = newItems.filter(
			(item: IItemByCategory) => item.items.length > 0
		);
		return filteredItems;
	};

	const filteredItems: IItemByCategory[] = filterItems();

	return (
		<StyledShoppingContent>
			<Header />
			{ui.isLoading ? (
				<div className="space">
					<Loader center={true} size="lg" />
				</div>
			) : (
				filteredItems.map((cat: IItemByCategory) =>
					cat.items.length > 0 ? (
						<ShoppingItemsHolder key={cat.category}>
							<ShoppingSection
								category={cat.category}
								items={cat.items}
							/>
						</ShoppingItemsHolder>
					) : null
				)
			)}
			{!ui.isLoading && !isLoading && items.length === 0 && (
				<div className="no-data">
					<h2>No items to show</h2>
					<AddItemButton>Create an item</AddItemButton>
				</div>
			)}
		</StyledShoppingContent>
	);
}

export default ShoppingContent;
