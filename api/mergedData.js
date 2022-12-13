import { getSingleItem } from './itemData';

const getOrderDetails = async (firebaseKey) => {
  const itemObject = await getSingleItem(firebaseKey);
  const ordersArray = await getOrderItems(firebaseKey);
  return { ...itemObject, ordersArray };
};

export default getOrderDetails;
