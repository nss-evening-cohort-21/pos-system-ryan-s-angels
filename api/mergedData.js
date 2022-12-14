import { getSingleItem } from './itemData';
import { getOrderItems } from './orderData';

const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleItem(firebaseKey);
  const itemsArray = await getOrderItems(firebaseKey);
  return { ...orderObject, itemsArray };
};

export default getOrderDetails;
