<?php
    require ("database.php");
    $user = $_REQUEST["username"];
    $pass = $_REQUEST["password"];
    $email = $_REQUEST["email"];
    $dataBase = dbConnection();
    $res = $dataBase->exec("insert into tester (username,pass,email) values('$user','$pass','$email')");

    $resultObject = array("status" => $res);
    echo json_encode($resultObject);
?>