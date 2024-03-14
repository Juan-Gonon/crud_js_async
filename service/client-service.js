
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

const deleteCaliente = (id)=>{
  // console.log('eliminar a ->', id)
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: 'DELETE'
  })
}

const detalleClient = (id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((res)=>{
    return res.json()
  })
}

const updateClient = (nombre, email, id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: 'PUT',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})
  }).then((res)=>{
    return res.json();
  }).catch((e)=>{
    console.error(e);
  })
}


export const clientServices = {
  listCliente,
  crearCliente,
  deleteCaliente,
  detalleClient,
  updateClient
}




