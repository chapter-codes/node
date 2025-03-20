const Event = require('events')
const fs= require('fs')
const fsPromise= require('fs').promises

const path = require('path')

class MyEvent extends Event {}
const myEvent = new MyEvent()
myEvent.on('log', async (arg=undefined)=>{
    try{
         await fsPromise.mkdir(path.join(__dirname, '/logs'), {recursive:true})
         await fsPromise.appendFile(path.join(__dirname, '/logs', 'log.txt'), `user logged in at ${new Date()}\n`)
    }catch(err){
        console.log('logged',err)
    }
})

myEvent.emit('log')

module.exports= {
    date: new Date(),
    emit: myEvent.emit,
}