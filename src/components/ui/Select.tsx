import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupTypeBase, OptionTypeBase, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { createCategory } from '../../redux/actions/shopping';
import { RootState } from '../../redux/store';

interface SelectProps {
	value: string;
	options: string[];
	onChange(value: string): void;
}

interface SelectState extends GroupTypeBase<OptionTypeBase> {
	isLoading: boolean;
}

const createOption = (label: string) => ({
	label,
	value: label.toLowerCase().replace(/\W/g, ''),
});

function Select({ value, options, onChange }: SelectProps) {
	const dispatch = useDispatch();

	const { uid } = useSelector((state: RootState) => state.auth);

	const [state, setState] = useState<SelectState>({
		isLoading: false,
		options: options.map((opt) => createOption(opt)),
		value: !value ? null : createOption(value),
	});

	// Limpia el valor del select una vez se haya creado el item
	useEffect(() => {
		if (!value && state.value) {
			setState((state) => ({ ...state, value: null }));
		}
	}, [value, state.value]);

	const handleChange = (newValue: any, actionMeta: any) => {
		console.group('Value Changed');
		console.log(newValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
		onChange(newValue?.label || '');
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
			isClearable={true}
			isDisabled={state.isLoading}
			isLoading={state.isLoading}
			onCreateOption={handleCreate}
			onChange={handleChange}
			options={state.options}
			value={state.value}
			styles={selectStyle}
		/>
	);
}

export default Select;
