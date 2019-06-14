import {} from "./firebaseInit.js";

//referencia madre
let storage = firebase.storage(); //nueva
// referencia hije crea una referencia  de almacenamiento 
let storageRef = storage.ref();

export function registerUser (name, email, password) {
  
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(function(){
    
    let user = firebase.auth().currentUser;
    let uid = user.uid;
      //console.log(uid);
       //llamamos a saveUser cuando el usuario se registre
       verifyAccount();
       
  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message
      Swal.fire('Este email ya se ha registrado antes.')
      window.location.hash ='#/registrate'
      console.log(errorCode);
      console.log(errorMessage);
  //alert(errorCode);
  //alert(errorMessage);
      // ...
    }); 
   
} 

//-----------------INGRESO USUARIO REGISTRADO ------------------
export function logIn(email2, password2){
firebase.auth().signInWithEmailAndPassword(email2, password2).then(function(){
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorMessage==='The password is invalid or the user does not have a password.'){
      Swal.fire('La contraseña es inválida o el usuario no tiene contraseña')
    }if (errorCode==='auth/user-not-found'){
      Swal.fire('Email no registrado')
    }
    console.log(errorCode)
    console.log(errorMessage);

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



export function observer(){

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.hash = '#/muro';
    //llamamos a la función que nos muestra lo que puede ver usuarix logeadx
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;

    // userName.textContent = displayName;
    // // userName.textContent = user.email;

    // window.onload = function () {
    // observer();
    // }
  
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
  var photo = user.photoURL
  
  
  

  
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
 