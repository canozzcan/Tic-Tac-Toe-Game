function startNewGame() {
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom names fot both players!');
        return;
    }

    gameAreaElement.style.display = 'block';
}