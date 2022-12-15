import { getOrders, createOrder, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';
import { updateRevenue, getRevenue } from '../api/revenueData';
import { showRevenue } from '../pages/revenue';

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
        date_submitted: currentDate,
        uid: user.uid,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      });
    }
    // CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);
      // console.warn(firebaseKey);

      const payload = {
        order_name: document.querySelector('#order-name').value,
        phone_number: document.querySelector('#phone-number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#order-type').value,
        order_status: 'open',
        date_submitted: currentDate,
        firebaseKey,
        uid: user.uid,
      };

      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        paymentType: document.querySelector('#payment-type').value,
        tip: document.querySelector('#tip').value,
        orderType: document.querySelector('#order-type').value,
        order_status: 'Closed',
        // total: order total plus tip,
        date: currentDate,
        firebaseKey,
        uid: user.uid,
      };

      updateRevenue(payload).then(() => {
        console.warn(payload);
        getRevenue(user.uid).then(showRevenue);
      });
    }
  });
};

export default formEvents;
