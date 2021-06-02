import styled from 'styled-components';

const Field = styled.div`
	margin-bottom: 3rem;
	label {
		display: inline-block;
		font-size: 1.4rem;
		margin-bottom: 0.8rem;
	}
	input,
	textarea {
		background: none;
		border: 1px solid #bdbdbd;
		border-radius: 1.2rem;
		color: #fff;
		display: block;
		font-family: inherit;
		font-size: 1.6rem;
		padding: 2rem 1.8rem;
		width: 100%;
		transition: border-color 0.3s ease;
	}
	input:focus,
	textarea:focus {
		border-color: var(--color-primary);
		outline: none;
	}
	textarea {
		height: 11rem;
		resize: none;
	}
	.error {
		color: var(--color-danger-alt);
		margin-top: 1rem;
		margin-bottom: 0;
	}
`;

export default Field;
