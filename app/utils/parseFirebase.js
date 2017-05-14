export const parseMeals = (meals) => {
  return {
    bocadillos: parseMeal(meals.bocadillos),
    combinados: parseMeal(meals.combinados),
    otros: parseMeal(meals.otros)
  }
};

const parseMeal = (meal) => {
  return Object.keys(meal).map((i) => parsePlate(meal[i], i));
};

const parsePlate = (plate, i) => {
  return {
    ...plate,
    id: i,
    ingredients: Object.keys(plate.ingredients)
  };
};


export const filterByStatus = (data) => Object.keys(data || {}).map((key) => data[key]).filter((order) => order.active);
