
/*sets variable today as the 'new date'*/
var today = new Date();

/*sets values into dateToday*/
var dateToday = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

/*Prints dateToday*/
document.write(dateToday)
