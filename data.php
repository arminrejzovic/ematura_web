<?php
$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "questions_test";

$QuestionList = array();

$conn = mysqli_connect($dbServerName,$dbUsername,$dbPassword,$dbName);
$statements = array("SELECT * FROM bosanski","SELECT * FROM engleski","SELECT * FROM matematika",
    "SELECT * FROM latinski","SELECT * FROM informatika","SELECT * FROM fizika","SELECT * FROM hemija",
    "SELECT * FROM biologija","SELECT * FROM geografija","SELECT * FROM historija","SELECT * FROM filozofija",
    "SELECT * FROM psihologija","SELECT * FROM logika","SELECT * FROM sociologija","SELECT * FROM demokratija",
    "SELECT * FROM muzicko","SELECT * FROM likovno","SELECT * FROM fizicko"
    );

$amounts = array(15,14,14,2,4,5,6,6,6,4,3,3,3,4,2,3,3,3);

function pushNew($sqlStatement,$amount){
    global $QuestionList, $conn;
    $tempArray = mysqli_query($conn,$sqlStatement);
    $tempQ = array();
    while ($temp = mysqli_fetch_assoc($tempArray)){
        array_push($tempQ,$temp);
    }
    shuffle($tempQ);

    for ($i=0;$i<$amount;$i++){
        array_push($QuestionList,$tempQ[$i]);
    }
}


for($i=0;$i<sizeof($amounts);$i++){
    pushNew($statements[$i],$amounts[$i]);
}

echo json_encode($QuestionList);

