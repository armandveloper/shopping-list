import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import { startSignup } from '../redux/actions/auth';
import Box from '../components/auth/Box';
import Form from '../components/auth/Form';
import Button from '../components/ui/Button';
import Field from '../components/Form/Field';
import Loader from '../components/ui/Loader';

const initialForm = {
	email: '',
	password: '',
};

const UserSchema = Yup.object().shape({
	email: Yup.string()
		.email('A valid email address is required')
		.required('A valid email address is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required'),
});

function SignupPage() {
	const dispatch = useDispatch();

	const { isLoading } = useSelector((state: RootState) => state.ui);

	const formik = useFormik({
		initialValues: initialForm,
		validationSchema: UserSchema,
		onSubmit: (values) => {
			dispatch(startSignup(values));
		},
	});

	return (
		<Box>
			<ToastContainer />
			<h1 className="no-margin">Signup</h1>
			<Form onSubmit={formik.handleSubmit} autoComplete="off">
				<Field>
					<label htmlFor="email">Email address</label>
					<input
						value={formik.values.email}
						onChange={formik.handleChange}
						type="email"
						name="email"
						id="email"
					/>
					{formik.errors.email && formik.touched.email ? (
						<div className="error">{formik.errors.email}</div>
					) : null}
				</Field>
				<Field>
					<label htmlFor="password">Password</label>
					<input
						value={formik.values.password}
						onChange={formik.handleChange}
						type="password"
						name="password"
						id="password"
					/>
					{formik.errors.password && formik.touched.password ? (
						<div className="error">{formik.errors.password}</div>
					) : null}
				</Field>
				<Button
					disabled={isLoading}
					type="submit"
					color="secondary"
					full={true}
				>
					{isLoading ? <Loader size="sm" center={true} /> : 'Signup'}
				</Button>
			</Form>
			<p>
				Already have login and password?{' '}
				<Link to="/account/signin">Sign in</Link>
			</p>
		</Box>
	);
}

export default SignupPage;
