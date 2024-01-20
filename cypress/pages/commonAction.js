export function generateRandomFoodIngredient() {
  const nouns = ['Tomato', 'Cheese', 'Basil', 'Lemon', 'Garlic', 'Pasta'];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return randomNoun;
}

export function generateRandomName(){
  const nouns = ['Tania', 'Andin', 'Fatimah', 'Dani', 'Mizan', 'Fajar'];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return randomNoun;
}

