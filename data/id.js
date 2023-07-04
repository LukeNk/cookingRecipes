const ingredientTypes = [
    'Vegetable',
    'Protein',
    'Fruit',
    'Grain',
    'Seasoning',
    'Baking',
    'Diary'
];

// mod means modifications
let ingredients = [
    { name: 'onion', type: 0 },
    { name: 'garlic', type: 0 },
    { name: 'tomato', type: 0 },
    { name: 'potato', type: 0 },
    { name: 'egg', type: 1 },
    { name: 'beef', mod: 'ground', unit: 'g', type: 1 },
    { name: 'carrot', unit: '', type: 0 },
    { name: 'ketchup', unit: 'spoon', type: 4 },
    { name: 'tomato sauce', unit: 'ml', type: 4 },
    { name: 'milk', unit: 'ml', type: 6 }
];