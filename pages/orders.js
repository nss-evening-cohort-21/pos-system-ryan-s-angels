import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const showOrders = (array) => {
  clearDom();
  console.warn(array);
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.order_name}</h5>
        <p class="card-text bold">${item.order_status}</p>
        <p class="card-text bold">${item.phone_number}</p>
        <p class="card-text bold">${item.email}</p>
        <p class="card-text bold">${item.order_type}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-items-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="edit-order-btn--${item.firebaseKey}"></i>
        <i class="btn btn-light fas fa-trash-alt" id="delete-order-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#cards-on-dom', domString);
};

export { emptyOrders, showOrders, emptyItems };
