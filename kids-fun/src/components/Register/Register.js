import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.css';
import * as authService from '../../services/authService'
import { AuthContext } from '../../contexts/AuthContext';



const Register = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate= useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const repass = formData.get('confirm-password')

        if (password !== repass) {
            return;
        }
        authService.register(email, password)
            .then(authData => {
                userLogin(authData)
                navigate('/')
            })
    }


    return (
        <section id={styles['register']} className={styles['auth']}>
            <form onSubmit={onSubmit} className={styles.register}>
                <div className={styles.containerRegister}>
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Peter@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className={styles['btn-submit']} type="submit" value="Register" />
                    <p className={styles.field}>
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}
export default Register;