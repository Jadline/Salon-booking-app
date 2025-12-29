const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    email : {
        type : String
    },
    phonenumber : {
        type : String
    },
    preferredstylist : {
        type : String
    },
    bookingDate : {
        type : Date
    },
    notes : {
        type : String
    },
    status : {
        type : String
    }
})

const Client = mongoose.model('Client',clientSchema)

module.exports = Client;