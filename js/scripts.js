
var today = new Date();
var hourNow = today.getHours();
var greeting;
var name = 'Sophia'

if (hourNow > 18) {
    greeting = 'Good Evening ' + name + ' !!!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon ' + name + ' !!!';
} else if (hourNow > 0) {
    greeting = 'Good Morning ' + name + ' !!!';
} else {
    greeting = 'Welcome' + name + ' !!!';
}
var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;


//change greeting background and font color
function myFunction()
{
    document.getElementById('greeting').style.color="red"; 
    document.getElementById('greeting').style.background = "lime";
}

//change greeting name
function submit()
{
    var x = document.getElementById('username').value;
    if (hourNow > 18) {
        greeting = 'Good Evening ' + x + ' !!!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon ' + x + ' !!!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning ' + x + ' !!!';
    } else {
        greeting = 'Welcome' + x + ' !!!';
    }
    var greetingEl = document.getElementById('greeting');
    greetingEl.textContent = greeting;
    
}

var aprice = 384.00; 
    percent = .10;
    adisc = aprice - (aprice * percent);
    apriceEl = document.getElementById('aprice');
    adiscEl = document.getElementById('adisc');

apriceEl.textContent = aprice.toFixed(2);
adiscEl.textContent = adisc.toFixed(2);

var fprice = 196.99; 
    percent = .10;
    fdisc = fprice - (fprice * percent);
    fpriceEl = document.getElementById('fprice');
    fdiscEl = document.getElementById('fdisc');

fpriceEl.textContent = fprice.toFixed(2);
fdiscEl.textContent = fdisc.toFixed(2);