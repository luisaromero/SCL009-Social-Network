
import { templateStart } from './templateStart.js';
import {verificar} from '../js/sign.js'
import {btnEnviar} from '../js/sign.js'
import {validateRegister} from '../js/auth.js'
verificar();

export const templateRegister = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <h1>KETRAWE</h1>
  </div>
  `
  document.getElementById('root').innerHTML = `
 
  <div class="contenedor">
  <h4>Registrate</h4>
  <input id="mail" type="text" placeholder="Ingresa tu correo">
  <p id ="invalidemail"><p>
  <input id= "contraseña" type="password" placeholder="Ingresa tu contraseña">
  <p id ="invalidpassword"><p>
  <div class="enviarAtras">
  <button id="enviar" class="btn1" >Enviar</button>
  <button id="atras" type="button"></button>
  </div>
  </div>
    `
    document.getElementById('enviar').addEventListener('click', () => {
      let email= document.getElementById("mail").value;
       let  password=document.getElementById("contraseña").value;
       let verif=validateRegister(email , password);
       if (verif=== false){
         alert("pon un correo y contraseña valido")
       }
       if (password.length <=6){
        document.getElementById("invalidpassword").innerHTML="Ingresa una contraseña mayor a 6 digitos"
       } 
    
       if(verif=== true) { 
           btnEnviar(email, password,name);
   
    document.getElementById('invalidemail').innerHTML="";
    document.getElementById('invalidpassword').innerHTML="";
     } })


  document.getElementById('atras').addEventListener('click', () => {
    // Nos lleva al inicio de la pagina
    // cambiar el hash a #/inicio
    templateStart();
    window.location.hash = '#/inicio';
  })
}