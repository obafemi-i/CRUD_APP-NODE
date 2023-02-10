const express = require('express')
const route = express.Router()

const{homeRoutes} = require('../services/render')
const{add_user} = require('../services/render')
const{update_user} = require('../services/render')

const controller = require('../controller/controller')

route.get('/', homeRoutes)

route.get('/add-user', add_user)

route.get('/update-user', update_user)


route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)


// route.get('/api/users/:id', controller.findOne)

module.exports = route