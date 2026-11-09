
const SECRET_KEY = "GNANASHRI";

let animationStarted = false;

// UNLOCK BUTTON
document.getElementById("unlockBtn").addEventListener("click", unlockSurprise);

// ENTER KEY
document.getElementById("secretKey").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        unlockSurprise();
    }
});

function unlockSurprise() {

    const enteredKey = document.getElementById("secretKey").value.trim();
    const error = document.getElementById("errorMessage");

    if (enteredKey.toUpperCase() !== SECRET_KEY) {
        error.textContent = "Wrong key! Try again, dear 💗";
        return;
    }

    error.textContent = "";

    document.getElementById("lockPage").classList.add("hidden");
    document.getElementById("birthdayPage").classList.remove("hidden");

    if (!animationStarted) {
        animationStarted = true;
        startButterflies();
        startHearts();
        startSparkles();
    }

}

// CREATE FLYING BUTTERFLIES
function createButterfly() {

    const container = document.getElementById("butterflies");

    const butterfly = document.createElement("div");

    butterfly.className = "butterfly";
    butterfly.textContent = "🦋";

    const duration = 7 + Math.random() * 7;

    butterfly.style.left = Math.random() * 100 + "vw";
    butterfly.style.animationDuration = duration + "s";
    butterfly.style.fontSize = (25 + Math.random() * 30) + "px";

    butterfly.style.setProperty(
        "--sway",
        (Math.random() * 180 - 90) + "px"
    );

    container.appendChild(butterfly);

    setTimeout(() => butterfly.remove(), duration * 1000);
}

function startButterflies() {

    // First group of butterflies
    for (let i = 0; i < 15; i++) {
        setTimeout(createButterfly, i * 180);
    }

    // Continuous butterflies
    setInterval(createButterfly, 500);
}

// CREATE FLOATING HEARTS
function createHeart() {

    const container = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = ["❤️", "💖", "💕", "💗", "💝"];

    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

function startHearts() {

    setInterval(createHeart, 650);
}

// CREATE SPARKLES
function createSparkle() {

    const container = document.getElementById("sparkles");

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.textContent = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (15 + Math.random() * 20) + "px";

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
}

function startSparkles() {

    setInterval(createSparkle, 350);
}

// CELEBRATE BUTTON
document.getElementById("celebrateBtn").addEventListener("click", function() {

    // Butterfly burst
    for (let i = 0; i < 25; i++) {
        setTimeout(createButterfly, i * 80);
    }

    // Heart burst
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }

    // Sparkle burst
    for (let i = 0; i < 25; i++) {
        setTimeout(createSparkle, i * 70);
    }

});
