import express from 'express'

import * as hotelCtrl  from '../controllers/hotel'
import { validateBody } from '../middleware/validate'

const api = express.Router()

api.get('/hotel',  hotelCtrl.list)
api.get('/hotel/:id',  hotelCtrl.read)
api.post('/hotel', validateBody(['name', 'description', 'images', 'starts', 'price']),  hotelCtrl.create)
api.put('/hotel/:id',  hotelCtrl.update)
api.delete('/hotel/:id',  hotelCtrl.remove)

export default api;