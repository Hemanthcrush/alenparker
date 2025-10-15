<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hemanth’s Hacker Blog</title>

  <style>
    /* Basic dark hacker look */
    body {
      background-color: #000;
      color: #00ff88;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    h1 {
      text-align: center;
      font-size: 3em;
      margin-top: 80px;
      text-shadow: 0 0 20px #00ff88;
      animation: flicker 3s infinite alternate;
    }

    p {
      text-align: center;
      font-size: 1.3em;
      opacity: 0.9;
      animation: fadeIn 3s ease-in;
    }

    @keyframes flicker {
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88;
      }
      20%, 24%, 55% {
        text-shadow: none;
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Typing effect */
    #typewriter {
      color: #00ff88;
      font-size: 1.2em;
      text-align: center;
      margin-top: 30px;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00ff88;
      width: 0;
      animation: typing 4s steps(40, end) forwards, blink 1s infinite;
    }

    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes blink {
      50% { border-color: transparent; }
    }

    /* Matrix background effect */
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
</head>
<body>
  <canvas id="matrix"></canvas>

  <h1>Welcome to My Hacker’s Den</h1>
  <p id="typewriter">Loading my secret e-novel universe...</p>

  <script>
    // Matrix rain effect
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px Courier';
      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    }

    setInterval(draw, 33);
  </script>
</body>
</html>
