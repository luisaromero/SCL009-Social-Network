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
    document.getElementById('root').innerHTML = `<div class="contenedor
    ">
    <h4>Ingreso de usuaries</h4>
    <input id="mail2" type="text" placeholder="Ingresa tu correo">
    <p id ="invalidEmail"><p>
    <input id= "contraseña2" type="password" placeholder="Ingresa tu contraseña">
    <p id ="invalidcontraseña2"><p>
    <button id="ingresar" class ="btn" type="button">Acceder</button>
    </div>`
    document.getElementById('ingresar').addEventListener('click', () => {
      
        let email3= document.getElementById("mail2").value;
        let password3=document.getElementById("contraseña2").value; 
        let user = firebase.auth().currentUser;
        let regEx =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        btnIngresar(email3,password3)
        if (!regEx.test(email3)){
          document.getElementById("invalidEmail").innerHTML="Ingresa email valido"
        }
       
        if (password3.length <=6){
          document.getElementById("invalidcontraseña2").innerHTML="Ingresa contraseña mayor a 6 digitos"
      }
        if (user) {
        window.location.hash = '#/muro';
        }
})
}