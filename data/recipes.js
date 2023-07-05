const recipeCouse = [
    'breakfast',
    'main',
    'snack',
    'appretizer',
    'salad',
    'side',
    'desserts',
    'drink',
    'sauce'
]

const recipes = [
    {
        name: 'Boiled egg',
        prepTime: 0,
        cookTime: 8,
        servings: 1,
        ingredients: [
            { id: 4, quantity: 1 }
        ]
    }, 
    {
        name: 'Bolognese (by Peter)',
        course: 8,
        prepTime: '1 hour',
        cookTime: '3 hours',
        servings: 8,
        ingredients: [
            { id: 5, quantity: `1 kg` },
            { id: 2, quantity: '1 kg' },
            { id: 6, quantity: 1 },
            { id: 0, quantity: 0.5 },
            { id: 1, quantity: '3 cloves' },
            { id: 7, quantity: 6 },
            { id: 8, quantity: 300 },
            { id: 9, note: '(no sugar)', quantity: 300 },
        ]
    },
    {
        name: 'Simplified mayonnaise',
        course: 8,
        prepTime: 0,
        cookTime: 10,
        servings: 2,
        ingredients: [
            { id: 4, quantity: 1 },
            { id: 10, quantity: 20 }
        ]
    }
]