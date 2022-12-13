import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order-btn--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="orderName" placeholder="Enter Your Name" value="${obj.order_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Customer Phone</label>
        <textarea class="form-control" placeholder="Phone Number" id="phone-number" style="height: 100px">${obj.phone_number || ''}</textarea>
      </div>
      <div class="form-group">
      <label for="description">Customer Email</label>
      <textarea class="form-control" placeholder="Email Address" id="email" style="height: 100px">${obj.email || ''}</textarea>
    </div>
      <div class="form-group" id="order-type">
      </div>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectLanguage(user, `${obj.language_id || ''}`);
};

export default addOrderForm;
