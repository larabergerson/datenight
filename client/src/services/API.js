import axios from 'axios';

export default {
    findEats: function () {
        return axios.get(`/api/eats`)
    }
}