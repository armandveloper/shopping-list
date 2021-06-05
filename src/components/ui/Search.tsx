import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { searchItems } from '../../redux/actions/shopping';

const StyledSearch = styled.form`
	flex: 0 0 18rem;
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	height: 5rem;
	margin-left: 5.6rem;
	display: grid;
	grid-template-columns: 2rem 2rem 1fr;
	align-items: center;
	@media (min-width: 87.5em) {
		flex-basis: 27.5rem;
	}
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
	const [term, setTerm] = useState('');

	const dispatch = useDispatch();

	const handleSearch = (e: SyntheticEvent) => {
		e.preventDefault();
		if (!term) return;
		dispatch(searchItems(term));
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(searchItems(term));
		}, 500);

		return () => clearTimeout(timeout);
	}, [term, dispatch]);

	return (
		<StyledSearch onSubmit={handleSearch}>
			<SearchButton type="submit" title="Search">
				<MdSearch size={20} color="currentCOlor" />
			</SearchButton>
			<Input
				type="text"
				placeholder="search item"
				aria-label="Search Item"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
		</StyledSearch>
	);
}

export default Search;
