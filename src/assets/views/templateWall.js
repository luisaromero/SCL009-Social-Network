
import {signOff,observer} from '../js/auth.js';

export const templateWall =() => {
    let user = firebase.auth().currentUser;
if (!user){
    window.location.hash ='#/'
} if(user){
    
document.getElementById( "conteinerHead").innerHTML= ` 
<div class= "conteinerH">
<img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
</div>
`
  document.getElementById('root').innerHTML = `
  <div class= "container">
   <p>aqui va lo de la denis</p>
   <button id="btnBack" ></button>
   <button id="btnClose" class= "btn" >cierra sesión</button>
   </div>
  `
document.getElementById('btnClose').addEventListener('click', () => {
signOff();
window.location.hash = '#/inicio';

})
document.getElementById('btnBack').addEventListener('click', () => {
window.location.hash = '#/inicio';})
}
}


 
