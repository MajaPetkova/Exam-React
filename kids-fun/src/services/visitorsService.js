import * as request from './requester'; 

const baseUrl = 'http://localhost:3030/data/events';

export const addVisitor= (eventId, user )=>
request.get(`${baseUrl}/join/${eventId}`, {eventId, user})
