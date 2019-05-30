//registrar ususaries a firebase
function registrar(){
    let email= document.getElementById("mail").value;
    let password=document.getElementById("contraseña").value;

    firebase.auth().createUserWithEmailAndPassword( email,password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

    alert(errorCode);
    alert(errorMessage);
        // ...
      });email-password.html
}
//ingreso de usuariess registrades con firebase
function ingresar(){
    let email2= document.getElementById("mail2").value;
    let password2=document.getElementById("contraseña2").value;

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
    alert(errorCode);
    alert(errorMessage);
        // ...
      });email-password.html
}
//observador que ve si entra o se registra un usuarie antigue o nuevx
function observador(){
  
    console.log("existe usuario activo")
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
              aparece();//llamamos a la función que nos muestra lo que puede ver usuarix logeadx
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          console.log(email)
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
            console.log("no existe usuario activo")
          // User is signed out.
          // ...
        }
      });email-password.html
}
observador();

function aparece(){// llamamos al div dodne se crea lo que puede ver el o la usuarix activx esta funcion se llama en la funcion de observador
    let contenido = document.getElementById("contenido");
    contenido.innerHTML= "solo puede ver esto unx usuarix activx"
}