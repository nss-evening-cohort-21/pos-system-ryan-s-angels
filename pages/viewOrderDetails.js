import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { emptyItems } from './orders';

const viewOrderDetails = (orderObject) => {
  clearDom();
  if (orderObject.itemsArray.length === 0) {
    emptyItems();
    const domString = `
    <button id="add-item-btn" class="btn btn-success">Add Item</button>
    <button id="go-to-payment-btn" class="btn btn-primary">Go to Payment</button>`;
    renderToDOM('#store', domString);
  } else {
    const str = `
    <div class="view-orders-items-container">
      <div class="text-white ms-5 details">
        <h5>${orderObject.order_name}</h5>
        <div>
          Email: <a href="mailto:${orderObject.email}">${orderObject.email}</a>
        </div>
        <hr>
      </div>
      <div class="author-books-cards" id="itemCards"></div>
    </div>`;
    renderToDOM('#store', str);
    let domString = '';
    orderObject.itemsArray.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body" style="height: 250px;">
          <h6 class="card-title">${item.itemName}</h6>
          <p class="card-text bold">${item.itemPrice}</p>
          <hr>
          <div class="book-icons">
            <i id="edit-item-btn--${item.firebaseKey}"  class="btn btn-info">
              <span><i class= "fas fa-edit"></i></span>
            </i>
            <i id="delete-item-btn--${item.firebaseKey}"  class="btn btn-danger">
              <span><i class= "fas fa-trash-alt"></i></span>
            </i>
          </div>
        </div>
      </div>`;
    });
    domString += `
    <button id="add-item-btn" class="btn btn-success">Add Item</button>
    <button id="go-to-payment-btn" class="btn btn-primary">Go to Payment</button>`;
    renderToDOM('#itemCards', domString);
  }
};
export default viewOrderDetails;
