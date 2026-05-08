# ⚔️ Tic Tac Toe — Shield vs Sword

A **browser-based Tic Tac Toe game** built with Vanilla JavaScript, HTML and CSS.

A classic two-player strategy game with a themed twist — instead of X's and O's, players battle as **Shield 🛡️** and **Sword ⚔️**.

---

## 🔗 Deploy

### 🔗 Access the live page here:

👉 https://kelvesmoura.github.io/Jogo-da-Velha/

---

## 🎯 Project Purpose

The main objective of this project is to **practice programming logic and DOM manipulation using JavaScript** through an interactive two-player game.

This project helps reinforce:

- 🧠 Game loop logic with win/draw/loss conditions
- 🌐 DOM manipulation and dynamic UI updates
- 🎨 CSS animations and responsive layout
- 📐 Project structure and separation of responsibilities

---

## 🚀 Technologies Used

- 🧾 **HTML5**
- ⚡ **JavaScript (Vanilla JS)**
- 🎨 **CSS3** (Animations, Grid, Flexbox, Media Queries)
- 🌐 **DOM Manipulation**

---

## 🗂️ Project Structure

```
Tic-Tac-Toe/
├── index.html                  # Main game page
├── .gitignore
└── src/
    ├── js/
    │   ├── main.js             # DOM selectors, event listeners, flow control
    │   └── game.js             # Core game logic (moves, winner check, score)
    ├── style/
    │   ├── main.css            # Global styles and player symbol rendering
    │   ├── header.css          # Header and scoreboard styles
    │   └── gameboard.css       # Board, cards, controls and animations
    └── favicon/
        └── Favicon-Site.ico    # Site favicon
```

---

## ⚙️ Architecture

The project is structured around a clear **separation of concerns**:

### `main.js` — DOM & Event Layer

Handles all DOM queries, event binding, and user interaction flow. It controls when actions are allowed (game running, game over) and delegates logic calls to `game.js`.

### `game.js` — Game Logic Layer

Contains all game rules: registering moves, checking win conditions, detecting draws, updating the scoreboard, and resetting the board.

---

## 🎮 Game Flow

1. The page loads and the board is automatically **cleaned and reset**
2. Player clicks **"Start Game"** to begin the match
3. Players alternate turns — **Shield 🛡️** always goes first
4. On each turn, the active player clicks an empty cell to mark it
5. After every move, the game checks for a **winner** or a **draw**
6. If a winner is found:
   - The winning cells **highlight in green** with a pulse animation
   - The winner's score is incremented
   - A result message is displayed
7. Click **"Reset Game"** to clear the board and start a new round
8. The **scoreboard persists** across rounds until the page is refreshed

---

## 🏆 Win Conditions

The game checks all **8 possible winning combinations** after every move:

| Type      | Combinations                |
| --------- | --------------------------- |
| Rows      | [0,1,2] · [3,4,5] · [6,7,8] |
| Columns   | [0,3,6] · [1,4,7] · [2,5,8] |
| Diagonals | [0,4,8] · [2,4,6]           |

---

## 🧪 Concepts Practiced

### 🌐 DOM Manipulation

- Dynamic class toggling to mark cells and disable interaction
- `querySelectorAll` with `NodeList` iteration
- Inline style and CSS class combination for win highlighting

### 🎮 Game Logic

- Turn-based player switching
- Win detection using `Array.some()` and `Array.every()`
- Draw detection by checking if all cells are disabled
- Score tracking with live DOM updates

### 🎨 CSS & Animations

- CSS Grid for the 3×3 board layout
- `@keyframes pulse` animation on winning cells
- `::after` pseudo-elements to render player emoji symbols
- Responsive layout with media queries for mobile screens (≤ 425px)

---

## ▶️ How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KelvesMoura/Jogo-da-Velha.git
```

### 2️⃣ Open `index.html` directly in your browser

Since this project uses plain JavaScript (no ES Modules), you can open the file directly:

```
Just double-click index.html — no server needed.
```

Or use a local server for a better experience:

```bash
# Node.js
npx serve .

# Python 3
python -m http.server 8080

# VS Code — install "Live Server" and click "Go Live"
```

---

## ⚠️ Known Limitations

- No AI opponent — strictly two human players on the same device
- Scoreboard resets on page refresh (not persisted)
- No support for customizing player names

---

## 🛣️ Possible Improvements

- [ ] Replace `localStorage` usage with in-memory arrays for game state
- [ ] Add a single-player mode with a basic AI (random or minimax)
- [ ] Persist the scoreboard across sessions
- [ ] Add sound effects on move and win
- [ ] Improve accessibility (keyboard navigation, ARIA labels)

---

## 📝 License

Personal study project. Free to use and adapt for learning purposes.
