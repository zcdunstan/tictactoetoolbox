import React, { useState, useEffect } from 'react';

const SOSExtended = () => {
  // Game configuration state
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(5);
  const [player1Type, setPlayer1Type] = useState('human');
  const [player2Type, setPlayer2Type] = useState('human');
  const [player1Symbol, setPlayer1Symbol] = useState('both');
  const [player2Symbol, setPlayer2Symbol] = useState('both');
  const [gameMode, setGameMode] = useState('points');
  const [targetScore, setTargetScore] = useState(5);
  const [difficulty, setDifficulty] = useState('medium');
  const [cpuDelay, setCpuDelay] = useState(800);
  
  // Game state
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentSymbol, setCurrentSymbol] = useState('S');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameStatus, setGameStatus] = useState('Configure your game settings and press Start Game');
  const [gameHistory, setGameHistory] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastMove, setLastMove] = useState(null);
  const [winningSequences, setWinningSequences] = useState([]);
  const [highlightedSequence, setHighlightedSequence] = useState(null);

  // Initialize board based on size
  useEffect(() => {
    resetBoard();
  }, [boardSize]);

  // Computer player logic
  useEffect(() => {
    if (!gameStarted || gameStatus !== 'Game in progress') return;
    
    const isCurrentPlayerComputer = 
      (currentPlayer === 1 && player1Type === 'computer') || 
      (currentPlayer === 2 && player2Type === 'computer');
    
    if (isCurrentPlayerComputer) {
      const timer = setTimeout(() => {
        makeComputerMove();
      }, cpuDelay);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, board, gameStarted, gameStatus]);

  // Highlight winning sequences one by one
  useEffect(() => {
    if (winningSequences.length === 0) return;
    
    let sequenceIndex = 0;
    const interval = setInterval(() => {
      setHighlightedSequence(winningSequences[sequenceIndex]);
      sequenceIndex = (sequenceIndex + 1) % winningSequences.length;
    }, 1500);
    
    return () => clearInterval(interval);
  }, [winningSequences]);

  // Game initialization and reset functions
  const resetBoard = () => {
    setBoard(Array(boardSize * boardSize).fill(''));
    setWinningSequences([]);
    setHighlightedSequence(null);
  };

  const startGame = () => {
    resetBoard();
    setCurrentPlayer(1);
    setCurrentSymbol('S');
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameStatus('Game in progress');
    setGameStarted(true);
    setGameHistory([]);
    addToHistory("Game started");
  };

  const resetGame = () => {
    resetBoard();
    setCurrentPlayer(1);
    setCurrentSymbol('S');
    setGameStatus('Game in progress');
    addToHistory("Game reset");
  };

  const newGame = () => {
    setGameStarted(false);
    setGameStatus('Configure your game settings and press Start Game');
  };

  // Handle player move
  const handleCellClick = (index) => {
    // Check if the move is valid
    if (!gameStarted || 
        gameStatus !== 'Game in progress' || 
        board[index] !== '') {
      return;
    }

    // If player can only use specific symbol, enforce it
    let symbolToPlace = currentSymbol;
    if ((currentPlayer === 1 && player1Symbol !== 'both') || 
        (currentPlayer === 2 && player2Symbol !== 'both')) {
      symbolToPlace = currentPlayer === 1 ? player1Symbol : player2Symbol;
    }

    makeMove(index, symbolToPlace);
  };
  
  // Ensure players can't both select the same exclusive symbol
  useEffect(() => {
    if (player1Symbol === 'S' && player2Symbol === 'S') {
      setPlayer2Symbol('both');
    } else if (player1Symbol === 'O' && player2Symbol === 'O') {
      setPlayer2Symbol('both');
    }
  }, [player1Symbol]);
  
  useEffect(() => {
    if (player2Symbol === 'S' && player1Symbol === 'S') {
      setPlayer1Symbol('both');
    } else if (player2Symbol === 'O' && player1Symbol === 'O') {
      setPlayer1Symbol('both');
    }
  }, [player2Symbol]);

  const makeMove = (index, symbol) => {
    // Update the board
    const newBoard = [...board];
    newBoard[index] = symbol;
    setBoard(newBoard);
    
    // Set last move for highlighting
    setLastMove(index);
    
    // Animate the placement
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    // Add to history
    addToHistory(`Player ${currentPlayer} placed ${symbol} at position ${index}`);
    
    // Check if this move created any SOS sequences
    const newSequences = checkForSOS(newBoard, index);
    if (newSequences.length > 0) {
      // Add new sequences to the list of winning sequences
      const updatedWinningSequences = [...winningSequences, ...newSequences];
      setWinningSequences(updatedWinningSequences);
      
      // Update the score
      if (currentPlayer === 1) {
        const newScore = player1Score + newSequences.length;
        setPlayer1Score(newScore);
        
        // Check if target score is reached
        if (gameMode === 'target' && newScore >= targetScore) {
          setGameStatus(`Player 1 wins with ${newScore} points!`);
          return;
        }
      } else {
        const newScore = player2Score + newSequences.length;
        setPlayer2Score(newScore);
        
        // Check if target score is reached
        if (gameMode === 'target' && newScore >= targetScore) {
          setGameStatus(`Player 2 wins with ${newScore} points!`);
          return;
        }
      }
      
      // Player gets another turn after making an SOS
      addToHistory(`Player ${currentPlayer} scored ${newSequences.length} point(s)! Gets another turn.`);
      return;
    }
    
    // Check for game end (board filled)
    if (!newBoard.includes('')) {
      // Determine winner based on points
      if (player1Score > player2Score) {
        setGameStatus(`Game over! Player 1 wins with ${player1Score} points to ${player2Score}`);
      } else if (player2Score > player1Score) {
        setGameStatus(`Game over! Player 2 wins with ${player2Score} points to ${player1Score}`);
      } else {
        setGameStatus(`Game over! It's a tie with ${player1Score} points each`);
      }
      return;
    }
    
    // Switch to next player
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    
    // Update the current symbol for next move
    // Only if both players are set to 'both' symbols
    if ((currentPlayer === 1 && player2Symbol === 'both') || 
        (currentPlayer === 2 && player1Symbol === 'both')) {
      setCurrentSymbol(currentSymbol === 'S' ? 'O' : 'S');
    }
  };

  // Computer player move
  const makeComputerMove = () => {
    const playerSymbol = currentPlayer === 1 ? player1Symbol : player2Symbol;
    const symbolToUse = playerSymbol === 'both' ? currentSymbol : playerSymbol;
    
    // Get all empty cells
    const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(cell => cell !== null);
    
    if (emptyCells.length === 0) return;
    
    let moveIndex;
    
    if (difficulty === 'easy') {
      // Easy: Random move
      moveIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } else {
      // Medium/Hard: Try to make an SOS
      moveIndex = findStrategicMove(symbolToUse, difficulty === 'hard');
      
      // If no strategic move found, use random
      if (moveIndex === null) {
        moveIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      }
    }
    
    makeMove(moveIndex, symbolToUse);
  };

  // Find strategic move for computer player
  const findStrategicMove = (symbol, isHardMode) => {
    const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(cell => cell !== null);
    
    // Try to complete an SOS
    for (const index of emptyCells) {
      const tempBoard = [...board];
      tempBoard[index] = symbol;
      if (checkForSOS(tempBoard, index).length > 0) {
        return index;
      }
    }
    
    // For hard difficulty, try to set up future SOS
    if (isHardMode) {
      // If placing 'S', look for positions that could lead to SOS in the future
      if (symbol === 'S') {
        for (const index of emptyCells) {
          const row = Math.floor(index / boardSize);
          const col = index % boardSize;
          
          // Check horizontally
          if (col < boardSize - 2 && 
              board[row * boardSize + col + 1] === '' && 
              board[row * boardSize + col + 2] === '') {
            return index;
          }
          
          // Check vertically
          if (row < boardSize - 2 && 
              board[(row + 1) * boardSize + col] === '' && 
              board[(row + 2) * boardSize + col] === '') {
            return index;
          }
          
          // Check diagonal down-right
          if (row < boardSize - 2 && col < boardSize - 2 && 
              board[(row + 1) * boardSize + col + 1] === '' && 
              board[(row + 2) * boardSize + col + 2] === '') {
            return index;
          }
          
          // Check diagonal down-left
          if (row < boardSize - 2 && col > 1 && 
              board[(row + 1) * boardSize + col - 1] === '' && 
              board[(row + 2) * boardSize + col - 2] === '') {
            return index;
          }
        }
      }
      
      // If placing 'O', look for positions between two 'S's
      if (symbol === 'O') {
        for (const index of emptyCells) {
          const row = Math.floor(index / boardSize);
          const col = index % boardSize;
          
          // Check horizontally
          if (col > 0 && col < boardSize - 1) {
            if (board[row * boardSize + col - 1] === 'S' && 
                board[row * boardSize + col + 1] === 'S') {
              return index;
            }
          }
          
          // Check vertically
          if (row > 0 && row < boardSize - 1) {
            if (board[(row - 1) * boardSize + col] === 'S' && 
                board[(row + 1) * boardSize + col] === 'S') {
              return index;
            }
          }
          
          // Check diagonal down-right
          if (row > 0 && row < boardSize - 1 && col > 0 && col < boardSize - 1) {
            if (board[(row - 1) * boardSize + col - 1] === 'S' && 
                board[(row + 1) * boardSize + col + 1] === 'S') {
              return index;
            }
          }
          
          // Check diagonal down-left
          if (row > 0 && row < boardSize - 1 && col > 0 && col < boardSize - 1) {
            if (board[(row - 1) * boardSize + col + 1] === 'S' && 
                board[(row + 1) * boardSize + col - 1] === 'S') {
              return index;
            }
          }
        }
      }
    }
    
    return null;
  };

  // Check for SOS sequences
  const checkForSOS = (boardState, lastMoveIndex) => {
    if (lastMoveIndex === undefined || boardState[lastMoveIndex] === '') {
      return [];
    }

    const sequences = [];
    const row = Math.floor(lastMoveIndex / boardSize);
    const col = lastMoveIndex % boardSize;
    
    // Define directions to check: horizontal, vertical, diagonal down-right, diagonal down-left
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    
    for (const [dx, dy] of directions) {
      // Check for possible SOS starting positions 
      // (this is more complex than regular tic-tac-toe because we need to find "SOS" sequences)
      for (let i = -2; i <= 0; i++) {
        const cells = [
          [row + i * dx, col + i * dy],
          [row + (i + 1) * dx, col + (i + 1) * dy],
          [row + (i + 2) * dx, col + (i + 2) * dy]
        ];
        
        // Make sure all cells are within the board boundaries
        if (cells.every(([r, c]) => 
          r >= 0 && r < boardSize && 
          c >= 0 && c < boardSize)) {
          
          const indices = cells.map(([r, c]) => r * boardSize + c);
          
          // Check if these cells form an "SOS" sequence
          if (boardState[indices[0]] === 'S' && 
              boardState[indices[1]] === 'O' && 
              boardState[indices[2]] === 'S') {
            sequences.push(indices);
          }
        }
      }
    }
    
    return sequences;
  };

  // History tracking
  const addToHistory = (action) => {
    const timestamp = new Date().toLocaleTimeString();
    const newEntry = `[${timestamp}] ${action}`;
    setGameHistory([newEntry, ...gameHistory.slice(0, 9)]);
  };

  // Rendering functions
  const renderBoard = () => {
    // Calculate cell size based on board size
    const cellSize = Math.max(30, Math.min(50, 400 / boardSize));
    
    return (
      <div 
        className="grid gap-1 bg-gray-300 p-1 mx-auto" 
        style={{ 
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          width: `${boardSize * cellSize + (boardSize - 1) * 4 + 8}px`
        }}
      >
        {board.map((cell, index) => renderCell(index, cellSize))}
      </div>
    );
  };

  const renderCell = (index, cellSize) => {
    const isHighlighted = lastMove === index;
    const isPartOfWinningSequence = highlightedSequence && highlightedSequence.includes(index);
    
    const cellClasses = `
      flex items-center justify-center font-bold bg-white cursor-pointer
      ${board[index] ? '' : 'hover:bg-gray-100'}
      ${isHighlighted && isAnimating ? 'scale-110 transform transition-transform duration-200' : ''}
      ${isPartOfWinningSequence ? 'bg-green-200' : ''}
    `;
    
    return (
      <div
        key={index}
        className={cellClasses}
        style={{ height: `${cellSize}px`, width: `${cellSize}px` }}
        onClick={() => handleCellClick(index)}
      >
        <span className={`text-xl ${board[index] === 'S' ? 'text-blue-600' : 'text-red-600'}`}>
          {board[index]}
        </span>
      </div>
    );
  };

  // Symbol select component with constraint logic
  const SymbolSelect = ({ value, onChange, label, otherPlayerSymbol }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}:</label>
      <select 
        className="w-full p-2 border rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="both">Both S and O (Alternating)</option>
        {otherPlayerSymbol !== "S" && <option value="S">S Only</option>}
        {otherPlayerSymbol !== "O" && <option value="O">O Only</option>}
      </select>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">SOS Extended</h1>
      
      <div className="w-full bg-blue-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Game Rules:</h2>
        <p className="text-sm mb-1">• Players take turns placing either an S or an O on the grid</p>
        <p className="text-sm mb-1">• Players can choose to use only one symbol or alternate between S and O</p>
        <p className="text-sm mb-1">• The goal is to form the sequence "SOS" horizontally, vertically, or diagonally</p>
        <p className="text-sm mb-1">• Each SOS formation scores one point</p>
        <p className="text-sm mb-1">• When a player makes an SOS, they get an extra turn</p>
        <p className="text-sm">• The player with the most points when the board fills up (or reaches the target score) wins</p>
      </div>
      
      {!gameStarted ? (
        <div className="w-full bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Game Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-lg">Board Options</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Board Size ({boardSize}×{boardSize}):</label>
                <input 
                  type="range" 
                  min="3" 
                  max="10" 
                  value={boardSize}
                  onChange={(e) => setBoardSize(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Game Mode:</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={gameMode}
                  onChange={(e) => setGameMode(e.target.value)}
                >
                  <option value="points">Most Points When Board Fills</option>
                  <option value="target">First to Reach Target Score</option>
                </select>
              </div>
              
              {gameMode === 'target' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Target Score: {targetScore}</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={targetScore}
                    onChange={(e) => setTargetScore(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-lg">Player Options</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Player 1:</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={player1Type}
                  onChange={(e) => setPlayer1Type(e.target.value)}
                >
                  <option value="human">Human</option>
                  <option value="computer">Computer</option>
                </select>
              </div>
              
              <SymbolSelect 
                value={player1Symbol} 
                onChange={setPlayer1Symbol} 
                label="Player 1 Symbol"
                otherPlayerSymbol={player2Symbol}
              />
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Player 2:</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={player2Type}
                  onChange={(e) => setPlayer2Type(e.target.value)}
                >
                  <option value="human">Human</option>
                  <option value="computer">Computer</option>
                </select>
              </div>
              
              <SymbolSelect 
                value={player2Symbol} 
                onChange={setPlayer2Symbol} 
                label="Player 2 Symbol"
                otherPlayerSymbol={player1Symbol}
              />
            </div>
            
            {(player1Type === 'computer' || player2Type === 'computer') && (
              <div className="md:col-span-2">
                <h3 className="font-bold mb-3 text-lg">Computer Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Computer Difficulty:</label>
                    <select 
                      className="w-full p-2 border rounded"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">CPU Move Delay (ms):</label>
                    <input 
                      type="range" 
                      min="200" 
                      max="2000" 
                      step="200"
                      value={cpuDelay}
                      onChange={(e) => setCpuDelay(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center">{cpuDelay}ms</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded text-lg"
              onClick={startGame}
            >
              Start Game
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full gap-8 mb-6">
          <div className="md:w-3/5">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-bold">
                <span className={currentPlayer === 1 ? 'text-blue-600 underline' : ''}>
                  Player 1: {player1Score}
                </span>
              </div>
              <div className="text-xl font-bold">
                <span className={currentPlayer === 2 ? 'text-red-600 underline' : ''}>
                  Player 2: {player2Score}
                </span>
              </div>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-lg font-semibold">
                {gameStatus === 'Game in progress' 
                  ? `Current Turn: Player ${currentPlayer}` 
                  : gameStatus}
              </div>
              {gameStatus === 'Game in progress' && (
                <div className="text-md mt-1">
                  {(() => {
                    const playerSymbol = currentPlayer === 1 ? player1Symbol : player2Symbol;
                    if (playerSymbol === 'both') {
                      return `Current Symbol: ${currentSymbol}`;
                    } else {
                      return `Using Symbol: ${playerSymbol}`;
                    }
                  })()}
                </div>
              )}
              {gameMode === 'target' && (
                <div className="text-sm mt-1">
                  Target: {targetScore} points
                </div>
              )}
            </div>
            
            {renderBoard()}
            
            <div className="flex justify-center gap-4 mt-6">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={resetGame}
              >
                Reset Board
              </button>
              <button 
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={newGame}
              >
                New Game
              </button>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Current Settings</h3>
              <p><strong>Board Size:</strong> {boardSize}×{boardSize}</p>
              <p><strong>Game Mode:</strong> {gameMode === 'points' ? 'Most Points' : 'First to ' + targetScore}</p>
              <p><strong>Player 1:</strong> {player1Type === 'human' ? 'Human' : 'Computer'}</p>
              <p><strong>Player 1 Symbol:</strong> {player1Symbol === 'both' ? 'Both (Alternating)' : player1Symbol}</p>
              <p><strong>Player 2:</strong> {player2Type === 'human' ? 'Human' : 'Computer'}</p>
              <p><strong>Player 2 Symbol:</strong> {player2Symbol === 'both' ? 'Both (Alternating)' : player2Symbol}</p>
              {(player1Type === 'computer' || player2Type === 'computer') && (
                <>
                  <p><strong>Computer Difficulty:</strong> {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
                  <p><strong>CPU Move Delay:</strong> {cpuDelay}ms</p>
                </>
              )}
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Game Guide</h3>
              <div className="text-sm">
                <p className="mb-1">• Create "SOS" sequences to earn points</p>
                <p className="mb-1">• When you form an SOS, you get another turn</p>
                <p className="mb-1">• Winning sequences will be highlighted in green</p>
                <p className="mb-1">• The current player is indicated with an underline</p>
                {gameMode === 'points' && <p>• Game ends when the board is full</p>}
                {gameMode === 'target' && <p>• Game ends when a player reaches {targetScore} points</p>}
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Game History</h3>
              <div className="h-48 overflow-y-auto text-sm">
                {gameHistory.map((entry, index) => (
                  <div key={index} className="mb-1">{entry}</div>
                ))}
                {gameHistory.length === 0 && <div className="text-gray-500">No moves yet</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSExtended;
