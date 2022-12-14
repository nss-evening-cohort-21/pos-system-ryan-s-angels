import { deleteOrder, getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';
import getRevenue from '../api/revenueData';
import { showRevenue } from '../pages/revenue';
import { getOrderDetails, deleteOrderItemRelationship } from '../api/mergedData';
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

    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders(user.uid).then(showOrders);
        });
      }
    }

    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE Item', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemRelationship(firebaseKey).then(() => {
          getOrders(user.uid).then(showOrders);
          console.warn('DELETED');
        });
      }
    }
  });
};

export default domEvents;
