let subject = window.location.hash.substring(1);
console.log("SUB: "+window.location.hash.substring(1));

var questionNumber = 0;
var correctAnswers=0;

const xhr = new XMLHttpRequest();

xhr.open("POST","pojedinacno.php");
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

if (subject =="Bosanski") xhr.send("subject=Bosanski");
else if(subject =="Biologija") xhr.send("subject=Biologija");
else if(subject =="Demokratija") xhr.send("subject=Demokratija");
else if(subject =="Engleski") xhr.send("subject=Engleski");
else if(subject =="Filozofija") xhr.send("subject=Filozofija");
else if(subject =="Fizika") xhr.send("subject=Fizika");
else if(subject =="Geografija") xhr.send("subject=Geografija");
else if(subject =="Hemija") xhr.send("subject=Hemija");
else if(subject =="Historija") xhr.send("subject=Historija");
else if(subject =="Informatika") xhr.send("subject=Informatika");
else if(subject =="Latinski") xhr.send("subject=Latinski");
else if(subject =="Likovno") xhr.send("subject=Likovno");
else if(subject =="Logika") xhr.send("subject=Logika");
else if(subject =="Matematika") xhr.send("subject=Matematika");
else if(subject =="Muzičko") xhr.send("subject=Muzičko");
else if(subject =="Njema%C4%8Dki") xhr.send("subject=Njemacki");
else if(subject =="Psihologija") xhr.send("subject=Psihologija");
else if(subject =="Sociologija") xhr.send("subject=Sociologija");
else if(subject =="Tjelesni") xhr.send("subject=Tjelesni");



xhr.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        let questions = JSON.parse(this.responseText);
        console.log(questions);
        playQuiz(questions);
    }
};

function playQuiz(questions) {
    nextQuestion(questions);
}

function nextQuestion(questions) {
    if(questionNumber<questions.length){
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

        let score = correctAnswers/questions.length * 100;
        console.log(score);

        if (score<=39){
            document.getElementById("grade").textContent += 1;
            document.getElementById("grade-image").src = "images/grades/grade_f.png";
            document.getElementById("next").onclick = null;
        }
        else if ((score>39)&&(score<=54)){
            document.getElementById("grade").textContent += 2;
            document.getElementById("grade-image").src = "images/grades/grade_d.png";
            document.getElementById("next").onclick = null;
        }
        else if ((score>54)&&(score<=69)){
            document.getElementById("grade").textContent += 3;
            document.getElementById("grade-image").src = "images/grades/grade_c.png";
            document.getElementById("next").onclick = null;
        }
        else if ((score>69)&&(score<=84)){
            document.getElementById("grade").textContent += 4;
            document.getElementById("grade-image").src = "images/grades/grade_b.png";
            document.getElementById("next").onclick = null;
        }
        else if (score>84){
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