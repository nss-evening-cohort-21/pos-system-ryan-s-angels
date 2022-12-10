import renderToDom from '..utils/renderToDom'

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="homeLoggedOut"></div>
  <div id="homeLoggedIn"></div>
  <div id="buttons"></div>
  <div id="cardsOnDom"></div>
  <div id="form-container"></div>
  <div id="view"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
