import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import Banner from '../shopping/Banner';

const Sidebar = styled.aside`
	${sidebarRightStyles}
`;

function ShoppingSidebar() {
	const ui = useSelector((state: RootState) => state.ui);

	return (
		<Sidebar className={ui.showSidebarRight ? 'show' : ''}>
			<Banner />
		</Sidebar>
	);
}

export default ShoppingSidebar;
