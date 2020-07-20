// Control Station
// Get the modal
var controlStationModal = document.getElementById("control-station-modal");

// Get the button that opens the modal
var controlStationButton = document.getElementById("control-station-button");

// Get the <span> element that closes the modal
var controlStationClose = document.getElementById("control-station-close");

// When the user clicks on the button, open the modal
controlStationButton.onclick = function() {
  controlStationModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
controlStationClose.onclick = function() {
  controlStationModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == controlStationModal) {
    controlStationModal.style.display = "none";
  }
}


// Mother Robot
// Get the modal
var motherModal = document.getElementById("mother-modal");

// Get the button that opens the modal
var motherButton = document.getElementById("mother-button");

// Get the <span> element that closes the modal
var motherClose = document.getElementById("mother-close");

// When the user clicks on the button, open the modal
motherButton.onclick = function() {
  motherModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
motherClose.onclick = function() {
  motherModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == motherModal) {
    motherModal.style.display = "none";
  }
}


// Relay System
// Get the modal
var relayModal = document.getElementById("relay-modal");

// Get the button that opens the modal
var relayButton = document.getElementById("relay-button");

// Get the <span> element that closes the modal
var relayClose = document.getElementById("relay-close");

// When the user clicks on the button, open the modal
relayButton.onclick = function() {
  relayModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
relayClose.onclick = function() {
  relayModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == relayModal) {
    relayModal.style.display = "none";
  }
}


// Daughter Bot
// Get the modal
var daughterModal = document.getElementById("daughter-modal");

// Get the button that opens the modal
var daughterButton = document.getElementById("daughter-button");

// Get the <span> element that closes the modal
var daughterClose = document.getElementById("daughter-close");

// When the user clicks on the button, open the modal
daughterButton.onclick = function() {
  daughterModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
daughterClose.onclick = function() {
  daughterModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == daughterModal) {
    daughterModal.style.display = "none";
  }
}
