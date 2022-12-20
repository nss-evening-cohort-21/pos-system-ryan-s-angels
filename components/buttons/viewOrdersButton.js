const viewOrdersButton = () => {
  const domString = '<button id="view-order-btn" class="btn btn-primary">VIEW ALL ORDERS</button>';
  document.querySelector('#home-logged-in').innerHTML += domString;
};

export default viewOrdersButton;
