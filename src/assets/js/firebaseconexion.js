
  import {} from "./firebaseInit.js";
  // --------------Creando publicacion------------------------------
  export const createPostFb = (titulo, descripcion, usuario , containerWallPost)=>{
    let user = firebase.auth().currentUser;
    console.log(user);    
    let myDate = new Date();
    let dateValue = myDate.getFullYear()+'-' + myDate.getMonth()+'-' + myDate.getDate();
    // let hours = myDate.getHours().toString() + myDate.getMinutes().toString() + myDate.getSeconds().toString();
    // Initialize Cloud Firestore through Firebase
    let db = firebase.firestore();
    db.collection("posts").add({
            titulo: titulo,
            descripcion: descripcion,
            usuario: user.email,
            userphoto: user.photoURL,
            displayName: user.displayName,
            likes: 0,
            fecha: myDate
            // hora: hours
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            readPostFb(containerWallPost);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
  }

export const readPostFb = (containerWallPost) => {
    console.log("estoy dentro del read");
    containerWallPost.innerHTML = '';
    let db = firebase.firestore();
    db.collection("posts").get().then((querySnapshot) => { // sin necesidad de eliminar .then, igual se logra ingreso de datos en tiempo real 
           querySnapshot.forEach((doc) => {
             containerWallPost.innerHTML  += 

    // -------------------ficha de comentarios----------------------                      
    `  <div class="movie_card" id="tomb" >
  <div class="info_section">
    <div class="movie_header"   >
    <div style="float:left">
        <img class="userPhoto"  src="${doc.data().userphoto}"  alt=""></div>
            <p class="T1">${doc.data().displayName}</p>
                      <p class="T4"></p>
      <span class="minutes">${doc.data().fecha}</span>
     </div>
    <div class="movie_desc">
      <p class="text">
      ${doc.data().descripcion}
      </p>
    </div>
    <div class="movie_social">
    
      <ul>
        <li><i class="material-icons">share</i></li>
        <li><i class="material-icons"></i></li>
        <li><i id="deleteFb" data-id="${doc.id}"  class="material-icons">delete</i></li>
        <li><i id="editPostFb" data-id="${doc.id}"  class="material-icons">edit</i></li>
        <li><i class="material-icons">chat_bubble</i></li>    
      </ul>
    </div>
  </div>
  <div class="blur_back tomb_back" >
  
  </div>
</div>
            `
        });  
   
function deletePost(containerWallPost) {
  console.log("estoy dentro de borrar");
  let id = this.getAttribute("data-id");
  console.log("mi id " + id);
  deletePostFb(id, containerWallPost);
}
document.getElementById("deleteFb").addEventListener("click", deletePost, false)

function editPost() {
  console.log("estoy dentro de editar");
  let id = this.getAttribute("data-id");
  console.log("mi id " + id);
  editPostFb(id);
}
document.getElementById("editPostFb").addEventListener("click", editPost, false)
});
}


//-------------Borrar publicacion-----------------------------
export const deletePostFb = (id, containerWallPost)=>{  
    console.log("id a borrar es " +  id); 
    let db = firebase.firestore();
    db.collection("posts").doc(id).delete().then(function () {
        console.log("Documento borrado!");
        readPostFb(containerWallPost);
    }).catch(function (error) {
        console.error("Error al borrar documento: ", error);
    });
} 

//-------------- Editar la publicacion-----------------------
export const editPostFb = (id, titulo, descripcion, dateValue, likes)=>{  
  console.log("id a editar es " +  id); 
  let db = firebase.firestore();
  let washingtonRef = db.collection("posts").doc(id);
// Set the "capital" field of the city 'DC'
return washingtonRef.update({
  titulo: titulo,
  descripcion: descripcion,
  likes: likes,
  fecha: dateValue
})
.then(function() {
    console.log("Document editado!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error al editar el document: ", error);
});

}