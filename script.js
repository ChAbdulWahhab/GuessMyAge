function guessPersoalInfo(event) {
    event.preventDefault();

    var fullName = prompt("Enter your full name");
    var birthYear = parseInt(prompt("Enter your birth year"));
    var presentYear = parseInt(prompt("Enter your present year"));

    var customPopup = document.getElementById('popup');
    var nameAge = document.getElementById('name-age');

    var age = presentYear - birthYear;

    if (fullName && !isNaN(birthYear) && !isNaN(presentYear)) {
        customPopup.style.top = '7%';
        customPopup.style.opacity = 1;

        nameAge.innerText = `Welcome, ${fullName}! Looks like you're around ${age} years old. Nice to have you here - stay awesome!`;

        setTimeout(() => {
            customPopup.style.opacity = 0;
            customPopup.style.top = '-20%';
        }, 9000);
    }

    else {
        customPopup.style.top = '7%';
        customPopup.style.opacity = 1;

        nameAge.innerText = "Oops! Looks like you missed something. Try again 🙂";

        setTimeout(() => {
            customPopup.style.opacity = 0;
            customPopup.style.top = '-20%';
        }, 4000);
    }
}