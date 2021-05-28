import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import { startSignin } from '../redux/actions/auth';
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
		.required('Email is required'),
	password: Yup.string().required('Password is required'),
});

function SigninPage() {
	const dispatch = useDispatch();

	const { isLoading } = useSelector((state: RootState) => state.ui);

	const formik = useFormik({
		initialValues: initialForm,
		validationSchema: UserSchema,
		onSubmit: (values) => {
			dispatch(startSignin(values));
		},
	});

	return (
		<Box>
			<ToastContainer />
			<h1 className="no-margin">Signin</h1>
			<Form onSubmit={formik.handleSubmit} autoComplete="off">
				<Field>
					<label htmlFor="email">Email address</label>
					<input
						onChange={formik.handleChange}
						value={formik.values.email}
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
						onChange={formik.handleChange}
						value={formik.values.password}
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
					{isLoading ? <Loader size="sm" center={true} /> : 'Signin'}
				</Button>
			</Form>
			<p>
				Don't have an account yet?{' '}
				<Link to="/account/signup">Register now</Link>
			</p>
		</Box>
	);
}

export default SigninPage;
