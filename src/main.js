
//Dando paso a la pantalla de ingreso de usuario
document.getElementById('inicia').addEventListener('click',()=>{
document.getElementById('registro').style.display='none'
document.getElementById('principal').style.display='none'
document.getElementById('ingreso').style.display='block'
document.getElementById('cerrar').style.display='none'
})
//Dando paso a la pantalla de registro de usuario
document.getElementById("registrate").addEventListener("click",()=>{
    document.getElementById('principal').style.display='none'
    document.getElementById('ingreso').style.display='none'
    document.getElementById('registro').style.display='block'
    document.getElementById('cerrar').style.display='none'
})

