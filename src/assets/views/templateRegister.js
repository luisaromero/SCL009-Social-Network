//Pantalla de registro de usuario
 import {registerUser, upLoadProfilePhoto} from '../js/auth.js'

export const templateRegister = () => {
  document.getElementById( "conteinerHead").innerHTML= ` 
      <div class= "conteinerH">
      <img class="logo" src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg">
      </div>
      `
  document.getElementById('root').innerHTML = `
    <div class="container">
      <h4>Registrate</h4>
      <input id="name" type="text" placeholder="Ingresa tu nombre" value="denisisiusiiou">
      <input id="email" type="email" placeholder="Ingresa tu correo" value="ferreira.denisse@gmail.com">
      <p id="invalid"></p>
      <input id="password" type="password" placeholder="Ingresa tu contraseña" value="1234567">
      <p id="invalidpassword"></p>
      <progress value="0" max="100" id="uploader">0%</progress>
      <input type="file" value="upload" id="profilePhoto" />
      <input type="hidden" value="" id="profilePhotoName" />
      <div class="send_back">
         <button id="btnSend" type="button">Enviar</button>
         <button id="btnBack" type="button"></button>
      </div>
    </div>
      `
  document.getElementById('btnSend').addEventListener('click', () => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let profilePhotoName = document.getElementById("profilePhotoName").value;
        console.log("el nombre de la foto: " +profilePhotoName);
        registerUser(name, email, password, profilePhotoName);
           //Swal.fire("Cuenta registrada con exito , te hemos enviamos un corrreo de confirmación" , "success")
           
           });

  document.getElementById('profilePhoto').addEventListener('change', function(e) {   
    let file = e.target.files[0];
    let profilePhotoName = document.getElementById('profilePhotoName');
    profilePhotoName.value = file.name;

    let uploader = document.getElementById('uploader');

      upLoadProfilePhoto(e, uploader);

  })

  document.getElementById('btnBack').addEventListener('click', () => {
    window.location.hash = '#/start';
  })
  }