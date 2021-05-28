import { ReactNode } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import ItemButton from './ItemButton';

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
	return (
		<StyledAddItemButton>
			{children}
			<ItemButton type="button" title="Add a new item to the category">
				<MdAdd size={24} color="currentColor" />
			</ItemButton>
		</StyledAddItemButton>
	);
}

export default AddItemButton;
