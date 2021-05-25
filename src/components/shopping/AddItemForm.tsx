import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { hideAddItem } from '../../redux/actions/ui';
import Button from '../ui/Button';
import Field from '../Form/Field';
import Select from '../ui/Select';

const Form = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Actions = styled.div`
	padding: 1rem 0;
	text-align: center;
	@media (min-width: 37.5em) {
		text-align: right;
	}
	@media (min-width: 56.25em) {
		text-align: center;

		padding: 3rem 0;
	}
	${Button}:first-child {
		margin-right: 2rem;
	}
`;

function AddItemForm() {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(hideAddItem());
	};

	return (
		<Form autoComplete="off">
			<div>
				<Field>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter a name"
					/>
				</Field>
				<Field>
					<label htmlFor="note">Note (optional)</label>
					<textarea
						id="note"
						name="note"
						placeholder="Enter a note"
					/>
				</Field>
				<Field>
					<label htmlFor="image">Image</label>
					<input
						type="text"
						id="image"
						name="image"
						placeholder="Enter a url"
					/>
				</Field>
				<Field>
					<label htmlFor="category">Category</label>
					<Select />
				</Field>
			</div>
			<Actions>
				<Button onClick={handleCancel} size="lg">
					cancel
				</Button>
				<Button size="lg" type="submit" color="primary">
					Save
				</Button>
			</Actions>
		</Form>
	);
}

export default AddItemForm;
