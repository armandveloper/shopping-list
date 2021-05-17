import { MdInsertChart, MdList, MdReplay } from 'react-icons/md';
import styled from 'styled-components';
import NavItem from './NavItem';
import Tooltip from './Tooltip';

const StyledNav = styled.nav`
	flex: 0 0 21rem;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

function Nav() {
	return (
		<StyledNav>
			<NavItem
				exact={true}
				to="/"
				activeClassName="current"
				aria-label="Items"
			>
				<MdList size={24} />
				<Tooltip>Items</Tooltip>
			</NavItem>
			<NavItem
				exact={true}
				to="/history"
				activeClassName="current"
				aria-label="History"
			>
				<MdReplay size={24} />
				<Tooltip>History</Tooltip>
			</NavItem>
			<NavItem
				exact={true}
				to="/statistics"
				activeClassName="current"
				aria-label="Statistics"
			>
				<MdInsertChart size={24} />
				<Tooltip>Statistics</Tooltip>
			</NavItem>
		</StyledNav>
	);
}

export default Nav;
