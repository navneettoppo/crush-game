const moves = [];

// Create moves from "Move 1" to "Move 100"
for (let i = 1; i <= 100; i++) {
    moves.push(`Move ${i}`);
}

// Now, the 'moves' array contains ["Move 1", "Move 2", ..., "Move 100"]
console.log(moves);


let score = 0;
let level = 1;

document.getElementById('execute-move').addEventListener('click', () => {
    const randomMoveIndex = Math.floor(Math.random() * moves.length);
    const executedMove = moves[randomMoveIndex];

    // Simulate scoring logic (modify as per your game rules)
    score += 10;

    // Simulate level progression logic (modify as per your game rules)
    if (score % 50 === 0) {
        level++;
    }

    // Update the UI
    document.getElementById('score-value').textContent = score;
    document.getElementById('level-value').textContent = level;

    // Display the executed move (modify as per your UI)
    alert(`Executed: ${executedMove}`);
});
