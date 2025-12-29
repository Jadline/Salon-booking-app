import axios from 'axios'
const CLIENTS_URL = 'http://127.0.0.1:3000/api/v1/clients'
export async function createClient(clientData) {
  try {
    const response = await axios.post(CLIENTS_URL, clientData);
    return response.data.data.client;
  } catch (err) {
    console.error('Error creating client', err);
    throw err;
  }
}
