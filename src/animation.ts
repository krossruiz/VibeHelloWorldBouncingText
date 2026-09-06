let lastTime = 0;
let xDirection = 1;
let yDirection = 1;
let xPosition = 0;
let yPosition = 0;

function updatePosition(currentTime: number) {
    if (!lastTime) {
        lastTime = currentTime;
        requestAnimationFrame(updatePosition);
        return;
    }

    const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
    lastTime = currentTime;

    // Get and parse speed values
    const xSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--x-speed'));
    const ySpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--y-speed'));

    // Update positions based on speed and direction
    xPosition += xDirection * xSpeed * deltaTime * 100;
    yPosition += yDirection * ySpeed * deltaTime * 100;

    // Check for collisions with container boundaries
    const container = document.querySelector('.bouncing-container');
    const text = document.querySelector('.bouncing-text');
    
    if (container && text) {
        const containerRect = container.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();

        // Convert positions to percentages
        const maxX = 100 - (textRect.width / containerRect.width * 100);
        const maxY = 100 - (textRect.height / containerRect.height * 100);

        // X-axis collision
        if (xPosition <= 0 || xPosition >= maxX) {
            xDirection *= -1;
            xPosition = Math.max(0, Math.min(xPosition, maxX));
        }

        // Y-axis collision
        if (yPosition <= 0 || yPosition >= maxY) {
            yDirection *= -1;
            yPosition = Math.max(0, Math.min(yPosition, maxY));
        }
    }

    // Update CSS variables
    document.documentElement.style.setProperty('--x-position', xPosition.toString());
    document.documentElement.style.setProperty('--y-position', yPosition.toString());

    requestAnimationFrame(updatePosition);
}

// Start the animation
requestAnimationFrame(updatePosition); 