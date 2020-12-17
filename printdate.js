/* Write a JavaScript program to get the current date. Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

var now = new Date();
var dd = now.getDate();
var mm = now.getMonth() +1;
var yyyy = now.getFullYear();
if ( dd < 10)
{
    dd = '0'+dd;
}
if ( mm < 10 )
{
    mm = '0'+ mm;
}
now = mm+'-'+dd+'-'+yyyy;
now1 = mm+'/'+dd+'/'+yyyy;
console.log(now + ", " + now1);
now2 = dd+'-'+mm+'-'+yyyy;
now3= dd+'/'+mm+'/'+yyyy;
console.log(" or ");
console.log(now2 + " , " + now3);