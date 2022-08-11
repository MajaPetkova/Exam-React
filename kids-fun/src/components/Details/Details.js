import styles from './Details.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import * as eventService from '../../services/eventService'
import { EventContext } from '../../contexts/EventContext';
import { AuthContext } from '../../contexts/AuthContext';
import * as visitorService from '../../services/visitorsService';

const Details = () => {
    const { eventRemove, } = useContext(EventContext)
    const { eventId,  } = useParams();
    const { user } = useContext(AuthContext)
    const [currentEvent, setCurrentEvent] = useState({});
    // const [visitor, setVisitor]= useState({})
    const navigate = useNavigate();

    useEffect(() => {
        eventService.getOne(eventId)
            .then(result => {
                setCurrentEvent(result)
                // console.log(result)
            });
    }, [])

    const deleteHandler = () => {
        const confirmation = window.confirm('Are you sure that you want to delete this event?')

        if (confirmation) {
            eventService.remove(eventId)
                .then(() => {
                    eventRemove(eventId)
                    navigate('/catalog')
                })
        }
    }
    const joinHandler = (currentEvent, visitor) => {
  visitorService.addVisitor()
   .then(res=>
    console.log(res))
    }

    return (
        <section className={styles['event-details']}>
            <h1>Event Details</h1>
            <div className={styles['info-section']}>
                <div className={styles['event-header']}>
                    <img className={styles['event-img']} src={currentEvent.img} />
                    <h1>{currentEvent.title}</h1>
                    <span className={styles.levels}>Category:</span>
                    <p className={styles.type}>{currentEvent.category}</p>
                </div>
                <div className={styles.place}>
                    <h3>Place:</h3>
                    <p>{currentEvent.place}</p>
                    <h3>Date:</h3>
                    <p>{currentEvent.date}</p>
                </div>
                <div className={styles.text}>
                <h3>Description:</h3>
                <p>
                    {currentEvent.description}
                    {/* Do you like reading in English? Reading is a great way to improve your
          vocabulary and learn new things. We have lots of interesting texts for you
        to read. Read, play games, print activities and post comments too! */}
                </p>
        </div>


                {user.email && (user._id !== currentEvent._ownerId)
                    ? (<div className={styles['details-join']}>
                        <h2>Do you want to join ?</h2>
                        <div className={styles.join}>

                            <Link to={`/join/${eventId}`} onClick={joinHandler} className={styles.buttons1}>
                                Join now
                            </Link>

                        </div>
                    </div>)
                    : null}



                < div className={styles['details-visitors']}>
                    <h2>Visitors:</h2>
                    <ul>
                        <li className={styles.visitorName}>
                            <p>email 1</p>
                        </li>
                        <li className={styles.visitorName}>
                            <p>email 2</p>
                        </li>
                    </ul>
                    <div className={styles['btn-visit']}>
                        { currentEvent.visitors <= 0 
                        ?<span >No visitors yet!</span>
                        :<span >Already joined. Don't be late!</span>}
                    </div>
                </div>
                {user.email && (user._id === currentEvent._ownerId)
                    ? (<div className={styles.buttons}>
                        <Link to={`/events/${eventId}/edit`} className={styles.button}>
                            Edit
                        </Link>
                        <button onClick={deleteHandler} className={styles.button}>
                            Delete
                        </button>
                    </div>)
                    : null}
            </div>
        </section>
    )
}

export default Details;