import styled from 'styled-components';
import shopping from '../../assets/img/shopping.svg';

const StyledCartNoItems = styled.div`
	flex: 1;
	padding-top: 4rem;
	display: flex;
	justify-content: center;
	background: url(${shopping}) center bottom 4rem / 24.5rem 20rem
		Cartno-repeat;
	@media (min-width: 56.25em) {
		padding-top: 0;
		align-items: center;
	}
	p {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		@media (min-width: 56.25em) {
			margin-top: -22rem;
		}
	}
`;

function CartNoItems() {
	return (
		<StyledCartNoItems>
			<p>No items</p>
		</StyledCartNoItems>
	);
}

export default CartNoItems;
