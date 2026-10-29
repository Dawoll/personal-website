const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-toggle img");

const langButton  = document.querySelector("#language-toggle");
const langIcon = document.querySelector("#language-toggle img");

const githubLink = document.querySelector(".navbar-github");
const githubIcon = githubLink.querySelector("img");

const contactGithubIcon = document.querySelector(".Github-icon");

const contactEmailIcon = document.querySelector(".Gmail-icon");

const copyEmailButton = document.getElementById("copy-email");


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

if (contactGithubIcon) {
    const githubContact = contactGithubIcon.closest(".contact-item");

    githubContact.addEventListener("mouseenter", function () {
        contactGithubIcon.src =
            `assets/icons/github_white_icon.gif?v=${Date.now()}`;
    });

    githubContact.addEventListener("mouseleave", function () {
        contactGithubIcon.src = "assets/icons/github_white_icon.svg";
    });
}

if (contactEmailIcon) {
    const emailContact = contactEmailIcon.closest(".contact-item");

    emailContact.addEventListener("mouseenter", function () {
        contactEmailIcon.src = `assets/icons/gmail_white_icon.gif?v=${Date.now()}`;
    });

    emailContact.addEventListener("mouseleave", function () {
        contactEmailIcon.src = "assets/icons/gmail_white_icon.svg";
    });
}

if (copyEmailButton) {
    const emailLabel = copyEmailButton.textContent.trim();
    let resetEmailTimeout;

    function resetCopyHint() {
        clearTimeout(resetEmailTimeout);
        copyEmailButton.classList.remove("copy-confirmed");
        copyEmailButton.textContent = emailLabel;
    }

    copyEmailButton.addEventListener("mouseenter", resetCopyHint);
    copyEmailButton.addEventListener("focus", resetCopyHint);

    copyEmailButton.addEventListener("click", async function () {
        try {
            await navigator.clipboard.writeText(emailLabel);
            clearTimeout(resetEmailTimeout);
            copyEmailButton.textContent = "Copied!";
            copyEmailButton.classList.add("copy-confirmed");
            resetEmailTimeout = setTimeout(function () {
                copyEmailButton.textContent = emailLabel;
            }, 1500);
        } catch {
            alert("Could not copy the email address");
        }
    });
}

const shortVideo = document.getElementById("short-video");

if (shortVideo) {
    const recordings = [
        "assets/videos/yt_video_1.mp4",
        "assets/videos/yt_video_2.mp4",
        "assets/videos/yt_video_3.mp4",
        "assets/videos/yt_video_4.mp4",
        "assets/videos/yt_video_5.mp4",
        "assets/videos/yt_video_6.mp4",
        "assets/videos/yt_video_7.mp4",
        "assets/videos/yt_video_8.mp4",
        "assets/videos/yt_video_9.mp4"
    ];
    const recordingTitles = [
        "Mirage Pistol - 3K",
        "Mirage Retake - 4K",
        "Inferno Hold - 4K",
        "Mirage Retake - 3K",
        "Mirage Retake - 3K",
        "Inferno Rotation - 4K",
        "Mirage Hold - 3K",
        "Mirage Pistol - 4K",
        "Inferno Hold - 4K"
    ];
    const videoTabs = document.querySelector(".video-tabs");
    const previousVideo = document.getElementById("previous-video");
    const nextVideo = document.getElementById("next-video");
    let currentVideo = 0;

    function selectVideo(index) {
        if (index === currentVideo) return;
        currentVideo = index;
        shortVideo.pause();
        shortVideo.src = recordings[currentVideo];
        shortVideo.load();

        Array.from(videoTabs.children).forEach((button, buttonIndex) => {
            button.setAttribute("aria-pressed", buttonIndex === currentVideo);
        });
    }

    recordings.forEach((recording, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = `#${index + 1} ${recordingTitles[index]}`;
        button.setAttribute("aria-pressed", index === currentVideo);
        button.addEventListener("click", () => selectVideo(index));
        videoTabs.appendChild(button);
    });

    function changeVideo(direction) {
        selectVideo((currentVideo + direction + recordings.length) % recordings.length);
    }

    previousVideo.disabled = nextVideo.disabled = recordings.length < 2;
    previousVideo.addEventListener("click", () => changeVideo(-1));
    nextVideo.addEventListener("click", () => changeVideo(1));

    shortVideo.addEventListener("ended", () => {
        changeVideo(1);
        shortVideo.play().catch(() => {});
    });
}
