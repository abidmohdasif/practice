const button = document.getElementById('calculateBudget');
const all = document.getElementById('budgetResults');

button.addEventListener('click', function() {
    let totalIncome = prompt('Enter your total Monthly Income without commas: ');
    let totalExpenses = prompt('Enter your total Monthly Expenses Without commas: ');
    let months = prompt('Enter the number of months you want to calculate: ');


    let calculateBudget = totalIncome - totalExpenses;

    let calculateMonths = calculateBudget * months;
    

    if (calculateBudget < 0) {
        alert("You are Spending more than you are earning.");
    }


    let elementIncome = document.createElement('p');
    elementIncome.textContent = "Monthly Income: " + totalIncome;

    let elementExpenses = document.createElement('p');
    elementExpenses.textContent = "Total Expenses: " + totalExpenses;
   
    let elementMonths = document.createElement('p');
    elementMonths.textContent = "Total Budget: " + calculateBudget.toFixed(2);
   
    let elementProjected = document.createElement('p');
    elementProjected.textContent = "Projected: " + calculateMonths.toFixed(2);
   

    all.appendChild(elementIncome);
    all.appendChild(elementExpenses);
    all.appendChild(elementMonths);
    all.appendChild(elementProjected);

    for (let i = 0; i < months; i++) {
        let elementMonths = document.createElement('p'); 
        final = calculateBudget * (i + 1);
        elementMonths.textContent = "Month " + (i + 1) + ": " + final.toFixed(2);
        
        all.appendChild(elementMonths);
    }

})

