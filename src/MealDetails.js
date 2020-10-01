/*  Meal Details
  1 In the left most panel, 
  2 the user enters the base cost for:
  - a meal, 
  - the tax rate,
  - the tip percentage the customer wants to leave. 
  3 When they hit the submit button:
  - the app should validate that the value in each field is numeric. 
  4 If the form is valid: 
  - the Customer Charges and My Earnings Info section should update accordingly.
*/

/* Meal Component */
/* Render Component */
function mealDetails() {
  $('.meal-details').html(displayMealDetails());
  handleMealDetailsSubmit();
}
/* Template */
function displayMealDetails() {
  return `
  <article class='meal-details-card card'>
    <h2 class='article-header'>Enter The Meal Details</h2>
    <form class='meal-details-form content'>
      <div class='input-area'>
        <div class='input-wrapper'>
          <label for='base-price'>Base Meal Price: $</label>
          <input type='number' step='.01' name='base-price' id='base-price' class='meal-details-input' placeholder='9.99' required>
        </div>
        <div class='input-wrapper'>
          <label for='tax-rate'>Tax Rate: %</label>
          <input type='number' step='1' name='tax-rate' id='tax-rate' class='meal-details-input' placeholder='7' required>
        </div>
        <div class='input-wrapper'>
          <label for='tip-percentage'>Tip Percentage: %</label>
          <input type='number' step='1' name='tip-percentage' id='tip-percentage' class='meal-details-input' placeholder='15' required>
        </div>
      </div>
      <div class='button-wrapper'>
        <button type='submit' id='details-submit'>Submit</button>
      </div>
    </form>  
  </article>
  `;
}
/* Calculations */
function calculateSubtotal(price, rate) {
  return (price +(price*rate));
}
function calculateTip(rate, subtotal) {
  return (rate*subtotal);
}
function calculateAverage() {
  const tips = Store.meals.map(meal => {return parseFloat(meal.tip);});
  const sum = parseFloat(tips.reduce((previous, current) => current += previous).toFixed(2));
  const average = sum / tips.length;
  Store.average = parseFloat(average).toFixed(2);
  Store.sum = parseFloat(sum).toFixed(2);
}
/* Construct Meal Object from Inputs */
function constructMeal() {
  // .parseFloat() ensures number with digits
  // .toFixed() reduces decimal places to given number
  const basePrice = parseFloat($('#base-price').val());
  const taxRate = parseFloat(($('#tax-rate').val()/100));
  const tipPercentage = parseFloat(($('#tip-percentage').val()/100));
  const mealSubtotal = calculateSubtotal(basePrice, taxRate).toFixed(2);
  const mealTip = calculateTip(tipPercentage, mealSubtotal).toFixed(2);
  const mealTotal = (parseFloat(mealTip) + parseFloat(mealSubtotal)).toFixed(2);
  const meal = {
    subtotal: mealSubtotal,
    tip: mealTip,
    total: mealTotal
  };
  return meal;
}
/* Submit Handler Adds Meal to Store.Meals[] */
function handleMealDetailsSubmit() {
  $('.meal-details').on('submit', event => {
    event.preventDefault();
    const meal = constructMeal();
    Store.meals.push(meal);
    $('.meal-details-input').val('');
    calculateAverage();
    customerCharges();
    earningsInfo();
    console.log(Store.meals,'Meal Added');
  });
}