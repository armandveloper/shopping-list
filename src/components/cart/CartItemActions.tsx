import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdDelete, MdRemove } from 'react-icons/md';
import { removeItem, setItemQuantity } from '../../redux/actions/cart';
import QuantityChip from '../ui/QuantityChip';

interface CartItemActionsProps {
	quantity: number;
	id: string;
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

const StyledStepper = styled.div`
	display: grid;
	grid-template-columns: 1.6rem 1fr 1.6rem;
	gap: 0.9rem;
`;

const StepperButton = styled.button`
	background: none;
	border: none;
	color: var(--color-primary);
	cursor: pointer;
	margin: 0;
	padding: 0;
`;

function Stepper({ id, quantity }: CartItemActionsProps) {
	const dispatch = useDispatch();

	const increase = () => dispatch(setItemQuantity(id, quantity + 1));

	const decrease = () => {
		const quantityMinus = quantity - 1;
		quantityMinus === 0
			? dispatch(removeItem(id))
			: dispatch(setItemQuantity(id, quantityMinus));
	};

	return (
		<StyledStepper>
			<StepperButton type="button" title="-1">
				<MdRemove size={16} color="currentColor" onClick={decrease} />
			</StepperButton>
			<QuantityChip>{quantity} pcs</QuantityChip>
			<StepperButton type="button" title="+1">
				<MdAdd size={16} color="currentColor" onClick={increase} />
			</StepperButton>
		</StyledStepper>
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

function CartItemActions({ quantity, id }: CartItemActionsProps) {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeItem(id));
	};

	return (
		<StyledCartItemActions>
			<DeleteButton
				type="button"
				title="Remove item from list"
				onClick={handleRemove}
			>
				<MdDelete size={24} color="#fff" />
			</DeleteButton>
			<Stepper id={id} quantity={quantity} />
		</StyledCartItemActions>
	);
}

export default CartItemActions;
