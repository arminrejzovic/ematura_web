<?php

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "questions_test";
$conn = mysqli_connect($dbServerName,$dbUsername,$dbPassword,$dbName);

$QuestionList = array();

foreach ($_POST as $post){
    switch ($post){
        case "Bosanski":
            $sqlStatement = "SELECT * FROM bosanski;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Biologija":
            $sqlStatement = "SELECT * FROM biologija;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Demokratija":
            $sqlStatement = "SELECT * FROM demokratija;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Engleski":
            $sqlStatement = "SELECT * FROM engleski;";
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
            $sqlStatement = "SELECT * FROM fizika;";
            $fizika = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($fizika)){
                array_push($QuestionList,$question);
            }
            break;

        case "Geografija":
            $sqlStatement = "SELECT * FROM geografija;";
            $geografija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($geografija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Hemija":
            $sqlStatement = "SELECT * FROM hemija;";
            $hemija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($hemija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Historija":
            $sqlStatement = "SELECT * FROM historija;";
            $historija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($historija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Informatika":
            $sqlStatement = "SELECT * FROM informatika;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Latinski":
            $sqlStatement = "SELECT * FROM latinski;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Likovno":
            $sqlStatement = "SELECT * FROM likovno;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Logika":
            $sqlStatement = "SELECT * FROM logika;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Matematika":
            $sqlStatement = "SELECT * FROM matematika;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Muzičko":
            $sqlStatement = "SELECT * FROM muzicko;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Njemacki":
            $sqlStatement = "SELECT * FROM njemacki;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Psihologija":
            $sqlStatement = "SELECT * FROM psihologija;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Sociologija":
            $sqlStatement = "SELECT * FROM sociologija;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        case "Tjelesni":
            $sqlStatement = "SELECT * FROM fizicko;";
            $biologija = mysqli_query($conn,$sqlStatement);
            while ($question = mysqli_fetch_assoc($biologija)){
                array_push($QuestionList,$question);
            }
            break;

        default:
            array_push($QuestionList,$post);
            array_push($QuestionList,"Placeholder");
            array_push($QuestionList,$post);
    }
}

shuffle($QuestionList);

echo json_encode($QuestionList);
