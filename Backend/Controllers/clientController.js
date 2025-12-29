const Client = require('../models/clientModel')

async function getAllClients(req,res){
    // console.log('GET /api/v1/clients called');
    try{
        const clients = await Client.find()
       res.status(200).json({
        status : 'success',
        data : {
            clients
        }
       })

    }catch(err){
        res.status(404).json({
            status : 'fail',
            message : err
        })

    }
}
async function createClient(req, res) {
  try {
    const newClient = await Client.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { client: newClient },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
}
module.exports = {getAllClients,createClient};