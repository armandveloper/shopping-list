import styled from 'styled-components';

const SectionList = styled.ul`
	display: grid;
	gap: 2.4rem 0.8rem;
	@media (min-width: 36em) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 75em) {
		grid-template-columns: repeat(4, 1fr);
		gap: 4rem 2rem;
	}
`;

export default SectionList;
