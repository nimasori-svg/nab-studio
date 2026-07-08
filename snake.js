const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;

let score = 0;

let snake = [
    { x: 160, y: 160 }
];

let food = {
    x: Math.floor(Math.random() * 16) * box,
    y: Math.floor(Math.random() * 16) * box
};

let direction = "RIGHT";

function draw() {

    // Background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Apple
    ctx.fillStyle = "#ff3b30";
    ctx.beginPath();
    ctx.arc(food.x + 10, food.y + 10, 8, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    for (let i = 0; i < snake.length; i++) {

        if (i == 0) {
            ctx.fillStyle = "#5CFF5C";
        } else {
            ctx.fillStyle = "#2ECC71";
        }

        ctx.fillRect(
            snake[i].x,
            snake[i].y,
            box - 2,
            box - 2
        );
    }

    let head = {
        x: snake[0].x,
        y: snake[0].y
    };

    if (direction == "RIGHT") head.x += box;
    if (direction == "LEFT") head.x -= box;
    if (direction == "UP") head.y -= box;
    if (direction == "DOWN") head.y += box;

    // خوردن سیب
    if (head.x == food.x && head.y == food.y) {

        score++;

        document.getElementById("score").innerText = score;

        food = {
            x: Math.floor(Math.random() * 16) * box,
            y: Math.floor(Math.random() * 16) * box
        };

    } else {

        snake.pop();

    }

    snake.unshift(head);

}

setInterval(draw, 180);

// Controls

document.getElementById("up").onclick = () => {
    if (direction != "DOWN")
        direction = "UP";
}

document.getElementById("down").onclick = () => {
    if (direction != "UP")
        direction = "DOWN";
}

document.getElementById("left").onclick = () => {
    if (direction != "RIGHT")
        direction = "LEFT";
}

document.getElementById("right").onclick = () => {
    if (direction != "LEFT")
        direction = "RIGHT";
}