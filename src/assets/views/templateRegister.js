
import { templateStart } from './templateStart.js';
import {registerUser,verifyAccount} from '../js/auth.js'
import {validateRegister} from '../../test/validation.js'

verifyAccount();


export const templateRegister = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
 <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  </div>
  `
  document.getElementById('root').innerHTML = `
  <div class="contenedor">
  <h4>Registrate</h4>
  <input id="name" type="text" placeholder="Ingresa tu nombre">
  <p id="invalidName"></p>
  <input id="email" type="email" placeholder="Ingresa tu correo">
  <p id="invalid"></p>
  <input id="password" type="password" placeholder="Ingresa tu contraseña">
  <p id="invalidpassword"></p>
  <div class="send_back">
     <button id="btnSend" type="button">Enviar</button>
     <button id="btnBack" type="button"></button>
  </div>
</div> `
    document.getElementById('btnSend').addEventListener('click', () => {
      document.getElementById('invalid').innerHTML="";
      document.getElementById('invalidpassword').innerHTML="";
      document.getElementById('invalidName').innerHTML="";
      let email= document.getElementById("email").value;
       let  password=document.getElementById("password").value;
       let name = document.getElementById("name").value;
       let regular =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
       let verif=validateRegister(email , password);
       if (!regular.test(email)){
        document.getElementById("invalid").innerHTML="Ingresa email valido"
      }
       if (password.length <=6){
        document.getElementById("invalidpassword").innerHTML="Ingresa contraseña mayor a 6 digitos"
       } 
       if(name.length <=3||name.length >=19){ 
        document.getElementById("invalidName").innerHTML="Ingresa nombre entre 4 y 18 digitos"
           }
       if(verif=== true) { 
        registerUser(name, email, password);
           Swal.fire('Cuenta registrada con exito , te hemos enviamos un corrreo de confirmación')
           window.location.hash = '#/inicio'
     }
    })
        
  document.getElementById('btnBack').addEventListener('click', () => {
    // Nos lleva al inicio de la pagina
    // cambiar el hash a #/inicio
    templateStart();
    window.location.hash = '#/inicio';
  })
}