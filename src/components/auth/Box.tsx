import styled from 'styled-components';

const Box = styled.div`
	border-radius: 1.2rem;
	margin: 0 auto;
	margin-top: 2rem;
	max-width: 40rem;
	padding: 2rem;
	@media (min-width: 37.5em) {
		background-color: var(--color-bg-3);
	}
	@media (min-width: 56.25em) {
		margin-top: 8%;
	}
`;

export default Box;
