import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { closeDialog, openDialog } from '../../redux/actions/ui';
import ShoppingContent from '../shopping/ShoppingContent';
import ShoppingSidebar from './ShoppingSidebar';
import AddItem from '../shopping/AddItem';
import ItemInfo from '../shopping/ItemInfo';
import ConfirmDialog from '../ui/ConfirmDialog';

const StyledContent = styled.main`
	height: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: 100% 100%;
	@media (min-width: 56.25em) {
		grid-template-columns: 1fr 39rem;
	}
`;

function Content() {
	const ui = useSelector((state: RootState) => state.ui);

	const dispatch = useDispatch();

	const handleCloseDialog = () => dispatch(closeDialog());

	return (
		<StyledContent>
			<ShoppingContent />
			<ShoppingSidebar />
			<AddItem show={ui.showAddItem} />
			<ItemInfo show={ui.showItemInfo} />
			<ConfirmDialog
				title="Are you sure that you want to cancel this list?"
				isOpen={ui.isDialogOpen}
				onClose={handleCloseDialog}
				onConfirm={() => console.log('Se ha cnfirmado la acción')}
			/>
		</StyledContent>
	);
}

export default Content;
