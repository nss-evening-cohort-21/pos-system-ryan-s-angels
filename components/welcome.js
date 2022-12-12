import renderToDOM from '../utils/renderToDom';

const welcome = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}</h1>
  `;

  renderToDOM('#home-logged-in', domString);
};

export default welcome;
