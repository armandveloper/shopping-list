import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getCategories } from '../redux/actions/shopping';
import { startGetCart } from '../redux/actions/cart';
import Sidebar from '../components/layout/Sidebar';
import ContentLayout from '../components/layout/ContentLayout';
import CartSidebar from '../components/cart/CartSidebar';
import AddItem from '../components/shopping/AddItem';

function HistoryPage() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	const { isLoadingCategories } = useSelector(
		(state: RootState) => state.shopping
	);

	const { unsavedCart } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (isLoadingCategories) {
			dispatch(getCategories());
		}
	}, [dispatch, isLoadingCategories]);

	useEffect(() => {
		if (!unsavedCart.user) {
			dispatch(startGetCart());
		}
	}, [dispatch, unsavedCart.user]);

	return (
		<div className="layout">
			<Sidebar />
			<ContentLayout>
				<div>
					<h2>History main content</h2>
				</div>
				<CartSidebar />
				<AddItem show={ui.showAddItem} />
			</ContentLayout>
		</div>
	);
}

export default HistoryPage;
