import styled from 'styled-components';

interface ButtonProps {
	color?: 'primary' | 'secondary' | 'black';
	size?: 'lg';
	roundedLeft?: boolean;
}

const colors = {
	primary: 'var(--color-primary)',
	secondary: 'var(--color-secondary)',
	black: 'var(--color-bg)',
};

const Button = styled.button.attrs((props) => ({
	type: props.type || 'button',
}))<ButtonProps>`
	background-color: ${({ color }) => (color ? colors[color] : 'transparent')};
	border: none;
	border-radius: ${({ roundedLeft }) =>
		roundedLeft ? '1.2rem 0 0 1.2rem' : '1.2rem'};
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