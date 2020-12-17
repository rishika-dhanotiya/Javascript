// Write a JavaScript program to calculate days left until next Christmas.

now = new Date();
var ch = new Date(now.getFullYear(),11,25);
if (now.getMonth() == 11 && now.getDate() >25)
{
    ch.setFullYear(ch.getFullYear() +1);
}
var oneday = 1000*60*60*24;
console.log(Math.ceil((ch.getTime()-now.getTime())/(oneday))+ " Days Left Until Christmas!!");