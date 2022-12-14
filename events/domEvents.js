import { getOrders, getSingleOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';
import { getRevenue } from '../api/revenueData';
import { showRevenue } from '../pages/revenue';
import { getOrderDetails, deleteOrderItemRelationship } from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';
import { deleteItem, getSingleItem } from '../api/itemData';
import closeOrderForm from '../components/forms/closeOrderForm';

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
      getOrderDetails(firebaseKey).then((orderItems) => {
        getSingleOrder(firebaseKey).then((orderObject) => {
          viewOrderDetails(orderObject, orderItems);
        });
      });
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
        getSingleItem(firebaseKey).then((item) => {
          getSingleOrder(item.orderId).then((order) => {
            deleteItem(firebaseKey).then(() => {
              getOrderDetails(order.firebaseKey).then((orderItems) => {
                viewOrderDetails(order, orderItems);
              });
            });
          });
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

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((itemObj) => addItemForm(itemObj));
      console.warn('You clicked the edit item button');
    }

    // ADD ITEM FORM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItemForm({}, firebaseKey);
    }

    // CLOSE ORDER
    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(closeOrderForm);
    }
  });
};

export default domEvents;
