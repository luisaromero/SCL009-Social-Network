    
import { templateRegister } from './templateRegister.js';
import { templateAbout } from './templateAbout.js'
import { templateSignIn } from './templateSignIn.js'
import { templateWall } from './templateWall.js'
import {validateGoogle} from '../js/sign.js'

export const templateStart = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  <button id="btnAbout" >Quienes somos </button>
  </div>
  ` 
  document.getElementById('root').innerHTML = ` 
   
    <div class="container">
    <button id="inicia" class="btn">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate" class="btn">Registrate</button>
    <button id="btnGoogle">Acceder con Google</button>
    `
    
  document.getElementById('registrate').addEventListener('click', () => {
    templateRegister();
    window.location.hash = '#/registrate';
    
  })
  document.getElementById('btnAbout').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
    document.getElementById('inicia').addEventListener('click', () => {
      templateSignIn();
      window.location.hash = '#/entrar';
})
document.getElementById('btnGoogle').addEventListener('click', () => {
  validateGoogle();
  window.location.hash = '#/muro'
})
}
