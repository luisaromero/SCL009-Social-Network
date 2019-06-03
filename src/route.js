import { templateAbout } from './assets/views/templeSigIn.js';

import { templateHome } from './assets/views/templeInitial.js';

const changeRoute = (hash) => {
  if (hash === '#/registrate' || hash === '#/project' || hash === '#/inicio' || hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)

const showTemplate = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    case 'registrate':
      templateAbout();
      break;
    case 'project':
      templateProject();
      break;
    case 'inicio':
      templateHome();
      break;
    case '':
      templateHome();
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    }
  }
}