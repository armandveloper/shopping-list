import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { closeDialog, openDialog } from '../../redux/actions/ui';
import { startCancelCart, startCompleteCart } from '../../redux/actions/cart';
import { sidebarRightFooter } from '../../styles/mixins';
import Button from '../ui/Button';
import ConfirmDialog from '../ui/ConfirmDialog';
import Loader from '../ui/Loader';

const StyledCartActions = styled.div`
	${sidebarRightFooter};
	text-align: center;
	@media (min-width: 37.5em) {
		text-align: right;
	}
	@media (min-width: 56.25em) {
		text-align: center;
	}
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function CartActions() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);
	const { cart, isLoading } = useSelector((state: RootState) => state.cart);

	const handleCloseDialog = () => dispatch(closeDialog());

	const handleCancel = () => {
		dispatch(openDialog());
	};

	const handleComplete = () => {
		dispatch(startCompleteCart(cart._id));
	};

	const cancelCart = () => {
		dispatch(startCancelCart(cart._id));
	};

	return (
		<StyledCartActions>
			<Button disabled={isLoading} type="button" onClick={handleCancel}>
				{isLoading ? <Loader center={true} size="sm" /> : 'cancel'}
			</Button>
			<Button
				disabled={isLoading}
				type="button"
				color="secondary"
				onClick={handleComplete}
			>
				{isLoading ? <Loader center={true} size="sm" /> : 'Complete'}
			</Button>
			<ConfirmDialog
				title="Are you sure that you want to cancel this list?"
				isOpen={ui.isDialogOpen}
				onClose={handleCloseDialog}
				onConfirm={cancelCart}
			/>
		</StyledCartActions>
	);
}

export default CartActions;
