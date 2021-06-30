<?php
    require ("database.php");
    $user = $_REQUEST["username"];
    $pass = $_REQUEST["password"];

    $dataBase = dbConnection();
    $res = $dataBase->exec("insert into tester (username,pass) values('$user','$pass')");
    
    // if($res){
    //     echo "success";
    // } else {
    //     echo "failure";
    // }
    // $resultObject->status = $res;
    $resultObject = array("status"=>$res);
    echo json_encode($resultObject);
?>