<?php

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "questions_test";
$conn = mysqli_connect($dbServerName,$dbUsername,$dbPassword,$dbName);

$QuestionList = array();

foreach ($_POST as $post){
    switch ($post){
        case "Biologija":
            $sqlStatement = "SELECT * FROM biologija_izborna;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Filozofija":
            $sqlStatement = "SELECT * FROM filozofija;";
            $filozofija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($filozofija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Fizika":
            $sqlStatement = "SELECT * FROM fizika_izborna;";
            $fizika = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($fizika)){
                array_push($QuestionList,$question);
            }
            break;

        case "Geografija":
            $sqlStatement = "SELECT * FROM geografija_izborna;";
            $geografija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($geografija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Hemija":
            $sqlStatement = "SELECT * FROM hemija_izborna;";
            $hemija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($hemija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Historija":
            $sqlStatement = "SELECT * FROM historija_izborna;";
            $historija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($historija)){
                array_push($QuestionList,$question);
            }
            break;

        default:
            array_push($QuestionList,$post);
            array_push($QuestionList,"MIREL");
            array_push($QuestionList,$post);
    }
}

shuffle($QuestionList);

echo json_encode($QuestionList);


