let listaProductos = [];

function agregarProducto() {
    let producto = document.getElementById("producto").value.trim().toUpperCase();
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value, 10);

    // Validar que el nombre, campo de precio y cantidad no estén vacíos
    if (producto === "" || isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor ingrese todos los campos correctamente");
        return;
    }
    else{
        //limpiar formulario
        document.getElementById("formulario").reset();

        listaProductos.push({
            itemProducto: producto,
            itemPrecio: precio,
            itemCantidad: cantidad,
            itemSubtotal:(cantidad * precio)
        });
    }

    mostrarProductos();
   }

function mostrarProductos() {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    let total = 0;

    for (let i = 0; i < listaProductos.length; i++) {
        tabla.innerHTML += `<tr>
            <td>${listaProductos[i].itemProducto} </td>
            <td>${listaProductos[i].itemPrecio} </td>
            <td>${listaProductos[i].itemCantidad} </td>
            <td>${listaProductos[i].itemSubtotal} </td>
        </tr>`;
        total += listaProductos[i].itemSubtotal;
    }
 }