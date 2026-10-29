const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-toggle img");

const langButton  = document.querySelector("#language-toggle");
const langIcon = document.querySelector("#language-toggle img");

const githubLink = document.querySelector(".navbar-github");
const githubIcon = githubLink.querySelector("img");

const contactGithubIcon = document.querySelector(".Github-icon");
const contactEmailIcon = document.querySelector(".Gmail-icon");
const githubContact = contactGithubIcon.closest(".contact-item");
const emailContact = contactEmailIcon.closest(".contact-item");

const copyEmailButton = document.getElementById("copy-email");
const emailLabel = copyEmailButton.textContent.trim();


themeButton.addEventListener("click", changeIcon);
langButton.addEventListener("click", changeLanguage);
githubLink.addEventListener("mouseenter", startGitHubGif);
githubLink.addEventListener("mouseleave", stopGitHubGif);




function changeLanguage() {
    const currentLang = document.getElementById("lang");

    currentLang.textContent = currentLang.textContent.trim() === "PL" ? "EN" : "PL";

    updateFlag();
}

function updateFlag() {
    const language = document.getElementById("lang").textContent.trim();
    const isLight = document.body.classList.contains("light-theme");

    const country = language === "PL" ? "pl" : "uk";
    const outline = isLight ? "black" : "white";

    langIcon.src = `assets/icons/${country}_${outline}_icon.svg`;
}

function changeIcon() {
    const isLight = document.body.classList.toggle("light-theme");

    const animation = isLight
        ? "sun_to_moon_white_icon.gif"
        : "moon_to_sun_white_icon.gif";

    themeIcon.src = `assets/icons/${animation}?v=${Date.now()}`;

    updateFlag();
}


function startGitHubGif() {
    githubIcon.src = `assets/icons/github_white_icon.gif?v=${Date.now()}`;
}


function stopGitHubGif() {
    githubIcon.src = "assets/icons/github_white_icon.svg";
}

githubContact.addEventListener("mouseenter", function () {
    contactGithubIcon.src = `assets/icons/github_white_icon.gif?v=${Date.now()}`;
});

githubContact.addEventListener("mouseleave", function () {
    contactGithubIcon.src = "assets/icons/github_white_icon.svg";
});

emailContact.addEventListener("mouseenter", function () {
    contactEmailIcon.src = `assets/icons/gmail_white_icon.gif?v=${Date.now()}`;
});

emailContact.addEventListener("mouseleave", function () {
    contactEmailIcon.src = "assets/icons/gmail_white_icon.svg";
});

copyEmailButton.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(emailLabel);
        copyEmailButton.textContent = "Copied!";
        setTimeout(function () {
            copyEmailButton.textContent = emailLabel;
        }, 750);
    } catch {
        alert("Could not copy the email address");
    }
});