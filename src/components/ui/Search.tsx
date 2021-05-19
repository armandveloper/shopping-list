import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const StyledSearch = styled.form`
	flex-basis: 27.5rem;
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	height: 5rem;
	margin-left: 5.6rem;
	display: grid;
	grid-template-columns: 2rem 2rem 1fr;
	align-items: center;
`;

const SearchButton = styled.button`
	grid-column: 2;
	grid-row: 1;
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
	margin: 0;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const Input = styled.input`
	grid-column: 1 / -1;
	grid-row: 1;
	background: none;
	border: 1px solid transparent;
	border-radius: 1.2rem;
	color: #fff;
	font-family: inherit;
	font-size: 1.6rem;
	height: 100%;
	padding-left: 5rem;
	padding-right: 1rem;
	transition: border-color 0.25s ease;
	&:focus {
		outline: none;
		border-color: var(--color-primary);
	}
	&::placeholder {
		color: inherit;
	}
`;

function Search() {
	return (
		<StyledSearch>
			<SearchButton type="submit" title="Search">
				<MdSearch size={20} color="currentCOlor" />
			</SearchButton>
			<Input
				type="text"
				placeholder="search item"
				aria-label="Search Item"
			/>
		</StyledSearch>
	);
}

export default Search;
