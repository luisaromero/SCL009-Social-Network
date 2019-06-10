export const validateRegister = (email,password) => {
    let regular =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email===""||password===""){
     
      return false;
  }
  
  if (password.length <=6){
   return false
  } 
  if (!regular.test(email)){
  
    return false
  }
  else {
      return true;
  }
  }
  
  export const validateSignIn = (mail2,contraseña2) => {
    let regular2 =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (mail2===""||contraseña2===""){
     
      return false;
  }
  if (contraseña2.length <=6){
    return false
  }
   
  if (!regular2.test(mail2)){
  
    return false
  }
  else {
      return true;
  }
  }

  export function validateEs(email2,password2) {
    let regEx =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regEx.test(email2)){
      document.getElementById("invalidEmail").innerHTML="Ingresa email valido"
    }
   
    if (password2.length <=6){
      document.getElementById("invalidcontraseña2").innerHTML="Ingresa contraseña mayor a 6 digitos"
  }
  }
  