
import { createContext } from "react";
import { useEffect, useState } from 'react';
import { useNavigate,  } from "react-router-dom";
import * as eventService from '../services/eventService'


export const EventContext= createContext();

export const EventProvider=(
    {children}
)=>{
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        try {        
            eventService.getAll()
            .then(result => {
                setEvents(result)
            })
        
        }
        catch (e) {
            console.log(e)
        }

    }, [])

 
    const addEventHandler = (eventData) => {
        setEvents(state => [
            ...state,
            eventData,

        ]);
        navigate('/catalog')
    }
    const eventEdit=(eventId, eventData)=>{
        setEvents(state=> state.map(x=>x._id === eventId ? eventData :x))
    }
    const eventRemove = (eventId) => {
        setEvents(state => state.filter(x => x._id !== eventId)
        )
    }
    // const addVisitor=(eventId, visitor)=>{
    //     setEvents(state=>{
    //         const event= state.find(x=>x._id===eventId)
    //         const visitors=event.visitors || [];
    //         visitors.push(visitor)
    //         return [
    //             ...state.filter(x=>x._id !== eventId),
    //             {...event,visitors }

    //         ]
    //     })
    // }
  return(
    <EventContext.Provider value={{ events, addEventHandler, eventEdit,eventRemove}}>
        {children}
    </EventContext.Provider>
)
}