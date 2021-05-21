import styled from 'styled-components';
import Dialog, { BaseDialogProps } from './Dialog';
import Button from './Button';

interface ConfirmDialogProps extends BaseDialogProps {
	title: string;
	onConfirm(): void;
}

const Title = styled.h2`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 3rem;
	@media (min-width: 56.25em) {
		font-size: 2.4rem;
	}
`;

const ActionButtons = styled.div`
	text-align: right;
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function ConfirmDialog({
	isOpen,
	title,
	onClose,
	onConfirm,
}: ConfirmDialogProps) {
	return (
		<Dialog isOpen={isOpen} onClose={onClose}>
			<Title>{title}</Title>
			<ActionButtons>
				<Button size="lg" onClick={onClose}>
					cancel
				</Button>
				<Button size="lg" color="danger" onClick={onConfirm}>
					Yes
				</Button>
			</ActionButtons>
		</Dialog>
	);
}

export default ConfirmDialog;
