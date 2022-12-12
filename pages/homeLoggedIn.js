import welcome from '../components/welcome';
import createOrdersButton from '../components/buttons/createOrdersButton';
import viewOrdersButton from '../components/buttons/viewOrdersButton';
import viewRevenueButton from '../components/buttons/viewRevenueButton';
import homeLoggedInClear from '../utils/homeLoggedInClear';

const homeLoggedIn = (user) => {
  homeLoggedInClear();
  welcome(user);
  viewOrdersButton();
  createOrdersButton();
  viewRevenueButton();
};

export default homeLoggedIn;
