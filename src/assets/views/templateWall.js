import{templateStart} from './templateStart.js'
import { cerrar } from '../js/sign.js';

export const templateWall =() => {

    document.getElementById( "conteinerHead").innerHTML= ` 
    <div class= "conteinerH">
    <h1>KETRAWE</h1>
    </div>
    `
      document.getElementById('root').innerHTML = `
      <div class= "contenedor">
       <p>aqui va lo de la denis</p>
       <button id="atras" ></button>
       <button id="cerrar" class= "btn" >cierra sesión</button>
       </div>


       
  
      `
document.getElementById('cerrar').addEventListener('click', () => {
 cerrar();
 templateStart();
 window.location.hash = '#/inicio';

    })
document.getElementById('atras').addEventListener('click', () => {
    templateStart();
    window.location.hash = '#/inicio';
})};