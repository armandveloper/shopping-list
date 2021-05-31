import { FormEvent, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { sidebarRightFooter } from '../../styles/mixins';
import Button from '../ui/Button';

interface SaveCartProps {
	name: string;
}

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

function SaveCart({ name }: SaveCartProps) {
	const [cartName, setCartName] = useState(name);

	const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
		setCartName(currentTarget.value);

	const handleSave = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<SaveForm onSubmit={handleSave}>
			<InputContainer>
				<Input type="text" value={cartName} onChange={handleChange} />
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

export default SaveCart;
