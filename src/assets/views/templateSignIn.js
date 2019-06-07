import {verificar} from '../js/sign.js'
import { btnIngresar,observador} from '../js/sign.js'
import{templateWall} from './templateWall.js'
observador()
verificar()

export const templateSignIn =() => {
    document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">

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
        let user = firebase.auth().currentUser;
        btnIngresar(email2,password2)
        if (user) {
        window.location.hash = '#/muro';
        }
})
}