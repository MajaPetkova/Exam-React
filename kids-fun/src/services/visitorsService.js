import * as request from './requester'; 

const baseUrl = 'http://localhost:3030/data/visitors';

export const addVisitor= (eventId, user )=>
request.post(baseUrl, {eventId, user})
