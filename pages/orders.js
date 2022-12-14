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
        <h5 class="card-title">Name: ${item.order_name}</h5>
        <p class="card-text bold">Order Status: ${item.order_status}</p>
        <p class="card-text bold">Phone Number: ${item.phone_number}</p>
        <p class="card-text bold">Email: ${item.email}</p>
        <p class="card-text bold">Order Type: ${item.order_type}</p>
        <hr>`;
    if (item.order_status === 'open') {
      domString += `<i class="btn btn-success" id="view-items-btn--${item.firebaseKey}"><span><i class= "fas fa-eye"></i></span></i>
        <i id="edit-order-btn--${item.firebaseKey}" class="btn btn-info">
        <span><i class= "fas fa-edit"></i></span>
        </i>
        <i id="delete-order-btn--${item.firebaseKey}"  class="btn btn-light">
              <span><i class= "fas fa-trash-alt"></i></span>
            </i>
      </div>
    </div>
    `;
    } else if (item.order_status === 'Closed') {
      domString += `<i class="btn btn-success" id="view-items-btn--${item.firebaseKey}"><span><i class= "fas fa-eye"></i></span></i>
      </div>
    </div>
    `;
    }
  });
  renderToDOM('#cards-on-dom', domString);
};

export { emptyOrders, showOrders, emptyItems };
