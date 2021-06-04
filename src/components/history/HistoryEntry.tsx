import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdChevronRight, MdEventNote } from 'react-icons/md';
import { IHistory } from '../../interfaces/cart.interface';
import { getEntryDate } from '../../helpers/date';

interface HistoryEntryProps {
	entry: IHistory;
	setView: Dispatch<SetStateAction<IHistory>>;
}

const StyledHistoryEntry = styled.div`
	background-color: var(--color-bg-3);
	border-radius: 1.2rem;
	padding: 2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.8rem;
	p {
		margin: 0;
		flex: 1;
		text-align: center;
	}
	@media (min-width: 37.5em) {
		flex-wrap: nowrap;
		p {
			text-align: left;
		}
	}
	@media (min-width: 56.25em) {
		flex-wrap: wrap;
		p {
			text-align: center;
		}
	}
	@media (min-width: 75em) {
		flex-wrap: nowrap;
		p {
			text-align: left;
		}
	}
`;

const Details = styled.div`
	flex-basis: 100%;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem 0;
	align-items: center;
	justify-content: space-between;
	.timestamp {
		font-size: 1.4rem;
		opacity: 0.79;
		margin-left: auto;
	}
	.chip {
		border: 1px solid currentColor;
		border-radius: 0.8rem;
		font-size: 1.2rem;
		padding: 0.6rem;
		text-align: center;
	}
	.chip.completed {
		color: var(--color-secondary-alt);
	}
	.chip.cancelled {
		color: var(--color-danger-alt);
	}
	.icon:last-of-type {
		margin-left: auto;
	}
	@media (min-width: 37.5em) {
		flex-basis: unset;
		grid-template-columns: repeat(4, auto);
		margin-top: 0;
		.timestamp {
			margin: 0 2.6rem 0 1.2rem;
		}
		.chip {
			margin-right: 3rem;
		}
	}
	@media (min-width: 56.25em) {
		flex-basis: 100%;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 2rem;
		.timestamp {
			margin: 0;
			margin-left: auto;
		}
		.chip {
			margin-right: 0;
		}
	}
	@media (min-width: 75em) {
		flex-basis: unset;
		grid-template-columns: repeat(4, auto);
		margin-top: 0;
		.timestamp {
			margin: 0 2.6rem 0 1.2rem;
		}
		.chip {
			margin-right: 3rem;
		}
	}
`;

function HistoryEntry({ entry, setView }: HistoryEntryProps) {
	return (
		<StyledHistoryEntry>
			<p>{entry.name}</p>
			<Details>
				<MdEventNote
					className="icon"
					size={20}
					color="rgba(255, 255, 255, 0.79)"
				/>
				<span className="timestamp">
					{getEntryDate(entry.createdAt)}
				</span>
				<span
					className={`chip ${
						entry.completed ? 'completed' : 'cancelled'
					}`}
				>
					{entry.completed ? 'completed' : 'cancelled'}
				</span>
				<MdChevronRight
					size={30}
					className="icon"
					cursor="pointer"
					color="var(--color-primary)"
					title="View Details"
					onClick={() => setView(entry)}
				/>
			</Details>
		</StyledHistoryEntry>
	);
}

export default HistoryEntry;
