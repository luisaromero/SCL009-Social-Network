
//-------------REGISTRO DE USUARIO----------------

export function register(a,b) {
    console.log("funciona boton enviar a > "+a+" | b > "+b);
    
    firebase.auth().createUserWithEmailAndPassword(a,b)
    .then(function(){

      check();
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message
        alert('Este email ya se ha registrado antes.')
        console.log(errorCode);
        console.log(errorMessage);
      });
   }

//-----------------INGRESO USUARIO REGISTRADO ------------------
export function logIn(a,b){
  firebase.auth().signInWithEmailAndPassword(a,b)
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      alert(errorMessage);
  
    })
}


// ----------------------FUNCION DE VERIFICAR----------------------
 export function check(){
    var user = firebase.auth().currentUser;
if(!user) return;
user.sendEmailVerification().then(function() {
// Email sent.
}).catch(function(error) {
  alert(error)
// An error happened.
});
}
check();

// -------------------fUNCION DE OBSERVADOR---------------------------------------------
export function observer(){
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
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
    } else {
      console.log("no existe usuario activo")

      // User is signed out.
      // ...
    }
  });
}
   export function signOff(){
   firebase.auth().signOut()
  .then(function(){
  })
    .catch(function(error){
    console.log(error)
   })
  }
// --------------- Funcion de entrar con google-------------------------------------
  export function validateGoogle(){
 var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
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
    

