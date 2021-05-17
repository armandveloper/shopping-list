import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import Nav from '../ui/Nav';
import logo from '../../assets/img/logo.svg';

const StyledSidebar = styled.aside`
	background-color: #000;
	height: 100%;
	padding: 2rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 56.25em) {
		padding: 5.4rem 0 3.4rem;
	}
`;

const Logo = styled.img`
	height: 4rem;
	width: 4em;
`;

const CartButton = styled.button`
	background-color: var(--color-primary);
	border: none;
	border-radius: 50%;
	cursor: pointer;
	height: 4.2rem;
	padding: 0;
	width: 4.2rem;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<Link to="/" aria-label="Go Home">
				<Logo src={logo} width="40" height="40" />
			</Link>
			<Nav />
			<CartButton>
				<MdShoppingCart size={20} color="#fff" />
			</CartButton>
		</StyledSidebar>
	);
}

export default Sidebar;
