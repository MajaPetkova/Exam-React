const Event = require('../models/Event')

async function getAll() {
    return Event.find({});
}

async function create(event) {
    const result = new Event({
        title: event.title,
        place: event.place,
        category: event.category,
        date: event.date,
        img: event.img,
        description: event.description,
        _ownerId: event._ownerId
    });
    await result.save();
    return result;
}
async function getById(id) {
    return Event.findById(id)
}

async function updateById(existing, event) {
    // const existing= await Event.findById(id);
    // if(existing){
    existing.title = event.title;
    existing.place = event.place;
    existing.category = event.category;
    existing.date = event.date;
    existing.img = event.img;
    existing.description = event.description;

    await existing.save();
    return existing;
    // }else{
    //    const error= new Error ('Not found');
    //    error._notFound=true;
    //    throw error;
    // }
}
async function deleteById(id) {
    return await Event.findByIdAndDelete(id);
}

// async function joinEvent(event, userId) {
//     const event = await Event.findById(event)

//     if (event.visitors.includes(userId)) {
//         throw new Error('User is already on the list')
//     };
//     event.visitors.push(userId)
    // await event.save();
// }

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
    // joinEvent
}