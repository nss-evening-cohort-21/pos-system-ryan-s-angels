import { getOrders, createOrder, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';

// GET CURRENT DATE
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${month}-${day}-${year}`;

// FORM EVENTS
const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING AN ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        order_name: document.querySelector('#order-name').value,
        phone_number: document.querySelector('#phone-number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#order-type').value,
        order_status: 'open',
        dateSubmitted: currentDate,
        uid: user.uid,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
  });
};

export default formEvents;
