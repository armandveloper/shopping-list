import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IItemByCategory } from '../../interfaces/shopping.interface';
import { RootState } from '../../redux/store';
import Header from '../layout/Header';
import Loader from '../ui/Loader';
import ShoppingItemsHolder from './ShoppingItemsHolder';
import ShoppingSection from './ShoppingSection';

const StyledShoppingContent = styled.div`
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) var(--color-bg-2);
	.space {
		margin-top: 4rem;
	}
`;

function ShoppingContent() {
	const ui = useSelector((state: RootState) => state.ui);

	const { items } = useSelector((state: RootState) => state.shopping);

	return (
		<StyledShoppingContent>
			<Header />
			{ui.isLoading ? (
				<div className="space">
					<Loader center={true} size="lg" />
				</div>
			) : (
				items.map((cat: IItemByCategory) =>
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
		</StyledShoppingContent>
	);
}

export default ShoppingContent;
