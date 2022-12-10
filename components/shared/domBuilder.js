import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="home-logged-out"></div>
  <div id="home-logged-in"></div>
  <div id="buttons"></div>
  <div id="cardsOnDom"></div>
  <div id="form-container"></div>
  <div id="view"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
