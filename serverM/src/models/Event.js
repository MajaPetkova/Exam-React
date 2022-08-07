const{ model, Schema, Types:{ObjectId}}= require('mongoose');

const eventSchema= new Schema({
    title: {type: String, minLength:[3,'Totle must be at least 3 charachters long']},
    place: {type: String},
    category: {type: String},
    date: {type: String},
    img: {type: String},
    description: {type: String},
    _ownerId: {type:ObjectId, ref:'User'},
    visitors: { type: [ObjectId], ref: 'User', default: [] }
})

const Event= model('Event', eventSchema)
module.exports= Event;