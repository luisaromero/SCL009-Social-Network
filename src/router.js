import { templateStart } from './assets/views/templateStart.js';
import { templateRegister } from './assets/views/templateRegister.js';
import { templateAbout } from './assets/views/templateAbout.js';
import { templateLogIn } from './assets/views/templateLogIn.js';
import { templateWall } from './assets/views/templateWall.js';


const changeRoute = (hash) => {
  if (hash === '#/registrate' || hash === '#/entrar' || hash === '#/inicio' ||  hash === '#/muro'|| hash === '' || hash === '#/' || hash === '/#') {
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
      templateRegister();
      break;
    case 'about':
      templateAbout();
      break;
    case 'inicio':
      templateStart();
      break;
      case 'entrar':
      templateLogIn();
      break;
    case '':
      templateStart();
      break;
      case 'muro':
        templateWall();
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