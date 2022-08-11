import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { userLogin,  } = useContext(AuthContext);
    const [isValid, setIsValid] = useState(false)
    // const [ispassValid, setIspassValid]= useState(false)

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));
        // console.log(email, password)
        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                // console.log(authData)
                navigate('/catalog')
            })
            .catch(() => {
                navigate('/register')
            })
    }
    const emailHandler = (e) => {
        let text = e.target.value;

        if (text.length < 6) {
            setIsValid(true)
            // console.log('too short')
        } else {
            setIsValid(false)
        }
    }
    //  const passHandler=(e)=>{
    //   let pass = e.target.value;

    //   if( pass.length < 2 ){
    //     setIspassValid(true)
    //     // console.log('t s')
    //   }else {
    //     setIspassValid(false)
    //   }
    //  }
    return (
        <section id={styles['login']} className={styles.auth}>
            <form onSubmit={onSubmit} className={styles.login}>
                {/* {(!user.email) && <span>Incorect Email or Password</span>}  */}

                <div className={styles.containerLogin}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Peter@gmail.com"
                        onChange={emailHandler}
                    />
                    {isValid && <span>Email must be longer than 6 characters</span>}
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    {/* {ispassValid && <span style={{color: 'red'}}>Email must be longer than 2 characters</span>} */}
                    <input type="submit" className={styles['btn-submit']} value="Login" />
                    <p className={styles.field}>
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}
export default Login;