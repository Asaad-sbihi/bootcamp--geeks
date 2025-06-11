const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// --- Game Data ---
const emojis = [
    { emoji: '😀', name: 'Smile' }, { emoji: '🐶', name: 'Dog' }, { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' }, { emoji: '🍕', name: 'Pizza' }, { emoji: '💡', name: 'Light Bulb' },
    { emoji: '🌈', name: 'Rainbow' }, { emoji: '📚', name: 'Books' }, { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🤖', name: 'Robot' }, { emoji: '💻', name: 'Laptop' }, { emoji: '🎈', name: 'Balloon' },
    { emoji: '🎉', name: 'Party Popper' }, { emoji: '🌟', name: 'Star' }, { emoji: '🌍', name: 'Earth' },
    { emoji: '🎶', name: 'Musical Notes' }, { emoji: '🚲', name: 'Bicycle' }, { emoji: '⏰', name: 'Alarm Clock' },
    { emoji: '🏆', name: 'Trophy' }, { emoji: '🌸', name: 'Cherry Blossom' }, { emoji: '🔥', name: 'Fire' },
    { emoji: '🌊', name: 'Wave' }, { emoji: '☀️', name: 'Sun' }, { emoji: '🌙', name: 'Moon' },
    { emoji: '❤️', name: 'Red Heart' }, { emoji: '🍔', name: 'Hamburger' }, { emoji: '☕', name: 'Coffee' },
    { emoji: '🎮', name: 'Video Game' }, { emoji: '✈️', name: 'Airplane' }, { emoji: '🐧', name: 'Penguin' },
    { emoji: '🦄', name: 'Unicorn' }, { emoji: '👑', name: 'Crown' }, { emoji: '💰', name: 'Money Bag' },
    { emoji: '🔑', name: 'Key' }, { emoji: '🎁', name: 'Gift' }, { emoji: '👻', name: 'Ghost' },
    { emoji: '🥶', name: 'Cold Face' }, { emoji: '🥳', name: 'Partying Face' }
];

// Leaderboard storage (in-memory for now)
let leaderboard = [];

// API to get a random emoji and 3 options
app.get('/api/emoji', (req, res) => {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Get 2 wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 2) {
        const option = emojis[Math.floor(Math.random() * emojis.length)];
        if (option.name !== correct.name && !wrongOptions.find(o => o.name === option.name)) {
            wrongOptions.push(option);
        }
    }

    // Shuffle options
    const options = [correct.name, ...wrongOptions.map(o => o.name)].sort(() => Math.random() - 0.5);

    res.json({ emoji: correct.emoji, options });
});

// API to validate guess
app.post('/api/guess', (req, res) => {
    const { emoji, guess } = req.body;

    const match = emojis.find(e => e.emoji === emoji);
    if (!match) {
        return res.status(400).json({ error: 'Invalid emoji.' });
    }

    const isCorrect = match.name === guess;
    res.json({ isCorrect, correctName: match.name });
});

// API to get leaderboard
app.get('/api/leaderboard', (req, res) => {
    // Return top 10 scores
    const sorted = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
    res.json(sorted);
});

// API to submit score
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body;
    if (!name || typeof score !== 'number') {
        return res.status(400).json({ message: 'Invalid data.' });
    }

    leaderboard.push({ name, score });
    res.status(201).json({ message: 'Score added successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
