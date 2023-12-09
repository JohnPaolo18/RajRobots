/****************** YOUR NAME: PAOLO BERMUDEZ

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

var modelName = "Model XYZ";    
var duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "Model XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "Model CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    var costLabel = document.getElementById("calculated-cost");

    var modelCost = (modelName === "Model XYZ") ? 100 : 213;
    var totalCost = duration * modelCost;

    costLabel.innerHTML = totalCost.toFixed(2);
}
    

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - update the value of modelName to "Model CPRG" if it's currently "Model XYZ", and vice versa
    - update the innerHTML of the model-text span element based on the new modelName
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */


// INSERT YOUR CODE HERE

var switchModelButton = document.getElementById("model-button");

function changeModel() {
    var modelTextElement = document.getElementById("model-text");

    if (modelName === "Model XYZ") {
        modelName = "Model CPRG";
    } else {
        modelName = "Model XYZ";
    }

    modelTextElement.innerHTML = modelName;

    recalculate();
}

switchModelButton.addEventListener("click", changeModel);



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
var changeDurationButton = document.getElementById("duration-button");

function changeDuration() {
    var durationTextElement = document.getElementById("duration-text");
    var newDuration = prompt("How many days?");    
    durationTextElement.innerHTML = newDuration
    duration = parseInt(newDuration)
    recalculate();  
    }
changeDurationButton.addEventListener("click", changeDuration);
