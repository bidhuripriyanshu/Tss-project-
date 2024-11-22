const mongoose = require('mongoose')
const dbmodel=mongoose.connect('mongodb://0.0.0.0/transportation').then(() => {
     console.log('Connected to MongoDB')
})
 module.exports=dbmodel