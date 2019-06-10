import {} from "./../js/firebaseInit.js";
import { signOut } from '../js/auth.js';
import {templateHeadWall, templateFootWall} from './templateHFWall.js';
import { createPostFb, readPostFb, deletePostFb,  editPostFb } from './../js/firebaseconexion.js';


export const templateWall =() => {
  // --------Carga navegador nav------------------
  let user = firebase.auth().currentUser; // Para llamar los datos del usuario actual
document.getElementById("conteinerHead").innerHTML=  
     ' <div id="containerWallHead">'
     + templateHeadWall();
     +' </div> ';
     
//------------------Modal--------------------------
document.getElementById("conteinerHead").innerHTML += `
 <div id="miVentana" class="miVentana">
    <div id="containerWallCreate"> 
      <div style="float:left"><img class="userPhoto" src="${user.photoURL}"  alt=""></div>
      <div style="float:left">
        <div class="descripcionPost">
          <textarea name="toPost" id="toPost" class="toPost" cols="30" rows="10" placeholder="¿Qué  estás pensando?"></textarea>
        </div>        
        <progress value="0" max="100" id="uploader">0%</progress>
        <input type="file" value="uploader" id="fileButton"/>
        <button id="createPost" type="button">Publicar</button>
        <button id="clouseModal" type="button">Cerrar</button>
      </div>
    </div>   
  </div>  
 `;

  document.getElementById('root').innerHTML = '<div id="containerWallPost" class="containerWallPost"></div> ';
  let containerWallPost = document.getElementById('root');
  readPostFb(containerWallPost);


  document.getElementById("containerFoot").innerHTML =
    '<div  id="containerWallFoot"> ' +
    templateFootWall(); +
  ' </div> ';

  document.getElementById('btnClose').addEventListener('click', () => {
    signOut();
  })

//----------------boton crear publicacion------------------------
const btnCreatePost = document.getElementById("createPost");
btnCreatePost.addEventListener('click', () => {
    console.log("publicando");
    createPostFb("", document.getElementById("toPost").value, "usuario1", containerWallPost);
    let ventana = document.getElementById("miVentana");
    // ventana.style.marginTop = 100 ;
    ventana.style.left = ((document.body.clientWidth - 350) / 2);
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + px;
    ventana.style.display = "none";
});

//-----------Boton hamburguesa---------------------------
const btnHambur = document.getElementById("bthambur");
btnHambur.addEventListener('click', () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    console.log("Dentro boton hambur");
})
// ----------------boton para publicar en modal---------------
const btnPublish = document.getElementById("btpublish");
btnPublish.addEventListener('click', () => {
    console.log("navbar publica");
    // function mostrarVentana() {
    console.log("estoy en la ventana");
    var ventana = document.getElementById("miVentana");
    // ventana.style.marginTop = 100 ;
    ventana.style.left = ((document.body.clientWidth - 350) / 2);
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + px;
    ventana.style.display = "block";
});
// -------------boton para cerrar el modal -----------------------
const btnClouseModal = document.getElementById("clouseModal");
btnClouseModal.addEventListener('click', () => {
    console.log("estoy cerrando el modal");
    var ventana = document.getElementById("miVentana");
    // ventana.style.marginTop = 100 ;
    ventana.style.left = ((document.body.clientWidth - 350) / 2);
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + px;
    ventana.style.display = "none";
});

// ----------------para subir imagenes-------------

//let db = firebase.firestore();
let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');
//Vigilar selección archivo
fileButton.addEventListener('change', function(e) {

    console.log("funciona boton para imagenes");
  //Obtener archivo
 
  let file = e.target.files[0];
  // Crear un storage ref
  let storageRef = firebase.storage().ref('mis_fotos/' + file.name);
  // Subir archivo
  let task = storageRef.put(file);
  // Actualizar barra progreso
  task.on('state_changed',
    function progress(snapshot) {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {
    },
    function complete() {
    }
    )
});

    
}



 
