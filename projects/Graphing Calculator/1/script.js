var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var canvasContainer = document.getElementById("canvContainer");
var filledBoxes = [];
var filledBoxesEqu = [];
var variable = "x";
var newWidth = window.innerWidth * .6;
var computedEquationTextBox = document.getElementById("computedEquationId")
resize();

var gridWidth;

var xAxisLength;

function drawDot(x, y, rad) {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}

window.addEventListener("resize", function f() {
  resize();
});


function resize() {

  canvas.width = newWidth; //.63;
  canvas.height = window.innerHeight * .96;
  canvas.aspectRatio = canvas.width / canvas.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawAxes();
  //check();
}

function drawFunction(equation) {

  var redoneEquation = redoEquation(equation);

  ctx.strokeStyle = "#FF0000";
  ctx.fillStyle = "#FF0000";
  ctx.lineWidth = 3;
  //console.log("Drawing " + equation);
  for (var xVal = -xAxisLength / 2; xVal < xAxisLength / 2; xVal += 0.01) {
    //var y = Math.cos(x * (Math.PI / 180)) * canvas.height / 20;
    var x = xVal;
    try {
      var y = eval(redoneEquation);
    } catch (e) {

    }

    if (y > -canvas.height / gridWidth && y < canvas.height / gridWidth) {
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 + x * gridWidth, canvas.height / 2 - y * gridWidth);
      x += 0.01;
      y = eval(redoneEquation);
      ctx.lineTo(canvas.width / 2 + x * gridWidth, canvas.height / 2 - y * gridWidth)
      ctx.stroke();
      //  drawDot(canvas.width / 2 + x * gridWidth, canvas.height / 2 - y * gridWidth, .5);
    }
  }
}


var timeout;

function up() {
  //  timeout = setTimeout(drawFunctions,200);
}

function down(e) {
  //  clearTimeout(timeout);
}
var canResize = false;
document.addEventListener("mousemove", function(e) {
  if ((e.clientX > window.innerWidth - canvas.width - 20 && e.clientX < window.innerWidth - canvas.width - 10) || canResize) {
    canvas.style.cursor = "ew-resize";

  } else {
    canvas.style.cursor = "auto";
  }
  if (canResize) {
    var nextWidth = window.innerWidth - e.clientX - 17;
    if (newWidth >= 50 || nextWidth > newWidth) {
      newWidth = nextWidth;
      resize();
    } else {

    }

  }

})


canvas.addEventListener("mousedown", function(e) {
  event.preventDefault();
  console.log("down");
  if (e.clientX < window.innerWidth - canvas.width - 10) {
    canResize = true;
  }

})
document.addEventListener("mouseup", function(e) {
  console.log("up");
  canResize = false;
})


document.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    filledBoxes = [];
    resize();
    check();
  }

  timeout = setTimeout(check, 200);
})

document.addEventListener("keydown", function(e) {
  clearTimeout(timeout);
})

function check() {
  //variable = document.getElementById("variable").value;
  console.log("Using variable: " + variable)
  for (var i = 1; i <= 10; i++) {
    var newEqu = document.getElementById("equ" + i).value;

    if (filledBoxes[i] == null && newEqu != "") {
      //computedEquationTextBox.value = newEqu;
//redoEquation(newEqu);
      drawFunction(newEqu);
      filledBoxes[i] = newEqu;
    } else if (filledBoxes[i] != newEqu && filledBoxes[i] != null) {
      //console.log("Redraw whole screen")
      filledBoxes = [];
      resize();
      check();
    }
  }
  //console.log(filledBoxes);
}


function isNumber(n) {
  return n.match(/[0-9]/i);
}

function isLetter(n) {
  return n.match(/[a-zA-Z]/i);
}

function isOperator(n) {
  var result = false;
  if (n == "*" || n == "/" || n == "|" || n == "+" || n == "-" || n == "^") {
    result = true;
  }
  return result;
}

function redoEquation(equat) {
  console.log("//////////////////////////////////////");
  console.log("1. Equation: " + equat + "; length: " + equat.length);
  var newEquation = equat.toLowerCase();
  console.log("2. Equation: " + newEquation + "; length: " + newEquation.length);
  newEquation = newEquation.split("[").join("(");
  newEquation = newEquation.split("]").join(")");
  newEquation = newEquation.split("{").join("(");
  newEquation = newEquation.split("}").join(")");
  newEquation = newEquation.split("pi").join("Math.PI");
  newEquation = newEquation.split(variable).join("(x)");
  newEquation = newEquation.split(")(").join(")*(");
  var foundFunctions = [];
  var multipliesToBeAdded = [];

  var startIndex = 0;
  var lastParenthesisIndex = 0;
  var absFound = 0;
  var absCount = newEquation.split("|").length - 1;

  console.log("3. Equation: " + newEquation + "; length: " + newEquation.length);
  for (var i = 0; i < newEquation.length; i++) {
    console.log("i = " + i + "; Value = " + newEquation[i])

    if (isLetter(newEquation[i]) && (i < 1 || !isLetter(newEquation[i - 1]))) {
      startIndex = i;
    }
    if (newEquation[i - 1] == ".") {
      startIndex = null;
    }
    //if (i < newEquation.length - 1 &&(isNumber(newEquation[i]) || newEquation[i] == ")") && !isNumber(newEquation[i + 1]) && !isOperator(newEquation[i + 1]) && newEquation[i+1] != ")") {
    if (i < newEquation.length - 1 && isNumber(newEquation[i]) && !isNumber(newEquation[i + 1]) && !isOperator(newEquation[i + 1]) && newEquation[i + 1] != ")") {

      var firstPart = newEquation.slice(0, i + 1);
      var secondPart = newEquation.slice(i + 1);
      //TODO
      //newEquation = firstPart + "*" + secondPart;
    }

    if (isNumber(newEquation[i])) {
      if (i < newEquation.length - 1 && (isLetter(newEquation[i + 1]) || newEquation[i + 1] == "(")) {
        console.log(i);
        var firstPart = newEquation.substring(0, i + 1);
        var secondPart = newEquation.substring(i + 1, newEquation.length);
        newEquation = firstPart + "*" + secondPart;
      }
      if (( /*isLetter(newEquation[i - 1]) || */ newEquation[i - 1] == ")")) {
        var firstPart = newEquation.substring(0, i);
        var secondPart = newEquation.substring(i, newEquation.length);
        newEquation = firstPart + "*" + secondPart;
      }

    }

    if (isLetter(newEquation[i])) {
      if (i > 0 && i < newEquation.length - 1 && isLetter(newEquation[i - 1]) && (isNumber(newEquation[i + 1]) || newEquation[i + 1] == "(")) {
        console.log("StartIndex: " + startIndex);
        var functionFound = newEquation.slice(startIndex, i + 1);
        if (foundFunctions.indexOf(functionFound) == -1) {
          foundFunctions.push(functionFound);
          console.log("Found " + functionFound);
        }
      }
    }

    if (newEquation[i] == "^" && !isOperator(newEquation[i + 1]) && !isOperator(newEquation[i - 1])) {
      var powerExpression = "";
      var base = 0;
      var power = 0;

      var closedParenthesesCount = 0;
      var openParenthesesCount = 0;

      var baseStart = 0;
      var hasBase = false;
      for (var k = 1; k <= i; k++) {
        console.log("Checking before; Index " + (i - k) + " = " + newEquation[i - k]);
        var hasBase = true;
        if (newEquation[i - 1] == ")") {
          if (newEquation[i - k] == ")") {
            closedParenthesesCount++;
          }
          if (newEquation[i - k] == "(") {
            openParenthesesCount++;
          }
          console.log(closedParenthesesCount);
          console.log(openParenthesesCount);
          if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
            base = newEquation.slice(i - k, i);
            console.log(base);
            break;
          }
        } else if (isNumber(newEquation[i - k])) {
          baseStart = i - k;
        }

      }
      if (hasBase) {
        //base = newEquation.slice(baseStart, i);
      }
      console.log("Base: " + base);

      var powerEnd = 0;
      var hasPower = false;
      for (var k = i + 1; k < newEquation.length; k++) {
        console.log("Checking after; Index " + (k) + " = " + newEquation[k]);
        hasPower = true;
        if (newEquation[i + 1] == "(" || isNumber(newEquation[i + 1])) {
          if (newEquation[k] == ")") {
            closedParenthesesCount++;
          }
          if (newEquation[k] == "(") {
            openParenthesesCount++;
          }
          if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
            power = newEquation.slice(i + 1, k + 1);
            console.log(power);
            break;
          }
        } else if (isNumber(newEquation[k]) ) {
          powerEnd = k;
        }
      }
      if (hasPower) {
        //power = newEquation.slice(i + 1, powerEnd + 1);
      }
      console.log("Power: " + power);

      var newPowEquation = "pow(" + base + "," + power + ")";
      console.log(newPowEquation);
      //newEquation = newEquation.split(powerExpression).join("pow(" + base + "," + power + ")");
    }

    if (newEquation[i] == "(") {
      lastParenthesisIndex++;
      /*
      if (i > 0 && isLetter(newEquation[i - 1]) && startIndex != null) {
        console.log("StartIndex: " + startIndex);
        var functionFound = newEquation.slice(startIndex, i + 1);
        if (foundFunctions.indexOf(functionFound) == -1) {
          foundFunctions.push(functionFound);
          console.log("Found " + functionFound);
        }
      }
      */

      if (i > 0 && isNumber(newEquation[i - 1])) {
        //multipliesToBeAdded.push(i-1);
      }

    }
    if (newEquation[i] == ")") {
      lastParenthesisIndex--;


      if (i < newEquation.length - 1 && (isNumber(newEquation[i + 1]) || isLetter(newEquation[i + 1]))) {
        //multipliesToBeAdded.push(i+1);
      }

    }

    if (newEquation[i] == "|") {

      if (i < newEquation.length - 1 && !isOperator(newEquation[i + 1]) && (isNumber(newEquation[i + 1]) || isLetter(newEquation[i + 1]) || newEquation[i + 1] == "(" || newEquation[i + 1] == "|")) {
        //
        newEquation = newEquation.replace("|", "abs(");

      } else {
        newEquation = newEquation.replace("|", ")");
      }
      absFound++;
    }

    console.log("lastParenthesisIndex: " + lastParenthesisIndex)
    console.log("4. Equation: " + newEquation + "; length: " + newEquation.length);

  }


  newEquation = newEquation.split("math").join("Math");
  newEquation = newEquation.split("arc").join("a");

  /*
    for(var i=0; i<newEquation.length;i++){
      //console.log(i);
      if(newEquation[i] == "(" && newEquation[i-1].match(/[a-zA-Z]/i)){
        var startIndex = 0;
        var stringBeforeFunction = newEquation.slice(0,i+1)
        var stringBeforeFunctionLength = stringBeforeFunction.length;
        console.log("String before: " + stringBeforeFunctionLength);
        for(var x=1; x< ((stringBeforeFunctionLength<8)?(stringBeforeFunctionLength):(8)); x++){
          if(newEquation[i-x].match(/[a-zA-Z]/i)){
            startIndex = i-x;
          } else{
          }
        }
        var functionFound = newEquation.slice(startIndex,i+1);
        foundFunctions.push(functionFound);
        console.log("Found " + functionFound);
      }
    }
    */


  console.log("//////////////////////////////////////");
  /*
    var multipliesOffset = 0;
    for (var j = 0; j < multipliesToBeAdded.length; j++) {
      var firstPart = newEquation.substring(0, multipliesToBeAdded[j]+multipliesOffset + 1);
      var secondPart = newEquation.substring(multipliesToBeAdded[j]+multipliesOffset + 1, newEquation.length);
      console.log("First part: " + firstPart);
      console.log("Second part: " + secondPart);
      newEquation = firstPart + "*" + secondPart;
      multipliesOffset++;
    }
    */
  for (var i = 0; i < foundFunctions.length; i++) {
    console.log("Replacing: " + foundFunctions[i])
    lastParenthesisIndex++;
    newEquation = newEquation.split(foundFunctions[i]).join("Math." + foundFunctions[i] + "(");
  }
  while (lastParenthesisIndex > 0) {
    newEquation += ")";
    lastParenthesisIndex--;
  }
  console.log("99. Equation: " + newEquation + "; length: " + newEquation.length);


  return newEquation;
}

function drawAxes() {

  ctx.strokeStyle = "#000000"
  ctx.lineWidth = 3;
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

}

function drawGrid() {
  ctx.lineWidth = 1;
  if (canvas.aspectRatio > 1) {

    gridWidth = canvas.height / 10;
    var needed = canvas.width / gridWidth;
    xAxisLength = needed;
    for (var i = -canvas.height / 2; i < canvas.height / 2; i += gridWidth) {
      ctx.beginPath();
      ctx.moveTo(0, i + canvas.height / 2)
      ctx.lineTo(canvas.width, i + canvas.height / 2);
      ctx.stroke();
    }

    for (var i = -needed / 2; i < needed / 2; i++) {
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 + (Math.ceil(i) * gridWidth), 0);
      ctx.lineTo(canvas.width / 2 + (Math.ceil(i) * gridWidth), canvas.height);
      ctx.stroke();
    }
  } else {
    xAxisLength = 10;
    gridWidth = canvas.width / xAxisLength;
    var needed = canvas.height / gridWidth;
    for (var i = -canvas.width / 2; i < canvas.width / 2; i += gridWidth) {
      ctx.beginPath();
      ctx.moveTo(i + canvas.width / 2, 0)
      ctx.lineTo(i + canvas.width / 2, canvas.height);
      ctx.stroke();
    }

    for (var i = -needed / 2; i < needed / 2; i++) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2 + (Math.ceil(i) * gridWidth));
      ctx.lineTo(canvas.width, canvas.height / 2 + (Math.ceil(i) * gridWidth));
      ctx.stroke();
    }
  }
}

function clearAll() {
  console.log("Clearing")
  for (var i = 1; i <= 10; i++) {
    document.getElementById("equ" + i).value = "";
    resize();
  }
}

Math.csc = function(x) {
  return 1 / Math.sin(x);
}

Math.sec = function(x) {
  return 1 / Math.cos(x);
}

Math.cot = function(x) {
  return 1 / Math.tan(x);
}
