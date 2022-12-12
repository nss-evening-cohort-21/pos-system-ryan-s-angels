import welcome from '../components/welcome';
import createOrdersButton from '../components/buttons/createOrdersButton';
import viewOrdersButton from '../components/buttons/viewOrdersButton';
import viewRevenueButton from '../components/buttons/viewRevenueButton';

const homeLoggedIn = (user) => {
  welcome(user);
  viewOrdersButton();
  createOrdersButton();
  viewRevenueButton();
};

export default homeLoggedIn;
