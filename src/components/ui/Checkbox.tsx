import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

const StyledCheckbox = styled.label`
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr;
	input {
		display: none;
	}
	.square {
		grid-column: 1;
		grid-row: 1;
		border: 2px solid var(--color-primary);
		border-radius: 0.4rem;
		display: inline-block;
		height: 2.4rem;
		width: 2.4rem;
		transition: background-color 0.3s ease;
	}
	input:checked ~ .square {
		background-color: var(--color-primary);
	}
	.check {
		align-self: center;
		justify-self: center;
		grid-column: 1;
		grid-row: 1;
		opacity: 0;
		transition: opacity 0.3s ease;
	}
	input:checked ~ .check {
		opacity: 1;
	}
`;

function Checkbox() {
	return (
		<StyledCheckbox>
			<input type="checkbox" />
			<span className="square"></span>
			<MdCheck className="check" size={20} color="#fff" />
		</StyledCheckbox>
	);
}

export default Checkbox;
