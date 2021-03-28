// Moment for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Current time 
var currentTime = moment();
// Rounding of the current time to starting hour
currentTime = currentTime.startOf("hour");
// Setting the 9AM time by adding 9 hours to start-time
var startTime = moment().startOf('day').add(9, "hours");

// Displaying time in time-blocks
// For 9AM  
var time9 = startTime.add(0, "h");
time9 = time9.format('hh:mm A');
// Adding time to time-block
$(".block9").text(time9);

// For 10AM
var time10 = startTime.add(1, "h");
time10 = time10.format('hh:mm A');
$(".block10").text(time10);

// For 11AM
var time11 = startTime.add(1, "h");
time11 = time11.format('hh:mm A');
$(".block11").text(time11);

// For 12PM
var time12 = startTime.add(1, "h");
time12 = time12.format('hh:mm A');
$(".block12").text(time12);

// For 1PM
var time1 = startTime.add(1, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

// For 2PM
var time2 = startTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

// For 3PM
var time3 = startTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

// For 4PM
var time4 = startTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

// For 5PM
var time5 = startTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

// Event listener for save button
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");
    //Saving data to local storage
    localStorage.setItem(listItem,formValue);
});

// Accessing local storage
var a = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < a.length; i++) {
    var dataHour = localStorage.getItem(a[i]);
    // form - control
    $(".form" + a[i]).val(dataHour);
}

// Function for comparing current time with time-block time
function checkTime() {
    //Setting the 9AM time by adding 9 hours to start-time
    time9 = moment().startOf('day').add(9, "hours");
    // Coverting current time to starting hour
    currentTime = currentTime.startOf("hour");
    // Comparing current time with time-block
    if (currentTime.isAfter(time9)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form9").addClass("present");
    };

    // Setting the 10AM time by adding 10 hours to start-time
    time10 = moment().startOf('day').add(10, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("present");
    };

    // Setting the 11AM time by adding 11 hours to start-time
    time11 = moment().startOf('day').add(11, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time11)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".form11").addClass("present");
    };

    // Setting the 12PM time by adding 12 hours to start-time
    time12 = moment().startOf('day').add(12, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time12)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time12)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time12)) {
        $(".form12").addClass("present");
    };

    // Setting the 1PM time by adding 13 hours to start-time
    time1 = moment().startOf('day').add(13, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time1)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form1").addClass("present");
    };

    // Setting the 2PM time by adding 14 hours to start-time
    time2 = moment().startOf('day').add(14, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form2").addClass("present");
    };

    // Setting the 3PM time by adding 15 hours to start-time
    time3 = moment().startOf('day').add(15, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time3)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form3").addClass("present");
    };

    // Setting the 4PM time by adding 16 hours to start-time
    time4 = moment().startOf('day').add(16, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time4)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form4").addClass("present");
    };
    
    // Setting the 5PM time by adding 17 hours to start-time
    time5 = moment().startOf('day').add(17, "hours");
    // Comparing current time with time-block
    if (currentTime.isAfter(time5)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form5").addClass("present");
    };
}

checkTime();


