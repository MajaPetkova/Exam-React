import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <header>

            <h1><Link className={styles.home} to="/">.Fun for Kids</Link></h1>
            <nav>
                
                <Link to="/catalog">All Events</Link>
             

                {user.email
                    ? <div id="user">
                        <Link to="/create">Create Event</Link>
                        <Link to="/logout">Logout</Link>
                
                    </div>
                    : <div id="guest">
                        <Link to="login">Login</Link>
                        <Link to="/register">Register</Link>
                     
                    </div>}
            {user.email && <div className={styles['span-user']}>Wellcome:{user.email}</div>}
            </nav>
        </header>
    )
}
export default Header