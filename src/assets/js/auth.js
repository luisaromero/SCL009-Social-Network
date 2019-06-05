export const validateRegister = (email,password) => {
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
    
