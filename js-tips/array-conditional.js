// Add item to array conditionally
let toggle = true;

const a = [
    'apple',
    ... (toggle ? ['visitors'] : []),
    'oranges'
];

console.log(a);