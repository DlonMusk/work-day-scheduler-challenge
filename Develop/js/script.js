
// grab elements that need to be manipulated

let time = moment().hour();

let date = moment().format("LL");
let currentDayEl = document.querySelector('#currentDay');
currentDayEl.textContent = date;

let colorTimeEl = document.querySelectorAll(".color-time");


let colTimeEl = document.querySelectorAll(".row-time");




// color the time slots with a for loop my checking the time against each data-time attribute;
for (let i = 0; i < colorTimeEl.length; i++) {
    if (colTimeEl[i].dataset.time < time || time < 9) {
        colorTimeEl[i].setAttribute('class', "col-9 bg-light color-time");
    } else if (colTimeEl[i].dataset.time == time) {
        colorTimeEl[i].setAttribute('class', 'bg-danger col-9 color-time')
    } else {
        colorTimeEl[i].setAttribute('class', 'bg-success col-9 color-time')
    }
}


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


// function to grab text data from local storage
let loadTasks = () => {
    for (let i = 9; i < 18; i++) {
        let task = JSON.parse(localStorage.getItem(`task${i}`)).taskData;
        if (task) {
            document.getElementById(`${i}`).value = task;
        }
    }
}

loadTasks();