player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

console.log(player1, player2);

player1score = 0;
player2score = 0;

console.log(player1score);

document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("qt").innerHTML = player1;
document.getElementById("at").innerHTML = player2;   
document.getElementById("player1_name").innerHTML = player1;
document.getElementById("player2_name").innerHTML = player2;   

function Send()
{


}

