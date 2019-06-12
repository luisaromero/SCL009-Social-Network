import {} from "./firebaseInit.js";

//referencia madre
let storage = firebase.storage(); //nueva
// referencia hije crea una referencia  de almacenamiento 
let storageRef = storage.ref();
//-------------REGISTRO DE USUARIO----------------

export function registerUser (name, email, password, profilePhoto) {
  
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(function(){
   
    let starsRef = storageRef.child('profilePhoto/' + profilePhoto);
     // creo carpeta hijo para guardar las fotos del usuario
     starsRef.getDownloadURL().then(function (url) { // rescato URL de la foto
      profilePhoto = url; // guardo la URL en profilePhoto      
      let user = firebase.auth().currentUser;//toma informacion del perfil del usuario
      user.updateProfile({
        //hace visible nomre y foto
        displayName: name,
        photoURL: profilePhoto
     
      }).then (function (){
        console.log(user);
      })
      })
  })
  

  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message
      alert('Este email ya se ha registrado antes.')
      console.log(errorCode);
      console.log(errorMessage);
  //alert(errorCode);
  //alert(errorMessage);
      // ...
    });
    verifyAccount()
}
//ingreso de usuariess registrades con firebase



//-----------------INGRESO USUARIO REGISTRADO ------------------
export function logIn(email2, password2){
console.log("holados");
firebase.auth().signInWithEmailAndPassword(email2, password2)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    alert(errorMessage);

  })
}



//registro usuario
export function verifyAccount(){
  var user = firebase.auth().currentUser;
if(!user) return;
user.sendEmailVerification().then(function() {
// Email sent.
}).catch(function(error) {
alert(error)
// An error happened.
});
}
verifyAccount();


export function observer(){

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.hash = '#/muro';
    //llamamos a la función que nos muestra lo que puede ver usuarix logeadx
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
  
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
   console.log(uid)
   console.log("usuario activo")
    
  }
   else {
    window.location.hash = '#/inicio';
    console.log("no existe usuario activo")

    // User is signed out.
    // ...
  }
});
}


/*
export function aparece(){// llamamos al div dodne se crea lo que puede ver el o la usuarix activx esta funcion se llama en la funcion de observador
let contenido = document.getElementById("contenido");
contenido.innerHTML= `
<h5></h5>
<button id="cerrar" type="button">cierra sesión</button>
`
}
aparece();*/
//cerrar sesion
export function closeSesion(){

console.log("esta cerrando")

firebase.auth().signOut()
.then(function(){
  console.log("saliirrrr")
})
.catch(function(error){
  console.log(error)
})

}

export function validateGoogle(){

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  observer();
  // ...
})


.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
  /*
//----------Imagen de perfil-------------------
    // Vigilar selección archivo
    export const upLoadProfilePhoto  = (e, uploader) => {
      //Obtener archivo
      let file = e.target.files[0];
      // Crear un storage ref
      let storageRef = firebase.storage().ref('profilePhoto/' + file.name);
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
    };*/
