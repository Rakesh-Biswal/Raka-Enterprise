var operand = document.querySelectorAll("#operand");
var display = document.getElementById("displayText");
var displayAns = document.getElementById("displayAns");
display.style.color = "black";
display.style.fontWeight = "bold";

display.innerText = " ";
displayAns.innerText = " ";

let numbers = [];

function checkNumber(value) {
    //Here value = number;
    if (!isNaN(value) || value === '.' || value === '+' || value === '-' || value === '*' || value === '/') {
        numbers.push(value);
        numbers.join('');
        display.innerText = numbers.join('');
    }
    else if (value == '=') {
        var expression = numbers.join('');
        try {
            var Answer = eval(expression);
        }
        catch (e) {
            alert("Cannot evalute Please check Your Input");
            
        };
        displayAns.innerText = ("Ans= " + Answer.toFixed(4));
        numbers = [Answer];

    }
    else if (value == "del") {
        numbers.pop();
        display.innerText = numbers.join('');
    }

    else if (value == "clr") {
        display.innerText =" ";
        displayAns.innerText =" ";
        numbers = [];

    }
    
}


operand.forEach((e) => {
    e.addEventListener("click", (f) => {
        var number = e.getAttribute('data-value');
        checkNumber(number);
    });

});