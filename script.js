let enteredCode = '';

function enterNumber(num) {
    enteredCode += num; // Add the number to the entered code
    document.getElementById('display').innerText = ` ${enteredCode}`; // Show entered code
}

function deleteLast() {
    enteredCode = enteredCode.slice(0, -1); // Remove the last character
    document.getElementById('display').innerText = ` ${enteredCode}`; // Update displayed code
}

function checkCode() {
    // Define the correct code here
    const correctCode = '1234';
    
    if (enteredCode === correctCode) {
        showMessage();
        playSuccessAnimation()
    } else {
        
    }
    enteredCode = ''; // Reset code after checking
    document.getElementById('display').innerText = ` `; // Reset display
}



function showMessage() {
        var messageElement = document.getElementById('message');
        messageElement.classList.remove('hidden'); // Show the message
        
        // Set timeout to hide the message after a certain time (e.g., 6 seconds)
        setTimeout(function() {
            messageElement.classList.add('hidden'); // Hide the message after 6 seconds
        }, 6000); // 6000 milliseconds = 6 seconds
}

     // Call the function to show the message

function playSuccessAnimation() {
    // Clear the display area
    const display = document.getElementById('display');
    display.innerHTML = '';

    // Create a new div for the "Well Done" message
    const wellDone = document.createElement('div');
    wellDone.textContent = 'Well Done!';
    wellDone.style.position = 'relative';
    wellDone.style.top = '-100px';
    wellDone.style.transform = 'translate(-50%, -50%)';
    wellDone.style.fontSize ='65px';
    wellDone.style.fontWeight = 'bold';
    document.body.appendChild(wellDone);

    // Change colors and animate
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let index = 0;

    const interval = setInterval(() => {
        wellDone.style.color = colors[index % colors.length];
        index++;

        // Stop the animation after a set time
        if (index > 20) {
            clearInterval(interval);
            document.body.removeChild(wellDone); // Remove the message after finishing
            setTimeout(() => {
                // Show the keypad after a delay
                display.innerHTML = ' '; // Optional: Show a message if needed
                showKeypad(); // Function to display the keypad again
            }, 2000); // Delay before showing the keypad (2000 ms = 2 seconds)
        }
    }, 200); // Change color every 200ms

    // Play success sound
    const hooraySound = document.getElementById('hooray-sound');
    hooraySound.currentTime = 0; // Reset the sound
    hooraySound.play(); // Play sound
}
function playBeep() {
    let beep = document.getElementById('beep-sound');
    beep.play();
}
