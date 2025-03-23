const Event = require('./myEvent.js')
Event.emit('log')

const express= require('express')
const app= express()
// console.log(app)
app.get('/' , (req, res)=>{console.log('done'); res.send('hit endpoint')})
app.listen('3000', ()=>console.log('listening'))