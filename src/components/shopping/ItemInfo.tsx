import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';
import { hideItemInfo } from '../../redux/actions/ui';
import {
	slideInRight,
	slideOutRight,
	showAddItemAnimation,
	hideAddItemAnimation,
} from '../../styles/animations';
import { sidebarRightPadding, sidebarRightStyles } from '../../styles/mixins';
import Button from '../ui/Button';

interface Props {
	show: boolean;
}

const StyledItemInfo = styled.div<Props>`
	${sidebarRightStyles};
	${sidebarRightPadding};
	animation: ${({ show }) =>
			show ? showAddItemAnimation : hideAddItemAnimation}
		0.4s ease forwards;
	@media (min-width: 56.25em) {
		padding-top: 3.4rem;
		animation: ${({ show }) => (show ? slideInRight : slideOutRight)} 0.4s
			ease forwards;
	}
`;

const BackButton = styled.button`
	border: none;
	background: none;
	color: var(--color-primary);
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	font-weight: 700;
	margin: 0;
	margin-bottom: 3rem;
	padding: 0;
	display: inline-flex;
	align-items: center;
	svg {
		margin-right: 1rem;
	}
`;

const Image = styled.img`
	border-radius: 2.5rem;
	display: block;
	height: auto;
	margin-bottom: 2.5rem;
	max-width: 100%;
`;

const Legend = styled.h4`
	font-size: 1.5rem;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 1.15rem;
	opacity: 0.79;
`;

const Text = styled.p`
	font-size: 1.8rem;
	margin-top: 0;
	margin-bottom: 2.5rem;
`;

const Actions = styled.div`
	padding: 1rem 0;
	text-align: center;
	@media (min-width: 37.5em) {
		text-align: right;
	}
	@media (min-width: 56.25em) {
		text-align: center;
		padding: 3rem 0;
	}
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function ItemInfo({ show }: Props) {
	const [shouldRender, setRender] = useState(show);
	const dispatch = useDispatch();

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const goBack = () => {
		dispatch(hideItemInfo());
	};

	if (!shouldRender) return null;

	return (
		<StyledItemInfo onAnimationEnd={handleAnimationEnd} show={show}>
			<BackButton type="button" onClick={goBack}>
				<MdArrowBack size={24} color="currentColor" />
				back
			</BackButton>
			<Image src="https://www.gardentech.com/-/media/Images/GardenTech-NA/US/blog/How-to-Grow-Your-Own-Tasty-Strawberries/Strawberries-Header-OG.jpg" />
			<Legend>name</Legend>
			<Text>Avocado</Text>
			<Legend>category</Legend>
			<Text>Fruit and vegetables</Text>
			<Legend>note</Legend>
			<Text>
				Nutrient-dense foods are those that provides substantial amounts
				of vitamins, minerals and other nutrients with relatively few
				calories. One.third of a medium avocado (50g) has 80 calories
				and contributes nearly 20 vitamins and minerals, making it a
				great nutrient-dense food choice.
			</Text>
			<Actions>
				<Button size="lg" type="button">
					delete
				</Button>
				<Button size="lg" type="button" color="primary">
					Add to list
				</Button>
			</Actions>
		</StyledItemInfo>
	);
}

export default ItemInfo;
