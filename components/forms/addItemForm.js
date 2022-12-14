import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item-btn--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="item-name">Item Name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="itemName" placeholder="Enter Your Name" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-group">
        <label for="item-price">Item Price</label>
        <textarea class="form-control" placeholder="Item Price" id="item-price" style="height: 100px">${obj.itemPrice || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Item
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
