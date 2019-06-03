
import { templateStart } from './templateStart.js';
import {btnEnviar,verificar} from '../js/sign.js'

verificar();

export const templateRegister = () => {
  document.getElementById('root').innerHTML = `<h4>Registrate</h4>
  <input id="mail" type="text" placeholder="Ingresa tu correo">
  <input id= "contraseña" type="password" placeholder="Ingresa tu contraseña">
  <button id="enviar" type="button">Enviar</button>
  <button id="atras" type="button">Atras</button>
    `
    document.getElementById('enviar').addEventListener('click', () => {
          btnEnviar()
      console.log("funciona boton enviar");
     

     
  
    })
  document.getElementById('atras').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateStart();
    window.location.hash = '#/inicio';
  })
}