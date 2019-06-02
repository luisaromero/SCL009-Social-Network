// import { btnIngresar, btnEnviar,  btnCerrar } from './assets/js/sign.js';
// import { observador, aparece } from './assets/js/signcont.js';

// btnIngresar();
// btnEnviar();
// btnCerrar();
// /*
// import { ingresar, registrar,cerrar } from './assets/js/sign.js'

// ingresar();
// registrar();
// cerrar();*/

// observador();
// aparece();

import { initRouter } from './route.js';
// import { initFirebase } from './assets/js/firebaseInit.js;

const init = () => {
  //initFirebase();
  initRouter();
}

window.addEventListener('load', init);
