import { getSingleItem } from './itemData';
import { getOrderItems } from './orderData';

const getOrderDetails = async (firebaseKey) => {
  const itemObject = await getSingleItem(firebaseKey);
  const ordersArray = await getOrderItems(firebaseKey);
  return { ...itemObject, ordersArray };
};

export default getOrderDetails;
