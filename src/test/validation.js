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

export const validateName = (name) => {
if (name.length <=3||name.length >=19) {
  return false
} else{
  return true
}
}



export const validateSignIn = (email2,password2) => {
  let regular2 =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email2===""||password2===""){
   
    return false;
}
if (password2.length <=6){
  return false
}
 
if (!regular2.test(email2)){

  return false
}
else {
    return true;
}
}


export const validateWall=(publish) => {
  if (publish==="") {
  return false
} else {
 return true
}
}
