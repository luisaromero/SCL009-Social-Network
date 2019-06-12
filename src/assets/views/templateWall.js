import {} from "../js/firebaseInit.js";
import { closeSesion} from '../js/auth.js';
import { readPostFb} from './../js/firestoreWall.js';
import {createPostFb} from './../js/firestoreWall.js';



export function postPrint(doc) {
  document.getElementById("containerWallPost").innerHTML+=
  ` <div  id="myModal" class= "contenedor">
<div class= "conteinerUser">
<p>${doc.data().displayName}</p>
<textarea name="answer" id="toPost" class="comentPost" cols="30" rows="10">${doc.data().descripcion}</textarea>

</div>
<div class="btnComent">
  
  <button id="coment" type="button" class="btnPost" >comentar</button>
  <button id="clearPost" type="button" class="btnPost" >Eliminar</button>
 </div>
</div>
      `

  
}
export const templateWall =() => {
document.getElementById( "conteinerHead").innerHTML= ` 
<div class= "conteinerH">
<img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
<button id="btnClose" class= "btnClose" >cierra sesión</button>
</div>
`
  document.getElementById('root').innerHTML = `
  <div  id="myModal" class= "contenedor">
  <div id="user"></div>
        <textarea name="toPost" id="toPost" class="toPost" cols="30" rows="10" placeholder="¿Qué  está pasando con tu huerta?"></textarea>
      
 
      <button id="createPost" type="button" class="btnPost" >Publicar</button>
      
     
     
      
  
   </div>  
   </div>
   <div  id="containerWallPost" >
   

   </div>
   `

   readPostFb()//llamando esat funcion se muetsarn los post que ya estan en la pagina al cargarla
  document.getElementById('createPost').addEventListener('click', () => {
    let publish= document.getElementById("toPost").value
 console.log(publish);
    console.log("btn publicar funciona");
    if(publish.length >=1) {
      createPostFb(publish)
    }
    
    
  })
 

  

document.getElementById('btnClose').addEventListener('click', () => {
  closeSesion();
window.location.hash = '#/inicio';

})
}



 
