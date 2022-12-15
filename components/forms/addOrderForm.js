import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const orderTypeArray = ['phone', 'in-person'];

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addOrderForm = (obj = {}) => {
  clearDom();
  let domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="order-name">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="orderName" placeholder="Enter Your Name" value="${obj.order_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone-number">Customer Phone</label>
        <textarea class="form-control" placeholder="Phone Number" id="phone-number" style="height: 100px">${obj.phone_number || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="email">Customer Email</label>
        <textarea class="form-control" placeholder="Email Address" id="email" style="height: 100px">${obj.email || ''}</textarea>
      </div>
      <label for="order-type">Order Type</label>
      <select class="form-select" id="order-type" aria-label="Default select example" required>
    ;`;
  orderTypeArray.forEach((order) => {
    domString += `
      <option
        value="${order}" ${order === obj.order_type ? 'selected' : ''}>${order}
      </option>`;
  });
  domString += `
      </select>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
