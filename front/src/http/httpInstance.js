import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/expensetracker-8abdc/us-central1/app/',
  headers: {'Content-Type': 'application/json'}
});

export default instance;