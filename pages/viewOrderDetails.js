import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { emptyItems } from './orders';

const viewOrderDetails = (orderObject, orderItems) => {
  clearDom();
  if (!orderItems.itemsArray) {
    emptyItems();
    const domString = `
    <button id="add-item-btn--${orderObject.firebaseKey}" class="btn btn-success">Add Item</button>
    <button id="go-to-payment-btn" class="btn btn-primary">Go to Payment</button>`;
    renderToDOM('#store', domString);
  } else {
    const str = `
    <div class="view-orders-items-container">
      <div class="text-white ms-5 details">
        <h5>${orderObject.order_name}</h5>
        <div>
          Order Status: <a href="mailto:${orderObject.order_status}">${orderObject.order_status}</a>
        </div>
        <div>
          Email: <a href="mailto:${orderObject.email}">${orderObject.email}</a>
        </div>
        <div>
          Phone Number: <a href="mailto:${orderObject.phone_number}">${orderObject.phone_number}</a>
        </div>
        <div>
          Order Type: <a href="mailto:${orderObject.order_type}">${orderObject.order_type}</a>
        </div>
        <hr>
      </div>
      <div class="item-cards" id="itemCards"></div>
    </div>`;
    renderToDOM('#store', str);
    let domString = '';
    orderItems.itemsArray.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body" style="height: 250px;">
          <h6 class="card-title">${item.itemName}</h6>
          <p class="card-text bold">$${item.itemPrice}</p>
          <hr>
          <div class="item-icons">
            <i id="edit-item-btn--${item.firebaseKey}"  class="btn btn-info">
              <span><i class= "fas fa-edit"></i></span>
            </i>
            <i id="delete-item-btn--${item.firebaseKey}"  class="btn btn-light">
              <span><i class= "fas fa-trash-alt"></i></span>
            </i>
          </div>
        </div>
      </div>`;
    });
    domString += `
    <button id="add-item-btn--${orderObject.firebaseKey}" class="btn btn-success">Add Item</button>
    <button id="go-to-payment-btn--${orderObject.firebaseKey}" class="btn btn-primary">Go to Payment</button>`;
    renderToDOM('#itemCards', domString);
  }
};
export default viewOrderDetails;
