import { clientServices } from "../service/client-service.js";



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

