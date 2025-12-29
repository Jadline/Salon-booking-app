import axios from 'axios'
const CLIENTS_URL = 'http://127.0.0.1:3000/api/v1/clients'
export async function fetchClients(){
    try {
          const response  = await axios.get(CLIENTS_URL)
          console.log(response.data.data.clients)
          return response.data.data.clients
    }
    catch(err){
        console.log('There was an error fetching data',err)
    }
}
