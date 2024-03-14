import { clientServices } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]");




const getInfo = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../screens/error.html"
    }

    const inputNombre = document.querySelector("[data-nombre]");
    const inputEmail = document.querySelector("[data-email]");


    clientServices.detalleClient(id).then(({nombre, email})=>{
        console.log(nombre, email)

        inputNombre.value = nombre;
        inputEmail.value = email;
    })

}

getInfo()

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre, email)

    clientServices.updateClient(nombre, email, id).then((res)=>{
        window.location.href = "../screens/edicion_concluida.html"
    })


})

