let set = () => {
    let display = document.querySelector("#d1");
    let inp = document.querySelector("#inp").value; // Get user input (HH:MM format)
    let audio = document.querySelector("#ne"); // Audio element

    if (!inp) {
        display.innerHTML = "Please set a valid time!";
        return;
    }

    display.innerHTML = "Alarm is set for " + inp;

    // Set an interval to check the time every second
    let alarmInterval = setInterval(() => {
        let now = new Date();
        let currentTime = ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")};

        if (currentTime === inp) {
            display.innerHTML = "⏰ Alarm is ringing!";
            audio.play();

            setTimeout(() => {
                clearInterval(alarmInterval); // Clear the interval after the alarm rings
                display.innerHTML = "Alarm stopped";
                audio.pause();
                audio.currentTime = 0; // Reset audio to the beginning
            }, 15000); // Stop alarm after 15 seconds
        }
    }, 1000);

    // Store the interval ID so it can be cleared if the user resets
    window.alarmInterval = alarmInterval;
};

let resetAlarm = () => {
    let display = document.querySelector("#d1");
    let audio = document.querySelector("#ne");

    // Clear the interval if it exists
    if (window.alarmInterval) {
        clearInterval(window.alarmInterval);
    }

    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
    display.innerHTML = "No alarm set";
};

let showTime = () => {
    let display = document.querySelector("#d1");
    let now = new Date();
    let currentTime = ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")};
    display.innerHTML = "Current time is " + currentTime;
};

// Title animation
let isName = true;
setInterval(() => {
    let title = document.querySelector("#vansh");
    title.innerHTML = isName ? "V. Alarm" : "Clock";
    isName = !isName;
}, 2000);