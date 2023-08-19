// Set Global BaseUrl For API Hit
import axios from 'axios';
axios.defaults.baseURL = 'https://api2.diasporanigeria.org/';

// Set Global Header For API Hit
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token'));