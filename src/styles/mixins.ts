import { css } from 'styled-components';

export const sidebarRightStyles = css`
	grid-column: 2;
	grid-row: 1;
	background-color: var(--color-bg-2);
	height: 100%;
	padding: 2.5rem 1.4rem 0 2rem;
	width: 100%;
	overflow-y: auto;
	@media (min-width: 56.25em) {
		padding: 4.2rem 3.2rem 0 4.8rem;
	}
	@media (max-width: 56.25em) {
		&.show {
			grid-column: 1;
		}
	}
`;
