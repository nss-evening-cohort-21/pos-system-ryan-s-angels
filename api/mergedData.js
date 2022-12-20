import { deleteSingleOrder, getOrderItems, getSingleOrder } from './orderData';
import { deleteItem } from './itemData';

const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleOrder(firebaseKey);
  const itemsArray = await getOrderItems(firebaseKey);
  return { ...orderObject, itemsArray };
};

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, deleteOrderItemRelationship };
