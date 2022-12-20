const clearDom = () => {
  document.querySelector('#home-logged-out').innerHTML = '';
  document.querySelector('#home-logged-in').innerHTML = '';
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#cards-on-dom').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

const clearDomLogout = () => {
  document.querySelector('#home-logged-out').innerHTML = '';
  document.querySelector('#home-logged-in').innerHTML = '';
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#cards-on-dom').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export { clearDom, clearDomLogout };
