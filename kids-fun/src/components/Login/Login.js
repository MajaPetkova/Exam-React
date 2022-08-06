import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import styles from './Login.module.css';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login=()=>{
  const {userLogin}= useContext(AuthContext)
  const navigate= useNavigate();


  const onSubmit=(e)=>{
    e.preventDefault();
  
    const {email, password}= Object.fromEntries(new FormData(e.target));
    // console.log(email, password)
    authService.login(email, password)
       .then(authData =>{
        userLogin(authData);
        navigate('/')
       })
       .catch(()=>{
        navigate('/register')
       })
  }
    return (
        <section id={styles['login']} className={styles.auth}>
        <form onSubmit={onSubmit} className={styles.login}>
          <div className={styles.containerLogin}>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Peter@gmail.com"
            />
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
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