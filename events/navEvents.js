import { showOrders } from '../pages/orders';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orderData';

const navigationEvents = (user) => {
  // VIEW ALL ORDERS
  document.querySelector('#all-orders')
    .addEventListener('click', () => {
      getOrders(user.uid).then(showOrders);
    });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
