import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const showRevenue = (array) => {
  clearDom();
  let domString = '';
  let finalRev = 0;
  array.forEach((revenue) => {
    const totale = JSON.parse(revenue.total);
    finalRev += totale;
  });
  const finalRevRounded = Math.round(finalRev * 100) / 100;
  console.warn(finalRevRounded);

  domString = `
    Total Revenue: $${finalRevRounded}
  `;

  renderToDOM('#cards-on-dom', domString);
};

export { emptyRevenue, showRevenue };
