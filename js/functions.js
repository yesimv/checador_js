function horayfecha() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    if (hora < 10) hora = `0${hora}`; 
    if (minuto < 10) minuto = `0${minuto}`;
    if (segundo < 10) segundo = `0${segundo}`; 
    if (dia < 10) dia = `0${dia}`;
    var horayfecha = `${dia} de ${meses[mes-1]} de ${anio} ${hora}:${minuto}:${segundo}`;
    document.getElementById("Hora").innerHTML = horayfecha;
}

if(window.addEventListener){
    var id_empleado = "";
    window.addEventListener("keydown", function(e){
        id_empleado +=String.fromCharCode(e.keyCode);
        if(e.keyCode == 13){
            
            buscarEmpleado(id_empleado);
            //alert(id_empleado);
            id_empleado = "";
        }
    }, true);
}

// Función para buscar al empleado
function buscarEmpleado(id_empleado) {
    alert("Buscando al empleado: " + id_empleado);
    return new Promise((resolve, reject) => {
        const url = "http://localhost/checador_js/checador_api/api.php?id_empleado=" + id_empleado;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert("Empleado encontrado");
                    return response.json(); // Retorna la promesa del JSON
                } else {
                    alert("Error al buscar al empleado");
                    throw new Error("Error al buscar al empleado: " + response.status);
                }
            })
            .then(data => {
                alert(JSON.stringify(data));
                resolve(data); // Resuelve la promesa con los datos recibidos
            })
            .catch(error => {
                alert("Error al buscar al empleado: " + error.message);
                reject(error); // Rechaza la promesa en caso de error
            });
    });
}


//Mantener la setInterval al final del archivo.
setInterval(horayfecha, 1000);