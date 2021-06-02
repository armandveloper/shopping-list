import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import { getItems } from '../redux/actions/shopping';
import { startGetCart } from '../redux/actions/cart';
import Sidebar from '../components/layout/Sidebar';
import ContentLayout from '../components/layout/ContentLayout';
import ShoppingContent from '../components/shopping/ShoppingContent';
import CartSidebar from '../components/cart/CartSidebar';
import AddItem from '../components/shopping/AddItem';
import ItemInfo from '../components/shopping/ItemInfo';

function HomePage() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	const { items, currentItem, isLoading } = useSelector(
		(state: RootState) => state.shopping
	);

	const { unsavedCart } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (isLoading && items.length === 0) {
			dispatch(getItems());
		}
	}, [dispatch, isLoading, items]);

	useEffect(() => {
		if (!unsavedCart.user) {
			dispatch(startGetCart());
		}
	}, [dispatch, unsavedCart.user]);

	return (
		<>
			<ToastContainer />
			<div className="layout">
				<Sidebar />
				<ContentLayout>
					<ShoppingContent />
					<CartSidebar />
					<AddItem show={ui.showAddItem} />
					<ItemInfo item={currentItem} show={ui.showItemInfo} />
				</ContentLayout>
			</div>
		</>
	);
}

export default HomePage;
