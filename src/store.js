const Store = {
  meals: [],
  average: 0.00,
  sum: 0.00
};

/* Used to select Last Meal or Construct Default properties */
function getMeal() {
  if (Store.meals.length>0) {
    return Store.meals[Store.meals.length-1];
  }
  else return {
    subtotal: 0.00,
    tip: 0.00,
    total: 0.00
  };
}