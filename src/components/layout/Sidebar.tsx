import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import Nav from '../ui/Nav';
import logo from '../../assets/img/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebarRight } from '../../redux/actions/ui';
import { RootState } from '../../redux/store';

const StyledSidebar = styled.aside`
	background-color: var(--color-bg-2);
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
	.badge {
		background-color: var(--color-danger);
		border-radius: 0.4rem;
		color: #fff;
		font-size: 1.2rem;
		padding: 0.25rem 0.65rem;
		text-align: center;
		position: absolute;
		top: -0.5rem;
		right: -0.5rem;
	}
`;

function Sidebar() {
	const dispatch = useDispatch();

	const { cart } = useSelector((state: RootState) => state.cart);

	const handleToggleSidebar = () => {
		dispatch(toggleSidebarRight());
	};

	return (
		<StyledSidebar>
			<Link to="/" aria-label="Go Home">
				<Logo src={logo} width="40" height="40" />
			</Link>
			<Nav />
			<CartButton onClick={handleToggleSidebar}>
				<MdShoppingCart size={20} color="#fff" />
				{cart.items.length > 0 && (
					<span className="badge">{cart.items.length}</span>
				)}
			</CartButton>
		</StyledSidebar>
	);
}

export default Sidebar;
