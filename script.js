const textInput = document.getElementById('text-input');
const resultText = document.getElementById('result');
const button = document.getElementById('check-btn');
const ratingText = document.getElementById('rating')

resultText.style.visibility = 'hidden';
ratingText.style.visibility = 'hidden';

// Function to check if input is a palindrome
 function palindromeChecker(input) {
  input = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const inputReversed = [...input].reverse().join('');

  if (input === inputReversed) {
    resultText.innerHTML = `<span style="color: green; font-weight: bold;">${textInput.value} is a palindrome</span>`;
    palindromeRater(input);
  } else {
    resultText.innerHTML = `<span style="color: red; font-weight: bold;">${textInput.value} is not a palindrome</span>`;
    ratingText.style.visibility = 'hidden';
  }

  resultText.style.visibility = 'visible';
}

// Function to rate the length of the palindrome input
function palindromeRater (input) {
  ratingText.style.visibility = 'visible';
  
  if (input.length <= 3) {
    ratingText.innerText = `Come on, don't make me laugh with '${textInput.value}'... Power level: Maggot`
  }
  else if (input.length > 3 && input.length <= 8) {
    ratingText.innerText = `Come now, you can do better than '${textInput.value}'. Power level: Housefly`
  }
  else if (input.length > 8 && input.length <= 16) {
    ratingText.innerText = `Ok, we're going places with '${textInput.value}'! But I'm still very far from impressed, Rookie. Power level: Honeybee`
  }
  else if (input.length > 16 && input.length <= 30) {
    ratingText.innerText = "Good job, kiddo. Maybe you capable of polishing my boots after all! Power level: Mouse"
  }
  else if (input.length > 30 && input.length <= 40) {
    ratingText.innerText = "Ok! I'm actually starting to become impressed. But don't get ahead of yourself! You still have a long way to go to beat the best! Power level: Cat"
  }
  else if (input.length > 40 && input.length <= 60) {
    ratingText.innerText = "Impressive! With entries like that, you'll go far! Power level: Wolf"
  }
  else if (input.length > 60 && input.length <= 80) {
    ratingText.innerText = "Wow! I haven't seen an entry like that in a long while! Can you go further? Power level: Brown bear"
  }
  else if (input.length > 80 && input.length < 9000) {
    ratingText.innerText = "I knew you could do it, kid! You're a real palindrome hero! Power level: Dragon"
  }
  else {
    ratingText.innerText = "POWER LEVEL IS OVER NINE THOUSAND!!!! Power level: Super Saiyan"
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission to avoid page reload
  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    palindromeChecker(textInput.value);
  }
});