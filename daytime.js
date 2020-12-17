/* Write a JavaScript program to display the current day and time in the following format. Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

var now = new Date();
var day = now.getDay();
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log("Today is : " + dayList[day] +".");
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();
var ap = (hour >= 12)? "PM" : "AM" ;
hour = (hour >= 12)? hour-12 : hour ;
if(hour === 0 && ap === 'PM')
{
    if (min === 0 && sec === 0)
    {
        hour = 12;
        ap = 'Noon';
    }
    else
    {
        hour = 12;
        ap = 'PM';
    }
}
if(hour === 0 && ap === 'AM')
{
    if (min === 0 && sec === 0)
    {
        hour = 12;
        ap = 'Midnight';
    }
    else
    {
        hour = 12;
        ap = 'AM';
    }
}
console.log("Current time is : "+ hour +" " + ap + " : " + min + " : " + sec);