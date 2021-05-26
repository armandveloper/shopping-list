import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupTypeBase, OptionTypeBase, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { createCategory } from '../../redux/actions/shopping';
import { RootState } from '../../redux/store';

// Event

// interface SelectProps {
//   onChange(e: ChangeEvent): void;
//   value: string;
// }

interface SelectState extends GroupTypeBase<OptionTypeBase> {
	isLoading: boolean;
}

const createOption = (label: string) => ({
	label,
	value: label.toLowerCase().replace(/\W/g, ''),
});

function Select() {
	const dispatch = useDispatch();

	const { uid } = useSelector((state: RootState) => state.auth);

	const { categories } = useSelector((state: RootState) => state.shopping);

	const [state, setState] = useState<SelectState>({
		isLoading: false,
		options: categories.map((category: any) =>
			createOption(category.category)
		),
		value: undefined,
	});

	const [selectInputText, setSelectInputText] = useState('');

	const handleChange = (newValue: any, actionMeta: any) => {
		console.group('Value Changed');
		console.log(newValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
		setState({ ...state, value: newValue });
	};

	const handleCreate = (inputValue: any) => {
		setState({ ...state, isLoading: true });
		const newOption = createOption(inputValue);
		dispatch(
			createCategory(
				{
					category: newOption.label,
					lowercase: newOption.value,
					user: uid,
				},
				() => {
					setState({
						isLoading: false,
						options: [...state.options, newOption],
						value: newOption,
					});
				}
			)
		);
	};

	type IsMulti = false;

	const selectStyle: StylesConfig<
		OptionTypeBase,
		IsMulti,
		GroupTypeBase<OptionTypeBase>
	> = {
		control: (provided, state) => {
			const { isFocused } = state;

			return {
				...provided,
				background: 'none',
				border: `1px solid ${
					isFocused ? 'var(--color-primary)' : '#bdbdbd'
				}`,
				borderRadius: '1.2rem',
				boxShadow: 'none',
				color: '#fff',
				padding: '1rem',
				transition: 'border-color 0.3s ease',
				'&:hover': {
					borderColor: `${isFocused && 'var(--color-primary)'}`,
				},
			};
		},
		input: (provided) => ({
			...provided,
			color: '#fff',
			fontFamily: 'inherit',
			fontSize: '1.6rem',
		}),
		singleValue: (provided) => ({
			...provided,
			color: '#fff',
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: 'var(--color-bg-3)',
			borderRadius: '1.2rem',
		}),
		option: (provided, state) => {
			const { isSelected } = state;
			return {
				...provided,
				backgroundColor: `${isSelected && 'var(--color-bg-2)'}`,
				':active': {
					backgroundColor: 'var(--color-bg-2)',
				},
				'&:hover': {
					backgroundColor: 'var(--color-bg-2)',
				},
			};
		},
	};

	return (
		<CreatableSelect
			id="category"
			name="selectText"
			className="basic-single"
			classNamePrefix="select"
			isClearable={true}
			isDisabled={state.isLoading}
			isLoading={state.isLoading}
			onCreateOption={handleCreate}
			onChange={handleChange}
			options={state.options}
			value={state.value}
			styles={selectStyle}

			// defaultValue={state.options[0]}
			// onInputChange={(inputValue: any, actionMeta: any) => {
			// 	console.group('Input Changed');
			// 	console.log(inputValue);
			// 	console.log(`action: ${actionMeta.action}`);
			// 	console.groupEnd();
			// 	setSelectInputText(inputValue);
			// }}
			// inputValue={selectInputText}
		/>
	);
}

export default Select;
