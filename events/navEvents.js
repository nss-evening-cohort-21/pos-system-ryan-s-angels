import { showOrders } from '../pages/orders';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orderData';
import homeLoggedIn from '../pages/homeLoggedIn';
import { clearDom } from '../utils/clearDom';
import addOrderForm from '../components/forms/addOrderForm';

const navigationEvents = (user) => {
  // BACK TO HOMELOGGEDIN
  document.querySelector('#slogan')
    .addEventListener('click', () => {
      clearDom();
      homeLoggedIn(user);
    });

  // VIEW ALL ORDERS
  document.querySelector('#all-orders')
    .addEventListener('click', () => {
      getOrders(user.uid).then(showOrders);
    });

  // CREATE NEW ORDER
  document.querySelector('#create-order')
    .addEventListener('click', () => {
      addOrderForm(user.uid);
    });

  // SEARCH ORDERS

  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const searchValue = document.querySelector('#search').value.toLowerCase();
      getOrders(user.uid).then((orders) => {
        const foundOrders = orders.filter((taco) => taco.order_name.toLowerCase().includes(searchValue) || taco.phone_number.toLowerCase().includes(searchValue) || taco.email.includes(searchValue) || taco.order_type.toLowerCase().includes(searchValue));
        showOrders(foundOrders);
      });
      document.querySelector('#search').value = '';
    }
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
