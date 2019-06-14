import {verifyAccount} from '../js/auth.js'
import { logIn,observer} from '../js/auth.js'
import {validateEs} from '../../test/validation.js'
verifyAccount()

export const templateLogIn =() => {
    document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">

  </div>
  `
    document.getElementById('root').innerHTML = `<div class="contenedor
    "
    <h4>Ingreso de usuaries</h4>
    <input id="email2" type="text" placeholder="Ingresa tu correo">
    <p id ="invalidEmail"><p>
    <input id= "password2" type="password" placeholder="Ingresa tu contraseña">
    <p id ="invalidcontraseña2"><p>
    <button id="btnLogIn" class ="btn" type="button">Acceder</button>
    </div>`
    document.getElementById('btnLogIn').addEventListener('click', () => {
     console.log("hola");      
        let email2= document.getElementById("email2").value;
        let password2=document.getElementById("password2").value; 
        validateEs(email2,password2);
        logIn(email2,password2)
        observer()
        window.location.hash = '#/muro';
                     
                  })
                }
