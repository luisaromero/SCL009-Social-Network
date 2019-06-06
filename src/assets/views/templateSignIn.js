import {verificar} from '../js/sign.js'
import { btnIngresar} from '../js/sign.js'
import{templateWall} from './templateWall.js'
verificar()

export const templateSignIn =() => {
    document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <h1>KETRAWE</h1>
  </div>
  `
    document.getElementById('root').innerHTML = `<div id="ingreso">
    <h4>Ingreso de usuaries</h4>
    <input id="mail2" type="text" placeholder="Ingresa tu correo">
    <input id= "contraseña2" type="password" placeholder="Ingresa tu contraseña">
    <button id="ingresar" class ="btn" type="button">Acceder</button>
    </div>`
    document.getElementById('ingresar').addEventListener('click', () => {
        let email2= document.getElementById("mail2").value;
        let password2=document.getElementById("contraseña2").value; 
        btnIngresar(email2,password2)
        templateWall();
        window.location.hash = '#/muro';

})
}