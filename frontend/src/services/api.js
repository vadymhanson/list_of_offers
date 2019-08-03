import axios from "axios";

const url ='http://localhost:9999/api/offer/par_nxvjj7em';

const ApiService = {
    getOffers: () => axios.get(url),

    updateOffer: (customer_id) => axios.post(url,  {customer_id}, {
        headers: {'Content-Type': 'application/json'}
    })
};

export default ApiService;
