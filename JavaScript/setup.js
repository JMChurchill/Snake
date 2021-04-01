const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

//global variables
const grid = 25;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;