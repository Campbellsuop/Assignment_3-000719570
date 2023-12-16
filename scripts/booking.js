// Campbell Nixon
/********* create variables *********/

// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Variable declarations
let fullDayRate = 35;
let halfDayRate = 20;
let selectedDays = [];
let totalCost = 0;
let dayRate = fullDayRate; // Initialize dayRate if you need a default value


/********* colour change days of week *********/

// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const daysOfWeek = document.querySelectorAll('.day-selector li');
daysOfWeek.forEach(function(day) {
    day.addEventListener('click', function() {
        this.classList.toggle('clicked');
        let dayIndex = selectedDays.indexOf(this.id);
        if (dayIndex > -1) {
            selectedDays.splice(dayIndex, 1);
        } else {
            selectedDays.push(this.id);
        }
        calculateTotal();
    });
});

/********* clear days *********/

// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById('clear-button').addEventListener('click', function() {
    selectedDays = [];
    daysOfWeek.forEach(function(day) {
        day.classList.remove('clicked');
    });
    calculateTotal();
});


/********* change rate *********/

// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById('half').addEventListener('click', function() {
    dayRate = halfDayRate;
    this.classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    calculateTotal();
});

document.getElementById('full').addEventListener('click', function() {
    dayRate = fullDayRate;
    this.classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateTotal();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById('full').addEventListener('click', function() {
    // TO DO: Set rate to full-day, update classes
    dayRate = fullDayRate;
    this.classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateTotal();
});


/********* calculate *********/

// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotal() {
    totalCost = selectedDays.length * dayRate;
    document.getElementById('calculated-cost').textContent = totalCost;
}