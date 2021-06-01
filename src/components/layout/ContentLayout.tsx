import styled from 'styled-components';

const ContentLayout = styled.main`
	height: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: 100% 100%;
	@media (min-width: 56.25em) {
		grid-template-columns: 1fr 39rem;
	}
`;

export default ContentLayout;
