import { getOrders, getSingleOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';
import { getRevenue } from '../api/revenueData';
import { showRevenue } from '../pages/revenue';
import { getOrderDetails, deleteOrderItemRelationship } from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';
import { deleteItem } from '../api/itemData';
import closeOrderForm from '../pages/closeOrder';
import homeLoggedIn from '../pages/homeLoggedIn';

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
    // CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
      console.warn('You clicked the edit order button');
    }
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteItem(firebaseKey).then(() => {
          getSingleOrder(user.uid).then();
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

    // ADD ITEM FORM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItemForm({}, firebaseKey);
    }

    // CLOSE ORDER
    if (e.target.id.includes('go-to-payment-btn')) {
      closeOrderForm(user);
    }

    // CLOSE ORDER PT 2
    if (e.target.id.includes('order-is-closed')) {
      homeLoggedIn(user);
    }
  });
};

export default domEvents;
