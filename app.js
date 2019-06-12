

import { initRouter } from './router.js';
// import { initFirebase } from './assets/js/firebaseInit.js;

const init = () => {
  
  //initFirebase();
  initRouter();
}

window.addEventListener('load', init);