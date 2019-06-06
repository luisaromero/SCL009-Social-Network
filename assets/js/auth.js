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

    
