import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { startGetHistory } from '../../redux/actions/cart';
import { getEntryMonth, getHistoryMonths } from '../../helpers/date';
import HistoryEntry from './HistoryEntry';
import Button from '../ui/Button';
import Loader from '../ui/Loader';

const StyledHistory = styled.div`
	overflow-y: auto;
	padding: 2rem 2rem 0;
	.headline {
		font-size: 2.6rem;
		margin: 0 0 4rem;
	}
	.month-date {
		font-size: 1.6rem;
		font-weight: 500;
		margin: 0 0 1.8rem;
		opacity: 0.79;
	}
	@media (min-width: 75em) {
		margin-top: 3rem;
		padding: 0 9rem 1rem 8rem;
	}
`;

function History() {
	const dispatch = useDispatch();

	const { history } = useSelector((state: RootState) => state.cart);
	const ui = useSelector((state: RootState) => state.ui);
	const offsetRef = useRef<number>(0);

	const historyMonths = getHistoryMonths(
		history.history.map((entry: any) => entry.createdAt)
	);

	const loadHistory = () => {
		offsetRef.current += 5;
		dispatch(startGetHistory(offsetRef.current));
	};

	return (
		<StyledHistory>
			<h2 className="headline">Shopping history</h2>
			{history.isLoading ? (
				<Loader center={true} size="lg" />
			) : (
				historyMonths.map((item: any) => (
					<>
						<h3 key={item} className="month-date">
							{item}
						</h3>
						{history.history.map((entry: any) =>
							getEntryMonth(entry.createdAt) === item ? (
								<HistoryEntry key={entry._id} entry={entry} />
							) : null
						)}
					</>
				))
			)}

			{history.total > history.history.length && (
				<Button
					color="secondary"
					disabled={ui.isLoading}
					onClick={loadHistory}
				>
					{ui.isLoading ? (
						<Loader size="sm" center={true} />
					) : (
						'View more'
					)}
				</Button>
			)}
		</StyledHistory>
	);
}

export default History;
