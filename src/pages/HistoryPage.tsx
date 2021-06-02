import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import { getCategories } from '../redux/actions/shopping';
import { startGetCart, startGetHistory } from '../redux/actions/cart';
import Sidebar from '../components/layout/Sidebar';
import ContentLayout from '../components/layout/ContentLayout';
import History from '../components/history/History';
import CartSidebar from '../components/cart/CartSidebar';
import AddItem from '../components/shopping/AddItem';

function HistoryPage() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	const { isLoadingCategories } = useSelector(
		(state: RootState) => state.shopping
	);

	const { unsavedCart, history } = useSelector(
		(state: RootState) => state.cart
	);

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

	useEffect(() => {
		if (history.isLoading && history.history.length === 0) {
			dispatch(startGetHistory());
		}
	}, [dispatch, history]);

	return (
		<>
			<ToastContainer />
			<div className="layout">
				<Sidebar />
				<ContentLayout>
					<History />
					<CartSidebar />
					<AddItem show={ui.showAddItem} />
				</ContentLayout>
			</div>
		</>
	);
}

export default HistoryPage;
