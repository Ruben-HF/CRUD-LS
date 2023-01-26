function guardar(){
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let telefono = document.getElementById('telefono').value
    let correo = document.getElementById('correo').value

    let inputValue = ({
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "correo": correo
    })


    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    console.log(inputValue)
    datos.push(inputValue)
    console.log(JSON.stringify(datos))
    localStorage.setItem('valores', JSON.stringify(datos))

    document.getElementById('nombre').value = ''
    document.getElementById('apellido').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('correo').value = ''

    render()
}

function render() {
    console.log(localStorage.getItem('valores'))

    let lista = document.getElementById('lista')
    lista.innerHTML = `
    <table>
    <thead>
    <th> Lista de Programadores: </th>
    </thead>
    </table>
    `
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []

    datos.forEach((element,index) => {
        lista.innerHTML += `
        <td> ${element.nombre} </td>
        <td> ${element.apellido} </td>
        <td> ${element.telefono} </td>
        <td> ${element.correo} </td>
        <td> <button onclick="editar(${index})" class="btn btn-secondary"> Editar </button> </td>
        <td> <button onclick="borrar(${index})" class="btn btn-danger"> Borrar </button> </td>
        `
    });

}

function borrar(position){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem('valores', JSON.stringify(datos))
    render()
}


function editar(ps){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    for(let i = 0; i <= datos.length ; i++) {
        if( i == ps){
            document.getElementById('nombre').value = datos[i].nombre   
            document.getElementById('apellido').value = datos[i].apellido
            document.getElementById('telefono').value = datos[i].telefono
            document.getElementById('correo').value = datos[i].correo


            let nombre = datos[i].nombre
            let apellido = datos[i].apellido
            let telefono = datos[i].telefono
            let correo = datos[i].correo

            lista.innerHTML = `
            <td> ${nombre} </td>
            <td> ${apellido} </td>
            <td> ${telefono} </td>
            <td> ${correo} </td>
            <td> <button onclick="reguardar(${i})" class="btn btn-warning" style="width:100% !important;"> Guardar </button> </td>
            <td> <button onclick="salir(this)" class="btn btn-danger" style="width:100% !important;"> Salir </button> </td>
            `
        }
    }

}

function reguardar(i){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []

    let reinput = ({
        "nombre": document.getElementById('nombre').value,
        "apellido": document.getElementById('apellido').value,
        "telefono": document.getElementById('telefono').value,
        "correo": document.getElementById('correo').value
    })

    datos[i] = reinput
    console.log(datos[i])
    localStorage.setItem('valores', JSON.stringify(datos))

    document.getElementById('nombre').value = ``
    document.getElementById('apellido').value = ``
    document.getElementById('telefono').value = ``
    document.getElementById('correo').value = ``

    render()
}

function salir(e){
    e.parentElement.remove()
    render()
}

render()