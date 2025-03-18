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
            --premium-color: #f59e0b;
            --premium-hover: #d97706;
            --dark-color: #1f2937;
            --light-color: #f9fafb;
            --gray-color: #e5e7eb;
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
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        
        header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .tagline {
            font-size: 1.2rem;
            color: #4b5563;
        }
        
        .user-panel {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .btn {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            border: none;
            border-radius: 0.375rem;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-hover);
        }
        
        .btn-secondary {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .btn-secondary:hover {
            background-color: var(--secondary-hover);
        }
        
        .btn-premium {
            background-color: var(--premium-color);
            color: white;
        }
        
        .btn-premium:hover {
            background-color: var(--premium-hover);
        }
        
        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
        }
        
        .btn-outline:hover {
            background-color: var(--primary-color);
            color: white;
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        @media (min-width: 768px) {
            .main-content {
                grid-template-columns: 3fr 1fr;
            }
        }
        
        .game-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        
        .game-card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .game-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .game-img {
            width: 100%;
            height: 150px;
            background-color: #dbeafe;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--primary-color);
        }
        
        .premium-badge {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background-color: var(--premium-color);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: bold;
        }
        
        .game-info {
            padding: 1rem;
        }
        
        .game-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        
        .game-description {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 1rem;
        }
        
        .sidebar {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .sidebar-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .stats-list {
            list-style: none;
        }
        
        .stats-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .stats-item:last-child {
            border-bottom: none;
        }
        
        .stats-label {
            color: #6b7280;
        }
        
        .stats-value {
            font-weight: 500;
        }
        
        .premium-banner {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-top: 2rem;
            text-align: center;
        }
        
        .premium-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        
        .premium-description {
            margin-bottom: 1rem;
        }
        
        footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--gray-color);
            text-align: center;
            color: #6b7280;
            font-size: 0.875rem;
        }
        
        .footer-links {
            margin-bottom: 1rem;
        }
        
        .footer-link {
            color: var(--primary-color);
            text-decoration: none;
            margin: 0 0.5rem;
        }
        
        .footer-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">Tic Tac Toe Collection</div>
            <div class="tagline">Classic games reimagined for all devices</div>
        </header>
        
        <div class="user-panel">
            <button class="btn btn-outline">Log In</button>
            <button class="btn btn-primary">Sign Up</button>
        </div>
        
        <div class="main-content">
            <div class="games-section">
                <h2>Play Now</h2>
                <div class="game-grid">
                    <!-- Classic Tic Tac Toe -->
                    <div class="game-card">
                        <div class="game-img">
                            <div style="font-size: 2rem; line-height: 1;">
                                X O X<br>
                                O X O<br>
                                X O X
                            </div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">Classic Tic Tac Toe</h3>
                            <p class="game-description">The traditional 3×3 grid game loved by everyone. Be the first to get three in a row!</p>
                            <a href="tictactoe.html?mode=classic" class="btn btn-primary">Play Game</a>
                        </div>
                    </div>
                    
                    <!-- 4×4 Tic Tac Toe -->
                    <div class="game-card">
                        <div class="game-img">
                            <div style="font-size: 1.5rem; line-height: 1;">
                                X O X O<br>
                                O X O X<br>
                                X O X O<br>
                                O X O X
                            </div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">4×4 Tic Tac Toe</h3>
                            <p class="game-description">A larger board for a bigger challenge. Get four in a row to win!</p>
                            <a href="tictactoe.html?mode=4x4" class="btn btn-primary">Play Game</a>
                        </div>
                    </div>
                    
                    <!-- 5×5 Tic Tac Toe -->
                    <div class="game-card">
                        <div class="game-img">
                            <div style="font-size: 1.2rem; line-height: 1;">
                                X O X O X<br>
                                O X O X O<br>
                                X O X O X<br>
                                O X O X O<br>
                                X O X O X
                            </div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">5×5 Tic Tac Toe</h3>
                            <p class="game-description">The ultimate free challenge. Get five in a row to claim victory!</p>
                            <a href="tictactoe.html?mode=5x5" class="btn btn-primary">Play Game</a>
                        </div>
                    </div>
                    
                    <!-- Ultimate Tic Tac Toe (Premium) -->
                    <div class="game-card">
                        <div class="game-img" style="position: relative;">
                            <div style="font-size: 1.5rem; line-height: 1.2;">
                                X|O|X
                            </div>
                            <div class="premium-badge">PREMIUM</div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">Ultimate Tic Tac Toe</h3>
                            <p class="game-description">Nine boards in one! Strategic gameplay at its finest.</p>
                            <a href="premium.html" class="btn btn-premium">Unlock</a>
                        </div>
                    </div>
                    
                    <!-- 3D Tic Tac Toe (Premium) -->
                    <div class="game-card">
                        <div class="game-img" style="position: relative;">
                            <div style="font-size: 1.5rem; line-height: 1.2;">
                                3D
                            </div>
                            <div class="premium-badge">PREMIUM</div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">3D Tic Tac Toe</h3>
                            <p class="game-description">Play in three dimensions with this mind-bending variant!</p>
                            <a href="premium.html" class="btn btn-premium">Unlock</a>
                        </div>
                    </div>
                    
                    <!-- Misère Tic Tac Toe (Premium) -->
                    <div class="game-card">
                        <div class="game-img" style="position: relative;">
                            <div style="transform: rotate(180deg); font-size: 2rem; line-height: 1;">
                                X O X<br>
                                O X O<br>
                                X O X
                            </div>
                            <div class="premium-badge">PREMIUM</div>
                        </div>
                        <div class="game-info">
                            <h3 class="game-title">Misère Tic Tac Toe</h3>
                            <p class="game-description">Reverse the rules! Make your opponent get three in a row.</p>
                            <a href="premium.html" class="btn btn-premium">Unlock</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="sidebar">
                <h3 class="sidebar-title">Your Stats</h3>
                <ul class="stats-list">
                    <li class="stats-item">
                        <span class="stats-label">Games Played</span>
                        <span class="stats-value">0</span>
                    </li>
                    <li class="stats-item">
                        <span class="stats-label">Victories</span>
                        <span class="stats-value">0</span>
                    </li>
                    <li class="stats-item">
                        <span class="stats-label">Win Rate</span>
                        <span class="stats-value">0%</span>
                    </li>
                    <li class="stats-item">
                        <span class="stats-label">Current Streak</span>
                        <span class="stats-value">0</span>
                    </li>
                    <li class="stats-item">
                        <span class="stats-label">Best Streak</span>
                        <span class="stats-value">0</span>
                    </li>
                </ul>
                
                <div class="premium-banner">
                    <h3 class="premium-title">Go Premium</h3>
                    <p class="premium-description">Unlock all game variants, remove ads, and track advanced statistics.</p>
                    <button class="btn btn-secondary">Get Premium $2.99/mo</button>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="footer-links">
                <a href="#" class="footer-link">About</a>
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Contact</a>
            </div>
            <div class="copyright">
                © 2025 Tic Tac Toe Collection. All rights reserved.
            </div>
        </footer>
    </div>

    <script>
        // This would be expanded with actual functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Sample logic to show logged in state
            const loggedIn = false;
            const userPanel = document.querySelector('.user-panel');
            
            if (loggedIn) {
                userPanel.innerHTML = `
                    <span>Welcome back, Player!</span>
                    <button class="btn btn-outline">Account</button>
                `;
            }
            
            // You would also add event listeners for buttons, game launches, etc.
        });
    </script>
</body>
</html>
