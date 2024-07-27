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
//Mantener la setInterval al final del archivo.
setInterval(horayfecha, 1000);