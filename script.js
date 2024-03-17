/*Ukol 5 - cvičení ceník*/

function selectPlan(planNumber) {

  const myPlans = document.querySelectorAll('.plan');
  myPlans.forEach(plan => {
    plan.classList.remove('plan--selected');
  });

  const selectedPlan = document.getElementById(`plan${planNumber}`);

    if (selectedPlan) {
     selectedPlan.classList.add('plan--selected');
    } else {
      console.log("plán nebyl nalezen")
   }
}

setTimeout(() => selectPlan(1), 1000);
setTimeout(() => selectPlan(2), 2000);
setTimeout(() => selectPlan(3), 3000);
