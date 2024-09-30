(function() {
    const mazeElement = document.getElementById('maze');
    const sizeInput = document.getElementById('size');
    const wallsInput = document.getElementById('walls');
    const messageElement = document.getElementById('message');

    let maze, ratPosition, destination, timer;
    let running = false;

    const createMaze = (size, walls) => {
        maze = Array.from({ length: size }, () => Array(size).fill(0));
        for (let i = 0; i < walls; i++) {
            let row, col;
            do {
                row = Math.floor(Math.random() * size);
                col = Math.floor(Math.random() * size);
            } while ((row === 0 && col === 0) || (row === size - 1 && col === size - 1) || maze[row][col] === 1);
            maze[row][col] = 1; // Mark as wall
        }
        ratPosition = [0, 0];
        destination = [size - 1, size - 1];
        mazeElement.style.gridTemplateColumns = `repeat(${size},0fr)`;
        mazeElement.style.gap = '0'; 
        renderMaze();
    };

    const renderMaze = () => {
        mazeElement.innerHTML = '';
        maze.forEach((row, r) => {
            row.forEach((cell, c) => {
                const cellElement = document.createElement('div');
                cellElement.className = 'cell' + (cell === 1 ? ' wall' : '') +
                    (r === ratPosition[0] && c === ratPosition[1] ? ' start' : '') +
                    (r === destination[0] && c === destination[1] ? ' end' : '');
                mazeElement.appendChild(cellElement);
                
            });
        });
    };

    const isSafe = (x, y) => {
        return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && maze[x][y] === 0);
    };

    const moveRat = async (x, y) => {

        if (!running) return;

        if (x === destination[0] && y === destination[1]) {
            messageElement.textContent = 'Victory! The rat reached the destination.';
            messageElement.style.color="green"
            running = false;
            return 0;
        }

        if (isSafe(x, y)) {
            maze[x][y] = 2; // Mark as path
            ratPosition = [x, y];
            renderMaze();
            await new Promise(resolve => timer = setTimeout(resolve, 2000));

            // Explore all directions
            if (await moveRat(x + 1, y) || await moveRat(x, y + 1) || 
                await moveRat(x - 1, y) || await moveRat(x, y - 1)) {
                return true;
            }

            // Backtrack
            maze[x][y] = 0; // Unmark path
        }
        return false;
    };

    document.getElementById('start').addEventListener('click', () => {
        const size = parseInt(sizeInput.value);
        const walls = parseInt(wallsInput.value);
        createMaze(size, walls);
        messageElement.textContent = '';
        running = true;
        moveRat(ratPosition[0], ratPosition[1]);
    });

    document.getElementById('pause').addEventListener('click', () => {
        running = false;
        clearTimeout(timer);
    });

    document.getElementById('reset').addEventListener('click', () => {
        running = false;
        clearTimeout(timer);
        mazeElement.innerHTML = '';
        messageElement.textContent = '';
    });
})();
