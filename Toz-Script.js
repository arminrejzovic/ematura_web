let ajax = new XMLHttpRequest();
let method = "GET";
let url = "data.php";
let async = true;

ajax.open(method,url,async);
ajax.send();

ajax.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        let questions = JSON.parse(this.responseText);
        playQuiz(questions);
    }
};
var questionNumber = 0;
var correctAnswers=0;

function playQuiz(questions) {
    nextQuestion(questions);
}

function nextQuestion(questions) {
    if(questionNumber<=99){
        let question = questions[questionNumber];

        let x = getRandomInt(1,5);
        let q = document.getElementById("question-text");
        let option1 = document.getElementById("first-option");
        let option2 = document.getElementById("second-option");
        let option3 = document.getElementById("third-option");
        let option4 = document.getElementById("fourth-option");

        option1.style.backgroundColor = "white";
        option2.style.backgroundColor = "white";
        option3.style.backgroundColor = "white";
        option4.style.backgroundColor = "white";

        var correct;

        q.textContent = questionNumber+1 +". " + question.question;
        switch (x) {
            case 1:
                option1.textContent = question.correct;
                option2.textContent = question.wrong1;
                option3.textContent = question.wrong2;
                option4.textContent = question.wrong3;

                option1.onclick = function () {
                    option1.style.backgroundColor = "green";
                    correct = true;
                    correctAnswers++;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option2.onclick = function () {
                    option2.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option3.onclick = function () {
                    option3.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option4.onclick = function () {
                    option4.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                break;

            case 2:
                option1.textContent = question.wrong1;
                option2.textContent = question.correct;
                option3.textContent = question.wrong2;
                option4.textContent = question.wrong3;

                option2.onclick = function () {
                    option2.style.backgroundColor = "green";
                    correct = true;
                    correctAnswers++;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option1.onclick = function () {
                    option1.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option3.onclick = function () {
                    option3.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option4.onclick = function () {
                    option4.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                break;

            case 3:
                option1.textContent = question.wrong2;
                option2.textContent = question.wrong1;
                option3.textContent = question.correct;
                option4.textContent = question.wrong3;

                option3.onclick = function () {
                    option3.style.backgroundColor = "green";
                    correct = true;
                    correctAnswers++;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option2.onclick = function () {
                    option2.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option1.onclick = function () {
                    option1.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option4.onclick = function () {
                    option4.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                break;

            case 4:
                option1.textContent = question.wrong3;
                option2.textContent = question.wrong1;
                option3.textContent = question.wrong2;
                option4.textContent = question.correct;

                option4.onclick = function () {
                    option4.style.backgroundColor = "green";
                    correct = true;
                    correctAnswers++;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option2.onclick = function () {
                    option2.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option3.onclick = function () {
                    option3.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }

                option1.onclick = function () {
                    option1.style.backgroundColor = "red";
                    correct = false;
                    option1.onclick=null;
                    option2.onclick=null;
                    option3.onclick=null;
                    option4.onclick=null;
                }
                break;
        }
        document.getElementById("next").onclick = function () {
            if (correct!=null){
                questionNumber++;
                nextQuestion(questions);
            }
        }
    }

    else{
        let report = document.getElementById("report");
        report.style.visibility = "visible";
        document.getElementById("numOfCorrect").textContent += correctAnswers;

        if (correctAnswers<=39){
            document.getElementById("grade").textContent += 1;
            document.getElementById("grade-image").src = "images/grades/grade_f.png";
            document.getElementById("next").onclick = null;
        }
        else if ((correctAnswers>39)&&(correctAnswers<=54)){
            document.getElementById("grade").textContent += 2;
            document.getElementById("grade-image").src = "images/grades/grade_d.png";
            document.getElementById("next").onclick = null;
        }
        else if ((correctAnswers>54)&&(correctAnswers<=69)){
            document.getElementById("grade").textContent += 3;
            document.getElementById("grade-image").src = "images/grades/grade_c.png";
            document.getElementById("next").onclick = null;
        }
        else if ((correctAnswers>69)&&(correctAnswers<=84)){
            document.getElementById("grade").textContent += 4;
            document.getElementById("grade-image").src = "images/grades/grade_b.png";
            document.getElementById("next").onclick = null;
        }
        else if (correctAnswers>84){
            document.getElementById("grade").textContent += 5;
            document.getElementById("grade-image").src = "images/grades/grade_a.png";
            document.getElementById("next").onclick = null;
        }
        document.getElementById("wrapper").blur();

        document.getElementById("play-again").onclick = function () {
            location.reload();
        }
    }

}

window.onload = function () {
    if(document.getElementById("first-option").textContent === "ERROR"){
        location.reload();
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

