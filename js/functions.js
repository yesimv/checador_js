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
    var fechaactual = `${dia} de ${meses[mes-1]} de ${anio}`;
    var horaactual = `${hora}:${minuto}:${segundo}`;
    document.getElementById("Fecha").innerHTML = fechaactual;
    document.getElementById("Hora").innerHTML = horaactual;
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
    //alert("Buscando al empleado: " + id_empleado);
    return new Promise((resolve, reject) => {
        const url = "http://localhost/checador_js/checador_api/api.php?id_empleado=" + id_empleado;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    //alert("Empleado encontrado");
                    return response.json(); // Retorna la promesa del JSON
                } else {
                    //alert("Error al buscar al empleado");
                    let imgElement = document.getElementById("imgPerfil");
                    let headerElement = document.getElementById("header");
                    imgElement.src = "img/imagperfil.png";
                    headerElement.textContent = "Usuario no encontrado";

                //Regresamos al estado original despues de 3 segundos
                setTimeout(function(){
                    imgElement.src = "img/imagperfil.png";
                    headerElement.textContent = "Escanee su tarjeta";
                }, 3000);
                
                    throw new Error("Error al buscar al empleado: " + response.status);
                }
            })
            .then(data => {
                let imgElement = document.getElementById("imgPerfil");
                let headerElement = document.getElementById("header");
                //alert(data.data.foto);
                imgElement.src = data.data.foto;
                headerElement.textContent = data.data["nombre"].toUpperCase();

                //Regresamos al estado original despues de 3 segundos
                setTimeout(function(){
                    imgElement.src = "img/imagperfil.png";
                    headerElement.textContent = "Escanee su tarjeta";
                }, 3000);

                resolve(data); // Resuelve la promesa con los datos recibidos
            })
            .catch(error => {
                //alert("Error al buscar al empleado: " + error.message);
                reject(error); // Rechaza la promesa en caso de error
            });
    });
}


//Mantener la setInterval al final del archivo.
setInterval(horayfecha, 1000);

document.getElementById('logBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});