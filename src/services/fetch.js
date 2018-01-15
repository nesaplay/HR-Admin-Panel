import axios from 'axios';
import { BASE_URL } from '../constants';

export const fetch = axios.create({
    baseURL: BASE_URL
})