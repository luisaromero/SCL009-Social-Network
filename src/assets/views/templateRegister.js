
import { templateStart } from './templateStart.js';
import {verificar} from '../js/sign.js'
import {btnEnviar} from '../js/sign.js'
import {validateRegister} from '../js/auth.js'
verificar();

export const templateRegister = () => {
  document.getElementById('root').innerHTML = `<h4>Registrate</h4>
  <input id="mail" type="text" placeholder="Ingresa tu correo">
  <p id ="invalidemail"><p>
  <input id= "contraseña" type="password" placeholder="Ingresa tu contraseña">
  <p id ="invalidpassword"><p>
  <button id="enviar" type="button">Enviar</button>
  <button id="atras" type="button"></button>
    `
    document.getElementById('enviar').addEventListener('click', () => {
      let email= document.getElementById("mail").value;
       let  password=document.getElementById("contraseña").value;
       if(email ===""){
        document.getElementById('invalidemail').innerHTML=`Debes ingresar un email`;
    }
    if (password ===""){
        document.getElementById('invalidpassword').innerHTML=`Debes ingresar constraseña`;
    }
      
    btnEnviar(email, password,name);
    validateRegister(email , password) 
    })
  document.getElementById('atras').addEventListener('click', () => {
    // Nos lleva al inicio de la pagina
    // cambiar el hash a #/inicio
    templateStart();
    window.location.hash = '#/inicio';
  })
}