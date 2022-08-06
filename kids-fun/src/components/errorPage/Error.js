import { Link } from "react-router-dom";
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.errorBox}>
            <div className={styles.textContainer}>
               <h1> Oops!</h1>
               <p>404 - Page not found!</p>
               <Link to='/' className={styles.btnPrimary}>Back To Home</Link>
            </div>
        </div>
    )
}
export default Error