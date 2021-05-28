import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightPadding, sidebarRightStyles } from '../../styles/mixins';
import AddItemForm from './AddItemForm';
import {
	slideInRight,
	slideOutRight,
	showAddItemAnimation,
	hideAddItemAnimation,
} from '../../styles/animations';

interface Props {
	show: boolean;
}

const StyledAddItem = styled.div<Props>`
	${sidebarRightStyles};
	${sidebarRightPadding};
	display: flex;
	flex-direction: column;
	animation: ${({ show }) =>
			show ? showAddItemAnimation : hideAddItemAnimation}
		0.4s ease forwards;
	@media (min-width: 56.25em) {
		padding-top: 3.4rem;
		animation: ${({ show }) => (show ? slideInRight : slideOutRight)} 0.4s
			ease forwards;
	}
	> * {
		flex-shrink: 0;
	}
`;

const Title = styled.h2`
	font-size: 2.4rem;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 3rem;
`;

function AddItem({ show }: Props) {
	const [shouldRender, setRender] = useState(show);

	const { currentItem } = useSelector((state: RootState) => state.shopping);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<StyledAddItem onAnimationEnd={handleAnimationEnd} show={show}>
			<Title>{currentItem ? 'Edit Item' : 'Add a new Item'}</Title>
			<AddItemForm item={currentItem} />
		</StyledAddItem>
	);
}

export default AddItem;
