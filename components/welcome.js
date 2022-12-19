import renderToDOM from '../utils/renderToDom';

const welcome = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}</h1>
  <img src ="https://www.musicianwave.com/wp-content/uploads/2022/04/Best-Female-DJs-in-the-World-788x525.jpg" width="50%" height="50%" alt="dj moving the crowd">
  <br><br>
  `;

  renderToDOM('#home-logged-in', domString);
};

export default welcome;
