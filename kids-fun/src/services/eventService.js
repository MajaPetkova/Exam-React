import * as request from './requester';

const baseUrl= 'http://localhost:3030';

export const getAll=()=>request.get(`http://localhost:3030/data/events`)
      
export const create=(eventData)=>request.post(`${baseUrl}/data/events`, eventData)    

export const getOne=(eventId)=>request.get(`${baseUrl}/data/events/${eventId}`)

export const edit=(eventId, eventData)=>request.put(`${baseUrl}/data/events/${eventId}`, eventData);

export const remove= (eventId)=> request.del(`${baseUrl}/data/events/${eventId}`)