    
import { templateRegister } from './templateRegister.js';
import { templateAbout } from './templateAbout.js'
import { templateSignIn } from './templateSignIn.js'



export const templateStart = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  <button id="about" >Quienes somos </button>
  </div>
  ` 
  document.getElementById('root').innerHTML = ` 
   
    <div class="contenedor">
    <button id="inicia" class="btn">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate" class="btn">Registrate</button>
    <button id="google">Acceder con Google</button>
    `
    
  document.getElementById('registrate').addEventListener('click', () => {
    templateRegister();
    window.location.hash = '#/registrate';
    
  })
  document.getElementById('about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
    document.getElementById('inicia').addEventListener('click', () => {
      templateSignIn();
      window.location.hash = '#/entrar';
})
}
