  
   import {} from "./firebaseInit.js";
  
  // console.log(firebase);
  let storage = firebase.storage(); //nueva
// Create a storage reference from our storage service
  let storageRef = storage.ref();

// //-------------REGISTRO DE USUARIO----------------
export const registerUser = (name, email, password, profilePhoto) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {   
      let starsRef = storageRef.child('profilePhoto/' + profilePhoto);
      // Get the download URL
      starsRef.getDownloadURL().then(function (url) {
      // Insert url into an <img> tag to "download"
      profilePhoto = url;

      console.log(profilePhoto);
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name,
        photoURL: profilePhoto
      }).then(function () {
        // Update successful.
        console.log('usuario con nombre y foto');
        console.log(user);

      }).catch(function (error) {
        // An error happened.
        console.log("error al actualizar");
      });
      verifyAccount();

      }).catch(function (error) {console.log("error al obtener url de fotos");})
      })
      .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error al crear usuario");
      console.log(errorCode);
      console.log(errorMessage);
      });
      }

// 
//-----------------INGRESO USUARIO REGISTRADO ------------------
// const btnEnter = document.getElementById("btnEnter").addEventListener("click", 
export const logIn = (email2, password2) => {
  console.log("estoy en logIn");
  // let email2 = document.getElementById("email2").value;
  // let password2 = document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then(function () {
    console.log("clave ok");
     observer();
     })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      return;
    });
     
}

//--------- OBSERVADOR DE USUARIOS----------------------------------
//Me indica si hay sesion activa o si alguien esta iniciando sesion 
const observer = () => {
  console.log("estoy en observador");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      console.log("existe usuario activo")
      // User is signed in.
      // let displayName = user.displayName;
      // let email = user.email;
      let emailVerified = user.emailVerified;
      console.log(emailVerified)
      if (emailVerified === true) {
        console.log("mail validado");
                // toShow();
        // let photoURL = user.photoURL;
        // let isAnonymous = user.isAnonymous;
        // let uid = user.uid;
        // let providerData = user.providerData;
        window.location.hash = '#/wall'
        return;
      } else {
        console.log("no ha activado el correo"); // si no hay verificacion de mail, no hay sesion
       signOut();
      }
    }
    else {
      // console.log("no existe usuario activo   2veces") //si no ha ingresado el usuario, no hay sesion
      // signOut();
      // ...
    }
  });
}

//------------- funcion grande para cerrar sesion--------------
export const signOut = () =>{
  console.log("dentro de la funcion cerrar");
  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo")
      window.location.hash = '#/start';

    })
    .catch(function (error) {
      console.log(error);
    })
  }


//--------------Verificar-----------------------  
const verifyAccount = () => {
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log("enviando correo");
  }).catch(function (error) {
    console.log(error)
    // An error happened.
  });
}


//-----------Acceso con CUENTA GOOGLE-------------
export const validateGoogle = () => {
  console.log("Dentro del boton google");

  let provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithRedirect(provider);
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log("funciona acceso google");
      observer();
      //   toShow();
    }).catch(function (error) {
      // Handle Errors here.
      console.log(error);
    });
}

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
    };
