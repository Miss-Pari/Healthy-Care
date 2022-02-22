var quote = []
        quote[0]="An apple a day keeps the doctor away.";
        quote[1]="Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.";
        quote[2]="A good laugh and a long sleep are the best cures in the doctor's book.";
        quote[3]="The greatest glory in living lies not in never falling, but in rising every time we fall.";
        quote[4]="The way to get started is to quit talking and begin doing.";
        quote[5]="Good health is a crown on the head of a well person that only a sick person can see.";
        quote[6]="When health is absent, wisdom cannot reveal itself, art cannot manifest, strength cannot fight, wealth becomes useless, and intelligence cannot be applied.";
        quote[7]="So many spend their health gaining wealth, and then have to spend their wealth to regain their health.";
        quote[8]="The higher your energy level, the more efficient your body, the better you feel and the more you will use your talent to produce outstanding results";

function disp(){
var randomquotes = Math.floor(Math.random()*(quote.length));
document.getElementById("ran").innerHTML = quote[randomquotes];
}

window.onload = function(){
    disp();
}