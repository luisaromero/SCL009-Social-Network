//registrar ususaries a firebase
/*document.getElementById("registrar").addEventListener("click", ()=>{
    console.log("funcionando");
export function registrar(){
    
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
return registrar();
})*/
//registrar ususaries a firebase
//export function registrar(){

//-------------REGISTRO DE USUARIO----------------

export const btnEnviar= document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {
    console.log("funciona boton");
    let email= document.getElementById("mail").value;
    let password=document.getElementById("contraseña").value;
    firebase.auth().createUserWithEmailAndPassword( email,password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    //alert(errorCode);
    //alert(errorMessage);
        // ...
      });
})
//ingreso de usuariess registrades con firebase
//export function ingresar(){
//-----------------INGRESO USUARIO REGISTRADO ------------------
export const btnIngresar= document.getElementById("ingresar");
btnIngresar.addEventListener("click", () => {
    let email2= document.getElementById("mail2").value;
    let password2=document.getElementById("contraseña2").value;
    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    // alert(errorCode);
    // alert(errorMessage);
        // ...
      });
})
//cerrar sesion
export const cerrar = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log("saliirrrr")
    })
    .catch(function(error){
        console.log(error)
    })
}
/*
//ingreso de usuariess registrades con firebase
export function ingresar(){
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
//cerrar sesion
export function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log("saliirrrr")
    })
    .catch(function(error){
        console.log(error)

    })
}*/