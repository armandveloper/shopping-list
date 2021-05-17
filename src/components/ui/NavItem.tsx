import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
	flex: 1;
	color: #fff;
	text-align: center;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	&::before {
		content: '';
		background-color: transparent;
		border-radius: 0 0.4rem 0.4rem 0;
		height: 4.6rem;
		width: 0.6rem;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(25%);
		transition: background-color 0.3s ease;
	}
	&.current::before,
	&:hover::before {
		background-color: var(--color-primary);
	}
`;

export default NavItem;
