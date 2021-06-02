import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdArrowBack, MdEventNote } from 'react-icons/md';
import { ICartItem, IHistory } from '../../interfaces/cart.interface';
import { getEntryDate } from '../../helpers/date';
import { getUniqueCategories } from '../../helpers/categories';
import { historyContent } from '../../styles/mixins';
import SectionList from '../layout/SectionList';
import HistoryItem from './HistoryItem';

interface HistoryViewProps {
	entry: IHistory;
	setView: Dispatch<SetStateAction<IHistory>>;
}

const StyledView = styled.div`
	${historyContent};
	.back {
		color: var(--color-primary);
		cursor: pointer;
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 3rem;
		display: flex;
		align-items: center;
	}
	.icon {
		margin-right: 1rem;
	}
	.timestamp {
		font-size: 1.4rem;
		margin-bottom: 4rem;
		opacity: 0.79;
		display: flex;
		align-items: center;
	}
	.category {
		font-size: 1.8rem;
		font-weight: 500;
		margin: 0 0 1.8rem;
	}
	.section {
		margin-bottom: 4rem;
	}
`;

function HistoryView({ entry, setView }: HistoryViewProps) {
	const categories = getUniqueCategories(
		entry.items.map((item: ICartItem) => item.category)
	);

	return (
		<StyledView>
			<div
				className="back"
				onClick={() => setView(null!)}
				title="Go back"
			>
				<MdArrowBack size={24} color="currentColor" className="icon" />
				back
			</div>
			<h1 className="headline">{entry.name}</h1>
			<div className="timestamp">
				<MdEventNote className="icon" size={24} color="currentColor" />
				{getEntryDate(entry.createdAt)}
			</div>
			{categories.map((cat: string) => (
				<div key={cat} className="section">
					<h2 className="category">{cat}</h2>
					<SectionList>
						{entry.items.map((item: ICartItem) =>
							item.category === cat ? (
								<HistoryItem
									key={item._id}
									name={item.name}
									quantity={item.quantity}
								></HistoryItem>
							) : null
						)}
					</SectionList>
				</div>
			))}
		</StyledView>
	);
}

export default HistoryView;
