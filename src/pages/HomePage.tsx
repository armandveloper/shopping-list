import Content from '../components/layout/Content';
import Sidebar from '../components/layout/Sidebar';

function HomePage() {
	return (
		<div className="layout">
			<Sidebar />
			<Content />
		</div>
	);
}

export default HomePage;
