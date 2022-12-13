import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';
import getRevenue from '../api/revenueData';
import { showRevenue } from '../pages/revenue';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn')) {
      getOrders(user.uid).then(showOrders);
    }
    if (e.target.id.includes('create-order-btn')) {
      addOrderForm();
    }
    if (e.target.id.includes('view-revenue-btn')) {
      getRevenue(user.uid).then(showRevenue);
    }
  });
};

export default domEvents;
