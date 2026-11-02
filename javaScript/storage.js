function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {}
}

const languageLink = document.getElementById("language-toggle");

try {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    document.body.classList.toggle("light-theme", savedTheme === "light");

    if ((savedLanguage === "pl" || savedLanguage === "en") && savedLanguage !== document.documentElement.lang) {
        window.location.replace(languageLink.href);
    } else {
        savePreference("language", document.documentElement.lang);
    }
} catch {}

languageLink.addEventListener("click", () => {
    savePreference("language", languageLink.hreflang);
});
