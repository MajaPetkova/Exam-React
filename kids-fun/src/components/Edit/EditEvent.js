import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import styles from './Edit.module.css';
import { EventContext } from '../../contexts/EventContext';
import * as eventService from '../../services/eventService';

const EditEvent = () => {
    const [currentEvent, setCurrentEvent]= useState({})
    const { eventEdit} = useContext(EventContext);
    const { eventId } = useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        eventService.getOne(eventId)
            .then(eventData=>{
                setCurrentEvent(eventData)
            })

    },[]);

    const onSubmit=(e)=>{
        e.preventDefault();

        const eventData=Object.fromEntries(new FormData(e.target));
        
        eventService.edit(eventId, eventData)
           .then(result=>{
            eventEdit(eventId, result)
            
            navigate(`/details/${result._id}`)
           })
    }


    return (
        <section id={styles['edit-page']} className={styles.auth}>
            <form onSubmit={onSubmit} className={styles.edit}>
                <div className={styles['container-edit']}>
                    <h1>Edit Event</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter event title..." defaultValue={currentEvent.title} />
                    <label htmlFor="place">Place:</label>
                    <input
                        type="text"
                        id="title"
                        name="place"
                        placeholder="Enter event place..."
                        defaultValue={currentEvent.place}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={currentEvent.category}
                        placeholder="sport, creativity, learning..."

                    />
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" placeholder="01/01/2022" defaultValue={currentEvent.date}/>
                    <label htmlFor="event-img">Image:</label>
                    <input type="text" id="imageUrl" name="img" defaultValue={currentEvent.img} />
                    <label htmlFor="summary">Description:</label>
                    <textarea name="description" id="summary" defaultValue={currentEvent.description} />
                    <input className={styles['btn-submit']} type="submit" value="Edit Event" />
                </div>
            </form>
        </section>
    )
}
export default EditEvent;