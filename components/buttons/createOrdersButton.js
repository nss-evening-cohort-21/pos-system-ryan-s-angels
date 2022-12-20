const createOrdersButton = () => {
  const domString = '<button id="create-order-btn" class="btn btn-warning">NEW ORDER</button>';
  document.querySelector('#home-logged-in').innerHTML += domString;
};

export default createOrdersButton;
