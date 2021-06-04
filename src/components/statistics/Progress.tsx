import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { progressAnimation } from '../../styles/animations';

interface ProgressProps {
	progress: number;
	color: 'primary' | 'secondary' | 'danger' | 'black';
}

const Progress = styled.div<ProgressProps>`
	background-color: #e0e0e0;
	border-radius: 0.4rem;
	height: 0.6rem;
	width: 100%;
	&::after {
		content: '';
		background-color: ${({ color }) => colors[color]};
		border-radius: 0.4rem;
		display: block;
		height: 100%;
		width: ${({ progress }) => `${progress}%`};
		animation: ${progressAnimation} 0.15s ease;
	}
`;

export default Progress;
