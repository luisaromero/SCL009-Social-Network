import { templateStart } from './templateStart.js'


export const templateAbout =() => {
  document.getElementById( "conteinerHead").innerHTML= ` 
  <div class= "conteinerH">
  <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
  </div>
  `
    document.getElementById('root').innerHTML = `
    <div class="aboutUs">
    <div class="img"> 
    </div>
     <p>Somos un lugar de encuentro entre humanes y su relación con la tierra, donde podras compartir la experiencia,  podras preguntar
      en el muro acerca de huertos y tus plantas  , si quieres plantar y aún no sabes mucho al respecto , los usuarios podrán responder tus dudas.
      Además estamos compartiendo constantemente eventos sobre compost , vida sustentable , huertas comunitarias y permacultura.
      <br>
      ¡Mejoremos la vida a través de la tierra!
      <br>
      <br>¡Unete a nuestra red de huerteros!</p>
     <button id="btnBack" ></button>
     </div>
    `
    document.getElementById('btnBack').addEventListener('click', () => {
        window.location.hash = '#/start';
})}
