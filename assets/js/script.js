// This variable will display today's day and date in the header section

var todayDate = document.querySelector('#currentDay')
todayDate.textContent = dayjs().format('dddd, MMMM D, YYYY, h:mm a')

var currentHour = dayjs().hour()

// var todayDate = moment().format('dddd, MMM Do YYYY');
// $("#currentDay").text(todayDate);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Create variable
var hourSlots = document.querySelectorAll('.time-block')
// Create for loop to loop through each hourSlot, 9am-5pm
for (let i = 0; i < hourSlots.length; i++) {
  // Log each hourSlot in the array to the Console in DevTools
  console.log(hourSlots[i]);
  let hour = parseInt(hourSlots[i].id.substring(5));
  let textArea = hourSlots[i].querySelector('.description');
  console.log(hour);
  // this if function will allow for each hourSlot to 
  // apply css styles to the time-block divs accordingly
  if (currentHour === hour) {
    hourSlots[i].classList.add('present');
  } 
  else if(currentHour < hour){
    hourSlots[i].classList.add('future');
  } 
  else if(currentHour > hour) {
    hourSlots[i].classList.add('past');
  // saves the text the user inputs in each hourSlot to localStorage and when page is refreshed
  // When page is refreshed or if the user exits and reopens the web app,
  // the text the user inputted should still be there
  textArea.value = localStorage.getItem('hour-' + hour)
  hourSlots[i].querySelector('.saveBtn').addEventListener("click",function () {
    console.log(textArea.value);
    localStorage.setItem('hour-' + hour, textArea.value);
    })
  }
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// $(document).ready(function () {
//   // Added listener for click events on the save button
//   $(".saveBtn").on("click", function() {
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
//     // This will save the text in the user's local storage
//     localStorage.setItem(time, text);
//   })

//   function timeTracker() {
//     // This will get the current number of hours
//     var timeNow = moment().hour();

//     // This will loop over the time slots
//     $(".time-block").each(function () {
//         var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//         // This will check the time and add different classes to change background colors
//         if (blockTime < timeNow) {
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//             $(this).addClass("past");
//         }
//         else if (blockTime === timeNow) {
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");

//         }
//     })
//   }

//    // This section will get the items from local storage if there are any
//    $("#hour9 .description").val(localStorage.getItem("hour9"));
//    $("#hour10 .description").val(localStorage.getItem("hour10"));
//    $("#hour11 .description").val(localStorage.getItem("hour11"));
//    $("#hour12 .description").val(localStorage.getItem("hour12"));
//    $("#hour13 .description").val(localStorage.getItem("hour13"));
//    $("#hour14 .description").val(localStorage.getItem("hour14"));
//    $("#hour15 .description").val(localStorage.getItem("hour15"));
//    $("#hour16 .description").val(localStorage.getItem("hour16"));
//    $("#hour17 .description").val(localStorage.getItem("hour17"));

//    timeTracker(); 

//   });