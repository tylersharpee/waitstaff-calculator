/* Earnings Info
 1 This panel displays cumulative information
   about all of the meals submitted so far. 
 2 Tip total is the sum of all tips computed so far. 
 3 Meal count is the total number of meals input into the tool. 
 4 Average tip per meal is equal to 
   the total tip value 
   divided by the number of meals.
*/
function earningsInfo() {
  $('.earnings-info').html(displayEarningsInfo());
}
function displayEarningsInfo() {
  return `
  <article class='earnings-info-card card'>
    <h2 class='article-header'>My Earnings Info</h2>
    <div class='justify content'>
      <p>Tip Total: ${Store.sum}</p>
      <p>Meal Count: ${Store.meals.length}</p>
      <p>Average Tip Per Meal: ${Store.average}</p>
    </div>
  </article>
  `;
}