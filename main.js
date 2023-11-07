function ojCypher(message){
      // Convert the string into an array of characters
  let characters = message.split("");
  
  // Loop through the array and switch characters in pairs
  for (let i = 0; i < characters.length - 1; i += 2) {
    // Swap characters at even and odd indices
    let temp = characters[i];
    characters[i] = characters[i + 1];
    characters[i + 1] = temp;
  }
  
  // Join the characters array back into a string and return
  return characters.join("");
}

function encrypt(){
    var origmessage = document.getElementById("messageBox");
    var key = document.getElementById("keyBox");
    var result = document.getElementById("resultBox");
    result.innerHTML = ojCypher(origmessage.value);
}
