import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const paymentTypeArray = ['Cash', 'Credit', 'Mobile'];

const closeOrderForm = (obj = {}) => {
  clearDom();
  console.warn(obj);
  let domString = `
  <form id="${obj.firebaseKey ? `close-order--${obj.firebaseKey}` : 'submit-revenue'}" class="mb-4">
  <label>Time To Close Your Order!</label>
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
    <br><br>
  `;

  domString += `</select><button type="submit" class="btn btn-danger" id="order-is-closed">Close Order
    </button></form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
