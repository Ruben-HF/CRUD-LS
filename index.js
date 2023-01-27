
//(Create // función 'guardar') que toma los datos de los diferentes input por id cargando dichos datos mediante JSON.parse al almacenamiento local. 

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

//(Read // función 'render') que permite visualizar los datos obtenidos del almacenamiento local mediante un inner.hmtl en una tabla de contenido con los respectivos botones para editar o borrar el elemento seleccionado. 

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

//(Delete // función 'eliminar') permitirá borrar los datos del almacenamiento local, renderizando la nueva lista sin el elemento seleccionado para su eliminación. 

function borrar(position){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem('valores', JSON.stringify(datos))
    render()
}


//(Upgrade // función 'editar') permitiendo actualizar y editar los datos obteniendo los datos del almacenamiento local visualizandolos en los input para modificar dicha información.

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

//(Upgrade 2 // función 'reguardar') permitirá volver a guardar la información para su lectura en renderizado).

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

//En caso de haber seleccionado la edición por error o validar que los datos eran correctos, se puede retornar a la lectura sin modificar la información con la función salir. 

function salir(e){
    e.parentElement.remove()
    render()
}

render()