import renderToDOM from '../utils/renderToDom';

const welcome = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}</h1>
  <br>
  <img src="https://cdn11.bigcommerce.com/s-ykmi7b5yqv/product_images/uploaded_images/pizza-peel-in-brick-oven-1200.jpeg" alt="delicious pizza in wood fired oven" width="40%" height="40%">
  <br><br>
  `;

  renderToDOM('#home-logged-in', domString);
};

export default welcome;
