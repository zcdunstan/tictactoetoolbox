<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Collection</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --primary-hover: #2563eb;
            --secondary-color: #10b981;
            --secondary-hover: #059669;
            --dark-color: #1f2937;
            --light-color: #f9fafb;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--light-color);
            color: var(--dark-color);
            line-height: 1.6;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #e0f2fe, #bfdbfe);
        }
        
        .container {
            width: 100%;
            max-width: 500px;
            padding: 2rem;
            text-align: center;
        }
        
        .logo {
            font-size: 3rem;
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .tagline {
            font-size: 1.2rem;
            color: #4b5563;
            margin-bottom: 3rem;
        }
        
        .menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .menu-button {
            background-color: white;
            color: var(--dark-color);
            border: none;
            border-radius: 0.5rem;
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .menu-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
        
        .menu-button.start {
            background-color: var(--primary-color);
            color: white;
        }
        
        .menu-button.start:hover {
            background-color: var(--primary-hover);
        }
        
        .menu-button.settings {
            background-color: white;
            color: var(--dark-color);
        }
        
        .menu-button.quit {
            background-color: #ef4444;
            color: white;
        }
        
        .menu-button.quit:hover {
            background-color: #dc2626;
        }
        
        .version {
            margin-top: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
        }
        
        /* Game board decorative element */
        .decorative-board {
            position: absolute;
            width: 150px;
            height: 150px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            opacity: 0.15;
            z-index: -1;
        }
        
        .decorative-board.top-left {
            top: 2rem;
            left: 2rem;
            transform: rotate(-15deg);
        }
        
        .decorative-board.bottom-right {
            bottom: 2rem;
            right: 2rem;
            transform: rotate(15deg);
        }
        
        .decorative-cell {
            width: 50px;
            height: 50px;
            border: 2px solid var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        
        /* Media queries for responsive design */
        @media (max-width: 640px) {
            .logo {
                font-size: 2.5rem;
            }
            
            .tagline {
                font-size: 1rem;
                margin-bottom: 2rem;
            }
            
            .decorative-board {
                width: 120px;
                height: 120px;
            }
            
            .decorative-cell {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Decorative elements -->
    <div class="decorative-board top-left">
        <div class="decorative-cell">X</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">O</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">X</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">O</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">X</div>
    </div>
    
    <div class="decorative-board bottom-right">
        <div class="decorative-cell">O</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">X</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">O</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">X</div>
        <div class="decorative-cell"></div>
        <div class="decorative-cell">O</div>
    </div>
    
    <div class="container">
        <div class="logo">Tic Tac Toe</div>
        <div class="tagline">Classic games reimagined for all devices</div>
        
        <div class="menu">
            <button class="menu-button start" id="start-button">Start</button>
            <button class="menu-button settings" id="settings-button">Settings</button>
            <button class="menu-button quit" id="quit-button">Quit</button>
        </div>
        
        <div class="version">Version 1.0</div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Start button - navigate to the game selection page
            document.getElementById('start-button').addEventListener('click', function() {
                window.location.href = 'game-menu.html';
            });
            
            // Settings button - open settings page
            document.getElementById('settings-button').addEventListener('click', function() {
                window.location.href = 'settings.html';
            });
            
            // Quit button - confirm before closing
            document.getElementById('quit-button').addEventListener('click', function() {
                const confirmQuit = confirm('Are you sure you want to quit?');
                if (confirmQuit) {
                    // In a web context, you might redirect to another site or close the tab
                    // For a desktop app, you would use the app's API to close the window
                    window.close();
                }
            });
            
            // Add subtle animation to decorative boards
            const decorativeBoards = document.querySelectorAll('.decorative-board');
            decorativeBoards.forEach(board => {
                setInterval(() => {
                    const rotationAmount = Math.random() * 5 - 2.5; // Between -2.5 and 2.5 degrees
                    board.style.transform = `rotate(${rotationAmount}deg)`;
                }, 3000);
            });
        });
    </script>
</body>
</html>
