import welcome from '../components/welcome';
import createOrdersButton from '../components/buttons/createOrdersButton';
import viewOrdersButton from '../components/buttons/viewOrdersButton';
import viewRevenueButton from '../components/buttons/viewRevenueButton';

const homeLoggedIn = () => {
  welcome();
  viewOrdersButton();
  viewRevenueButton();
  createOrdersButton();
};

export default homeLoggedIn;
