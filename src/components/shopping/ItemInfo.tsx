import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';
import { hideItemInfo, openDialog, closeDialog } from '../../redux/actions/ui';
import { hideItem, startDeleteItem } from '../../redux/actions/shopping';
import { RootState } from '../../redux/store';
import {
	slideInRight,
	slideOutRight,
	showAddItemAnimation,
	hideAddItemAnimation,
} from '../../styles/animations';
import { sidebarRightPadding, sidebarRightStyles } from '../../styles/mixins';
import Button from '../ui/Button';
import ConfirmDialog from '../ui/ConfirmDialog';

interface ItemInfoProps {
	show: boolean;
	item: any | null;
}

const StyledItemInfo = styled.div<{ show: boolean }>`
	${sidebarRightStyles};
	${sidebarRightPadding};
	animation: ${({ show }) =>
			show ? showAddItemAnimation : hideAddItemAnimation}
		0.4s ease forwards;
	@media (min-width: 56.25em) {
		padding-top: 3.4rem;
		animation: ${({ show }) => (show ? slideInRight : slideOutRight)} 0.4s
			ease forwards;
	}
`;

const BackButton = styled.button`
	border: none;
	background: none;
	color: var(--color-primary);
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	font-weight: 700;
	margin: 0;
	margin-bottom: 3rem;
	padding: 0;
	display: inline-flex;
	align-items: center;
	svg {
		margin-right: 1rem;
	}
`;

const Image = styled.img`
	border-radius: 2.5rem;
	display: block;
	height: auto;
	margin-bottom: 2.5rem;
	max-width: 100%;
`;

const Legend = styled.h4`
	font-size: 1.5rem;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 1.15rem;
	opacity: 0.79;
`;

const Text = styled.p`
	font-size: 1.8rem;
	margin-top: 0;
	margin-bottom: 2.5rem;
`;

const Actions = styled.div`
	padding: 1rem 0;
	text-align: center;
	@media (min-width: 37.5em) {
		text-align: right;
	}
	@media (min-width: 56.25em) {
		text-align: center;
		padding: 3rem 0;
	}
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function ItemInfo({ show, item }: ItemInfoProps) {
	const [shouldRender, setRender] = useState(show);
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const goBack = () => {
		dispatch(hideItem());
		dispatch(hideItemInfo());
	};

	const handleDelete = () => {
		dispatch(openDialog());
	};

	const handleCloseDialog = () => dispatch(closeDialog());

	const deleteItem = () => {
		dispatch(hideItemInfo());
		dispatch(startDeleteItem(item?._id));
		handleCloseDialog();
	};

	if (!shouldRender) return null;

	return (
		<StyledItemInfo onAnimationEnd={handleAnimationEnd} show={show}>
			<BackButton type="button" onClick={goBack}>
				<MdArrowBack size={24} color="currentColor" />
				back
			</BackButton>
			{item?.image && <Image src={item?.image} />}
			<Legend>name</Legend>
			<Text>{item?.name}</Text>
			<Legend>category</Legend>
			<Text>{item?.category}</Text>
			{item?.note && (
				<>
					<Legend>note</Legend>
					<Text>{item?.note}</Text>
				</>
			)}

			<Actions>
				<Button size="lg" type="button" onClick={handleDelete}>
					delete
				</Button>
				<Button size="lg" type="button" color="primary">
					Add to list
				</Button>
			</Actions>
			<ConfirmDialog
				title="Are you sure that you want to delete this item?"
				isOpen={ui.isDialogOpen}
				onClose={handleCloseDialog}
				onConfirm={deleteItem}
			/>
		</StyledItemInfo>
	);
}

export default ItemInfo;
