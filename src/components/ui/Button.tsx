import styled from 'styled-components';

interface ButtonProps {
	color?: 'primary' | 'black';
	size?: 'lg';
}

const colors = {
	primary: 'var(--color-primary)',
	black: 'var(--color-bg)',
};

const Button = styled.button.attrs((props) => ({
	type: props.type || 'button',
}))<ButtonProps>`
	background-color: ${({ color }) => (color ? colors[color] : 'transparent')};
	border: none;
	border-radius: 1.2rem;
	box-shadow: 0px 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
	color: #fff;
	cursor: pointer;
	font-family: inherit;
	font-size: ${({ size }) => (size === 'lg' ? '1.6rem' : '1.4rem')};
	font-weight: 700;
	padding: 1.1rem 2rem;
	text-align: center;
`;

export default Button;
