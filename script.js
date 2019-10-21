var isOpen = false;
var isBin = false;
var clicked = [];
var videoBlurred = true;
var snakeShown = false;


var profile;
var signInCode = "";


window.onload = function (e) {
  console.log(window.location.pathname);
  var video = document.getElementById('vid');
  video.addEventListener('loadedmetadata', function () {
    video.currentTime = Math.random() * video.duration;
  }, false);
}




function confirm() {
  alert("IMPORTANT!\n\n* If asked, please allow location access on the next screen to skip having to enter the Secret Code\n\nMake sure to sign in using your UTK email address (@vols.utk.edu)\nPress the button below to continue...");
  getLocation();
}

function checkLocation(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  if (position.coords.latitude > 35.948528 - 0.0005 && position.coords.latitude < 35.948528 + 0.0005 && position.coords.longitude > -83.931735 - 0.0005 && position.coords.longitude < -83.931735 + 0.0005) {
    console.log("Filling in code");
    redirectSignIn(signInCode);
  } else {
    redirectSignIn()
  }

}

function getLocation() {
  console.log("Checking location")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(checkLocation, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
    redirectSignIn();
  }
}

function redirectSignIn(code = "") {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfBNXq5f_AFPK0EcldYG-uTS2bTyEgPzDdrVQexYZW2gDmhVA/viewform?usp=pp_url&entry.248598887=" + profile.getGivenName() + "&entry.1123381156=" + profile.getFamilyName() + "&entry.594337284=" + code;
}


function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied GeoLocation Access\n\nIf you'd like to use this feature, please check your device/browser settings to ensure that Location Services are enabled.\n\nClick below to continue");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.\n\nClick below to continue");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.\n\nClick below to continue");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.\n\nClick below to continue");
      break;
  }
  redirectSignIn();

}

function hideAll() {
  var contents = $(".blockdiv").children()
  console.log(contents);
  for (var n = 0; n < contents.length; n++) {
    if (n > 2) {
      contents[n].style = "display:none;";
    } else {
      contents[n].style = "display:block;";
    }
  }
  document.getElementById("memberMenu").style = "display:none;";
  document.getElementById("loggedoffMenu").style = "display:block;";
  document.getElementById("createAccount").style = "display:none;";
  console.log("Hidden")

}
window.onbeforeunload = function (e) {
  /*
  if(window.location.href.indexOf("portal") != -1){
    gapi.auth2.getAuthInstance().signOut();
    console.log("Signing out")
  }
  */

};


function onSignIn(googleUser) {
  // Useful data for your client-side scripts:

  if (window.location.pathname.indexOf("portal") == -1) {
    window.location.href = "http://utkpikapp.org/portal";
  }

  profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  var signInButton = document.getElementById("gBtn");
  var signOutButton = document.getElementById("signout");



  // Make sure it is public or set to Anyone with link can view 
  var accounts_sheet = "https://sheets.googleapis.com/v4/spreadsheets/1IP_owcpeCwwK36Ttpc1z9-Xu53NXaLQ673HyTbOXgGE/values/Accounts?key=AIzaSyCsu48vJd_mhBzzPuNCohrJc0TOMS-T1Gw"
  var is_setup;
  var is_admin;
  var is_owner;
  var is_excused;
  $.getJSON(accounts_sheet, function (data) {

    var entry = data.values;
    //console.log(entry);
    if (entry == undefined) {
      alert("Error!\nCouldn't log you in.\nPlease try again later.");
      location.href = "/"
    }
    validated = false;
    var validation_index;
    for (var i = 0; i < entry.length; i++) {
      if (profile.getEmail() == entry[i][0]) {
        validated = true;

        validation_index = i;
        is_setup = parseInt(entry[i][1]);
        if (!is_setup) {
          console.log("Account isn't set up")
        }
        is_admin = parseInt(entry[i][2]);
        if (is_admin) {
          console.log("You have admin permissions")
        }
        is_owner = parseInt(entry[i][3]);
        if (is_owner) {
          console.log("You have owner permissions")
        }
        is_excused = parseInt(entry[i][4]);
        if (is_excused) {
          console.log("You are permanently excused from chapter meetings")
        }

        break;
      }
    }

    var info = document.getElementById("info");
    var img = document.getElementById("pic");

    var helpText = document.getElementById("helpText");



    if (validated) {
      //signInButton.style = "display:none;"
      var menu = document.getElementById("memberMenu");
      menu.style = "visibility: visible;"
      signInButton.style = "display:none;";

      if (is_owner) {
        var adminMenu = document.getElementById("adminMenu");
        adminMenu.style = "display:visible;"

        var ownerMenu = document.getElementById("ownerMenu");
        ownerMenu.style = "display:visible;"

      } else if (is_admin) {
        var adminMenu = document.getElementById("adminMenu");
        adminMenu.style = "display:visible;"
      }
      signOutButton.style = "display:block;"

    
      var codes_sheet = "https://sheets.googleapis.com/v4/spreadsheets/1IP_owcpeCwwK36Ttpc1z9-Xu53NXaLQ673HyTbOXgGE/values/Codes?key=AIzaSyCsu48vJd_mhBzzPuNCohrJc0TOMS-T1Gw";

      var lastCodeRow;
      $.getJSON(codes_sheet, function (data) {

        var entry = data.values;

        lastCodeRow = entry[entry.length - 1];
        info.innerHTML += "<br><b>** REQUIRED EVENT ON " + lastCodeRow[0].split(" ")[0] + " **</b>";
        signInCode = lastCodeRow[lastCodeRow.length - 1];
      });

      var attendence_sheet = "https://sheets.googleapis.com/v4/spreadsheets/1IP_owcpeCwwK36Ttpc1z9-Xu53NXaLQ673HyTbOXgGE/values/Overview?key=AIzaSyCsu48vJd_mhBzzPuNCohrJc0TOMS-T1Gw";
      $.getJSON(attendence_sheet, function (data) {

        var entry = data.values;
        var header = entry[0];
        header.splice(0, 3)
        var account_entry = entry[validation_index + 1];
        var email = account_entry[0];
        account_entry.splice(0, 3);
        console.log(header);
        console.log(account_entry);

        var report_element = document.getElementById("table");
        report_element.innerHTML = "Report for: " + email + "<br>";
        //report_element.innerHTML += "Missed dates:<br>"
        var displayNoMissed = true;
        for (var i = 0; i < header.length; i++) {
          if (header[i].indexOf("/") == -1 && header[i] == "Left") header[i] = "Passes Left";
          if (header[i].indexOf("/") == -1 && header[i] == "Total") header[i] = "Total Events";
          if (header[i].indexOf("/") == -1) header[i] = "- " + header[i];

          if (header[i].indexOf("/") != -1 && account_entry[i] == 1) continue; //account_entry[i] = "ATTENDED";
          if (header[i].indexOf("/") != -1 && account_entry[i] == 0) {
            account_entry[i] = "** ABSENT";
            displayNoMissed = false;
          }
          if (header[i].indexOf("/") != -1 && account_entry[i] == "PASS") {
            account_entry[i] = "** USED PASS";
            displayNoMissed = false;
          }
          if (header[i].indexOf("/") != -1 && account_entry[i] == "P_EXC") continue;
          if (header[i].indexOf("/") != -1 && account_entry[i] == "EXC") continue; //account_entry[i] = "GOOD (Submitted excuse)";
          report_element.innerHTML += header[i] + ": " + account_entry[i] + "<br>";
        }
        if (displayNoMissed) {
          report_element.innerHTML += "Looking good! You have 0 missed events so far!"
        } else {
          report_element.innerHTML += "* IMPORTANT: You are personally responsible to contact the secretary within the next few days if there are any errors with your attendence. Fines are to be put in a week after missing a required event."
        }

    
      });



      var menuLoggedOff = document.getElementById("loggedoffMenu");
      menuLoggedOff.style = "display: none;"

      info.innerHTML = "Name: " + profile.getName() + "<br>Email: " + profile.getEmail() + "<br>Status: " + (is_owner ? "Owner" : (is_admin ? "Admin" : "Member")) + (is_setup ? "" : "" /*TODO". Click below to set up your account"*/ );

      img.src = profile.getImageUrl();

      var excuseButton = document.getElementById("excuseButton");
      excuseButton.href = "https://docs.google.com/forms/d/e/1FAIpQLSfP5veTYVmjdZ1yKC1r8tBnDxNCFbvirYyFQTWZ3lRxNI-7PQ/viewform?entry.191386322=" + profile.getGivenName() + "&entry.908237995=" + profile.getFamilyName();

      if (is_excused) {
        document.getElementById("chapterHint").innerHTML += "<br>* INFO: You are permanently excused from chapter meetings";
      }


    } else {


      hideAll();
      if (profile.getEmail().indexOf("@vols.utk.edu") != -1) {
        signInButton.style = "display:none;";
        signOutButton.style = "display:block;";
        helpText.innerHTML = "Email: " + profile.getEmail() + "<br>You don't appear to be a member of the Alpha Sigma chapter yet."
        document.getElementById("createAccount").style = "display:block;";


      } else {

        signInButton.style = "display:block;";
        signOutButton.style = "display:block;";

        helpText.innerHTML = "Signed in as: " + profile.getEmail() + "<br>Please sign in with an UT email address.";
      }


    }

  });

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}


function signOut() {

  /*
  var menuLoggedOff = document.getElementById("loggedoffMenu");
  menuLoggedOff.style = "display: block;"
  var memberMenu = document.getElementById("memberMenu");
  memberMenu.style = "display: none;"
  */
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');

    var signInButton = document.getElementById("gBtn");
    var signOutButton = document.getElementById("signout");

    signOutButton.style = "display:none;";
    signInButton.style = "display:block;";
    helpText.innerHTML = "Sign In with your UT account to get access to all member features.";
    hideAll();
    //document.getElementById("createAccount").style = "display:none"
  });
}

function openNavAction() {
  if ((window.innerWidth / window.innerHeight) < 1) {
    document.getElementById("mySidenav").style.width = "100%";
  } else if ((window.innerWidth / window.innerHeight) < 1.2) {
    document.getElementById("mySidenav").style.width = "50%";
  } else if ((window.innerWidth / window.innerHeight) < 1.7) {
    document.getElementById("mySidenav").style.width = "40%";
  } else {
    document.getElementById("mySidenav").style.width = "30%";
  }
}



function openNav() {
  $("#menuFallBackLink").attr("href", "#");
  openNavAction();
  isOpen = true;
  console.log("Opened nav");
}

$(".form").focusout(function () {
  $(this).focus();
  console.log("Form out of focus. Focusing back on form");
});

function removeFocus() {
  document.activeElement.blur();
}
document.body.addEventListener("touchstart", removeFocus);

$(function () {
  $(".blockdiv div").click(function () {

    /*
    if ($(this).attr("hidden")) {
      $(this).find("a").show(200);
      $(this).attr("hidden", false);
    } else {
      $(this).find("a").hide(200);
      $(this).attr("hidden", true);

    }
    */
  });

 

  $(".top").dblclick(function () {
    binaryToggle();
  });
  $(".blockDiv h1").dblclick(function () {
    $('.content').css("color", getRandomColor);
    $('.content').css("outline-color", getRandomColor);
    $('p').css("color", getRandomColor);
    $('h1').css("color", getRandomColor);
  });

  $(".content").click(function () {
    if (snakeShown) {
      hideSnake();
    }
    if (videoBlurred) {
      $("#HHSLogo").css("transform", "scale(1.1, 1.1)");
      setTimeout(function () {
        $("#HHSLogo").css("transform", "scale(1.0, 1.0)");
      }, 450);
    }
  })
})

function hideSnake() {
  snakeShown = false;
  $('#c').remove();
  console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01001000 01101001 01100100 00100000 01010011 01101110 01100001 01101011 01100101");
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000011 01101000 01100001 01101110 01100111 01100101 01100100 00100000 01110100 01101111 00100000 01110010 01100001 01101110 01100100 01101111 01101101 00100000 01100011 01101111 01101100 01101111 01110010 01110011");
  return color;
}


function binaryToggle() {
  if (isBin) {
    recursiveReplace(document.body);
    isBin = false;
    console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000010 01100001 01100011 01101011 00100000 01110100 01101111 00100000 01110100 01100101 01111000 01110100");
  } else {
    recursiveReplace(document.body);
    isBin = true;
    console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000010 01100001 01100011 01101011 00100000 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001");
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isOpen = false;
  console.log("Closed Nav");
}

window.addEventListener('resize', function (event) {
  if (isOpen === true) {
    openNavAction();
  }
});


function recursiveReplace(node) {
  if (node.className != "sidenav") {
    if (node.nodeType == 3) { // text node
      var text = node.nodeValue.trim();
      var convTxt;
      if (text.replace(/\s/g, '') != "") {
        if (isBin) {
          eachByte = text.split(" ");
          convStr = [];
          for (i = 0; i < eachByte.length; i++) {
            convStr.push(String.fromCharCode(parseInt(eachByte[i], 2)));
          }
          convTxt = convStr.join("");
        } else {
          for (x = 0; x < text.length; x++) {
            convTxt += text[x].charCodeAt(0).toString(2) + " ";
          }
        }

        convTxt = convTxt.replace("undefined", "");
        node.nodeValue = node.nodeValue.replace(text, convTxt);
      }


    } else if (node.nodeType == 1) { // element
      $(node).contents().each(function () {
        recursiveReplace(this);
      });
    }
  }

}



(function () {
  var SIZE = ((window.innerWidth < window.innerHeight) ? (window.innerWidth) : (window.innerHeight)); // Size of the play-field in pixels
  var GRID_SIZE = SIZE / 50;
  var c;
  var context;

  var direction = newDirection = 1; // -2: up, 2: down, -1: left, 1: right
  var snakeLength = 5;
  var snake = [{
    x: SIZE / 2,
    y: SIZE / 2
  }]; // Snake starts in the center
  var candy = null;
  var end = false;

  function randomOffset() {
    return Math.floor(Math.random() * SIZE / GRID_SIZE) * GRID_SIZE;
  }

  function stringifyCoord(obj) {
    return [obj.x, obj.y].join(',');
  }

  function tick() {
    var newHead = {
      x: snake[0].x,
      y: snake[0].y
    };

    // Only change directon if the new direction is a different axis
    if (Math.abs(direction) !== Math.abs(newDirection)) {
      direction = newDirection;
    }
    var axis = Math.abs(direction) === 1 ? 'x' : 'y'; // 1, -1 are X; 2, -2 are Y
    if (direction < 0) {
      newHead[axis] -= GRID_SIZE; // Move left or down
    } else {
      newHead[axis] += GRID_SIZE; // Move right or up
    }

    // Did we eat a candy? Detect if our head is in the same cell as the candy
    if (candy && candy.x === newHead.x && candy.y === newHead.y) {
      candy = null;
      snakeLength += 20;
    }

    context.fillStyle = '#002b36';
    context.fillRect(0, 0, SIZE, SIZE); // Reset the play area
    if (end) {
      context.fillStyle = '#eee8d5';
      context.font = '40px serif';
      context.textAlign = 'center';
      context.fillText('Refresh to play again', SIZE / 2, SIZE / 2);
    } else {
      snake.unshift(newHead); // Add the new head to the front
      snake = snake.slice(0, snakeLength); // Enforce the snake's max length
    }

    // Detect wall collisions
    if (newHead.x < 0 || newHead.x >= SIZE || newHead.y < 0 || newHead.y >= SIZE) {
      end = true;
    }

    context.fillStyle = '#268bd2';
    var snakeObj = {};
    for (var i = 0; i < snake.length; i++) {
      var a = snake[i];
      context.fillRect(a.x, a.y, GRID_SIZE, GRID_SIZE); // Paint the snake
      // Build a collision lookup object
      if (i > 0) snakeObj[stringifyCoord(a)] = true;
    }

    if (snakeObj[stringifyCoord(newHead)]) end = true; // Collided with our tail

    // Place a candy (not on the snake) if needed
    while (!candy || snakeObj[stringifyCoord(candy)]) {
      candy = {
        x: randomOffset(),
        y: randomOffset()
      };
    }

    context.fillStyle = '#b58900';
    context.fillRect(candy.x, candy.y, GRID_SIZE, GRID_SIZE); // Paint the candy
  }

  $('body').on('DOMNodeInserted', "canvas", function () {
    console.log("Hereee");
    c = document.getElementById('c');
    c.height = c.width = SIZE * 2; // 2x our resolution so retina screens look good
    c.style.width = c.style.height = SIZE + 'px';
    context = c.getContext('2d');
    context.scale(2, 2); // Scale our canvas for retina screens

    setInterval(tick, 100); // Kick off the game loop!
    window.onkeydown = function (e) {
      newDirection = {
        37: -1,
        38: -2,
        39: 1,
        40: 2
      } [e.keyCode] || newDirection;
    };
  });
})();