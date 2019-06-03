    
import { templateAbout } from './templeSigin.js';

export const templateHome = () => {
    document.getElementById('root').innerHTML = ` 
    <div class=contenedor>
    <button id="inicia" class="btn">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate" class="btn">Registrate</button>
    <button id="google">Accede con google</button>
    </div>`
    
  document.getElementById('registrate').addEventListener('click', () => {
   
    templateAbout();
 
    window.location.hash = '#/registrate';
  })
}
