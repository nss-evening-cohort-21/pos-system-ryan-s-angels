import renderToDOM from '../utils/renderToDom';

const welcome = () => {
  const domString = `
  <h1>Welcome, username!</h1>
  `;

  renderToDOM('#home-logged-in', domString);
};

export default welcome;
