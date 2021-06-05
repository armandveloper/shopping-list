import styled from 'styled-components';
import Search from '../ui/Search';

const StyledHeader = styled.header`
	display: none;
	@media (min-width: 75em) {
		padding: 3rem 9rem 0rem 8rem;
		display: flex;
		align-items: start;
		justify-content: space-between;
	}
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 500;
	margin: 0;
	@media (min-width: 87.5em) {
		font-size: 2.6rem;
	}
	.hightlight {
		color: var(--color-primary);
		font-weight: 700;
	}
`;

function Header() {
	return (
		<StyledHeader>
			<Title>
				<span className="hightlight">Shoppingify</span> allows you to
				take your shopping list wherever you go
			</Title>
			<Search />
		</StyledHeader>
	);
}

export default Header;
