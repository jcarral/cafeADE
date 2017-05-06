export const parseMeals = (meals) => {
  return {
    bocadillos: parseMeal(meals.bocadillos),
    combinados: parseMeal(meals.combinados),
    otros: parseMeal(meals.otros)
  }
};

const parseMeal = (meal) => {
  return Object.keys(meal).map((i) => parsePlate(meal[i]));
};

const parsePlate = (plate) => {
  return {
    ...plate,
    ingredients: Object.keys(plate.ingredients)
  };
};
