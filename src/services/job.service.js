import axios from 'axios';

export const jobList = (data) => axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', data);