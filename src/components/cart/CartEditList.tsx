import { useDispatch, useSelector } from 'react-redux';
import { MdClear } from 'react-icons/md';
import { RootState } from '../../redux/store';
import { closeDialog, openDialog } from '../../redux/actions/ui';
import { exitEditMode } from '../../redux/actions/cart';
import { getUniqueCategories } from '../../helpers/categories';
import { StyledCartList } from './CartList';
import CartIcon from './CartIcon';
import CartListSection from './CartListSection';
import CartTitle from './CartTitle';
import SaveCart from './SaveCart';
import ConfirmDialog from '../ui/ConfirmDialog';

function CartEditList() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	const { unsavedCart } = useSelector((state: RootState) => state.cart);

	const categories = getUniqueCategories(
		unsavedCart.items.map((item: any) => item.category)
	);

	const handleCloseDialog = () => dispatch(closeDialog());

	const handleDiscard = () => {
		dispatch(openDialog());
	};

	const discardChanges = () => {
		handleCloseDialog();
		dispatch(exitEditMode());
	};

	return (
		<StyledCartList>
			<div className="content">
				<div className="header">
					<CartTitle>{unsavedCart.name}</CartTitle>
					<CartIcon title="Discard changes" onClick={handleDiscard}>
						<MdClear size={24} color="currentColor" />
					</CartIcon>
				</div>
				{/* TODO: Por cada categoriía hacer un map para mostrar los items */}
				{categories.map((cat: string) => (
					<CartListSection
						key={cat}
						category={cat}
						items={unsavedCart.items.filter(
							(item: any) => item.category === cat
						)}
					/>
				))}
			</div>
			<SaveCart />
			<ConfirmDialog
				title="Are you sure you want to exit the edit mode? All changes made will be discarded"
				isOpen={ui.isDialogOpen}
				onClose={handleCloseDialog}
				onConfirm={discardChanges}
			/>
		</StyledCartList>
	);
}

export default CartEditList;
