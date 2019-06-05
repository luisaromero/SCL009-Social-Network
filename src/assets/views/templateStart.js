    
import { templateRegister } from './templateRegister.js';
import { templateAbout } from './templateAbout.js'

export const templateStart = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <h1>KETRAWE</h1>
  <button id="about" >Quienes somos </button>
  </div>
  ` 
  document.getElementById('root').innerHTML = ` 
   
    <div class="contenedor">
    <button id="inicia" class="btn">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate" class="btn">Registrate</button>
    <button id="google">Acceder con Google</button>
   
    </div>`
    
  document.getElementById('registrate').addEventListener('click', () => {
    templateRegister();
    window.location.hash = '#/registrate';
    
  })
  document.getElementById('about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
})}
