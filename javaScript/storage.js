function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {}
}

try {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    document.documentElement.classList.toggle("light-theme", savedTheme === "light");

    if ((savedLanguage === "pl" || savedLanguage === "en") && savedLanguage !== document.documentElement.lang) {
        const languagePage = document.querySelector(`link[rel="alternate"][hreflang="${savedLanguage}"]`);
        if (languagePage) window.location.replace(languagePage.href);
    } else {
        savePreference("language", document.documentElement.lang);
    }
} catch {}

document.addEventListener("click", function (event) {
    const languageLink = event.target.closest("#language-toggle");
    if (languageLink) savePreference("language", languageLink.hreflang);
});
