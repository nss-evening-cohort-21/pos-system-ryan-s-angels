import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="item-name">Item Name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="itemName" placeholder="Item Name" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-group">
        <label for="item-price">Item Price</label>
        <textarea class="form-control" placeholder="Item Price" id="item-price" style="height: 100px">${obj.itemPrice || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Item
      </button>
      <input type="hidden" id="order-id" value="${obj.orderId ? obj.orderId : orderId}"></input>
    </form>
    <img src="https://cdn.vox-cdn.com/thumbor/GYdRL8e7FhNWLNPor2V2I5Hi4gM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22493535/GettyImages_185274327.jpg" class="sidepic" alt="delicious chicken wings">
    `;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
