export type Project = {
  title: string;
  type: string;
  layout: string;
  description?: string;
  overview?: string;
  technologies?: string[];
  features?: { title: string; description: string }[];
  screenshots?: { src: string; title: string; alt: string; caption: string }[];
  development?: string;
  status?: string;
};

// Edit each project's content here. Entries with no description remain templates.
export const projects: Project[] = [
  {
    title: 'Pampanga Local',
    type: 'FULL-STACK WEB APPLICATION',
    layout: 'web',
    description: 'A community directory for discovering and supporting businesses in Pampanga.',
    overview: 'Pampanga Local brings local businesses into one searchable directory. Visitors can explore businesses by category and location, save favorites, and view business profiles. Business owners can manage listings, while administrators review submissions before they appear in the directory.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'Express', 'MongoDB'],
    screenshots: [
      {
        src: '/projects/pampanga-local-desktop.png',
        title: 'Landing page',
        alt: 'Pampanga Local desktop homepage with search and neighborhood business highlights',
        caption: 'Desktop homepage with search and daily highlights. The businesses shown here are labeled sample listings.',
      },
      {
        src: '/projects/pampanga-local-business.jpg',
        title: 'Business profile',
        alt: 'Pampanga Local business detail page showing a sample business and its information',
        caption: 'The business detail view brings photos, a description, contact information, and community feedback into one place. This screenshot uses a clearly labeled sample business.',
      },
    ],
    features: [
      { title: 'Discover local businesses', description: 'Search, category and location filters, sorting, saved listings, and daily rotating homepage highlights.' },
      { title: 'Business profiles', description: 'Shareable detail pages with photo galleries, contact links, opening hours, and optional Google Maps links.' },
      { title: 'Owner workspace', description: 'Account registration, private listing drafts, reusable photo uploads, and submissions for admin review.' },
      { title: 'Community & moderation', description: 'Reviews, owner replies, reports, listing approval, change requests, and suspension or restoration by administrators.' },
    ],
    development: 'The React interface communicates with an Express API, and MongoDB stores accounts, listings, reviews, and uploaded images. Server-side checks enforce ownership and admin permissions. Approved listings stay visible while edited revisions await review.',
    status: 'Local development project. Not publicly deployed. Verification and password-recovery messages use a local development inbox; no live email service is connected. Sample listings use illustrative stock images. Bookings and payments are outside the project’s scope.',
  },
  {
    title: 'Side Quest',
    type: 'BROWSER ARCADE',
    layout: 'app',
    description: 'Eight classic mini-games in a colorful, responsive browser arcade.',
    overview: 'Side Quest is a collection of eight games built with plain HTML, CSS, and JavaScript. A shared landing page lets players pick a game, read its controls, and return to the arcade between rounds. It runs locally without an account or a backend service.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'localStorage'],
    screenshots: [
      { src: '/projects/side-quest-landing.jpg', title: 'Landing page', alt: 'Side Quest landing page with all eight game cards', caption: 'The arcade lobby introduces the project and displays eight game cards. Each card explains the game, player mode, and controls before opening its play screen.' },
      { src: '/projects/side-quest-snake.jpg', title: 'Snake', alt: 'Snake game with its playing field, score, speed selector and controls', caption: 'Steer the snake toward food without hitting walls or itself. Includes three speeds, pause and restart controls, mobile direction buttons, and a personal best saved in the browser.' },
      { src: '/projects/side-quest-pong.jpg', title: 'Pong', alt: 'Pong court with player and computer scores', caption: 'Play a first-to-five paddle match against the computer. Keyboard, pointer, and touch controls move the paddle; pause and restart controls let players manage each round.' },
      { src: '/projects/side-quest-memory.jpg', title: 'Memory Match', alt: 'Memory Match screen showing sixteen cards and move counters', caption: 'Flip two cards at a time to find eight matching pairs. The game tracks moves and completed pairs, and saves the lowest completed move count as a personal best.' },
      { src: '/projects/side-quest-tic-tac-toe.jpg', title: 'Tic-Tac-Toe', alt: 'Tic-Tac-Toe board with X and O moves and session scores', caption: 'Two players share one device and alternate X and O moves. The game checks rows, columns, and diagonals for a winner and tracks wins and draws during the session.' },
      { src: '/projects/side-quest-breakout.jpg', title: 'Breakout', alt: 'Breakout board with bricks, paddle, and lives counter', caption: 'Move the paddle to bounce the ball and clear all 24 bricks with three lives. Supports keyboard, pointer, and touch movement, plus pause and restart controls.' },
      { src: '/projects/side-quest-rps.jpg', title: 'Rock Paper Scissors', alt: 'Rock Paper Scissors choices with player, computer and tie scores', caption: 'Choose rock, paper, or scissors against the computer in a first-to-five match. Each round compares the choices, updates the score, and counts ties separately.' },
      { src: '/projects/side-quest-whack-a-mole.jpg', title: 'Whack-a-Mole', alt: 'Whack-a-Mole game with nine holes, a visible mole and a countdown', caption: 'Tap appearing moles during a 30-second round. Each hit earns a point, while the score, countdown, and saved personal best provide immediate feedback.' },
      { src: '/projects/side-quest-reaction.jpg', title: 'Reaction Timer', alt: 'Reaction Timer start panel with last and best time indicators', caption: 'Start a round, wait for the panel to turn green, then click, tap, or press Space. Early inputs count as false starts, and valid attempts can update the saved fastest reaction time.' },
    ],
    features: [
      { title: 'Eight games, one arcade', description: 'A shared lobby and consistent game screens connect reflex, memory, and two-player games.' },
      { title: 'Responsive controls', description: 'Keyboard, click, pointer, or touch interactions suited to each game.' },
      { title: 'Scores & personal bests', description: 'Live counters track each session. Snake, Memory Match, Whack-a-Mole, and Reaction Timer save personal bests locally.' },
      { title: 'Lightweight implementation', description: 'Vanilla JavaScript game logic, Canvas and DOM interfaces, and CSS illustrations without a frontend framework.' },
    ],
    development: 'JavaScript handles game state, input events, scoring, timing, and collisions. Canvas draws the action-game boards, while DOM elements handle card and grid interactions. A standalone Snake page is embedded in the shared arcade, and localStorage keeps selected personal bests between visits.',
    status: 'Completed local browser arcade. Public hosting has not been completed. Personal bests are stored in the current browser when local storage is available; they do not sync between devices.',
  },
  {
    title: 'Walnut Chess',
    type: 'BROWSER CHESS GAME',
    layout: 'data',
    description: 'A warm, responsive chess experience for friendly matches and practice against the computer.',
    overview: 'Walnut Chess brings the classic board game into the browser with a quiet, walnut-inspired design. Players can share one device with a friend or play white against a computer opponent, choosing a difficulty and an optional clock before taking their seat.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'chess.js', 'Web Workers'],
    screenshots: [
      { src: '/projects/walnut-chess-landing.jpg', title: 'Landing page', alt: 'Walnut Chess landing page with computer and friend opponent choices', caption: 'The welcome screen introduces the chess club and lets players choose their opponent. Match setup then offers an optional timer, plus three difficulty levels for computer games.' },
      { src: '/projects/walnut-chess-friend.jpg', title: 'Vs friend', alt: 'Walnut Chess same-device friend match with player labels, board and move history', caption: 'Two friends take turns on the same device. The board shows legal move hints, tracks whose turn it is, and records moves, with undo and board-flip controls available during play.' },
      { src: '/projects/walnut-chess-ai.jpg', title: 'Vs AI', alt: 'Walnut Chess computer match on Balanced difficulty after the opening moves', caption: 'Play white against the browser-based computer on Casual, Balanced, or Challenging difficulty. This Balanced match shows the computer responding to the opening move, with the move history alongside the board.' },
    ],
    features: [
      { title: 'Two ways to play', description: 'Same-device matches with a friend or practice against a computer with three difficulty levels.' },
      { title: 'Legal chess moves', description: 'Legal move hints, castling, en passant, promotion selection, and checkmate and draw detection powered by chess.js.' },
      { title: 'Choose your pace', description: 'Untimed play or 3, 5, 10, or 15 minutes per player, with separate clocks and no increment.' },
      { title: 'A thoughtful playing space', description: 'Move history, undo, manual board flipping, and a responsive board that adapts to the available screen space.' },
    ],
    development: 'HTML and CSS provide the interface, while JavaScript connects match setup, clocks, board interactions, and move history. The chess.js library validates the rules, and a Web Worker runs the lightweight computer search separately from the interface.',
    status: 'Completed browser chess project. Friend mode uses one shared device; online multiplayer is not included. The computer is a lightweight local opponent, and matches are not saved after a page reload.',
  },
  {
    title: 'Hajime',
    type: 'JAPANESE LEARNING WEBSITE',
    layout: 'mobile',
    description: 'A welcoming place to learn beginner Japanese through guided lessons, vocabulary, and sentence practice.',
    overview: 'Hajime helps absolute beginners take small steps into Japanese. Learners can follow ten guided lessons or explore freely through beginner guides, kana charts, searchable vocabulary, and a sentence studio. Nothing is locked behind quiz completion, and no account is required.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'localStorage', 'Web Speech API'],
    screenshots: [
      { src: '/projects/hajime-landing.jpg', title: 'Landing page', alt: 'Hajime homepage with a Japanese landscape illustration and links to beginner lessons', caption: 'The homepage welcomes new learners with a landscape built in CSS, a first-lesson shortcut, and an introduction to the learning path.' },
      { src: '/projects/hajime-lesson.jpg', title: 'Guided lessons', alt: 'Hajime hiragana study card with the character a, its reading, and lesson navigation', caption: 'Each lesson combines an explanation, a worked example, and five study cards with readings. Optional practice adds three-choice questions, hints, and mistake review.' },
      { src: '/projects/hajime-vocabulary.jpg', title: 'Word garden', alt: 'Hajime searchable vocabulary explorer with category filters and bookmarkable word cards', caption: 'Browse 129 words across 11 categories, search for Japanese or English terms, and bookmark words for later. Word details include readings and example sentences.' },
      { src: '/projects/hajime-sentences.jpg', title: 'Sentence studio', alt: 'Hajime sentence builder showing Japanese text, romaji, English meaning, and playback controls', caption: 'Combine words with 12 sentence patterns and explore eight everyday dialogues. Learners can hide romaji or English and use optional synthesized pronunciation with adjustable speed and repetition.' },
    ],
    features: [
      { title: 'Ten guided lessons', description: 'Beginner topics include kana vowels, greetings, introductions, numbers, everyday vocabulary, and simple sentences.' },
      { title: 'Explore at your own pace', description: 'Six beginner guides, 46 basic hiragana, 46 basic katakana, and a searchable vocabulary collection with bookmarks.' },
      { title: 'Practice everyday sentences', description: 'Twelve patterns with 111 variations and eight dialogues support reading, recall, and optional speech playback.' },
      { title: 'Progress in your browser', description: 'Lesson completion, latest and best quiz scores, and saved words are stored locally without an account.' },
    ],
    development: 'React components connect the guided lessons, vocabulary explorer, sentence studio, and progress views. Structured JavaScript content supplies the learning material, localStorage preserves progress and bookmarks, and the Web Speech API provides optional pronunciation. Custom CSS handles the responsive layouts and landscape illustration.',
    status: 'Completed beginner learning website. Progress stays in the current browser and can be lost when its storage is cleared. Pronunciation requires an available Japanese device voice; it is synthesized audio, with written readings available as a fallback. No speech scoring is included.',
  },
];
