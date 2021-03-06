import {validateRegister, validateSignIn,validateWall,validateName} from './validation.js'

describe ('validateRegister',()=>{
    it ('deberia retornar falso si es que no ingresa correo y contraseña', () =>{
        expect(validateRegister("","")).toBe(false);
    })
    it ('deberia retornar verdadero si es que ingresa correo y contraseña', () =>{
        expect(validateRegister("luisamarcelaromero@gmail.com","hola1234")).toBe(true);
    })
        it ('deberia retornar falso si ingresas una contraseña menor a 6 digitos', () =>{
            expect(validateRegister("luisamarcelaromero@gmail.com","h")).toBe(false);
    })
    it ('deberia retornar falso si no ingresas un correo valido', () =>{
        expect(validateRegister("luisamarcelaromerogmailcom","hola1234")).toBe(false);

   })
})
describe ('validateName',()=>{
    it ('deberia retornar falso si el nombre de usuario es menor o igual a 3 digitos', () =>{
        expect(validateName("j")).toBe(false);
    })
    it ('deberia retornar falso si es el nombre de usuario es mayor o igual a 19 digitos', () =>{
        expect(validateName("holasoyunusuarioanonimo")).toBe(false);
    })
    it ('deberia retornar verdadero si es el nombre de usuario es entre 4 y 18 digitos', () =>{
        expect(validateName("lisa simpsons")).toBe(true);
    })
   })
 describe ('validateSignIn',()=>{
    it ('deberia retornar falso si es que no ingresa correo y contraseña registrados', () =>{
        expect(validateSignIn("","")).toBe(false);
    })
   it ('deberia retornar true si es que ingresa correo y contraseña registrado', () =>{
            expect(validateSignIn("estesmimail@gmail.com","hola1234")).toBe(true);
     
    })
    it ('deberia retornar falso si no ingresas un correo valido', () =>{
        expect(validateSignIn("estesmimail.com","micontraseña")).toBe(false);
    })
    it ('deberia retornar falso si ingresas una contraseña menor a 6 digitos', () =>{
        expect(validateSignIn("estesmimail@gmail.com","hi")).toBe(false);
            
})
})
describe ('validateWall',()=>{
    it ('deberia retornar falso si es que no ingresa correo y contraseña registrados', () =>{
        expect(validateWall("")).toBe(false);
    })
   it ('deberia retornar true si es que ingresa correo y contraseña registrado', () =>{
            expect(validateWall("estesmimail")).toBe(true);
   })
})

