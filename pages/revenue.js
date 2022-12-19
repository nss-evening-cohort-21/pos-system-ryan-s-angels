import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const showRevenue = (array) => {
  clearDom();
  // let domString = '';
  // let finalRev = 0;
  // array.forEach((revenue) => {
  //   let totale = null;
  //   if (typeof revenue.total === 'string') {
  //     totale = JSON.parse(revenue.total);
  //   } else if (Number.isFinite(revenue.total)) {
  //     totale = revenue.total;
  //   }
  //   finalRev += totale;
  // });
  // const finalRevRounded = Math.round(finalRev * 100) / 100;

  const domString = `
    Total Revenue: $${array.allTheRevenue}
  `;
  console.warn(array.allTheRevenue);

  renderToDOM('#cards-on-dom', domString);
};

export { emptyRevenue, showRevenue };
