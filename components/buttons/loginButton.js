import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON

const loginButton = () => {
  const domString = '<img src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="HHPWlogo" width="40%" height="40%"><button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
