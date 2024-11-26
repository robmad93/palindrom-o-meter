document.getElementById("check-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const inputField = document.getElementById("text-input");
    const inputValue = inputField.value.trim();
  
    if (inputValue === '') {
      alert("Please input a value");
      return false;
    }
  
    // If there's a value, you can proceed with your palindrome check or other logic
    alert(`You entered: ${inputValue}`);
    return true;
  });