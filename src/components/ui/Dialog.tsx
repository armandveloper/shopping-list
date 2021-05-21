import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { slideInUp, slideOutUp } from '../../styles/animations';

export interface BaseDialogProps {
	isOpen: boolean;
	children?: ReactNode;
	onClose(): void;
}

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: flex-start;
`;

const DialogContent = styled.div<{ show: boolean }>`
	background-color: var(--color-bg-3);
	border-radius: 2.4rem;
	margin: 2rem;
	max-width: 50rem;
	overflow-y: auto;
	padding: 2.5rem;
	position: relative;
	width: 100%;
	animation: ${({ show }) => (show ? slideInUp : slideOutUp)} 0.3s ease-in;
	@media (orientation: landscape), (min-width: 37.5em) {
		margin-right: auto;
		margin-left: auto;
	}
`;

const CloseButton = styled.button.attrs(() => ({
	type: 'button',
	title: 'Close',
}))`
	background: none;
	border: none;
	cursor: pointer;
	color: #fff;
	margin: 0;
	opacity: 0.79;
	padding: 0;
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

function Dialog({ isOpen, onClose, children }: BaseDialogProps) {
	const [shouldRender, setRender] = useState(isOpen);

	useEffect(() => {
		if (isOpen) setRender(true);
	}, [isOpen]);

	const handleAnimationEnd = () => {
		if (!isOpen) setRender(false);
	};

	const content = shouldRender ? (
		<Overlay onClick={onClose}>
			<DialogContent
				onAnimationEnd={handleAnimationEnd}
				onClick={(e: MouseEvent) => e.stopPropagation()}
				show={isOpen}
			>
				<CloseButton onClick={onClose}>
					<MdClose size={24} color="currentColor" />
				</CloseButton>
				{children}
			</DialogContent>
		</Overlay>
	) : null;

	return ReactDOM.createPortal(
		content,
		document.getElementById('modal-root') as HTMLElement
	);
}

export default Dialog;
