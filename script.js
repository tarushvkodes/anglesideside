window.onload = function() {
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');

    // Function to draw a triangle
    function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    // Function to animate the third leg of the triangle
    function animateTriangle() {
        let angle = 0;
        const radius = 150;
        const centerX = 300;
        const centerY = 200;

        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fixed points
            const x1 = 150;
            const y1 = 300;
            const x2 = 450;
            const y2 = 300;

            // Moving points
            const x3a = centerX + radius * Math.cos(angle);
            const y3a = centerY + radius * Math.sin(angle);
            const x3b = centerX + radius * Math.cos(angle + Math.PI);
            const y3b = centerY + radius * Math.sin(angle + Math.PI);

            // Draw the triangles
            drawTriangle(x1, y1, x2, y2, x3a, y3a, 'rgba(255, 0, 0, 0.5)');
            drawTriangle(x1, y1, x2, y2, x3b, y3b, 'rgba(0, 0, 255, 0.5)');

            angle += 0.02;
            requestAnimationFrame(drawFrame);
        }

        drawFrame();
    }

    animateTriangle();
};