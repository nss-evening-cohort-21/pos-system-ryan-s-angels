const clearDom = () => {
  document.querySelector('#homeLoggedOut').innerHTML = '';
  document.querySelector('#homeLoggedIn').innerHTML = '';
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#cardsOnDom').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
};

export default clearDom;
