import { templateHome } from './templeInitial.js';
import {verificar} from '../js/sign.js'
import {btnEnviar} from '../js/sign.js'


verificar();

export const templateAbout = () => {
  document.getElementById('root').innerHTML = `<h4>Registrate</h4>
  <input id="mail" type="text" placeholder="Ingresa tu correo">
  <input id= "contraseña" type="password" placeholder="Ingresa tu contraseña">
  <button id="enviar" type="button">Enviar</button>
  <button id="atras" type="button">Atras</button>
    `
       
    
  
    document.getElementById('enviar').addEventListener('click', () => {
    let email= document.getElementById("mail").value;
     let  password=document.getElementById("contraseña").value;
    btnEnviar(email, password);
      console.log("funciona boton enviar");
      
     

     
  
    })
  document.getElementById('atras').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateHome();
    window.location.hash = '#/inicio';
  })
}