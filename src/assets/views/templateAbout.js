import { templateStart } from './templateStart.js'


export const templateAbout =() => {
    document.getElementById('root').innerHTML = `
  <p>Quienes somos ... </p>
  <button id="back" class="btn">Atras</button>
    `
    document.getElementById('back').addEventListener('click', () => {
        templateStart();
        window.location.hash = '#/inicio';
})}
