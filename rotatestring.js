/* Write a JavaScript program to rotate the string 'JavaScriptTrainingModule' in right direction
 by periodically removing one letter from the end of the string and attaching it to the front. */

 function rotate_string(id)
 {
     var element = document.getElementById(id);
     var n1 = element.childNodes[0];
     var text = n1.data ;
    setInterval(function()
    {
    text= text[text.length-1] + text.substring(0,text.length-1);
    n1.data = text;
    },100);
    }