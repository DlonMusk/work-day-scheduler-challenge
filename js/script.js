

// Set a variable to current time
let date = moment().format("LL");

// Set a variable to current hour
let time = moment().hour();

// Grab elements that need to be manipulated
let currentDayEl = document.querySelector('#currentDay');
// Set current day to date variable
currentDayEl.textContent = date;

let colorTimeEl = document.querySelectorAll(".color-time");
let colTimeEl = document.querySelectorAll(".row-time");




// Color the time slots with a for loop by checking the time against each rows data-time attribute;
for (let i = 0; i < colorTimeEl.length; i++) {
    if (colTimeEl[i].dataset.time < time || time < 9) {
        colorTimeEl[i].setAttribute('class', "col-9 bg-info color-time");
    } else if (colTimeEl[i].dataset.time == time) {
        colorTimeEl[i].setAttribute('class', 'bg-danger col-9 color-time')
    } else {
        colorTimeEl[i].setAttribute('class', 'bg-success col-9 color-time')
    }
}

// sends table row data to the web browsers local storage under specific task number
let submitFuction = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let time = event.currentTarget.getAttribute('data-time');
    let taskData = document.getElementById(`${event.currentTarget.getAttribute('data-time')}`).value

    let task = { time: time, taskData: taskData }

    localStorage.setItem(`task${time}`, JSON.stringify(task));

}

// Event Listener
let submitBtnEl = document.querySelectorAll('.submit-btn');

submitBtnEl.forEach(element => {
    element.addEventListener('click', submitFuction);
});


// Function to grab text data from local storage
let loadTasks = () => {
    for (let i = 9; i < 18; i++) {
        let task = JSON.parse(localStorage.getItem(`task${i}`)).taskData;
        if (task) {
            document.getElementById(`${i}`).value = task;
        }
    }
}


// Load tasks will load all saved tasks on refreash or new page visit
loadTasks();