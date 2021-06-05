import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { showAddItem } from '../../redux/actions/ui';

interface AddItemButtonProps {
	children: ReactNode;
}

const StyledAddItemButton = styled.button`
	background-color: var(--color-bg-3);
	border: none;
	border-radius: 1.2rem;
	color: #fff;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	margin: 0;
	padding: 1.2rem 1.6rem;
	text-align: left;
	display: grid;
	grid-template-columns: 1fr 2.4rem;
	gap: 0.8rem;
	align-items: start;
`;

function AddItemButton({ children }: AddItemButtonProps) {
	const dispatch = useDispatch();
	const handleClick = () => dispatch(showAddItem());

	return (
		<StyledAddItemButton onClick={handleClick}>
			{children}
			<MdAdd size={24} color="currentColor" cursor="pointer" />
		</StyledAddItemButton>
	);
}

export default AddItemButton;
