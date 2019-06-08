//Pantalla de registro de usuario
import { templateStart } from './templateStart.js';
import {verificar} from '../js/sign.js'
import {btnEnviar} from '../js/sign.js'
import {validateRegister} from '../js/auth.js'
import {templateSignIn} from './templateSignIn.js'
verificar();

export const templateRegister = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
      <div class= "conteinerH">
      <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
      </div>
      `
  document.getElementById('root').innerHTML = `
      <div class="contenedor">
      <h4>Registrate</h4>
      <input id="email" type="text" placeholder="Ingresa tu correo">
      <p id ="invalid"><p>
      <input id= "password" type="password" placeholder="Ingresa tu contraseña">
      <p id="invalidpassword"></p>
      <div class="enviarAtras">
      <button id="enviar" class="btn1" >Enviar</button>
      <button id="atras" type="button"></button>
      </div>
      </div>
      `
  document.getElementById('enviar').addEventListener('click', () => {
  document.getElementById('invalid').innerHTML="";
  document.getElementById('invalidpassword').innerHTML="";
      let emailUser= document.getElementById("email").value;
      let  passwordUser=document.getElementById("password").value;
      let regular =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      let verif=validateRegister(emailUser , passwordUser);
        if (!regular.test(emailUser)){
           document.getElementById("invalid").innerHTML="Ingresa email valido"
           }
       if (passwordUser.length <=6){
          document.getElementById("invalidpassword").innerHTML="Ingresa contraseña mayor a 6 digitos"
          } 
       if(verif=== true) { 
           btnEnviar(emailUser , passwordUser);
           Swal.fire("Cuenta registrada con exito , te hemos enviamos un corrreo de confirmación" , "success")
           templateSignIn();
           window.location.hash = '#/entrar'
           }})
  document.getElementById('atras').addEventListener('click', () => {
    // Nos lleva al inicio de la pagina
    // cambiar el hash a #/inicio
    templateStart();
    window.location.hash = '#/inicio';
  })
  }