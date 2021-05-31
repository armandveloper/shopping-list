import { useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdDelete, MdRemove } from 'react-icons/md';
import QuantityChip from '../ui/QuantityChip';

interface CartItemActionsProps {
	quantity: number;
}

interface CounterProps {
	start: number;
}

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

function Counter({ start }: CounterProps) {
	const [counter, setCounter] = useState(start);

	const increase = () => setCounter(counter + 1);

	const decrease = () => setCounter(counter - 1);

	return (
		<StyledCounter>
			<CounterButton type="button" title="-1">
				<MdRemove size={16} color="currentColor" onClick={decrease} />
			</CounterButton>
			<QuantityChip>{counter} pcs</QuantityChip>
			<CounterButton type="button" title="+1">
				<MdAdd size={16} color="currentColor" onClick={increase} />
			</CounterButton>
		</StyledCounter>
	);
}

const StyledCartItemActions = styled.div`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	height: 4.5rem;
	padding-right: 0.8rem;
	display: grid;
	grid-template-columns: 3.8rem 1fr;
	gap: 1.2rem;
	align-items: center;
`;

function CartItemActions({ quantity }: CartItemActionsProps) {
	return (
		<StyledCartItemActions>
			<DeleteButton type="button" title="Remove item from list">
				<MdDelete size={24} color="#fff" />
			</DeleteButton>
			<Counter start={quantity} />
		</StyledCartItemActions>
	);
}

export default CartItemActions;
