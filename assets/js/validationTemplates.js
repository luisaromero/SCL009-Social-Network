
export const validateEs =(email2,password2)=> {

    let regExx =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
    if (!regExx.test(email2)){
      document.getElementById("invalidEmail").innerHTML="Ingresa email valido"
    }
   
    if (password2.length <=6){
      document.getElementById("invalidpassword2").innerHTML="Ingresa contraseña mayor a 6 digitos"
  }
  }
  