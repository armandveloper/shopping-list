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

export const cartListHeader = css`
	.header {
		margin-top: 0;
		margin-bottom: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const historyContent = css`
	overflow-y: auto;
	padding: 2rem 2rem 0;
	.headline {
		font-size: 2.6rem;
		margin: 0 0 4rem;
	}
	@media (min-width: 75em) {
		margin-top: 3rem;
		padding: 0 9rem 1rem 8rem;
	}
`;

export const baseItemStyles = css`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	cursor: default;
	padding: 1.2rem 1.6rem;
`;
