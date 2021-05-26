import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Content from '../components/layout/Content';
import Sidebar from '../components/layout/Sidebar';
import { getCategories } from '../redux/actions/shopping';

function HomePage() {
	const dispatch = useDispatch();

	const { categories } = useSelector((state: RootState) => state.shopping);

	useEffect(() => {
		if (categories.length === 0) {
			dispatch(getCategories());
		}
	}, [dispatch, categories]);

	return (
		<div className="layout">
			<Sidebar />
			<Content />
		</div>
	);
}

export default HomePage;
