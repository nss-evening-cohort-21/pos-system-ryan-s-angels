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
    <div class="revTot">
      Total Revenue: $${array.allTheRevenue}
    </div>
    <img src="https://i.pinimg.com/564x/7c/4f/41/7c4f4120d5520493456f3ae24cece9c2.jpg" alt="breakdancing" width="50%" height="50%">"
  `;
  console.warn(array.allTheRevenue);

  renderToDOM('#cards-on-dom', domString);
};

export { emptyRevenue, showRevenue };
