import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { sidebarRightStyles } from '../../styles/mixins';
import Banner from '../shopping/Banner';
import NoItems from '../shopping/NoItems';
import SaveShoppingList from '../shopping/SaveShoppingList';
import ShoppingListActions from '../shopping/ShoppingListActions';
import ShoppingListContainer from '../shopping/ShoppingListContainer';

const Sidebar = styled.aside`
	${sidebarRightStyles}
	display: flex;
	flex-direction: column;
`;

function ShoppingSidebar() {
	const ui = useSelector((state: RootState) => state.ui);

	return (
		<Sidebar className={ui.showSidebarRight ? 'show' : ''}>
			<Banner />
			{/* <NoItems /> */}
			<ShoppingListContainer />
			{/* <SaveShoppingList /> */}
			<ShoppingListActions />
		</Sidebar>
	);
}

export default ShoppingSidebar;
