/*Grabs the date and sets variables*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

/*Condition*/
if (hourNow < 12)

    /*Result of Condition*/
    greeting = "Good Morning";

else if (hourNow >=12 && hourNow <= 17)

    greeting = "Good afternoon";

else if (hourNow >=17 && hourNow <=24)
  
greeting = "Good evening";

else if (hourNow >=23){
    alert('It is past 11:00, whilst we are proud of your dedication, Perhaps its time to log off?')
}
/*Outputs result*/
    document.write('<h2>' + greeting + '</h2>')