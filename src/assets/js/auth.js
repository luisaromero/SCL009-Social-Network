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
    
