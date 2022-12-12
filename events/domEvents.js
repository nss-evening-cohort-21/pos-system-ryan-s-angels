import getOrders from '../api/orderData';
import { showOrders } from '../pages/orders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn')) {
      getOrders(user.uid).then(showOrders);
    }
  });
};

export default domEvents;
