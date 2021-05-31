import { css } from 'styled-components';

export const sidebarRightStyles = css`
	grid-column: 2;
	grid-row: 1;
	background-color: var(--color-bg-2);
	height: 100%;
	width: 100%;
	overflow-y: auto;
	transition: transform 0.4s ease;
	@media (max-width: 56.24em) {
		&.show {
			transform: translate3d(-100%, 0, 0);
		}
	}
`;

export const sidebarRightPadding = css`
	padding: 2.5rem 1.4rem 0 2rem;
	@media (min-width: 56.25em) {
		padding: 4.2rem 3.2rem 0 4.8rem;
	}
`;

export const sidebarRightFooter = css`
	background-color: var(--color-bg-3);
	height: 9.4rem;
	margin-top: 2.5rem;
	padding: 1.8rem 1.4rem 1.4rem 2rem;
`;
