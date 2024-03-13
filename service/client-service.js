
const listCliente = () => {
  return fetch('http://localhost:3000/perfil').then((response) => response.json())
}

const crearCliente = (nombre, email)=>{
  return fetch('http://localhost:3000/perfil',{
    method: "POST",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4()
    })
  })
}


export const clientServices = {
  listCliente,
  crearCliente
}




