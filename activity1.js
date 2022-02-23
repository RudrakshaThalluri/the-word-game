var score = 0;

function uptadeScore()
{
    score = score + 1;
    console.log(score);
    document.getElementById("score").innerHTML = "Score : " + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "activity_2.html";
}