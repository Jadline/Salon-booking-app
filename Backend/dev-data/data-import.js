const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fs = require('fs')
const Client = require('../models/clientModel')

dotenv.config({path : './config.env'})

const DB = process.env.DATABASE

mongoose.connect(DB)
.then(() => console.log('DB connected successfully'))
.catch((err) => console.log('There was an error connecting to the database',err))

const clients = JSON.parse(fs.readFileSync(`${__dirname}/clients.json`,'utf-8'))

async function importData (){
    try {
        await Client.create(clients)
        console.log('Data successfully loaded')
        process.exit()
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}
if(process.argv[2] === '--import') importData()