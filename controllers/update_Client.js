import { clientServices } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]");




const getInfo = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../screens/error.html"
    }

    const inputNombre = document.querySelector("[data-nombre]");
    const inputEmail = document.querySelector("[data-email]");

    const perfil = await clientServices.detalleClient(id);
   
    inputNombre.value = perfil.nombre;
    inputEmail.value = perfil.email;

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

