

//-------------REGISTRO DE USUARIO----------------

export function btnEnviar(a,b) {
  
  firebase.auth().createUserWithEmailAndPassword(a,b)
  .then(function(){

    verificar();
  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode)
      alert(errorMessage)

  //alert(errorCode);
  //alert(errorMessage);
      // ...
    });
}
//ingreso de usuariess registrades con firebase
//export function ingresar(){
//-----------------INGRESO USUARIO REGISTRADO ------------------
export const btnIngresar = document.getElementById("ingresar");
btnIngresar.addEventListener("click", () => {
  let email2= document.getElementById("mail2").value;
  let password2=document.getElementById("contraseña2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)

  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
  
    });
})


//registro usuario
export function verificar(){
  var user = firebase.auth().currentUser;
if(!user) return;
user.sendEmailVerification().then(function() {
// Email sent.
}).catch(function(error) {
  alert(error)
// An error happened.
});
}
verificar();


export function observador(){

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
          aparece();//llamamos a la función que nos muestra lo que puede ver usuarix logeadx
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
    
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}
observador();



export function aparece(){// llamamos al div dodne se crea lo que puede ver el o la usuarix activx esta funcion se llama en la funcion de observador
let contenido = document.getElementById("contenido");
contenido.innerHTML= `
<h5> </h5>
<button id="cerrar" type="button">cierra sesión</button>
`
}
aparece();
//cerrar sesion
/*export const btnCerrar=document.getElementById("cerrar").addEventListener ("click",()=>{

console.log("esta cerrando")

firebase.auth().signOut()
.then(function(){
    console.log("saliirrrr")
})
.catch(function(error){
    console.log(error)
})




})
btnCerrar();*/
