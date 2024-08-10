<?php
header('Content-Type: application/json');
if(!empty($_GET['id_empleado'])){
    $query = "SELECT * FROM empleados WHERE id_empleado = $_GET[id_empleado]";
    $conn = new mysqli('localhost', 'root', '', 'nomina');
    $result = $conn->query($query);
    $row = $result->fetch_assoc();

    if($row){
        $data['id_empleado'] = $row['id_empleado'];
        $data['nombre'] = "{$row['nombre_empleado']} {$row['ap1_empleado']} {$row['ap2_empleado']}";
        $data['correo'] = $row['correo_empleado'];
        $data['foto'] = "http://localhost/foto/{$row['foto_empleado']}";
        response(200, "Información del empleado", $data);
    }
    else{
        response(300, "No se encontró al empleado", NULL);
    }
}
else{
    response(400, "Error de solicitud", NULL);
}

function response($status, $status_message, $data){
    header("HTTP/1.1 $status $status_message");
    $response['status'] = $status;
    $response['status_message'] = $status_message;
    $response['data'] = $data;

    $json_response = json_encode($response);
    echo $json_response;
}