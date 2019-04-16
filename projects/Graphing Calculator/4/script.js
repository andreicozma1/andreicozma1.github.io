var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var canvasContainer = document.getElementById("canvContainer");
var originalEquations = [];
var redoneEquations = [];
var variable = "x";
var newWidth = window.innerWidth * .6;
var parsedEquationTextArea = document.getElementById("computedEquationId")
var resizeSeparator = document.getElementById("resizeSeparatorID");

onResize();

var gridWidth;
var xAxisLength;

window.addEventListener("resize", function f() {
  onResize();
});

function onResize() {
  canvas.width = newWidth; //.63;
  canvas.height = window.innerHeight * .96;
  canvas.aspectRatio = canvas.width / canvas.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawAxes();
  console.log("Resizing");
  drawnEquations = [];
}

var canResize = false;
document.addEventListener("mousemove", function(e) {
  if (canResize) {
    var nextWidth = window.innerWidth - e.clientX - 45;
    if (newWidth >= 50 || nextWidth > newWidth) {
      newWidth = nextWidth;
      onResize();
    }
  }

})

resizeSeparator.addEventListener("mousedown", function(e) {
  event.preventDefault();
  //console.log("down");
  canResize = true;
  document.body.style.cursor = 'ew-resize';
})

document.addEventListener("mouseup", function(e) {
  //console.log("up");
  canResize = false;
  document.body.style.cursor = 'auto';
  var textInBox = document.getElementById(focusElem).value;
  parsedEquationTextArea.value = parseEquation(textInBox);
})

var timeout;
document.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    originalEquations = [];
    onResize();
    checkInputBoxes();
  }
  timeout = setTimeout(checkInputBoxes, 200);
})

document.addEventListener("keydown", function(e) {
  clearTimeout(timeout);
})

var parsedEq;
var lastElem;
var drawnEquations = [];

function checkInputBoxes() {
  var textInBox = document.getElementById(focusElem).value;

  if(textInBox != originalEquations[focusElem] &&focusElem == lastElem){
    onResize();
  }
  lastElem = focusElem;
  originalEquations[focusElem] = textInBox;
  for (i in originalEquations) {
    if (originalEquations[i] != "" && drawnEquations.indexOf(i) == -1) {
      var eq = parseEquation(originalEquations[i]);
      drawFunction(eq);
      drawnEquations.push(i);
      console.log("Drawing " + originalEquations[i])
    }
  }

  parsedEquationTextArea.value = parseEquation(textInBox);
console.log(drawnEquations);
  console.log(originalEquations);

  /*
  //console.log("Using variable: " + variable)
  for (var i = 1; i <= 10; i++) {
  var textInBox = document.getElementById("equ" + i).value;

    if (originalEquations[i] == null && textInBox != "") {
      originalEquations[i] = textInBox;
      redoneEquations[i] = parseEquation(textInBox);
      parsedEquationTextArea.value = redoneEquations[i];
      drawFunction(redoneEquations[i]);

    } else if (originalEquations[i] != textInBox && originalEquations[i] != null) {
      originalEquations = [];
      redoneEquations = [];
      onResize();
      checkInputBoxes();
      parsedEquationTextArea.value = redoneEquations[i];
    }
  }
  */
}

function parseEquation(equat) {
  //console.log("//////////////////////////////////////");
  //console.log("1. Equation: " + equat + "; length: " + equat.length);
  var newEquation = equat.toLowerCase();
  //console.log("2. Equation: " + newEquation + "; length: " + newEquation.length);
  newEquation = newEquation.split("[").join("(");
  newEquation = newEquation.split("]").join(")");
  newEquation = newEquation.split("{").join("(");
  newEquation = newEquation.split("}").join(")");
  newEquation = newEquation.split("E").join("Math.E");
  newEquation = newEquation.split("pi").join("Math.PI");
  newEquation = newEquation.split(variable).join("(x)");
  newEquation = newEquation.split(")(").join(")*(");
  newEquation = newEquation.split("math.").join("");

  var foundFunctions = [];
  var multipliesToBeAdded = [];

  var startIndex = 0;
  var lastParenthesisIndex = 0;
  var absFound = 0;
  var absCount = newEquation.split("|").length - 1;
  var openParenCt = newEquation.split("(").length - 1;
  var closedParenCt = newEquation.split(")").length - 1;

  //console.log("3. Equation: " + newEquation + "; length: " + newEquation.length);
  for (var i = 0; i < newEquation.length; i++) {
    if (newEquation[i] == ".") {
      if (isNumber(newEquation[i + 1]) && (i == 0 || !isNumber(newEquation[i - 1]))) {
        newEquation = newEquation.replace("." + newEquation[i + 1], "0." + newEquation[i + 1])
      }
    }
  }

  for (var i = 0; i < newEquation.length; i++) {
    //console.log("i = " + i + "; Value = " + newEquation[i])

    if (isLetter(newEquation[i]) && (i < 1 || !isLetter(newEquation[i - 1]))) {
      startIndex = i;
      if (newEquation[i - 1] == "." && isLetter(newEquation[i - 2])) {
        startIndex = null;
      }
    }

    if (isNumber(newEquation[i])) {
      if ((isLetter(newEquation[i + 1]) || newEquation[i + 1] == "(")) {
        newEquation = addMultiplication(newEquation, i + 1);
      }
      if (newEquation[i - 1] == ")") {
        newEquation = addMultiplication(newEquation, i);
      }
    }

    if (isLetter(newEquation[i])) {

      if (isLetter(newEquation[i - 1]) && (isNumber(newEquation[i + 1]) || newEquation[i + 1] == "(") || newEquation[i + 1] == "|") {
        //console.log("StartIndex: " + startIndex);
        if (startIndex != null) {
          var functionFound = newEquation.slice(startIndex, i + 1);
          //console.log(startIndex);
          //console.log(newEquation[startIndex - 1] != ".");
          //console.log("Found " + functionFound);
          newEquation = newEquation.replace(functionFound, "Math." + functionFound + (isNumber(newEquation[i + 1]) || newEquation[i + 1] == "|" ? "(" : ""))
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
        //console.log("Checking before; Index " + (i - k) + " = " + newEquation[i - k]);
        var hasBase = true;
        if (newEquation[i - 1] == ")") {
          if (newEquation[i - k] == ")") {
            closedParenthesesCount++;
          }
          if (newEquation[i - k] == "(") {
            openParenthesesCount++;
          }
          //console.log(closedParenthesesCount);
          //console.log(openParenthesesCount);
          if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
            base = newEquation.slice(i - k, i);
            //console.log(base);
            hasBase = false;
            break;
          }
        } else if (isNumber(newEquation[i - k])) {
          baseStart = i - k;
        }

      }
      if (hasBase) {
        base = newEquation.slice(baseStart, i);
      }
      //console.log("Base: " + base);

      var powerEnd = 0;
      var hasPower = false;
      for (var k = i + 1; k < newEquation.length; k++) {
        //console.log("Checking after; Index " + (k) + " = " + newEquation[k]);
        hasPower = true;
        if (newEquation[i + 1] == "(") {
          if (newEquation[k] == ")") {
            closedParenthesesCount++;
          }
          if (newEquation[k] == "(") {
            openParenthesesCount++;
          }
          if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
            power = newEquation.slice(i + 1, k + 1);
            //console.log(power);
            break;
          }
        } else if (isNumber(newEquation[k]) || isLetter(newEquation[k]) || newEquation[k] != "(") {
          powerEnd = k;
        }
      }
      if (hasPower) {
        power = newEquation.slice(i + 1, powerEnd + 1);
        //power = parseEquation(power);
      }
      //console.log("Power: " + power);

      powerExpression = base + "^" + power;
      var newPowEquation = "Math.pow(" + base + "," + power + ")";
      //console.log(newPowEquation);

      newEquation = newEquation.split(powerExpression).join(newPowEquation);
    }

    if (newEquation[i] == "(") {
      if (isLetter(newEquation[i - 1]) && (newEquation.substring(i - 2, i) == ".E" || newEquation.substring(i - 3, i) == ".PI")) {
        newEquation = addMultiplication(newEquation, i);
      } else {
        lastParenthesisIndex++;
      }
    }
    if (newEquation[i] == ")") {
      lastParenthesisIndex--;
    }

    if (newEquation[i] == "|") {

      if (!isOperator(newEquation[i + 1]) && (isNumber(newEquation[i + 1]) || isLetter(newEquation[i + 1]) || newEquation[i + 1] == "(" || newEquation[i + 1] == "|")) {
        newEquation = newEquation.replace("|", (((isNumber(newEquation[i - 1]) || newEquation[i - 1] == ")")) ? ("*") : ("")) + "Math.abs(");
      } else {
        newEquation = newEquation.replace("|", ")");
        lastParenthesisIndex--;
      }
      absFound++;
    }

    //console.log("lastParenthesisIndex: " + lastParenthesisIndex)
    //console.log("4. Equation: " + newEquation + "; length: " + newEquation.length);

  }

  newEquation = newEquation.split("math").join("Math");
  newEquation = newEquation.split("arc").join("a");

  //console.log("//////////////////////////////////////");

  for (var i = 0; i < foundFunctions.length; i++) {
    var newEq = "Math." + foundFunctions[i] + "(";
    //console.log("Replacing: " + foundFunctions[i] + " with " + newEq);
    lastParenthesisIndex++;
    newEquation = newEquation.split(foundFunctions[i]).join(newEq);
  }
  //console.log(lastParenthesisIndex);
  while (lastParenthesisIndex > 0) {
    newEquation += ")";
    lastParenthesisIndex--;
  }
  //console.log("99. Equation: " + newEquation + "; length: " + newEquation.length);

  return newEquation;
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

function clearAll() {
  //console.log("Clearing")
  for (var i = 1; i <= 10; i++) {
    document.getElementById("equ" + i).value = "";
    onResize();
  }
}

function addMultiplication(givenEq, index) {
  var firstPart = givenEq.substring(0, index);
  var secondPart = givenEq.substring(index, givenEq.length);

  return firstPart + "*" + secondPart;
}

function isNumber(n) {
  if (n != null) {
    return n.match(/[0-9]/i);
  }
}

function isLetter(n) {
  if (n != null) {
    return n.match(/[a-zA-Z]/i);
  }
}

function isOperator(n) {
  if (n != null) {
    var result = false;
    if (n == "*" || n == "/" || n == "|" || n == "+" || n == "-" || n == "^") {
      result = true;
    }
    return result;
  }
}
var focusElem;

var optionsBoxE = document.getElementById("divContainer");

function closeOptions() {
  optionsBoxE.style.display = "none";
}

function optionsBtnClick() {
  optionsBoxE.style.display = "block";
}

document.addEventListener("click", function f() {
  if (focusElem != null) {
    //console.log(focusElem);
  }
})

function drawFunction(equation) {

  var lineColorE = document.getElementById("colorPickerId");
  var lineWidthE = document.getElementById("lineWidthId");
  ctx.strokeStyle = lineColorE.value;
  ctx.fillStyle = lineColorE.value;
  ctx.lineWidth = lineWidthE.value;
  ////console.log("Drawing " + equation);
  for (var xVal = -xAxisLength / 2; xVal < xAxisLength / 2; xVal += 0.01) {
    //var y = Math.cos(x * (Math.PI / 180)) * canvas.height / 20;
    var x = xVal;
    try {
      var y = eval(equation);
    } catch (e) {}

    if (y > -canvas.height / gridWidth && y < canvas.height / gridWidth) {
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 + x * gridWidth, canvas.height / 2 - y * gridWidth);
      x += 0.01;
      y = eval(equation);
      ctx.lineTo(canvas.width / 2 + x * gridWidth, canvas.height / 2 - y * gridWidth)
      ctx.stroke();
    }
  }
}

function drawDot(x, y, rad) {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
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
