import {} from "./../js/firebaseInit.js";
export const templateHeadWall = () => {
  let user = firebase.auth().currentUser;  // Para llamar los datos del usuario actual
//--------------------Navbar--------------------------
   const headWall =   `
     
  <div class="topnav" id="myTopnav">
    <a>
      <img src= "https://i.ibb.co/4J2DX8p/Whats-App-Image-2019-06-07-at-3-42-02-PM.jpg" width="40px">
    </a>
    <a><img src="${user.photoURL}" alt="${user.displayName}"  width="25px" height="20px"></a>
    <a>Mis publicaciones</a>

    <a  id="btpublish">Crear publicacion</a>   
  

    <a><input id="buscarWall" type="text" placeholder="Buscar"></a>

    <a id="btnClose" >cierra sesión</a>
    <a href="javascript:void(0);" class="icon" id="bthambur" >
        <i class=""><img src="https://powafulimpak.files.wordpress.com/2016/08/icono-menu.png?w=225"
                width="25px"> </i>
    </a>
   
   
  </div>
`
  return headWall;
    
 }


 export const templateFootWall = () => {
    return ` 
    <h3> Esto es mi pie  de la huerta </h3> 
    `
 }

 