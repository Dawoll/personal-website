const themeButton = document.querySelector("#theme-toggle");
const langButton  = document.querySelector("#language-toggle");

const themeIcon = document.querySelector("#theme-toggle img");
const langIcon = document.querySelector("#language-toggle img");

const githubLink = document.querySelector(".navbar-github");
const githubIcon = githubLink.querySelector("img");

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

