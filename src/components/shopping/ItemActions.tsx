import styled from 'styled-components';
import { MdAdd, MdDelete, MdRemove } from 'react-icons/md';
import Quantity from '../ui/QuantityChip';

const DeleteButton = styled.button`
	background-color: var(--color-primary);
	border: none;
	border-radius: 1.2rem;
	cursor: pointer;
	height: 100%;
	margin: 0;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const StyledCounter = styled.div`
	display: grid;
	grid-template-columns: 1.6rem 1fr 1.6rem;
	gap: 0.9rem;
`;

const CounterButton = styled.button`
	background: none;
	border: none;
	color: var(--color-primary);
	cursor: pointer;
	margin: 0;
	padding: 0;
`;

function Counter() {
	return (
		<StyledCounter>
			<CounterButton type="button" title="-1">
				<MdRemove size={16} color="currentColor" />
			</CounterButton>
			<Quantity>3 pcs</Quantity>
			<CounterButton type="button" title="+1">
				<MdAdd size={16} color="currentColor" />
			</CounterButton>
		</StyledCounter>
	);
}

const StyledItemActions = styled.div`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	height: 4.5rem;
	padding-right: 0.8rem;
	display: grid;
	grid-template-columns: 3.8rem 1fr;
	gap: 1.2rem;
	align-items: center;
`;

function ItemActions() {
	return (
		<StyledItemActions>
			<DeleteButton type="button" title="Remove item from list">
				<MdDelete size={24} color="#fff" />
			</DeleteButton>
			<Counter />
		</StyledItemActions>
	);
}

export default ItemActions;
