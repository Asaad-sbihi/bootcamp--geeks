const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

// --- Game Data ---
// A larger set of emojis for better game variety
const emojis = [
    { emoji: '😀', name: 'Smile' }, { emoji: '🐶', name: 'Dog' }, { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' }, { emoji: '🍕', name: 'Pizza' }, { emoji: '💡', name: 'Light Bulb' },
    { emoji: '🌈', name: 'Rainbow' }, { emoji: '📚', name: 'Books' }, { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🤖', name: 'Robot' }, { emoji: '💻', name: 'Laptop' }, { emoji: '💡', name: 'Idea' },
    { emoji: '🎈', name: 'Balloon' }, { emoji: '🎉', name: 'Party Popper' }, { emoji: '🌟', name: 'Star' },
    { emoji: '🌍', name: 'Earth' }, { emoji: '🎶', name: 'Musical Notes' }, { emoji: '🚲', name: 'Bicycle' },
    { emoji: '⏰', name: 'Alarm Clock' }, { emoji: '🏆', name: 'Trophy' }, { emoji: '🌸', name: 'Cherry Blossom' },
    { emoji: '🔥', name: 'Fire' }, { emoji: '🌊', name: 'Wave' }, { emoji: '☀️', name: 'Sun' },
    { emoji: '🌙', name: 'Moon' }, { emoji: '❤️', name: 'Red Heart' }, { emoji: '🍔', name: 'Hamburger' },
    { emoji: '☕', name: 'Coffee' }, { emoji: '🎮', name: 'Video Game' }, { emoji: '✈️', name: 'Airplane' },
    { emoji: '🐧', name: 'Penguin' }, { emoji: '🦄', name: 'Unicorn' }, { emoji: '👑', name: 'Crown' },
    { emoji: '💰', name: 'Money Bag' }, { emoji: '🔑', name: 'Key' }, { emoji: '🎁', name: 'Gift' },
    { emoji: '👻', name: 'Ghost' }, { emoji: '🥶', name: 'Cold Face' }, { emoji: '🥳', name: 'Partying Face' }
];