import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';
import getRevenue from '../api/revenueData';
import { showRevenue } from '../pages/revenue';
import getOrderDetails from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

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
    // CLICK EVENT FOR VIEW ORDER DETAILS
    if (e.target.id.includes('view-items-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrderDetails);
      console.warn('You clicked the items button!');
    }
  });
};

export default domEvents;
