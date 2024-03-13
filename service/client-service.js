const table = document.querySelector("[data-table]");

const crearNewLine = (nombre, email) => {
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
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
    `;

  line.innerHTML += tr;

  return line;
};

const listCliente = () => {
  return fetch('http://localhost:3000/perfil').then((response) => response.json())
}

listCliente()


listCliente().then((data)=>{
  console.log(data)

  data.forEach((element) => {
  const newLine = crearNewLine(element.nombre, element.email);
  table.appendChild(newLine);
});

}).catch((error)=>{
  alert('ocurrió un error');
})

