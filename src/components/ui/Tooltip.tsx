import styled from 'styled-components';
import NavItem from './NavItem';

const Tooltip = styled.span`
	display: none;
	@media (any-hover: hover) {
		background-color: #fff;
		border-radius: 0.4rem;
		color: #000;
		display: inline-block;
		font-size: 1.2rem;
		font-weight: 500;
		padding: 0.5rem 1.6rem;
		text-align: center;
		position: absolute;
		left: 90%;
		opacity: 0;
		transition: opacity 0.2s ease;
		&::before {
			content: '';
			border: 0.6rem solid transparent;
			border-right-color: #fff;
			position: absolute;
			top: 0.6rem;
			right: 100%;
		}
		${NavItem}:hover & {
			opacity: 1;
		}
	}
`;

export default Tooltip;
