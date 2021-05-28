import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import Content from '../components/layout/Content';
import Sidebar from '../components/layout/Sidebar';
import { getItems } from '../redux/actions/shopping';

function HomePage() {
	const dispatch = useDispatch();

	const { items } = useSelector((state: RootState) => state.shopping);

	useEffect(() => {
		if (items.length === 0) {
			dispatch(getItems());
		}
	}, [dispatch, items]);

	return (
		<>
			<ToastContainer />
			<div className="layout">
				<Sidebar />
				<Content />
			</div>
		</>
	);
}

export default HomePage;
