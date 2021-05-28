import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { hideAddItem } from '../../redux/actions/ui';
import {
	createItem,
	hideItem,
	startUpdateItem,
} from '../../redux/actions/shopping';
import Button from '../ui/Button';
import Field from '../Form/Field';
import Select from '../ui/Select';
import Loader from '../ui/Loader';

interface AddItemFormProps {
	item: any | null;
}

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

const initialForm = {
	name: '',
	note: '',
	image: '',
	category: '',
};

const ItemSchema = Yup.object().shape({
	name: Yup.string().required('The item name is required'),
	note: Yup.string(),
	image: Yup.string().url('A valid image url is required'),
	category: Yup.string().required('The item category is required'),
	user: Yup.string().required('The user id is required'),
});

function AddItemForm({ item }: AddItemFormProps) {
	const { isLoading } = useSelector((state: RootState) => state.ui);

	const { uid } = useSelector((state: RootState) => state.auth);

	const { categories } = useSelector((state: RootState) => state.shopping);

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: item || { ...initialForm, user: uid },
		validationSchema: ItemSchema,
		onSubmit: (values) => {
			// Crear el item
			if (!item) {
				dispatch(
					createItem(values, () => {
						formik.resetForm();
					})
				);
				return;
			}
			// Actualizar el item
			dispatch(
				startUpdateItem(values, () => {
					handleCancel();
				})
			);
		},
	});

	const handleSelectChange = (value: string) => {
		formik.setFieldValue('category', value);
	};

	const handleCancel = () => {
		dispatch(hideItem());
		dispatch(hideAddItem());
	};

	return (
		<Form autoComplete="off" onSubmit={formik.handleSubmit}>
			<div>
				<Field>
					<label htmlFor="name">Name</label>
					<input
						onChange={formik.handleChange}
						value={formik.values.name}
						type="text"
						id="name"
						name="name"
						placeholder="Enter a name"
					/>
					{formik.errors.name && formik.touched.name ? (
						<div className="error">{formik.errors.name}</div>
					) : null}
				</Field>
				<Field>
					<label htmlFor="note">Note (optional)</label>
					<textarea
						onChange={formik.handleChange}
						value={formik.values.note}
						id="note"
						name="note"
						placeholder="Enter a note"
					/>
				</Field>
				<Field>
					<label htmlFor="image">Image</label>
					<input
						onChange={formik.handleChange}
						value={formik.values.image}
						type="text"
						id="image"
						name="image"
						placeholder="Enter an image url"
					/>
					{formik.errors.image && formik.touched.image ? (
						<div className="error">{formik.errors.image}</div>
					) : null}
				</Field>
				<Field>
					<label htmlFor="category">Category</label>
					<Select
						value={formik.values.category}
						options={categories.map(
							(category: any) => category.category
						)}
						onChange={handleSelectChange}
					/>
					{formik.errors.category && formik.touched.category ? (
						<div className="error">{formik.errors.category}</div>
					) : null}
				</Field>
			</div>
			<Actions>
				<Button onClick={handleCancel} size="lg">
					cancel
				</Button>
				<Button
					disabled={isLoading}
					size="lg"
					type="submit"
					color="primary"
				>
					{isLoading ? <Loader size="sm" center={true} /> : 'Save'}
				</Button>
			</Actions>
		</Form>
	);
}

export default AddItemForm;
