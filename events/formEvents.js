import {
  getOrders, createOrder, updateOrder, getSingleOrder
} from '../api/orderData';
import { showOrders } from '../pages/orders';
import { updateRevenue, getRevenue } from '../api/revenueData';
import { showRevenue } from '../pages/revenue';
import { updateItem, createItem } from '../api/itemData';
import { getOrderDetails } from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

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
    // CLICK EVENT FOR SUBMITTING AN ORDER
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
      // console.warn('CLICKED UPDATE ORDER', e.target.id);
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

    // CLICK EVENT FOR CLOSING AN ORDER

    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      const revenuePayload = {
        paymentType: document.querySelector('#payment-type').value,
        tip: document.querySelector('#tip').value,
        // total: order items plus tip,
        date: currentDate,
        firebaseKey,
        uid: user.uid,
      };

      updateRevenue(revenuePayload).then(() => {
        console.warn(revenuePayload);
        getRevenue(user.uid).then(showRevenue);
      });

      // clean data up what was paid when
      // calculate order total at time order is created
      // const order payload order status closed
      // call update order

      const orderPayload = {
        order_status: 'Closed',
      };

      updateOrder(orderPayload).then(() => {
        getOrders(user.uid).then(showOrders);
      });
    }
    // CLICK EVENT FOR ADDING AN ITEM

    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        orderId: document.querySelector('#order-id').value,
        uid: user.uid,
      };
      console.warn(payload);
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getOrderDetails(payload.orderId).then((itemArray) => {
            getSingleOrder(payload.orderId).then((orderObj) => {
              viewOrderDetails(orderObj, itemArray);
            });
          });
        });
      });
    }

    // CLICK EVENT FOR EDITING AN ITEM

    if (e.target.id.includes('update-item')) {
      const payload = {
        itemName: document.querySelector('#item-name').value,
        itemPrice: document.querySelector('#item-price').value,
        orderId: document.querySelector('#order-id').value,
        uid: user.uid,
      };

      updateItem(payload).then(() => {
        getOrderDetails(payload.orderId).then(viewOrderDetails);
      });
    }
  });
};

export default formEvents;
