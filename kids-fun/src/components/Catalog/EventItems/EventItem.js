import { Link } from 'react-router-dom';
import styles from '../Catalog.module.css'

const EventItem=({event})=>{
return(  
<div className={styles.allEvents}>
    <div className={styles['allEvents-info']}>
        <img src={event.img}/>
        <h6>{event.category}</h6>
        <h2>{event.title}</h2>
        <Link to={`/details/${event._id}`} className={styles['details-button']}>
            Details
        </Link>
    </div>
</div>)
}

export default EventItem;