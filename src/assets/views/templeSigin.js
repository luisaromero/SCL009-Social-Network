import { templateHome } from './templeInitial.js';

export const templateAbout = () => {
  document.getElementById('root').innerHTML = `<h4>Registro de usuaries</h4>
  <input id="Mail" type="text" placeholder="Ingresa tu correo">
  <input id= "Contraseña" type="password" placeholder="Ingresa tu contraseña">
  <button id="Enviar" type="button">Enviar</button>
  <button id="atras" type="button">Atras</button>`

  document.getElementById('atras').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateHome();
    window.location.hash = '#/home';
  })
}