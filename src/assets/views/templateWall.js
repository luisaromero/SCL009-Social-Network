import {} from "../js/firebaseInit.js";
import { closeSesion} from '../js/auth.js';
import { createPostFb} from './../js/firestoreWall.js';

export const templateWall =() => {
document.getElementById( "conteinerHead").innerHTML= ` 
<div class= "conteinerH">
<img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
</div>
`
  document.getElementById('root').innerHTML = `
  <div  id="myModal" class= "contenedor">
  
        <textarea name="toPost" id="toPost" class="toPost" cols="30" rows="10" placeholder="¿Qué  estás pensando?"></textarea>
      
 
      <button id="createPost" type="button" class="btnPost" >Publicar</button>
     
      
   <button id="btnClose" class= "btn" >cierra sesión</button>
   </div>  
   </div>
   <div  id="containerWallPost" >

   </div>
   `

 
  document.getElementById('createPost').addEventListener('click', () => {
    let publish= document.getElementById("toPost").value
 console.log(publish);
    console.log("btn publicar funciona");
    createPostFb (publish)
    
  })

  

document.getElementById('btnClose').addEventListener('click', () => {
  closeSesion();
window.location.hash = '#/inicio';

})

}


export function postPrint(doc) {
  document.getElementById("containerWallPost").innerHTML+=
  ` <div  id="myModal" class= "contenedor">

  <textarea name="answer" id="toPost" class="toPost" cols="30" rows="10">${doc.data().descripcion}</textarea>

  <button id="coment" type="button" class="btnPost" >comentar</button>
     

</div>
      `

  
}


 
