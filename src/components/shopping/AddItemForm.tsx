import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import { GroupTypeBase, OptionsType, OptionTypeBase } from 'react-select';
import { hideAddItem } from '../../redux/actions/ui';
import Button from '../ui/Button';
import MySelect from '../ui/Select';

const Form = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Field = styled.div`
	margin-bottom: 3rem;
	label {
		display: inline-block;
		font-size: 1.4rem;
		margin-bottom: 0.8rem;
	}
	input,
	textarea {
		background: none;
		border: 1px solid #bdbdbd;
		border-radius: 1.2rem;
		color: #fff;
		display: block;
		font-family: inherit;
		font-size: 1.6rem;
		padding: 2rem 1.8rem;
		width: 100%;
		transition: 0.3s ease;
	}
	input:focus,
	textarea:focus {
		border-color: var(--color-primary);
		outline: none;
	}
	textarea {
		height: 11rem;
		resize: none;
	}
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

interface SelectState extends GroupTypeBase<OptionTypeBase> {
	isLoading: boolean;
}

const createOption = (label: string) => ({
	label,
	value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions: OptionsType<OptionTypeBase> = [
	createOption('One'),
	createOption('Two'),
	createOption('Three'),
];

function AddItemForm() {
	const [state, setState] = useState<SelectState>({
		isLoading: false,
		options: defaultOptions,
		value: undefined,
	});

	const [selectInputText, setSelectInputText] = useState('');

	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(hideAddItem());
	};

	const handleChange = (newValue: any, actionMeta: any) => {
		console.group('Value Changed');
		console.log(newValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
		setState({ ...state, value: newValue });
	};

	const handleCreate = (inputValue: any) => {
		setState({ ...state, isLoading: true });
		console.group('Option created');
		console.log('Wait a moment...');
		setTimeout(() => {
			const { options } = state;
			const newOption = createOption(inputValue);
			console.log(newOption);
			console.groupEnd();
			setState({
				isLoading: false,
				options: [...options, newOption],
				value: newOption,
			});
		}, 1000);
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
					<CreatableSelect
						isClearable
						isDisabled={state.isLoading}
						isLoading={state.isLoading}
						onCreateOption={handleCreate}
						options={state.options}
						onChange={handleChange}
						value={state.value}
						onInputChange={(inputValue: any, actionMeta: any) => {
							console.group('Input Changed');
							console.log(inputValue);
							console.log(`action: ${actionMeta.action}`);
							console.groupEnd();
							setSelectInputText(inputValue);
						}}
						name="selectText"
						inputValue={selectInputText}
					/>
					<MySelect />
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
