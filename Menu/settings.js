<!-- Accessibility Settings -->
                <div class="tab-content" id="accessibility">
                    <div class="setting-group">
                        <h3 class="setting-group-title">Visual Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Color Blind Mode</div>
                                <div class="setting-description">Optimize colors and patterns for different types of color vision</div>
                            </div>
                            <div class="setting-control">
                                <select id="color-blind-mode">
                                    <option value="none" selected>None</option>
                                    <option value="protanopia">Protanopia (Red-Blind)</option>
                                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                                    <option value="achromatopsia">Achromatopsia (Monochromacy)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">High Contrast Mode</div>
                                <div class="setting-description">Increase contrast for better visibility</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="high-contrast">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Text Size</div>
                                <div class="setting-description">Adjust the size of text throughout the game</div>
                            </div>
                            <div class="setting-control">
                                <select id="text-size">
                                    <option value="small">Small</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="large">Large</option>
                                    <option value="x-large">Extra Large</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Dyslexia Font Selector</div>
                                <div class="setting-description">Choose fonts that improve readability for dyslexia</div>
                            </div>
                            <div class="setting-control">
                                <select id="dyslexia-font">
                                    <option value="default" selected>Default Font</option>
                                    <option value="opendyslexic">OpenDyslexic</option>
                                    <option value="lexend">Lexend</option>
                                    <option value="comic">Comic Sans</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Zoom Controls</div>
                                <div class="setting-description">Magnify specific areas of the game board</div>
                            </div>
                            <div class="setting-control">
                                <select id="zoom-control">
                                    <option value="none" selected>None</option>
                                    <option value="cursor">Cursor Follow</option>
                                    <option value="fixed">Fixed Magnifier</option>
                                    <option value="board">Whole Board</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Reduce Animations</div>
                                <div class="setting-description">Minimize or eliminate animations that may cause discomfort</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="reduce-animations">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Hearing Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Visual Sound Indicators</div>
                                <div class="setting-description">Show visual cues for game sounds and events</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="visual-sound">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Subtitles</div>
                                <div class="setting-description">Show text descriptions for all audio content</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="subtitles">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Reading Speed</div>
                                <div class="setting-description">Control how quickly text is displayed</div>
                            </div>
                            <div class="setting-control">
                                <select id="reading-speed">
                                    <option value="very-slow">Very Slow</option>
                                    <option value="slow">Slow</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="fast">Fast</option>
                                    <option value="very-fast">Very Fast</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Motor Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Input Method</div>
                                <div class="setting-description">Choose how you interact with the game</div>
                            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Collection - Settings</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --primary-hover: #2563eb;
            --secondary-color: #10b981;
            --secondary-hover: #059669;
            --dark-color: #1f2937;
            --light-color: #f9fafb;
            --gray-color: #e5e7eb;
            --border-color: #d1d5db;
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
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        
        .container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            flex: 1;
        }
        
        header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .page-title {
            font-size: 2rem;
            font-weight: bold;
            color: var(--dark-color);
            margin-bottom: 0.5rem;
        }
        
        .settings-container {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .settings-tabs {
            display: flex;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .tab {
            padding: 1rem 1.5rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            flex: 1;
            text-align: center;
            border-bottom: 3px solid transparent;
        }
        
        .tab.active {
            border-bottom: 3px solid var(--primary-color);
            color: var(--primary-color);
        }
        
        .tab:hover:not(.active) {
            background-color: #f9fafb;
            border-bottom: 3px solid #d1d5db;
        }
        
        .settings-content {
            padding: 1.5rem;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .setting-group {
            margin-bottom: 2rem;
        }
        
        .setting-group:last-child {
            margin-bottom: 0;
        }
        
        .setting-group-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--gray-color);
        }
        
        .setting-item:last-child {
            border-bottom: none;
        }
        
        .setting-label {
            font-weight: 500;
        }
        
        .setting-description {
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 0.25rem;
        }
        
        .setting-control {
            min-width: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        
        /* Toggle switch styles */
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
        }
        
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }
        
        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        input:checked + .toggle-slider {
            background-color: var(--primary-color);
        }
        
        input:checked + .toggle-slider:before {
            transform: translateX(24px);
        }
        
        /* Select styles */
        select {
            padding: 0.5rem;
            border: 1px solid var(--border-color);
            border-radius: 0.25rem;
            background-color: white;
            min-width: 150px;
        }
        
        /* Range slider styles */
        .range-control {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        
        .range-slider {
            -webkit-appearance: none;
            width: 150px;
            height: 8px;
            border-radius: 5px;
            background: #d7dcdf;
            outline: none;
        }
        
        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--primary-color);
            cursor: pointer;
        }
        
        .range-value {
            margin-top: 0.25rem;
            font-size: 0.875rem;
            color: #6b7280;
        }
        
        /* Color picker styles */
        .color-picker {
            display: flex;
            gap: 0.5rem;
        }
        
        .color-option {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid transparent;
            cursor: pointer;
        }
        
        .color-option.selected {
            border-color: var(--dark-color);
        }
        
        /* Button styles */
        .btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.25rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-hover);
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
        
        .btn-danger {
            background-color: #ef4444;
            color: white;
        }
        
        .btn-danger:hover {
            background-color: #dc2626;
        }
        
        .settings-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
        }
        
        .save-indicator {
            font-size: 0.875rem;
            color: var(--secondary-color);
            opacity: 0;
            transition: opacity 0.5s;
        }
        
        .save-indicator.visible {
            opacity: 1;
        }
        
        .action-buttons {
            display: flex;
            gap: 1rem;
        }
        
        footer {
            text-align: center;
            padding: 1rem;
            background-color: var(--dark-color);
            color: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
            .setting-item {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .setting-control {
                margin-top: 0.5rem;
                width: 100%;
                justify-content: flex-start;
            }
            
            .range-control {
                width: 100%;
                align-items: flex-start;
            }
            
            .range-slider {
                width: 100%;
            }
            
            select {
                width: 100%;
            }
            
            .settings-tabs {
                flex-wrap: wrap;
            }
            
            .tab {
                flex-basis: 50%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="page-title">Settings</h1>
        </header>
        
        <div class="settings-container">
            <div class="settings-tabs">
                <div class="tab active" data-tab="gameplay">Gameplay</div>
                <div class="tab" data-tab="appearance">Appearance</div>
                <div class="tab" data-tab="audio">Audio</div>
                <div class="tab" data-tab="accessibility">Accessibility</div>
                <div class="tab" data-tab="account">Account</div>
            </div>
            
            <div class="settings-content">
                <!-- Gameplay Settings -->
                <div class="tab-content active" id="gameplay">
                    <div class="setting-group">
                        <h3 class="setting-group-title">Game Rules</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Difficulty Level</div>
                                <div class="setting-description">Adjust how challenging the AI opponent will be</div>
                            </div>
                            <div class="setting-control">
                                <select id="difficulty-level">
                                    <option value="easy">Easy</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="hard">Hard</option>
                                    <option value="impossible">Impossible</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Starting Player</div>
                                <div class="setting-description">Determine who makes the first move in the game</div>
                            </div>
                            <div class="setting-control">
                                <select id="starting-player">
                                    <option value="player">Player Always First</option>
                                    <option value="ai">AI Always First</option>
                                    <option value="random" selected>Random</option>
                                    <option value="alternate">Alternate Turns</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Move Confirmation</div>
                                <div class="setting-description">Require confirmation before finalizing each move</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="move-confirmation">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Display Options</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Board Numbering</div>
                                <div class="setting-description">Show position coordinates on the game board</div>
                            </div>
                            <div class="setting-control">
                                <select id="board-numbering">
                                    <option value="none" selected>None</option>
                                    <option value="1-9">Numbers (1-9)</option>
                                    <option value="a1-c3">Coordinates (A1-C3)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Default Player Symbol</div>
                                <div class="setting-description">Choose your preferred symbol when starting a game</div>
                            </div>
                            <div class="setting-control">
                                <select id="player-symbol">
                                    <option value="X" selected>X</option>
                                    <option value="O">O</option>
                                    <option value="random">Random</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Auto-start Next Game</div>
                                <div class="setting-description">Start a new game automatically after finishing</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="auto-start">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Appearance Settings -->
                <div class="tab-content" id="appearance">
                    <div class="setting-group">
                        <h3 class="setting-group-title">Theme</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Dark Mode</div>
                                <div class="setting-description">Switch between light and dark interface</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="dark-mode">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Theme Presets</div>
                                <div class="setting-description">Choose from complete visual themes</div>
                            </div>
                            <div class="setting-control">
                                <select id="theme-preset">
                                    <option value="classic" selected>Classic</option>
                                    <option value="neon">Neon Arcade</option>
                                    <option value="minimalist">Minimalist</option>
                                    <option value="retro">Retro Paper</option>
                                    <option value="blueprint">Blueprint</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Color Theme</div>
                                <div class="setting-description">Choose the main color for the interface</div>
                            </div>
                            <div class="setting-control">
                                <div class="color-picker">
                                    <div class="color-option selected" style="background-color: #3b82f6;" data-color="blue"></div>
                                    <div class="color-option" style="background-color: #10b981;" data-color="green"></div>
                                    <div class="color-option" style="background-color: #8b5cf6;" data-color="purple"></div>
                                    <div class="color-option" style="background-color: #ef4444;" data-color="red"></div>
                                    <div class="color-option" style="background-color: #f59e0b;" data-color="orange"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Custom Color Picker</div>
                                <div class="setting-description">Fine-tune specific colors of the game</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="custom-color-btn">Customize Colors</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Game Board</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Board Style</div>
                                <div class="setting-description">Choose the visual style of the game board</div>
                            </div>
                            <div class="setting-control">
                                <select id="board-style">
                                    <option value="classic" selected>Classic</option>
                                    <option value="minimal">Minimal</option>
                                    <option value="retro">Retro</option>
                                    <option value="neon">Neon</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Background Options</div>
                                <div class="setting-description">Select the background for the game board</div>
                            </div>
                            <div class="setting-control">
                                <select id="background-option">
                                    <option value="solid" selected>Solid Color</option>
                                    <option value="gradient">Gradient</option>
                                    <option value="texture">Texture</option>
                                    <option value="pattern">Pattern</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Board Rotation</div>
                                <div class="setting-description">Rotate the game board view</div>
                            </div>
                            <div class="setting-control">
                                <select id="board-rotation">
                                    <option value="0" selected>0° (Normal)</option>
                                    <option value="90">90° (Right)</option>
                                    <option value="180">180° (Upside Down)</option>
                                    <option value="270">270° (Left)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Animation Speed</div>
                                <div class="setting-description">Control how fast game animations play</div>
                            </div>
                            <div class="setting-control">
                                <div class="range-control">
                                    <input type="range" min="0" max="2" step="0.1" value="1" class="range-slider" id="animation-speed">
                                    <div class="range-value">Normal (1x)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Game Pieces</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Custom Symbols</div>
                                <div class="setting-description">Choose alternative symbols for players</div>
                            </div>
                            <div class="setting-control">
                                <select id="custom-symbols">
                                    <option value="xo" selected>X and O (Classic)</option>
                                    <option value="shapes">Shapes (Circle/Triangle)</option>
                                    <option value="animals">Animals (Cat/Dog)</option>
                                    <option value="emoji">Emoji (😊/😎)</option>
                                    <option value="custom">Custom...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Audio Settings -->
                <div class="tab-content" id="audio">
                    <div class="setting-group">
                        <h3 class="setting-group-title">Sound</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Sound Effects</div>
                                <div class="setting-description">Enable or disable game sound effects</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="sound-effects" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Background Music</div>
                                <div class="setting-description">Play music while in the game</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="background-music">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Ambient Background Tracks</div>
                                <div class="setting-description">Choose background music theme</div>
                            </div>
                            <div class="setting-control">
                                <select id="ambient-track">
                                    <option value="none">None</option>
                                    <option value="relaxed" selected>Relaxed</option>
                                    <option value="upbeat">Upbeat</option>
                                    <option value="focus">Focus</option>
                                    <option value="retro">Retro Game</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Volume Controls</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Master Volume</div>
                                <div class="setting-description">Adjust the overall volume</div>
                            </div>
                            <div class="setting-control">
                                <div class="range-control">
                                    <input type="range" min="0" max="1" step="0.1" value="0.7" class="range-slider" id="volume-master">
                                    <div class="range-value">70%</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Music Volume</div>
                                <div class="setting-description">Adjust background music volume</div>
                            </div>
                            <div class="setting-control">
                                <div class="range-control">
                                    <input type="range" min="0" max="1" step="0.1" value="0.5" class="range-slider" id="volume-music">
                                    <div class="range-value">50%</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Effects Volume</div>
                                <div class="setting-description">Adjust sound effects volume</div>
                            </div>
                            <div class="setting-control">
                                <div class="range-control">
                                    <input type="range" min="0" max="1" step="0.1" value="0.8" class="range-slider" id="volume-effects">
                                    <div class="range-value">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Sound Options</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Individual Sound Toggles</div>
                                <div class="setting-description">Enable or disable specific sound types</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="sound-toggles-btn">Configure</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Click Feedback</div>
                                <div class="setting-description">Sound when selecting board positions</div>
                            </div>
                            <div class="setting-control">
                                <select id="click-feedback">
                                    <option value="none">None</option>
                                    <option value="soft" selected>Soft Click</option>
                                    <option value="mechanical">Mechanical</option>
                                    <option value="digital">Digital</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Countdown Sounds</div>
                                <div class="setting-description">Audio cues for timed moves</div>
                            </div>
                            <div class="setting-control">
                                <select id="countdown-sounds">
                                    <option value="none">None</option>
                                    <option value="beep" selected>Beep</option>
                                    <option value="tick">Clock Tick</option>
                                    <option value="pulse">Pulse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Accessibility Settings -->
                <div class="tab-content" id="accessibility">
                    <div class="setting-group">
                        <h3 class="setting-group-title">Visual Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Color Blind Mode</div>
                                <div class="setting-description">Optimize colors and patterns for different types of color vision</div>
                            </div>
                            <div class="setting-control">
                                <select id="color-blind-mode">
                                    <option value="none" selected>None</option>
                                    <option value="protanopia">Protanopia (Red-Blind)</option>
                                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                                    <option value="achromatopsia">Achromatopsia (Monochromacy)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">High Contrast Mode</div>
                                <div class="setting-description">Increase contrast for better visibility</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="high-contrast">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Text Size</div>
                                <div class="setting-description">Adjust the size of text throughout the game</div>
                            </div>
                            <div class="setting-control">
                                <select id="text-size">
                                    <option value="small">Small</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="large">Large</option>
                                    <option value="x-large">Extra Large</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Reduce Animations</div>
                                <div class="setting-description">Minimize or eliminate animations that may cause discomfort</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="reduce-animations">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Hearing Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Visual Sound Indicators</div>
                                <div class="setting-description">Show visual cues for game sounds and events</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="visual-sound">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Subtitles</div>
                                <div class="setting-description">Show text descriptions for all audio content</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="subtitles">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Motor Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Input Method</div>
                                <div class="setting-description">Choose how you interact with the game</div>
                            </div>
                            <div class="setting-control">
                                <select id="input-method">
                                    <option value="touch-mouse" selected>Touch/Mouse</option>
                                    <option value="keyboard">Keyboard Navigation</option>
                                    <option value="voice">Voice Control</option>
                                    <option value="switch">Switch Device</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Extended Move Timer</div>
                                <div class="setting-description">Provide additional time for making moves in timed games</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="extended-timer">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Auto-Confirm Moves</div>
                                <div class="setting-description">Automatically confirm moves after selection</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="auto-confirm">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Cognitive Accessibility</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Game Speed</div>
                                <div class="setting-description">Adjust the overall pace of gameplay</div>
                            </div>
                            <div class="setting-control">
                                <select id="game-speed">
                                    <option value="very-slow">Very Slow</option>
                                    <option value="slow">Slow</option>
                                    <option value="normal" selected>Normal</option>
                                    <option value="fast">Fast</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Enhanced Tutorials</div>
                                <div class="setting-description">Show more detailed instructions and guidance</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="enhanced-tutorials">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Simplified Interface</div>
                                <div class="setting-description">Remove non-essential visual elements</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="simplified-interface">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Account Settings -->
                <div class="tab-content" id="account">
                    <div class="setting-group">
                        <h3 class="setting-group-title">User Profile</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Display Name</div>
                                <div class="setting-description">Change how your name appears to others</div>
                            </div>
                            <div class="setting-control">
                                <input type="text" value="Player" style="padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 0.25rem; width: 150px;">
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Profile Picture</div>
                                <div class="setting-description">Choose or upload your avatar image</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="profile-picture-btn">Change Picture</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Show Statistics</div>
                                <div class="setting-description">Display your game statistics on profile</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="show-stats" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Achievement Privacy</div>
                                <div class="setting-description">Control who can see your accomplishments</div>
                            </div>
                            <div class="setting-control">
                                <select id="achievement-privacy">
                                    <option value="public" selected>Public</option>
                                    <option value="friends">Friends Only</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Connection & Communication</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Friend Management</div>
                                <div class="setting-description">Add, remove, or block other players</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="friend-management-btn">Manage Friends</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Account Linking</div>
                                <div class="setting-description">Connect to social media or gaming platforms</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="account-linking-btn">Link Accounts</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Notification Settings</div>
                                <div class="setting-description">Configure alerts for challenges and updates</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="notification-settings-btn">Configure</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Email Preferences</div>
                                <div class="setting-description">Manage what communications you receive</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="email-preferences-btn">Configure</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h3 class="setting-group-title">Data & Privacy</h3>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Language Selection</div>
                                <div class="setting-description">Change the interface language</div>
                            </div>
                            <div class="setting-control">
                                <select id="language-selection">
                                    <option value="en" selected>English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                    <option value="zh">中文</option>
                                    <option value="ja">日本語</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Remember Game History</div>
                                <div class="setting-description">Store your past games for review</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="game-history" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Sync Across Devices</div>
                                <div class="setting-description">Save your progress to the cloud</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="cloud-sync" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Data Export</div>
                                <div class="setting-description">Download your personal game data</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="data-export-btn">Export Data</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Two-Factor Authentication</div>
                                <div class="setting-description">Add an extra layer of account security</div>
                            </div>
                            <div class="setting-control">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="two-factor">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Parental Controls</div>
                                <div class="setting-description">Restrict features for child accounts</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-outline" id="parental-controls-btn">Configure</button>
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <div>
                                <div class="setting-label">Clear All Data</div>
                                <div class="setting-description">Delete all saved games and statistics</div>
                            </div>
                            <div class="setting-control">
                                <button class="btn btn-danger" id="clear-data">Clear Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="settings-actions">
            <div class="save-indicator" id="save-indicator">Settings saved successfully!</div>
            <div class="action-buttons">
                <button class="btn btn-outline" id="back-button">Back</button>
                <button class="btn btn-primary" id="save-button">Save Settings</button>
            </div>
        </div>
    </div>
    
    <footer>
        <div>Tic Tac Toe Collection &copy; 2025</div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Tab switching functionality
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs and contents
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding content
                    const tabName = this.getAttribute('data-tab');
                    document.getElementById(tabName).classList.add('active');
                });
            });
            
            // Color picker functionality
            const colorOptions = document.querySelectorAll('.color-option');
            colorOptions.forEach(option => {
                option.addEventListener('click', function() {
                    colorOptions.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
            
            // Range slider value display
            const rangeSliders = document.querySelectorAll('.range-slider');
            rangeSliders.forEach(slider => {
                const valueDisplay = slider.parentElement.querySelector('.range-value');
                
                slider.addEventListener('input', function() {
                    if (this.id === 'animation-speed') {
                        const value = parseFloat(this.value);
                        let speedText = 'Normal (1x)';
                        
                        if (value < 0.5) speedText = 'Slow (' + value.toFixed(1) + 'x)';
                        else if (value > 1.5) speedText = 'Fast (' + value.toFixed(1) + 'x)';
                        else speedText = 'Normal (' + value.toFixed(1) + 'x)';
                        
                        valueDisplay.textContent = speedText;
                    } else if (this.id.startsWith('volume')) {
                        valueDisplay.textContent = (this.value * 100).toFixed(0) + '%';
                    }
                });
            });
            
            // Modal dialog for custom color picker
            const customColorBtn = document.getElementById('custom-color-btn');
            if (customColorBtn) {
                customColorBtn.addEventListener('click', function() {
                    alert('Color customization dialog would open here, allowing specific color adjustments for game elements.');
                });
            }
            
            // Sound toggles configuration
            const soundTogglesBtn = document.getElementById('sound-toggles-btn');
            if (soundTogglesBtn) {
                soundTogglesBtn.addEventListener('click', function() {
                    alert('Individual sound toggle panel would open here, allowing control over specific sound categories.');
                });
            }
            
            // Profile picture selector
            const profilePictureBtn = document.getElementById('profile-picture-btn');
            if (profilePictureBtn) {
                profilePictureBtn.addEventListener('click', function() {
                    alert('Profile picture selection dialog would open here, with upload and gallery options.');
                });
            }
            
            // Friend management dialog
            const friendManagementBtn = document.getElementById('friend-management-btn');
            if (friendManagementBtn) {
                friendManagementBtn.addEventListener('click', function() {
                    alert('Friend management panel would open here, showing friend list with options to add, remove, or block players.');
                });
            }
            
            // Account linking dialog
            const accountLinkingBtn = document.getElementById('account-linking-btn');
            if (accountLinkingBtn) {
                accountLinkingBtn.addEventListener('click', function() {
                    alert('Account linking panel would open, showing available platforms to connect with your game account.');
                });
            }
            
            // Notification settings dialog
            const notificationSettingsBtn = document.getElementById('notification-settings-btn');
            if (notificationSettingsBtn) {
                notificationSettingsBtn.addEventListener('click', function() {
                    alert('Notification settings panel would open, with detailed options for different types of alerts and reminders.');
                });
            }
            
            // Email preferences dialog
            const emailPreferencesBtn = document.getElementById('email-preferences-btn');
            if (emailPreferencesBtn) {
                emailPreferencesBtn.addEventListener('click', function() {
                    alert('Email preferences panel would open, with options to manage subscription to different types of emails.');
                });
            }
            
            // Data export functionality
            const dataExportBtn = document.getElementById('data-export-btn');
            if (dataExportBtn) {
                dataExportBtn.addEventListener('click', function() {
                    alert('Your game data is being prepared for export. This includes game history, statistics, and settings. You will be notified when the download is ready.');
                });
            }
            
            // Parental controls dialog
            const parentalControlsBtn = document.getElementById('parental-controls-btn');
            if (parentalControlsBtn) {
                parentalControlsBtn.addEventListener('click', function() {
                    alert('Parental controls panel would open, with options to limit playtime, restrict features, and monitor activity.');
                });
            }
            
            // Clear data confirmation
            const clearDataBtn = document.getElementById('clear-data');
            clearDataBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear all your game data? This action cannot be undone.')) {
                    // Simulate clearing data
                    setTimeout(() => {
                        alert('All data has been cleared successfully.');
                    }, 500);
                }
            });
            
            // Save settings functionality
            const saveButton = document.getElementById('save-button');
            const saveIndicator = document.getElementById('save-indicator');
            
            saveButton.addEventListener('click', function() {
                // Simulate saving settings
                saveButton.disabled = true;
                saveButton.textContent = 'Saving...';
                
                setTimeout(() => {
                    saveButton.disabled = false;
                    saveButton.textContent = 'Save Settings';
                    
                    // Show success message
                    saveIndicator.classList.add('visible');
                    
                    // Hide success message after 3 seconds
                    setTimeout(() => {
                        saveIndicator.classList.remove('visible');
                    }, 3000);
                }, 800);
            });
            
            // Back button functionality
            const backButton = document.getElementById('back-button');
            backButton.addEventListener('click', function() {
                // In a real app, you'd check if there are unsaved changes
                window.location.href = 'index.html';
            });
        });
    </script>
</body>
</html>
