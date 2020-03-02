// value one for operations
var v1 = "";
// value two for operations
var v2 = "";
//which operation key will be used
var key = "";
//calculation result
var result = 0;

// set up different operations that can be used
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    'x': function(a, b) { return a * b },
    '/': function(a, b) { return a / b }
}

//chooses right formula, displays correct value or result and calculates
function getFormula(clicked_id) {
    //will choose right code based on the id on the item clicked
    switch (document.getElementById(clicked_id)) {
        //add button is clicked
        case add:
            //if the second value has not been entered yet
            if (v2 == "") {
                v2 = parseFloat(document.getElementById("solution").innerHTML);
                document.getElementById("solution").innerHTML = "";
                key = "+";
                //if both values have been entered
                //calcualte using both of the values with the key that was last set, then display the result, update v2, and reset the key
            } else {
                result = operators[key](v2, v1);
                document.getElementById("solution").innerHTML = result;
                v2 = result;
                key = "+";
            }
            break;
            //subtract button is clicked
        case sub:
            if (v2 == "") {
                v2 = parseFloat(document.getElementById("solution").innerHTML);
                document.getElementById("solution").innerHTML = "";
                key = "-";
            } else {
                result = operators[key](v2, v1);
                document.getElementById("solution").innerHTML = result;
                v2 = result;
                key = "-";
            }
            break;
            //multiply button is clicked
        case mult:
            if (v2 == "") {
                v2 = parseFloat(document.getElementById("solution").innerHTML);
                document.getElementById("solution").innerHTML = "";
                key = "x";
            } else {
                result = operators[key](v2, v1);
                document.getElementById("solution").innerHTML = result;
                v2 = result;
                key = "x";
            }
            break;
            //divide button is clicked
        case divide:
            if (v2 == "") {
                v2 = parseFloat(document.getElementById("solution").innerHTML);
                document.getElementById("solution").innerHTML = "";
                key = "/";
            } else {
                result = operators[key](v2, v1);
                document.getElementById("solution").innerHTML = result;
                v2 = result;
                key = "/";
            }
            break;
            //equal button is clicked
        case equal:
            if (v2 == "") {
                v2 = parseFloat(document.getElementById("solution").innerHTML);
                document.getElementById("solution").innerHTML = "";
            } else {
                result = operators[key](v2, v1);
                document.getElementById("solution").innerHTML = result;
                v2 = result;
            }
            break;
            //clear button is clicked
        case clear:
            document.getElementById("solution").innerHTML = "";
            v2 = "";
            break;
            //any other button is clicked
        default:
            if (parseFloat(document.getElementById("solution").innerHTML) == result) {
                document.getElementById("solution").innerHTML = "";
                var num = document.getElementById(clicked_id).innerHTML;
                v1 = parseFloat(document.getElementById("solution").innerHTML += num);
            } else {
                var num = document.getElementById(clicked_id).innerHTML;
                v1 = parseFloat(document.getElementById("solution").innerHTML += num);
            }
            break;
    }
}