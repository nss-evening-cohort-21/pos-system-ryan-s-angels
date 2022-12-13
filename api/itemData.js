import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ITEMS
const getItems = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET SINGLE ITEM
const getSingleItem = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${orderId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getItems, getSingleItem };
