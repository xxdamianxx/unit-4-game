let current_random_goal = 0;
let wins = 0;
let losses = 0;
let crystal_1_score = 0;
let crystal_2_score = 0;
let crystal_3_score = 0;
let crystal_4_score = 0;
let current_score = 0;

$(document).ready(function(){
    setupGame();
    setupEventListeners();
});

function setupGame(){
    console.log(" ");
    console.log(" ");
    console.log("============================ NEW GAME ======================");
    let min_goal = 19;
    let max_goal = 120;
    current_random_goal = Math.ceil(Math.random() * (max_goal - min_goal) + min_goal);
    let min_crystal_val = 1;
    let max_crystal_val = 12;
    crystal_1_score = Math.ceil(Math.random() * (max_crystal_val - min_crystal_val) + min_crystal_val);
    crystal_2_score = Math.ceil(Math.random() * (max_crystal_val - min_crystal_val) + min_crystal_val);
    crystal_3_score = Math.ceil(Math.random() * (max_crystal_val - min_crystal_val) + min_crystal_val);
    crystal_4_score = Math.ceil(Math.random() * (max_crystal_val - min_crystal_val) + min_crystal_val);
    // console.log("Crystal 1 Score: " + crystal_1_score);
    // console.log("Crystal 2 Score: " + crystal_2_score);
    // console.log("Crystal 3 Score: " + crystal_3_score);
    // console.log("Crystal 4 Score: " + crystal_4_score);
    $("#random_goal").text(current_random_goal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    current_score = 0;
    $("#total_score").text(current_score);
}

function setupEventListeners(){
    $("#crystal_1").click(function(){
        updateScore(crystal_1_score);
    });
    $("#crystal_2").click(function(){
        updateScore(crystal_2_score);
    });
    $("#crystal_3").click(function(){
        updateScore(crystal_3_score);
    });
    $("#crystal_4").click(function(){
        updateScore(crystal_4_score);
    });
}

function updateScore(score){
    console.log("current score: " + current_score);
    console.log("Score to add: " + score);
    current_score = current_score + score;
    console.log("updated: " + current_score);
    if (current_score > current_random_goal){
        gameLost();
    }else if (current_score == current_random_goal){
        gameWon();
    }
    $("#total_score").text(current_score);
}

function gameLost(){
    alert("You Lost This Round");
    losses = losses + 1;
    console.log("-------- GAME LOST ---------");
    console.log("LOSSES: " + losses);
    setupGame();
}

function gameWon(){
    alert("You Won This Round");
    wins = wins + 1;
    console.log("-------- GAME WON ---------");
    console.log("WINS: " + wins);
    setupGame();
}
