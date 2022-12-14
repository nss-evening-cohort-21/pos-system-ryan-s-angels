import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentTypeArray = ['Cash', 'Credit', 'Mobile'];

const closeOrderForm = (uid, obj = {}) => {
  console.warn(uid);
  clearDom();
  let domString = `
  <form id="close-order" class="mb-4">
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

  domString += `</select><button type="submit" class="btn btn-primary">Submit Word
    </button></form>`;

  renderToDOM('#main-container', domString);
};

export default closeOrderForm;
