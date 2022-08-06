
import styles from './Create.module.css'
import * as eventService from '../../services/eventService';
import { useContext } from 'react';
import { EventContext } from '../../contexts/EventContext';

const CreateEvent = () => {
    const { addEventHandler } = useContext(EventContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const eventData = Object.fromEntries(new FormData(e.target));

        eventService.create(eventData)
            .then(result => {
                // console.log(result);
                addEventHandler(result)
            });
    }

    return (
        <section id={styles['create-page']} className={styles.auth}>
            <form onSubmit={onSubmit} className={styles.create}>
                <div className={styles['container-create']}>
                    <h1>Create Event</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter event title..."
                    // onBlur={validateTitle}

                    />
                    {/* {error.username && <div style={{color: "red"}}>{error.username}</div>} */}

                    <label htmlFor="place">Place:</label>
                    <input
                        type="text"
                        id="title"
                        name="place"
                        placeholder="Enter event place..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="sport, creativity, learning..."
                    />
                    <label htmlFor="date" >Date:</label>
                    <input type="date" id="date" name="date" placeholder="01/01/2022" />
                    <label htmlFor="event-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="img"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Description:</label>
                    <textarea name="description" id="summary" defaultValue={""} />
                    <input className={styles['btn-submit']} type="submit" value="Create Event" />
                </div>
            </form>
        </section>

    )
}
export default CreateEvent;