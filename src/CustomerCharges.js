/* Customer Charges
 1 This panel displays what the customer should be charged. 
 2 Subtotal is the value of the base meal price plus tax. 
 3 Tip is dollar value of the tip, given the subtotal and tip percentage. 
 4 Total is equal to subtotal plus tip.
*/
function customerCharges() {
  $('.customer-charges').html(displayCustomerCharges());
}
function displayCustomerCharges() {
  const meal = getMeal();
  return `
  <article class='customer-charges-card card'>
    <h2 class='article-header'>Customer Charges</h2>
    <div class='justify content'>
      <p>Subtotal: ${meal.subtotal}</p>
      <p>Tip: ${meal.tip}</p>
      <p>Total: ${meal.total}</p>
    </div>
  </article>
  `;
}