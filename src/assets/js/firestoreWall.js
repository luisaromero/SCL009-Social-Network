import {} from "./firebaseInit.js";
import{postPrint} from '../views/templateWall.js'


export const createPostFb = (publish)=>{//ponemos la variable que contiene el post
    let user = firebase.auth().currentUser; //trae la informacion del usuario que esta activo
//agregar datos
let db = firebase.firestore();//contiene firestore

db.collection("posts").add({//aqui es donde quedan guardados los post

            usuario: user.email,
            userphoto: user.photoURL,
            displayName: user.displayName,
            descripcion:publish,
            likes: 0
           
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    readPostFb();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}





//leer el post, lo muestre en el muro

export const readPostFb = () => {
    console.log("estoy dentro del read");
    containerWallPost.innerHTML = '';
    let db = firebase.firestore();
    db.collection("posts").get().then((querySnapshot) => { 

   //     if(document.getElementById("containerWallPost")){
    //     document.getElementById("containerWallPost").innerHTML="";
      //  }
           querySnapshot.forEach((doc) => {
            postPrint(doc)
    // -------------------ficha de comentarios----------------------                      
  

           })
           })
}               
    