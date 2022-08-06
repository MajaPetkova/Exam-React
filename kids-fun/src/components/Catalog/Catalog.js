import styles from './Catalog.module.css'
// import {Link} from 'react-router-dom';
import EventItem from './EventItems/EventItem';
import {useContext} from 'react';
import {EventContext} from '../../contexts/EventContext'

const Catalog = () => {
const{events}= useContext(EventContext);

    return (
        <section className={styles['catalog-page']}>
            <h1>All Events</h1>

                     {events.length > 0
                     ? events.sort((a,b)=>{return a.date>b.date ? 1:-1}).map(x=> <EventItem key={x._id} event={x}/>)
                     : <h3 className={styles['no-articles']}>No Events yet</h3>
                     }
           
            {/* <div className={styles.allEvents}>
                <div className={styles['allEvents-info']}>
                    <img src="./images/about.png" />
                    <h6>Learning / Geography</h6>
                    <h2>Exploring new Countries</h2>
                    <Link to='/details/:id' className={styles['details-button']}>
                        Details
                    </Link>
                </div>
            </div>
            <div className={styles['allEvents']}>
                <div className={styles['allEvents-info']}>
                    <img src="/images/students.jpg" />
                    <h6>Reading </h6>
                    <h2>Stories about the Jungle</h2>
                    <a href="#" className={styles['details-button']}>
                        Details
                    </a>
                </div>
            </div>
            <div className={styles.allEvents}>
                <div className={styles['allEvents-info']}>
                    <img src="./images/Tennis Player Kids Cartoon - PREVIEW.avif" />
                    <h6>Sport </h6>
                    <h2>Tennis for Fun</h2>
                    <a href="#" className={styles['details-button']}>
                        Details
                    </a>
                </div>
            </div> */}
        </section>
    )
}
export default Catalog;