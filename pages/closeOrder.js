import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentTypeArray = ['Cash', 'Credit', 'Mobile'];

const closeOrderForm = (obj = {}) => {
  clearDom();
  let domString = `
  <label for="order-type">Time To Close Your Order!</label>
      <select class="form-select" id="payment-type" aria-label="Default select example" required>
      <option>How Will You Be Paying Today?</option>
    `;
  paymentTypeArray.forEach((payment) => {
    domString += `
       <option 
         value="${payment}" ${payment === obj.paymentType ? 'selected' : ''}>${payment}</option>`;
  });

  domString += `
    <div class ="mb-3 row">
        <label for="just-the-tip" class="form-label">Tip</label>
    </div>
    <div class="col-sm-10">
    <input type="number" class="form-control" id="tip" placeholder="Don't Be Cheap, Give Us a Tip!" value="${obj.tip || ''}" required>
    </div>
        
  `;

  domString += `</select><button type="submit" class="btn btn-danger" id="see-revenue">Close Order
    </button></form>`;

  console.warn(obj.tip);

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
