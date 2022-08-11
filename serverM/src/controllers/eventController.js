const router = require('express').Router();
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/eventService');
const errorMapper = require('../util/errorMapper')

router.get('/', async (req, res) => {
   res.json(await api.getAll())
});
router.post('/', isAuth(), async (req, res) => {
   const event = {
      title: req.body.title,
      place: req.body.place,
      category: req.body.category,
      date: req.body.date,
      img: req.body.img,
      description: req.body.description,
      _ownerId: req.user._id
   }
   try {
      const result = await api.create(event)
      // console.log(req.body);
      res.json(result);
   } catch (err) {
      console.error(err)
      const message= errorMapper(err)
      console.log(err.name)
      res.status(400).json({message})
   }
})
router.get('/:id',preload(api),  (req, res)=>{ 
   // async
   // const id= req.params.id;

   // const event= await api.getById(id)
// if(event){
//    res.json(event)
// }else{
//    res.status(404).json({message: 'Event not found'})
// }
res.json(res.locals.event)
})

router.put('/:id',preload(api),isOwner(), async(req,res)=>{
   // const id= req.params.id;
   // const event = {
   //    title: req.body.title,
   //    place: req.body.place,
   //    category: req.body.category,
   //    date: req.body.date,
   //    img: req.body.img,
   //    description: req.body.description
   // }
   try {
      const result = await api.updateById( res.locals.event, req.body)
      // console.log(req.body);
      res.json(result);
   } catch (err) {
      // if(err._notFound){
      //    res.status(400).json({message: 'Event not found'})
      // }else{
         console.error(err)
      res.status(400).json({message: 'Request error'})
      // }
   }
});
router.delete('/:id', isAuth(),isOwner(), async(req, res)=>{
   const id= req.params.id;
   try {
      const result = await api.deleteById(id)
      // console.log(req.body);
      res.json(result);
   } catch (err) {
      console.error(err)
      res.status(400).json({message: 'Event not found'})
   }
   
})
// router.get('/join/:id',isAuth(), async(req, res)=>{
//    const eventId= req.params.id;
//    try{
//       const result=await api.joinEvent(eventId, req.user._id)
//       console.log(result)
//    }catch(err){
//       console.error(err)
//       // const message= errorMapper(err)
//    }
// })

module.exports = router;