function toggleMenu() {
    const nav = document.querySelector('.nav1');
    nav.classList.toggle('show');
}

function closeMenu() {
    const nav = document.querySelector('.nav1');
    nav.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", function() {
    const text = `Welcome to my website!`;
    const typingContainer = document.getElementById("typing-container");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingContainer.textContent = text.slice(0, index + 1); // Remove the underscore
            index++;
            let delay;
            if (index <= 4) { // First 4 characters "Welc"
                delay = 500; // 2 seconds divided by 4 characters
            } else {
                delay = 117; // Remaining 2 seconds for the rest
            }
            setTimeout(type, delay); // typing speed
        }
    }

    type();
});