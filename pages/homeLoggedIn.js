import renderToDOM from '../utils/renderToDom';
import createOrdersButton from '../components/buttons/createOrdersButton';
import viewOrdersButton from '../components/buttons/viewOrdersButton';
import viewRevenueButton from '../components/buttons/viewRevenueButton';

const welcome = () => {
  const domString = `
  <h1>Welcome, username!</h1>
  `;

  renderToDOM('#home-logged-in', domString);
};

const homeLoggedIn = () => {
  welcome();
  viewOrdersButton();
  viewRevenueButton();
  createOrdersButton();
};

export default homeLoggedIn;
