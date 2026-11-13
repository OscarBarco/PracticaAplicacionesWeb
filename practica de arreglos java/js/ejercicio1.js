listaNombres = []

function agregarNombre(){
    let nombre = document.getElementById("nombre").value.trim().toUpperCase();

    if (nombre === ""){
        alert("Pr favor ingrese el nombre");
        document.getElementById("nombre").style.background="red";
        return;
    }
    else if(listaNombres.includes(nombre)){
        alert(`El nombre :${nombre} ya se encuentra registrado`);
        document.getElementById("nombre").style.background="white";
        document.getElementById("nombre").value = ""
        return;
    }
    else{
        document.getElementById("nombre").style.background="white"
        listaNombres.push(nombre);
        alert(`Se agrego el nombre :${nombre}`);
    }
    mostrarNombres();
}

function mostrarNombres(){
    let lista = document.getElementById("lista");
    let cantidad = document.getElementById("cantidad");

    lista.innerText = "";

    for(let i = 0; i< listaNombres.length; i++){
        lista.innerHTML += `<li> ${listaNombres[i]} </li>`;
    }

    cantidad.innerText = `Total nombres : ${listaNombres.length}`
}