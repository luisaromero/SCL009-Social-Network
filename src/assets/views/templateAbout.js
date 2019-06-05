import { templateStart } from './templateStart.js'


export const templateAbout =() => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <h1>KETRAWE</h1>
  </div>
  `
    document.getElementById('root').innerHTML = `
    <div class="contenedor">
  <p>Quienes somos ... </p>
  <button id="atras" ></button>
  </div>
    `
    document.getElementById('back').addEventListener('click', () => {
        templateStart();
        window.location.hash = '#/inicio';
})}
