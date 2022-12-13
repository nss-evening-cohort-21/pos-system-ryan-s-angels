import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const showRevenue = (array) => {
  clearDom();

  let domString = '';
  array.forEach((revenue) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Order Date: ${revenue.date}</h5>
        <p class="card-text bold">Payment Type: ${revenue.paymentType}</p>
        <p class="card-text bold">Order Type: ${revenue.orderType}</p>
        <p class="card-text bold">Tip: ${revenue.tip}</p>
        <p class="card-text bold">TOTAL: ${revenue.total}</p>
        <hr>
      </div>
    </div>
    `;
    const totale = JSON.parse(revenue.total);
    const justTheTip = JSON.parse(revenue.tip);
    console.warn(typeof totale);
    console.warn(typeof justTheTip);
  });
  renderToDOM('#cards-on-dom', domString);
};

export { emptyRevenue, showRevenue };
