import styled from 'styled-components';
import HistoryEntry from './HistoryEntry';

const StyledHistory = styled.div`
	padding: 2rem 2rem 0;
	@media (min-width: 75em) {
		margin-top: 3rem;
		padding: 0 9rem 1rem 8rem;
	}
`;

function History() {
	return (
		<StyledHistory>
			<h2>History main content</h2>
			<HistoryEntry />
		</StyledHistory>
	);
}

export default History;
