import {validateRegister, validateSignIn} from './../src/assets/js/validation.js'

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

describe ('validateSignIn',()=>{
    it ('deberia retornar falso si es que no ingresa correo y contraseña registrados', () =>{
        expect(validateSignIn("","")).toBe(false);
    })
   it ('deberia retornar true si es que ingresa correo y contraseña registrado', () =>{
            expect(validateSignIn("estesmimail@gmail.com","hola1234")).toBe(true);
     
    })
    it ('deberia retornar falso si no ingresas un correo valido', () =>{
        expect(validateSignIn("estesmimailgmail.com","micontraseña")).toBe(false);
    })
    it ('deberia retornar falso si ingresas una contraseña menor a 6 digitos', () =>{
        expect(validateSignIn("estesmimail@gmail.com","hi")).toBe(false);
            
})
})

