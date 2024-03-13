import { clientServices } from "../service/client-service.js";

// console.log(clientServices)

const table = document.querySelector("[data-table]");

const crearNewLine = (nombre, email, id) => {
    const line = document.createElement("tr");
    const tr = `
      <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
              >Editar</a
            >
          </li>
          <li>
            <button
              class="simple-button simple-button--delete"
              type="button"
              id="${id}"
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>
      `;
  
    line.innerHTML += tr;
  

    const btn = line.querySelector('button');

    btn.addEventListener('click', ()=>{
        const id = btn.id;

        console.log('click', id)
        clientServices.deleteCaliente(id).then(
            (response)=>{
                console.log(response)
            }
        ).catch((e)=>{
            alert('ocurrió un error', e)
        })
    })
  
    return line;
  };


  clientServices.listCliente().then((data)=>{
    console.log(data)
  
    data.forEach(({nombre, email, id}) => {
    const newLine = crearNewLine(nombre, email, id);
    table.appendChild(newLine);
  });
  
  }).catch((error)=>{
    alert('ocurrió un error', error);
  })
  

 