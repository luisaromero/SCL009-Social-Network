import { templateStart } from './templateStart.js'


export const templateAbout =() => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <h1>KETRAWE</h1>
  </div>
  `
    document.getElementById('root').innerHTML = `
    <div class="somos">
    <div class="img"> 
    </div>
     <p>Somos un lugar de encuentro entre humanes y su relación con la tierra, donde podemos compartir la experiancia, los saberes   aprendizajes,semillas, eventos y reportajes sobre huertos de todas las formas y colores, junto con la posibilidad de encontrasre en las huertas comunitarias existentes en tu comuna.
      !mejoremos la vida a través de la tierra!</p>
     <button id="atras" ></button>
     </div>

    `
    document.getElementById('atras').addEventListener('click', () => {
        templateStart();
        window.location.hash = '#/inicio';
})}
