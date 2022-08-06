// const api = require('../services/eventService')

module.exports = (api) => async (req, res, next) => {
    const id = req.params.id;
    const event = await api.getById(id);

    if (event) {
        res.locals.event = event;
        next();
    } else {
        res.status(404).json({ message: 'Event not found' })
    }
}