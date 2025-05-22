import React, {useActionState, useRef, useEffect} from 'react';
import styles from './style.module.scss' 
import reactImage  from '../assets/react.svg';
import submitForm from './actionState.jsx';

export const RegisterForm = () => {
	const [state, formAction, isPending] = useActionState(submitForm, {
		success: null,
		message: "",
	});
	const focusRef = useRef(null);
	useEffect(() => {
		focusRef.current.focus();
	}, []);

	if (state.success === true) {
		return <p className={styles.success_login}>Login was successful!</p>;
	}
	
   return (
			<main className={styles.main}>
				<h1 className={styles.title}>Login form</h1>
				<div className={styles.container}>
					<img
						src={reactImage}
						alt="Logo"
					/>
					<form
						action={formAction}
						method="post"
						className={styles.form}
					>
						<input
							ref={focusRef}
							className={styles.name}
							name="name"
							placeholder="Enter your name"
							type="text"
							title="Please enter a valid name"
						/>
						<input
							className={styles.email}
							name="email"
							placeholder="Enter your email"
							type="email"
							title="Please enter a valid email"
						/>
						<input
							className={styles.password}
							name="password"
							placeholder="Enter your password"
							type="password"
						/>
						<button
							type="submit"
							className={styles.submit_button}
							disabled={isPending}
						>
							{isPending ? 'Logging in...' : 'Log in'}
						</button>
						{state.message && (
							<p className={state.success ? styles.success : styles.error}>
								{state.message}
							</p>
						)}
					</form>
				</div>
			</main>
		);
}
