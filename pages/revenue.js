import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDOM('#cards-on-dom', domString);
};

const showRevenue = (array) => {
  clearDom();
  const domString = `
    <div class="revTot">
      Total Revenue: $${array.toFixed(2)}
    </div>
    <img src="https://i.pinimg.com/564x/7c/4f/41/7c4f4120d5520493456f3ae24cece9c2.jpg" alt="breakdancing" class="sidepic" width="50%" height="50%">"
  `;
  console.warn(array);

  renderToDOM('#cards-on-dom', domString);
};

export { emptyRevenue, showRevenue };
