// import { templateInitial } from './assets/views/templateInitial.js';
// import { templateRegister } from './assets/views/templateRegister.js';
// import { templateSigIn } from './assets/views/templateSigIn.js';

// const changeRoute = (hash) => {
//   if (hash === '#/about' || hash === '#/project' || hash === '#/home' || hash === '' || hash === '#/' || hash === '/#') {
//     return showTemplate(hash)
//   }
//   return showTemplate(hash)
// }

// // segunda función showTemplate(hash)

// const showTemplate = (hash) => {
//   // #/about
//   const router = hash.substring(2); // home about project
//   const containerRoot = document.getElementById('root');
//   containerRoot.innerHTML = '';

//   switch (router) {
//     case 'inicio':
//       templateInitial();
//       break;
//     case 'registrate':
//       templateRegister();
//       break;
//     case 'entrar':
//       templateSigIn();
//       break;
//     case '':
//       templateInitial();
//       break;
//     default:
//       containerRoot.innerHTML = `<h1>Error 404</h1>`
//   }
// }

// export const initRouter = () => {
//   // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
//   window.addEventListener('load', changeRoute(window.location.hash));

//   // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
//   if ('onhashchange' in window) {
//     window.onhashchange = () => {
//       changeRoute(window.location.hash);
//     }
//   }
// }