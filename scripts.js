function toggleMenu() {
    const nav = document.querySelector('.nav1');
    nav.classList.toggle('show');
}

function closeMenu() {
    const nav = document.querySelector('.nav1');
    nav.classList.remove('show');
}

// self typing text
document.addEventListener("DOMContentLoaded", function() {
    const text = `Welcome to my website!`;
    const typingContainer = document.getElementById("typing-container");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingContainer.textContent += text.charAt(index) + "_";
            index++;
            setTimeout(() => {
                typingContainer.textContent = typingContainer.textContent.slice(0, -1);
                setTimeout(type, 233); // typing speed
            }, 233); // delay for slash visibility
        }
    }

    type();
});     