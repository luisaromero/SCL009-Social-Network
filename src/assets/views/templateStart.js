import { validateGoogle } from './../js/auth.js'; 

export const templateStart = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  <button id="btnAbout" >Quienes somos</button>
  </div>
  ` 
  document.getElementById('root').innerHTML = ` 
   
    <div class="container">
    <button id="btnLogIn" class="btn">Inicia sesión</button>
    <button id="btnRegister" class="btn">Registrate</button>
    <button id="btnGoogle">Acceder con Google</button>
    `
    
  document.getElementById('containerFoot').innerHTML = '';  
  document.getElementById('btnRegister').addEventListener('click', () => {
    //templateRegister();
    window.location.hash = '#/register';

  })
  document.getElementById('btnAbout').addEventListener('click', () => {
    // templateAbout();
    window.location.hash = '#/about';
  })
  document.getElementById('btnLogIn').addEventListener('click', () => {
    // templateLogIn();
    window.location.hash = '#/logIn';
  })
  document.getElementById('btnGoogle').addEventListener('click', () => {
    validateGoogle();
    // window.location.hash = '#/muro'
  })
}
