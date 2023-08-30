function playRockPaperScissor(player1, player2){
    player1 = player1.toLowerCase()
    player2 = player2.toLowerCase()

    if (player1 === player2){
        return "Empate!"
    }

    else if(
        (player1 === "pedra" && player2 === "tesoura") ||
        (player1 === "tesoura" && player2 === "papel") ||
        (player1 === "papel" && player2 === "pedra")
    ){
        return "Jogador 1 venceu!"
    }

    else{
        return "Jogador 2 venceu!"
    }
}