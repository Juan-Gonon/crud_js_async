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


    try{
        const perfil = await clientServices.detalleClient(id);
        console.log()
        
        if(perfil.nombre && perfil.email){
            inputNombre.value = perfil.nombre;
            inputEmail.value = perfil.email;
        }else{
            throw new Error('Error al obtener cliente');
            
        }
    
    }catch(e){
        //alert('Catch Error - ', e.message)
        window.location.href = "../screens/error.html"
    }

  
}

getInfo()

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;


    clientServices.updateClient(nombre, email, id).then((res)=>{
        window.location.href = "../screens/edicion_concluida.html"
    })


})

