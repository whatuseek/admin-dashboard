// Landing Page: Network Animation

// Set up the canvas and context
const canvas = document.getElementById("networkCanvas");
const context = canvas.getContext("2d");

// Adjust canvas dimensions to fit the window
const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Node and Connection Data
const nodes = [];
const connections = [];
const nodeCount = 60; // Number of nodes

// Generate random nodes
const generateNodes = () => {
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      radius: 4,
    });
  }
};

// Update node positions and check bounds
const updateNodes = () => {
  nodes.forEach((node) => {
    node.x += node.dx;
    node.y += node.dy;

    // Bounce off edges
    if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.dy *= -1;
  });
};

// Draw nodes as small circles
const drawNodes = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach((node) => {
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    context.fillStyle = "#4F46E5"; // Tailwind's indigo color
    context.fill();
  });
};

// Draw connections between nearby nodes
const drawConnections = () => {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = Math.hypot(
        nodes[j].x - nodes[i].x,
        nodes[j].y - nodes[i].y
      );
      if (distance < 150) {
        context.beginPath();
        context.moveTo(nodes[i].x, nodes[i].y);
        context.lineTo(nodes[j].x, nodes[j].y);
        context.strokeStyle = `rgba(79, 70, 229, ${1 - distance / 150})`; // Dynamic opacity
        context.lineWidth = 1;
        context.stroke();
      }
    }
  }
};

// Animation Loop
const animate = () => {
  drawNodes();
  drawConnections();
  updateNodes();
  requestAnimationFrame(animate);
};

// Initialize Network Animation
document.addEventListener("DOMContentLoaded", () => {
  generateNodes();
  animate();
});
