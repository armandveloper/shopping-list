import styled from 'styled-components';
import { spin } from '../../styles/animations';

interface LoaderProps {
	center?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xlg';
}

const sizes = {
	sm: '1.6rem',
	md: '2.4rem',
	lg: '3.2rem',
	xlg: '4rem',
};

const Loader = styled.div<LoaderProps>`
	border: 0.2rem solid transparent;
	border-top-color: #fff;
	border-radius: 50%;
	height: ${({ size = 'md' }) => sizes[size]};
	margin-right: ${({ center }) => (center ? 'auto' : '0')};
	margin-left: ${({ center }) => (center ? 'auto' : '0')};
	width: ${({ size = 'md' }) => sizes[size]};
	animation: ${spin} 0.6s linear infinite;
`;

export default Loader;
