    
import { templateRegister } from './templateRegister.js';
import { templateAbout } from './templateAbout.js'
import { templateLogIn } from './templateLogIn.js'
import {validateGoogle} from '../js/auth.js'



export const templateStart = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  <button id="about" >Quienes somos </button>
  </div>
  ` 
  document.getElementById('root').innerHTML = ` 
   
    <div class="contenedor">
    <button id="btnLogIn" class="btn">Inicia sesión</button>
    <h2>O</h2>
    <button id="btnSignIn" class="btn">Registrate</button>
    <button id="google">Acceder con Google</button>
    `
    
  document.getElementById('btnSignIn').addEventListener('click', () => {
    templateRegister();
    window.location.hash = '#/registrate';
    
  })
  document.getElementById('about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
    document.getElementById('btnLogIn').addEventListener('click', () => {
      templateLogIn();
      window.location.hash = '#/entrar';
})
document.getElementById('google').addEventListener('click', () => {
  validateGoogle();
  window.location.hash = '#/muro'
})
}
