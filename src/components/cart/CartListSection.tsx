import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { ICartItem } from '../../interfaces/cart.interface';
import CartEdit from './CartEdit';
import CartItem from './CartItem';

interface CartListSectionProps {
	category: string;
	items: ICartItem[];
}

const StyledCartListSection = styled.section`
	margin-bottom: 2.5rem;
`;

const Headline = styled.h4`
	font-size: 1.4rem;
	font-weight: 500;
	margin: 0 0 2rem 0;
	opacity: 0.79;
`;

function CartListSection({ category, items }: CartListSectionProps) {
	const { isEditMode } = useSelector((state: RootState) => state.cart);

	return (
		<StyledCartListSection>
			<Headline>{category}</Headline>
			{isEditMode ? (
				<CartEdit items={items} />
			) : (
				<ul>
					{items.map((item: ICartItem) => (
						<CartItem key={item._id} item={item} />
					))}
				</ul>
			)}
		</StyledCartListSection>
	);
}

export default CartListSection;
