import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentTypeArray = ['Cash', 'Credit', 'Mobile'];

const closeOrderForm = (obj = {}) => {
  clearDom();
  let domString = `
  <label for="order-type">Payment Type</label>
      <select class="form-select" id="payment-type" aria-label="Default select example" required>
    `;
  paymentTypeArray.forEach((payment) => {
    domString += `
       <option 
         value="${payment}" ${payment === obj.paymentType ? 'selected' : ''}>${payment}</option>`;
  });

  domString += `
  <div class="form-group">
        <label for="just-the-tip">Tip</label>
        <input type="number" class="form-control" id="tip" aria-describedby="wordTitle" placeholder="Don't Be Cheap!" value="${obj.tip || ''}" required>
      </div>
  `;

  domString += `</select><button type="submit" class="btn btn-danger" id="see-revenue">Close Order
    </button></form>`;

  console.warn(obj.tip);

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
