import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[ data-email]").value;

    console.log(nombre, email)

    clientServices.crearCliente(nombre, email).then((response)=>{
        console.log(response)
        window.location.href = '../screens/registro_completado.html'

        //C:\Users\jgono\Documents\Udemy\JS\RUD_JS_Async\screens\registrar_cliente.html
    }).catch((e)=>{
        console.log(e)
    })

})


