import { FormEvent, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startSaveCart, startUpdateCart } from '../../redux/actions/cart';
import { RootState } from '../../redux/store';
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

function SaveCart() {
	const { unsavedCart } = useSelector((state: RootState) => state.cart);

	const dispatch = useDispatch();

	const [cartName, setCartName] = useState(unsavedCart.name);

	const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
		setCartName(currentTarget.value);

	const handleSave = (e: SyntheticEvent) => {
		e.preventDefault();
		if (cartName.length < 3) return;
		const cart = { ...unsavedCart, name: cartName };
		// Crear
		if (!unsavedCart._id) {
			return dispatch(startSaveCart(cart));
		}
		// Actualizar
		dispatch(startUpdateCart(cart));
	};

	return (
		<SaveForm onSubmit={handleSave}>
			<InputContainer>
				<Input type="text" value={cartName} onChange={handleChange} />
				<Button
					disabled={cartName.length < 3}
					size="lg"
					roundedLeft={true}
					type="submit"
					color="primary"
				>
					{unsavedCart._id ? 'Update' : 'Save'}
				</Button>
			</InputContainer>
		</SaveForm>
	);
}

export default SaveCart;
