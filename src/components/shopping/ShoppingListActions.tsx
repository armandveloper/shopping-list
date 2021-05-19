import styled from 'styled-components';
import { sidebarRightFooter } from '../../styles/mixins';
import Button from '../ui/Button';

const StyledShoppingListActions = styled.div`
	${sidebarRightFooter};
	text-align: center;
	@media (min-width: 37.5em) {
		text-align: right;
	}
	@media (min-width: 56.25em) {
		text-align: center;
	}
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function ShoppingListActions() {
	return (
		<StyledShoppingListActions>
			<Button type="button">cancel</Button>
			<Button type="button" color="secondary">
				Complete
			</Button>
		</StyledShoppingListActions>
	);
}

export default ShoppingListActions;
