const viewRevenueButton = () => {
  const domString = '<button id="view-revenue-btn" class="btn btn-success">VIEW REVENUE</button>';
  document.querySelector('#home-logged-in').innerHTML += domString;
  console.warn('YOU VIEWED THAT REVENUE!');
};

export default viewRevenueButton;
