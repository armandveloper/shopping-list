import { Fragment, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { IHistory } from '../../interfaces/cart.interface';
import { startGetHistory } from '../../redux/actions/cart';
import { getEntryMonth, getHistoryMonths } from '../../helpers/date';
import { historyContent } from '../../styles/mixins';
import HistoryEntry from './HistoryEntry';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import HistoryView from './HistoryView';

const StyledHistory = styled.div`
	${historyContent};
	.month-date {
		font-size: 1.6rem;
		font-weight: 500;
		margin: 0 0 1.8rem;
		opacity: 0.79;
	}
`;

function History() {
	const [detailsView, setView] = useState<IHistory>(null!);

	const dispatch = useDispatch();

	const { history } = useSelector((state: RootState) => state.cart);
	const ui = useSelector((state: RootState) => state.ui);
	const offsetRef = useRef<number>(0);

	const historyMonths = getHistoryMonths(
		history.history.map((entry: IHistory) => entry.createdAt)
	);

	const loadHistory = () => {
		offsetRef.current += 5;
		dispatch(startGetHistory(offsetRef.current));
	};

	if (detailsView)
		return <HistoryView entry={detailsView} setView={setView} />;

	return (
		<StyledHistory>
			<h2 className="headline">Shopping history</h2>
			{history.isLoading ? (
				<Loader center={true} size="lg" />
			) : (
				historyMonths.map((item: string) => (
					<Fragment key={item}>
						<h3 className="month-date">{item}</h3>
						{history.history.map(
							(entry: IHistory) =>
								getEntryMonth(entry.createdAt) === item && (
									<HistoryEntry
										key={entry._id}
										entry={entry}
										setView={setView}
									/>
								)
						)}
					</Fragment>
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
			{!history.isLoading && history.total === 0 && (
				<h3>History is empty</h3>
			)}
		</StyledHistory>
	);
}

export default History;
