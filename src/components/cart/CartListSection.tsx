import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import CartEdit from './CartEdit';
import CartItem from './CartItem';

interface CartListSectionProps {
	category: string;
	items: any[];
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
	const { isEditing } = useSelector((state: RootState) => state.cart);

	return (
		<StyledCartListSection>
			<Headline>{category}</Headline>
			{isEditing ? (
				<CartEdit items={items} />
			) : (
				<ul>
					{items.map((item: any) => (
						<CartItem key={item._id} />
					))}
				</ul>
			)}
		</StyledCartListSection>
	);
}

export default CartListSection;
