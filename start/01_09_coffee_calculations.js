// Write your code here
function totalBill(coffeRuns) {
  const totalRuns = coffeRuns.reduce((sum, curr) => sum + curr);

  return `The total bill is $${totalRuns * 1.25}`;
}

console.log(totalBill([2, 3, 1, 5]));
