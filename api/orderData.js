import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ORDERS
const getOrders = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders?orderBy="uid"&equalTo="${uid}".json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getOrders;
