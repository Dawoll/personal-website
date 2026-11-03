const assetsPath = new URL("../assets/", document.currentScript.src).href;

const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-toggle img");

const langIcon = document.querySelector("#language-toggle img");

const githubLink = document.querySelector(".navbar-github");
const githubIcon = githubLink.querySelector("img");

const contactGithubIcon = document.querySelector(".Github-icon");

const contactEmailIcon = document.querySelector(".Gmail-icon");

const copyEmailButton = document.getElementById("copy-email");

document.body.classList.toggle("light-theme", document.documentElement.classList.contains("light-theme"));
themeIcon.src = `${assetsPath}icons/${document.body.classList.contains("light-theme") ? "moon" : "sun"}_static_white_icon.png`;
updateFlag();

themeButton.addEventListener("click", changeIcon);
githubLink.addEventListener("mouseenter", startGitHubGif);
githubLink.addEventListener("mouseleave", stopGitHubGif);




function updateFlag() {
    const language = document.getElementById("lang").textContent.trim();
    const isLight = document.body.classList.contains("light-theme");

    const country = language === "PL" ? "pl" : "uk";
    const outline = isLight ? "black" : "white";

    langIcon.src = `${assetsPath}icons/${country}_${outline}_icon.svg`;
}

function changeIcon() {
    const isLight = document.body.classList.toggle("light-theme");
    document.documentElement.classList.toggle("light-theme", isLight);
    savePreference("theme", isLight ? "light" : "dark");

    const animation = isLight
        ? "sun_to_moon_white_icon.gif"
        : "moon_to_sun_white_icon.gif";

    themeIcon.src = `${assetsPath}icons/${animation}?v=${Date.now()}`;

    updateFlag();
}


function startGitHubGif() {
    githubIcon.src = `${assetsPath}icons/github_white_icon.gif?v=${Date.now()}`;
}


function stopGitHubGif() {
    githubIcon.src = `${assetsPath}icons/github_white_icon.svg`;
}

if (contactGithubIcon) {
    const githubContact = contactGithubIcon.closest(".contact-item");

    githubContact.addEventListener("mouseenter", function () {
        contactGithubIcon.src =
            `${assetsPath}icons/github_white_icon.gif?v=${Date.now()}`;
    });

    githubContact.addEventListener("mouseleave", function () {
        contactGithubIcon.src = `${assetsPath}icons/github_white_icon.svg`;
    });
}

if (contactEmailIcon) {
    const emailContact = contactEmailIcon.closest(".contact-item");

    emailContact.addEventListener("mouseenter", function () {
        contactEmailIcon.src = `${assetsPath}icons/gmail_white_icon.gif?v=${Date.now()}`;
    });

    emailContact.addEventListener("mouseleave", function () {
        contactEmailIcon.src = `${assetsPath}icons/gmail_white_icon.svg`;
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
            copyEmailButton.textContent = copyEmailButton.dataset.copied;
            copyEmailButton.classList.add("copy-confirmed");
            resetEmailTimeout = setTimeout(function () {
                copyEmailButton.textContent = emailLabel;
            }, 1500);
        } catch {
            alert(copyEmailButton.dataset.copyError);
        }
    });

}

const galleryDialog = document.getElementById("gallery-dialog");

if (galleryDialog) {
    const galleryPreview = document.getElementById("gallery-preview");

    document.querySelectorAll(".gallery-stack button").forEach((button) => {
        button.addEventListener("click", () => {
            const photo = button.querySelector("img");
            galleryPreview.src = photo.currentSrc || photo.src;
            galleryPreview.alt = photo.alt;
            galleryDialog.showModal();
            document.body.classList.add("gallery-open");
        });
    });

    galleryDialog.addEventListener("click", (event) => {
        if (event.target === galleryDialog) galleryDialog.close();
    });

    galleryDialog.addEventListener("close", () => {
        document.body.classList.remove("gallery-open");
    });
}

const characterAnimation = document.getElementById("character-animation");

if (characterAnimation) {
    const characterAnimationLabel = document.getElementById("character-animation-label");
    const animationLabels = characterAnimationLabel.dataset.labels.split("|");
    const animations = [
        { file: "game_character_idle.gif", duration: 2200 },
        { file: "game_character_run_up.gif", duration: 1260 },
        { file: "game_character_run_left.gif", duration: 990 },
        { file: "game_character_run_right.gif", duration: 990 },
        { file: "game_character_run_down.gif", duration: 1440 },
        { file: "game_character_attack_knife.gif", duration: 1350 }
    ];
    let currentAnimation = 0;

    function playCharacterAnimation() {
        characterAnimationLabel.textContent = animationLabels[currentAnimation];
        characterAnimation.src = `${assetsPath}game_gifs/${animations[currentAnimation].file}?v=${Date.now()}`;
    }

    characterAnimation.addEventListener("load", () => {
        setTimeout(() => {
            currentAnimation = (currentAnimation + 1) % animations.length;
            playCharacterAnimation();
        }, animations[currentAnimation].duration);
    });

    playCharacterAnimation();
}

const shortVideo = document.getElementById("short-video");

if (shortVideo) {
    const recordings = [
        `${assetsPath}videos/yt_video_1.mp4`,
        `${assetsPath}videos/yt_video_2.mp4`,
        `${assetsPath}videos/yt_video_3.mp4`,
        `${assetsPath}videos/yt_video_4.mp4`,
        `${assetsPath}videos/yt_video_5.mp4`,
        `${assetsPath}videos/yt_video_6.mp4`,
        `${assetsPath}videos/yt_video_7.mp4`,
        `${assetsPath}videos/yt_video_8.mp4`,
        `${assetsPath}videos/yt_video_9.mp4`
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
        button.className = "button";
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

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
    let scrollAnimation;

    backToTopButton.addEventListener("click", function () {
        cancelAnimationFrame(scrollAnimation);
        const startPosition = window.scrollY;
        const startTime = performance.now();
        const duration = 1800;

        function scrollUp(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            const easing = 1 - Math.pow(1 - progress, 3);
            window.scrollTo({ top: startPosition * (1 - easing), behavior: "instant" });
            if (progress < 1) scrollAnimation = requestAnimationFrame(scrollUp);
        }

        scrollAnimation = requestAnimationFrame(scrollUp);
    });

    for (const event of ["wheel", "touchstart", "keydown"]) {
        window.addEventListener(event, () => cancelAnimationFrame(scrollAnimation), { passive: true });
    }
}

const navbarMenuButton = document.querySelector(".navbar-menu-toggle");

if (navbarMenuButton) {
    const navbar = navbarMenuButton.closest(".navbar");
    navbar.classList.add("menu-ready");

    function setMenuOpen(open) {
        navbar.classList.toggle("menu-open", open);
        navbarMenuButton.setAttribute("aria-expanded", String(open));
        navbarMenuButton.textContent = open ? "Menu ▴" : "Menu ▾";
    }

    navbarMenuButton.addEventListener("click", () => {
        setMenuOpen(navbarMenuButton.getAttribute("aria-expanded") !== "true");
    });

    navbar.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navbar.classList.contains("menu-open")) {
            setMenuOpen(false);
            navbarMenuButton.focus();
        }
    });

    navbar.querySelector(".navbar-links").addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenuOpen(false);
    });
}
