const assetsPath = new URL("../assets/", document.currentScript.src).href;
const themeButton = document.getElementById("theme-toggle");

const themeIcon = document.querySelector("#theme-toggle img");
const langIcon = document.querySelector("#language-toggle img");
const githubLink = document.querySelector(".navbar-github");
const githubIcon = githubLink.querySelector("img");
const contactGithubIcon = document.querySelector(".Github-icon");
const contactEmailIcon = document.querySelector(".Gmail-icon");

const copyEmailButton = document.getElementById("copy-email");
const savedLightTheme = document.documentElement.classList.contains("light-theme");

document.body.classList.toggle("light-theme", savedLightTheme);
let startingIcon = "sun_static_white_icon.png";

if (savedLightTheme) startingIcon = "moon_static_white_icon.png";

themeIcon.src = assetsPath + "icons/" + startingIcon;
updateFlag();

themeButton.addEventListener("click", changeIcon);
setupIconAnimation(githubIcon, "github_white_icon", githubLink);

function updateFlag() {
    const language = document.getElementById("lang").textContent.trim();
    const isLight = document.body.classList.contains("light-theme");
    let country = "uk";
    let outline = "white";
    if (language === "PL") country = "pl";
    if (isLight) outline = "black";
    langIcon.src = `${assetsPath}icons/${country}_${outline}_icon.svg`;
}

function changeIcon() {
    const isLight = document.body.classList.toggle("light-theme");
    document.documentElement.classList.toggle("light-theme", isLight);
    let theme = "dark";
    let animation = "moon_to_sun_white_icon.gif";
    if (isLight) {
        theme = "light";
        animation = "sun_to_moon_white_icon.gif";
    }
    savePreference("theme", theme);
    themeIcon.src = `${assetsPath}icons/${animation}?v=${Date.now()}`;
    updateFlag();
}

function setupIconAnimation(icon, name, contact) {
    if (!icon) return;
    if (!contact) contact = icon.closest(".contact-item");
    contact.addEventListener("mouseenter", function () {
        icon.src = assetsPath + "icons/" + name + ".gif?v=" + Date.now();
    });
    contact.addEventListener("mouseleave", function () {
        icon.src = assetsPath + "icons/" + name + ".svg";
    });
}
setupIconAnimation(contactGithubIcon, "github_white_icon");
setupIconAnimation(contactEmailIcon, "gmail_white_icon");

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
    const galleryButtons = document.querySelectorAll(".gallery-stack button");
    for (let i = 0; i < galleryButtons.length; i++) {
        const button = galleryButtons[i];
        button.addEventListener("click", function () {
            const photo = button.querySelector("img");
            galleryPreview.src = photo.src;
            galleryPreview.alt = photo.alt;
            galleryDialog.showModal();
            document.body.classList.add("gallery-open");
        });
    }
    galleryDialog.addEventListener("click", function (event) {
        if (event.target === galleryDialog) galleryDialog.close();
    });
    galleryDialog.addEventListener("close", function () {
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
    function nextCharacterAnimation() {
        currentAnimation++;
        if (currentAnimation === animations.length) currentAnimation = 0;
        playCharacterAnimation();
    }
    characterAnimation.addEventListener("load", function () {
        setTimeout(nextCharacterAnimation, animations[currentAnimation].duration);
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
        for (let i = 0; i < videoTabs.children.length; i++) {
            videoTabs.children[i].setAttribute("aria-pressed", i === currentVideo);
        }
    }
    for (let index = 0; index < recordings.length; index++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "button";
        button.textContent = `#${index + 1} ${recordingTitles[index]}`;
        button.setAttribute("aria-pressed", index === currentVideo);
        button.addEventListener("click", function () {
            selectVideo(index);
        });
        videoTabs.appendChild(button);
    }
    function changeVideo(direction) {
        let index = currentVideo + direction;
        if (index < 0) index = recordings.length - 1;
        if (index >= recordings.length) index = 0;
        selectVideo(index);
    }
    previousVideo.disabled = recordings.length < 2;
    nextVideo.disabled = recordings.length < 2;
    previousVideo.addEventListener("click", function () {
        changeVideo(-1);
    });
    nextVideo.addEventListener("click", function () {
        changeVideo(1);
    });
    shortVideo.addEventListener("ended", function () {
        changeVideo(1);
        shortVideo.play().catch(function () {});
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
            let progress = (time - startTime) / duration;
            if (progress > 1) progress = 1;
            const remaining = 1 - progress;
            window.scrollTo({
                top: startPosition * remaining * remaining * remaining,
                behavior: "instant"
            });
            if (progress < 1) scrollAnimation = requestAnimationFrame(scrollUp);
        }
        scrollAnimation = requestAnimationFrame(scrollUp);
    });
    function stopScrolling() {
        cancelAnimationFrame(scrollAnimation);
    }
    window.addEventListener("wheel", stopScrolling, { passive: true });
    window.addEventListener("touchstart", stopScrolling, { passive: true });
    window.addEventListener("keydown", stopScrolling);
}

const navbarMenuButton = document.querySelector(".navbar-menu-toggle");

if (navbarMenuButton) {
    const navbar = navbarMenuButton.closest(".navbar");
    navbar.classList.add("menu-ready");
    function setMenuOpen(open) {
        navbar.classList.toggle("menu-open", open);
        navbarMenuButton.setAttribute("aria-expanded", String(open));
        if (open) {
            navbarMenuButton.textContent = "Menu ▴";
        } else {
            navbarMenuButton.textContent = "Menu ▾";
        }
    }
    navbarMenuButton.addEventListener("click", function () {
        setMenuOpen(navbarMenuButton.getAttribute("aria-expanded") !== "true");
    });
    navbar.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && navbar.classList.contains("menu-open")) {
            setMenuOpen(false);
            navbarMenuButton.focus();
        }
    });
    navbar.querySelector(".navbar-links").addEventListener("click", function (event) {
        if (event.target.closest("a")) setMenuOpen(false);
    });
}
