    
import { templateAbout } from './templeSigin.js';

export const templateHome = () => {
    document.getElementById('root').innerHTML = ` <button id="inicia">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate">Registrate</button>
    <button id="google">Accede con google</button>
    </div>`
  document.getElementById('registrate').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
}
