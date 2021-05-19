import styled from 'styled-components';
import { sidebarRightFooter } from '../../styles/mixins';
import Button from '../ui/Button';

const SaveForm = styled.form`
	${sidebarRightFooter};
`;

const InputContainer = styled.div`
	border: 2px solid var(--color-primary);
	border-radius: 1.2rem;
	height: 6rem;
	overflow: hidden;
	display: grid;
	grid-template-columns: 1fr 9rem;
`;

const Input = styled.input`
	background: none;
	border: none;
	color: #fff;
	font-family: inherit;
	font-size: 1.6rem;
	padding: 1rem;
	width: 100%;
	&:focus {
		outline: none;
	}
`;

function SaveShoppingList() {
	return (
		<SaveForm>
			<InputContainer>
				<Input type="text" />
				<Button
					size="lg"
					roundedLeft={true}
					type="submit"
					color="primary"
				>
					Save
				</Button>
			</InputContainer>
		</SaveForm>
	);
}

export default SaveShoppingList;
