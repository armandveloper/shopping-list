import styled from 'styled-components';
import { baseItemStyles } from '../../styles/mixins';

interface HistoryItemProps {
	name: string;
	quantity: number;
}

const StyledItem = styled.li`
	${baseItemStyles};
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	.quantity {
		color: var(--color-primary);
		font-size: 1.4rem;
		font-weight: 700;
	}
`;

function HistoryItem({ name, quantity }: HistoryItemProps) {
	return (
		<StyledItem>
			{name}
			<span className="quantity">{quantity} pcs</span>
		</StyledItem>
	);
}

export default HistoryItem;
