
const listCliente = () => {
  return fetch('http://localhost:3000/perfil').then((response) => response.json())
}


export const clientServices = {
  listCliente
}




