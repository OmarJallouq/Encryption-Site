function ojCipher(message){
      // Convert the string into an array of characters
  let characters = message.split("");
  
  // Loop through the array and switch characters in pairs
  for (let i = 0; i < characters.length -1; i += 2) {
    // Swap characters at even and odd indices
    let temp = characters[i];
    characters[i] = characters[i + 1];
    characters[i + 1] = temp;
  }
  
  // Join the characters array back into a string and return
  return characters.join("");
  ;
}

function vigenereEncrypt(plaintext, keyword) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let key = keyword.toLowerCase();
    let result = '';
  
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      let char = plaintext[i];
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        const charIndex = alphabet.indexOf(char);
        const keyChar = key[j % key.length];
        const keyIndex = alphabet.indexOf(keyChar);
        let shiftedIndex = (charIndex + keyIndex) % 26;
        let shiftedChar = alphabet[shiftedIndex];
        if (isUpperCase) {
          shiftedChar = shiftedChar.toUpperCase();
        }
        result += shiftedChar;
        j++;
      } else {
        result += char;
      }
    }
  
    return result;
}
  
function vigenereDecrypt(ciphertext, keyword) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let key = keyword.toLowerCase();
    let result = '';
  
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
      let char = ciphertext[i];
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        const charIndex = alphabet.indexOf(char);
        const keyChar = key[j % key.length];
        const keyIndex = alphabet.indexOf(keyChar);
        let shiftedIndex = (charIndex - keyIndex + 26) % 26; // Decryption: shift left (subtract)
  
        let shiftedChar = alphabet[shiftedIndex];
        if (isUpperCase) {
          shiftedChar = shiftedChar.toUpperCase();
        }
        result += shiftedChar;
        j++;
      } else {
        result += char;
      }
    }
  
    return result;
  }
    
function encrypt(){
    var origmessage = document.getElementById("messageBox");
    var key = document.getElementById("keyBox");
    var result = document.getElementById("resultBox");
    
    var final = origmessage.value;

    //encryption process
    final = ojCipher(final);
    final = vigenereEncrypt(final, key.value);

    if(final == ""){
        final = "No message input";
    }
    result.innerHTML = final.replace(/ /g, '&nbsp;');;
}

function decrypt(){
    var origmessage = document.getElementById("messageBox");
    var key = document.getElementById("keyBox");
    var result = document.getElementById("resultBox");

    var final = origmessage.value;

    //decryption process
    final = vigenereDecrypt(final, key.value); 
    final = ojCipher(final);

    if(final == ""){
        final = "No message input";
    }
    result.innerHTML = final.replace(/ /g, '&nbsp;');;
}
