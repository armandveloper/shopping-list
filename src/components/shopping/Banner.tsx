import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../ui/Button';
import bottle from '../../assets/img/source.svg';
import { showAddItem } from '../../redux/actions/ui';

const StyledBanner = styled.div`
	background: #80485b url(${bottle}) left top -0.5rem / contain no-repeat;
	border-radius: 2.4rem;
	padding: 1.8rem 2.8rem;
	display: grid;
	grid-template-columns: 5rem 1fr;
	gap: 2rem;
	> div {
		grid-column: 2;
	}
	p {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 0 0 1.2rem;
	}
`;

function Banner() {
	const dispatch = useDispatch();

	const handleAddItem = () => {
		dispatch(showAddItem());
	};

	return (
		<StyledBanner>
			<div>
				<p>Didn't find what you need?</p>
				<Button onClick={handleAddItem} color="black">
					Add Item
				</Button>
			</div>
		</StyledBanner>
	);
}

export default Banner;
