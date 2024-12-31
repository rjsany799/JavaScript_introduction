let dayNumber = new Date().getDay();

let day;
let msg;
console.log("day number", dayNumber);

// based on day number give the day

switch(dayNumber) {
    case 0:
    day = "Sunday";
    break;
    case 1: 
    day = "monday";
    break;
    case 2: 
    day = "Tuesday";
    break;
    case 3: 
    day = "Wednesday";
    break;
    case 4: 
    day = "thursday";
    break;
    case 5: 
    day = "friday";
    break;
    case 6: 
    day = "Saturday";
    default:
        msg = "please provide correct day number"
}

if (msg) {
    console.log("message",msg);

} else {
    console.log(
        "day of the week is", day
    );
}
 