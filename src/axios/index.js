import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStore.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            // Authorization: token (check with backend)
        }
    })
}