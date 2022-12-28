import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
      <div class="container-fluid">
      <img src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="HHPWlogo" width="5%" height="5%"> &ensp;
        <a class="navbar-brand title" href="#" id="slogan">Serving The Block Since 96</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-orders">
                View All Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-order">New Order</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-4"
              id="search"
              placeholder="Search Orders"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"><button id="google-auth" class="btn btn-danger">SIGNOUT</button></div>
          </span>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
