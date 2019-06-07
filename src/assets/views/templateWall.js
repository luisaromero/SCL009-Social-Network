
import { cerrar,observador} from '../js/sign.js';

export const templateWall =() => {
    let user = firebase.auth().currentUser;
    observador(user)
 switch(user){
     case (!user):
    window.location.hash = '';
    break;
  case(user): 
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
window.location.hash = '#/inicio';

})
document.getElementById('atras').addEventListener('click', () => {
window.location.hash = '#/inicio';})
 break;
}
 }
