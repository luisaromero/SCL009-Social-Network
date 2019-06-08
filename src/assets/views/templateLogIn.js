import {check, logIn,observer} from '../js/auth.js'
observer()
check()

export const templateLogIn =() => {
    document.getElementById( "conteinerHead").innerHTML= ` 
    <div class= "conteinerH">
    <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
     </div>
     `
    document.getElementById('root').innerHTML = `<div class="container">
    <h4>Ingreso de usuaries</h4>
    <input id="email2" type="text" placeholder="Ingresa tu correo">
    <p id ="invalidEmail"><p>
    <input id= "password2" type="password" placeholder="Ingresa tu contraseña">
    <p id ="invalidpassword2"><p>
    <button id="btnLogIn" class ="btn" type="button">Acceder</button>
    </div>`
    document.getElementById('btnLogIn').addEventListener('click', () => {
      
        let email2= document.getElementById("email2").value;
        let password2=document.getElementById("password2").value; 
        let user = firebase.auth().currentUser;
        let regEx =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        logIn(email2,password2)
        if (!regEx.test(email2)){
          document.getElementById("invalidEmail").innerHTML="Ingresa email valido"
          }
        if (password2.length <=6){
          document.getElementById("invalidpassword2").innerHTML="Ingresa contraseña mayor a 6 digitos"
           }
        if (user) {
           window.location.hash = '#/muro';
           }
        })
      }