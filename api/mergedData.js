import { deleteOrder, getOrderItems, getSingleOrder } from './orderData';
import { deleteSingleItem } from './itemData';

const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleOrder(firebaseKey);
  const itemsArray = await getOrderItems(firebaseKey);
  return { ...orderObject, itemsArray };
};

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((ordersArray) => {
    const deleteOrderPromises = ordersArray.map((order) => deleteOrder(order.firebaseKey));

    Promise.all(deleteOrderPromises).then(() => {
      deleteSingleItem(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, deleteOrderItemRelationship };
