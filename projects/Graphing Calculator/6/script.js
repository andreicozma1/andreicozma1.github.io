var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var parsedEquationTextAreaE = document.getElementById("computedEquationId");
var resizeSeparatorE = document.getElementById("resizeSeparatorID");
var cellWidthE = document.getElementById("cellWidthId");
var cellHeightE = document.getElementById("cellHeightId")
var aspectRatioE = document.getElementById("checkBoxId");
var menuE = document.getElementById("menu");
var table1E = document.getElementById("table1");
var xCoordE = document.getElementById("xCoord");
var yCoordE = document.getElementById("yCoord");
// ^^ sets up variables for each element that
// we'll be using from our HTML document

var translateX = 0;
var translateY = 0;
//^^ used to move the graph left, right, up, and down;
//^ Default centered at (0,0)
var newWidth = table1.offsetWidth / 1.5;
//^^ Variable used for manipulating the width of the canvas
var canResize = false;
// Gets set to true whene clicking on the resizeSeparator Element
var canMove = false;
//^^ Whether you can move the graph around
// When set to true, the graph follows the mouse position

var originalEquations = [];
var redoneEquations = [];
// ^^ used to keep track of the equations and their
// computed JavaScript equivalents that the user inputs

var gridWidth;
var gridHeight;
//^^ Defines how many cells we have horizintally and vertically

var cellWidth;
var cellHeight;
//^^ computed width and height of each cell, in pixels

var focusElem;
//^^ Used to determine which function input box has focus, to display the right JS equation for it
onResize()
//^^ Initial function call to set up the right sizes for all the variables
window.addEventListener("resize", onResize);

function onResize() {
	resize();
	onChange();
};
//^^ Sets up the onResize listener to redraw the canvas whenever the user resizes the browser window

function redrawCells() {
	//console.log("Redrawing GRID")
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//^^ Clears canvas
	drawCells();
	drawAxes();
	drawCrossHair();
	//^^ Redraws all elements of the graph
}

function resize() {
	//console.log("Adjusting size variables")
	if (canvas.width != newWidth) {
		canvas.width = newWidth;
		canvContainer.width = canvas.width;
	}
	var newHeight = window.innerHeight * .96;
	if (canvas.height != newHeight) {
		canvas.height = newHeight;
	}
	canvas.aspectRatio = canvas.width / canvas.height;
} // ^^ Sets the width and the height of the canvas element to the new computed values

document.addEventListener("mousemove", function(e) {
	//console.log("Moved mouse");
	if (canResize) {
		//console.log("& resizing");
		var nextWidth = table1.offsetWidth - e.clientX - 10;
		if ((newWidth >= 50 || nextWidth > newWidth) && ((newWidth + menu.offsetWidth) <= window.innerWidth - 35 || nextWidth < newWidth)) {
			newWidth = nextWidth;
			onResize();
		}
	}
	if (canMove) {
		//console.log("& moving");
		translateX += e.movementX;
		xCoordE.value = -translateX / cellWidth;
		translateY += e.movementY;
		yCoordE.value = translateY / cellHeight;
		onResize();
	}
})
//^^ Adds a mouse move event handler to be able to handle resizing
// the canvas with the resize separator as well as moving the graph left, right, up, and down when clicking and dragging

function moveX() {
	translateX = -xCoordE.value * cellWidth;
}

function moveY() {
	translateY = yCoordE.value * cellHeight;
}
//^^ Used to move the graph to a specific point when the user inputs values into the corresponding HTML elements

canvas.addEventListener("mousedown", function(e) {
	canMove = true;
})
resizeSeparatorE.addEventListener("mousedown", function(e) {
	event.preventDefault();
	canResize = true;
	document.body.style.cursor = 'ew-resize';
})
document.addEventListener("mouseup", function(e) {
	canResize = false;
	canMove = false;
	document.body.style.cursor = 'auto';
	if (focusElem != null) {
		var textInBox = document.getElementById(focusElem).value;
		if (textInBox != "") {
			parsedEquationTextAreaE.value = redoneEquations[parseInt(focusElem[3])];
		} else {
			parsedEquationTextAreaE.value = "";
		}
	}
})
var timeout;
document.addEventListener("keyup", function(e) {
	if (e.keyCode == 13) {
		onResize();
	}
	timeout = setTimeout(checkInputBoxes, 200);
})
document.addEventListener("keydown", function(e) {
	clearTimeout(timeout);
})
var lastChanged;
canvas.addEventListener("mousewheel", function f(e) {
	e.preventDefault();
	var multiplier = e.deltaY / 100;
	zoom(multiplier)
})

function zoom(amt) {
	if (amt == null) {
		amt = 1;
	}
	var nextWidthVal = parseFloat(cellWidthE.value) + amt;
	var nextHeightVal = parseFloat(cellHeightE.value) + amt
	if (nextWidthVal > 0) {
		cellWidthE.value = nextWidthVal;
	}
	if (nextHeightVal > 0) {
		cellHeightE.value = nextHeightVal;
	}
	onChange();
}

function onChange(e) {
	//console.log("Calculating cell dimensions");
	if (e == 1 || (lastChanged == null)) {
		lastChanged = 1;
	}
	if (e == 2) {
		lastChanged = 2;
	}
	var newCellWidth = canvas.width / parseFloat(cellWidthE.value);
	var newCellHeight = canvas.height / parseFloat(cellHeightE.value);
	var lastLockVal;
	if (aspectRatioE.checked) {
		//console.log("Locked")
		if (e == 1 || (e == null && (lastChanged == 1 || lastChanged == null))) {
			//console.log("Changed Width")
			cellWidth = newCellWidth;
			cellHeight = cellWidth;
			cellHeightE.value = canvas.height / cellHeight;
		}
		if (e == 2 || (e == null && (lastChanged == 2 || lastChanged == null))) {
			//console.log("Changed Height")
			cellHeight = newCellHeight;
			cellWidth = cellHeight;
			cellWidthE.value = canvas.width / cellWidth;
		}
	} else {
		cellWidth = newCellWidth;
		cellHeight = newCellHeight;
	}
	translateX = -parseFloat(xCoordE.value) * cellWidth;
	translateY = parseFloat(yCoordE.value) * cellHeight;
	redrawCells();
	//  originalEquations = []
	//  redoneEquations = [];
	checkInputBoxes();
}

function checkInputBoxes() {
	//console.log("++++++++++++++++++++++")
	//console.log("Checking input boxes")
	for (var i = 1; i <= 5; i++) {
		var textInBox = document.getElementById("equ" + i).value;
		//console.log("Checking box #" + i)
		if (originalEquations[i] == null && textInBox != "") {
			//console.log("Parsing equation and drawing")
			originalEquations[i] = textInBox;
			redoneEquations[i] = (parseEquation(textInBox));
			drawFunction(i);
			parsedEquationTextAreaE.value = redoneEquations[i];
		} else if (originalEquations[i] != textInBox && originalEquations[i] != null) {
			//console.log("Here1");
			/*
			originalEquations[i] = textInBox;
			var parsed = "";
			if (textInBox != "") {
			  parsed = parseEquation(textInBox);
			}
			redoneEquations[i] = parsed;
			*/
			originalEquations = [];
			redoneEquations = [];
			eqPoints = []
			onResize();
			if (textInBox != "") {
				parsedEquationTextAreaE.value = redoneEquations[i];
			}
		} else {
			if (redoneEquations[i] != null) {
				//console.log("Reusing equation and drawing");
				drawFunction(i);
			} else {
				//console.log("Hi")
			}
		}
	}
	//console.log(originalEquations);
	//console.log(redoneEquations);
	//console.log("++++++++++++++++++++++")
}

function parseEquation(equat) {
	//console.log("//");
	//console.log("Parsing equation")
	//console.log("1. Equation: " + equat + "; length: " + equat.length);
	//console.log("2. Equation: " + newEquation + "; length: " + newEquation.length);
	var newEquation = equat.toLowerCase();
	newEquation = newEquation.split("[").join("(");
	newEquation = newEquation.split("]").join(")");
	newEquation = newEquation.split("{").join("(");
	newEquation = newEquation.split("}").join(")");
	newEquation = newEquation.split("pi").join("(Math.PI)");
	newEquation = newEquation.split("x").join("(x)");
	newEquation = newEquation.split(")(").join(")*(");
	newEquation = newEquation.split("math.").join("");
	newEquation = newEquation.split("ln").join("log");
	var foundFunctions = [];
	var multipliesToBeAdded = [];
	var startIndex = 0;
	var lastParenthesisIndex = 0;
	var absFound = 0;
	var absCount = newEquation.split("|").length - 1;
	var openParenCt = newEquation.split("(").length - 1;
	var closedParenCt = newEquation.split(")").length - 1;
	for (var i = 0; i < newEquation.length; i++) {
		if (newEquation[i] == ".") {
			if (isNumber(newEquation[i + 1]) && (i == 0 || !isNumber(newEquation[i - 1]))) {
				newEquation = newEquation.replace("." + newEquation[i + 1], "0." + newEquation[i + 1])
			}
		}
	}
	//console.log("3. Equation: " + newEquation + "; length: " + newEquation.length);
	for (var i = 0; i < newEquation.length; i++) {
		//console.log("@ i = " + i + "; Value = " + newEquation[i])
		if (isLetter(newEquation[i]) && (i < 1 || !isLetter(newEquation[i - 1]))) {
			startIndex = i;
			if (newEquation[i - 1] == "." && isLetter(newEquation[i - 2])) {
				startIndex = null;
			}
		}
		try {
			if (newEquation[i] == "e" && !isLetter(newEquation[i - 1]) && !isLetter(newEquation[i + 1])) {
				newEquation = newEquation.replace("e", "(Math.E)");
			}
		} catch (e) {}
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
					//console.log(newEquation[startIndex - 1] != ".");
					//console.log("Found " + functionFound);
					newEquation = newEquation.replace(functionFound, "Math." + functionFound + (isNumber(newEquation[i + 1]) || newEquation[i + 1] == "|" ? "(" : ""))
				}
			}
		}
		if (newEquation[i] == "^" && !isOperator(newEquation[i + 1]) && !isOperator(newEquation[i - 1])) {
			//console.log("------------------------ start power");
			var powerExpression = "";
			var base = 0;
			var power = 0;
			var closedParenthesesCount = 0;
			var openParenthesesCount = 0;
			var hasBase = false;
			var baseStart = 0;
			for (var k = 1; k <= i; k++) {
				//console.log("Checking before; Index " + (i - k) + " = " + newEquation[i - k]);
				if (newEquation[i - 1] == ")") {
					if (newEquation[i - k] == ")") {
						closedParenthesesCount++;
					}
					if (newEquation[i - k] == "(") {
						openParenthesesCount++;
					}
					if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
						base = newEquation.slice(i - k, i);
						break;
					}
				} else if (isNumber(newEquation[i - k])) {
					hasBase = true;
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
				console.log("Checking after; Index " + (k) + " = " + newEquation[k]);
				//hasPower = true;
				if (newEquation[i + 1] == "(") {
					if (newEquation[k] == ")") {
						closedParenthesesCount++;
					}
					if (newEquation[k] == "(") {
						openParenthesesCount++;
					}
					if (closedParenthesesCount != 0 && closedParenthesesCount != 0 && closedParenthesesCount == openParenthesesCount) {
						power = newEquation.slice(i + 1, k + 1);
						break;
					}
				} else if (isNumber(newEquation[k]) || isLetter(newEquation[k]) || newEquation[k] != "(") {
					hasPower = true;
					powerEnd = k;
				}
			}
			console.log(powerEnd)
			if (hasPower) {
				power = newEquation.slice(i + 1, powerEnd + 1);
			}
			console.log("Power: " + power);
			powerExpression = base + "^" + power;
			var newPowEquation = "Math.pow(" + base + "," + power + ")";
			console.log("Output: " + newPowEquation);
			newEquation = newEquation.split(powerExpression).join(newPowEquation);
			//console.log("------------------------ end power");
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
		//console.log("4. Equation: " + newEquation + "; length: " + newEquation.length);
	}
	newEquation = newEquation.split("math").join("Math");
	newEquation = newEquation.split("arc").join("a");
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
	//console.log("//");
	return newEquation;
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

function drawCells() {
	//console.log("Drawing cells")
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();
	for (var i = 0; i < canvas.width + ((translateX < 0) ? (-translateX) : (translateX)); i += cellWidth) {
		ctx.moveTo(Math.floor(canvas.width / 2 + i + translateX), 0)
		ctx.lineTo(Math.floor(canvas.width / 2 + i + translateX), canvas.height);
		ctx.moveTo(Math.floor(canvas.width / 2 - i + translateX), 0)
		ctx.lineTo(Math.floor(canvas.width / 2 - i + translateX), canvas.height);
	}
	for (var i = 0; i < canvas.height + ((translateY < 0) ? (-translateY) : (translateY)); i += cellHeight) {
		ctx.moveTo(0, Math.floor(canvas.height / 2.0 - i + translateY));
		ctx.lineTo(canvas.width, Math.floor(canvas.height / 2.0 - i + translateY));
		ctx.moveTo(0, Math.floor(canvas.height / 2.0 + i + translateY));
		ctx.lineTo(canvas.width, Math.floor(canvas.height / 2.0 + i + translateY));
	}
	ctx.stroke();
}

function drawAxes() {
	//console.log("Drawing axes")
	ctx.beginPath();
	ctx.strokeStyle = "#000000"
	ctx.lineWidth = 3;
	ctx.moveTo(0, Math.floor(canvas.height / 2.0 + translateY));
	ctx.lineTo(canvas.width, Math.floor(canvas.height / 2.0 + translateY));
	ctx.moveTo(Math.floor(canvas.width / 2.0 + translateX), 0);
	ctx.lineTo(Math.floor(canvas.width / 2.0 + translateX), canvas.height);
	ctx.stroke();
}

function drawFunction(eqNum) {
	var equation = redoneEquations[eqNum];
	//console.log("Drawing function: " + equation)
	var lineColorE = document.getElementById("colorPickerId");
	var lineWidthE = document.getElementById("thicknessId");
	ctx.strokeStyle = colorPickerId.value;
	ctx.fillStyle = colorPickerId.value;
	ctx.lineWidth = lineWidthE.value;
	//console.log(ctx.strokeStyle + " " + ctx.fillStyle + " " + ctx.lineWidth);
	var begin = (-cellWidthE.value / 2 - translateX / cellWidth);
	var end = (cellWidthE.value / 2 - translateX / cellWidth);
	var bottom = -cellHeightE.value / 2 + translateY / cellHeight;
	var top = cellHeightE.value / 2 + translateY / cellHeight;
	//console.log(begin + " " + end + " " + bottom + " " + top)
	ctx.beginPath();
	console.log(cellWidthE.value / 100.0)
	for (var xVal = begin; xVal < end; xVal += cellWidthE.value / 500.0) {
		//var y = Math.cos(x * (Math.PI / 180)) * canvas.height / 20;
		try {
			var x = xVal;
			var y = eval(equation);
			ctx.moveTo(canvas.width / 2 + translateX + x * cellWidth, canvas.height / 2 + translateY - y * cellHeight);
			x += cellWidthE.value / 500.0;
			y1 = eval(equation);
			if (Math.abs(y1 - y) < cellHeightE.value * 2) {
				ctx.lineTo(canvas.width / 2 + translateX + x * cellWidth, canvas.height / 2 + translateY - y1 * cellHeight)
			}
		} catch (e) {}
	}
	ctx.stroke();
}

function drawCrossHair() {
	ctx.beginPath();
	ctx.moveTo(Math.floor(canvas.width / 2 - 5), Math.floor(canvas.height / 2));
	ctx.lineTo(Math.floor(canvas.width / 2 + 5), Math.floor(canvas.height / 2))
	ctx.moveTo(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2 - 5));
	ctx.lineTo(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2 + 5))
	ctx.stroke();
}

function clearAll() {
	//console.log("Clearing")
	for (var i = 1; i <= 5; i++) {
		document.getElementById("equ" + i).value = "";
		onResize();
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
