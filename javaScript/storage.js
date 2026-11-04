function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {}
}

try {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    document.documentElement.classList.toggle("light-theme", savedTheme === "light");

    const currentLanguage = document.documentElement.lang;
    const languageIsSupported = savedLanguage === "pl" || savedLanguage === "en";
    const languageIsDifferent = savedLanguage !== currentLanguage;

    if (languageIsSupported && languageIsDifferent) {
        const languagePage = document.querySelector('link[rel="alternate"][hreflang="' + savedLanguage + '"]');
        if (languagePage) {
            window.location.replace(languagePage.href);
        }
    } else {
        savePreference("language", document.documentElement.lang);
    }
} catch {}

document.addEventListener("click", function (event) {
    const languageLink = event.target.closest("#language-toggle");
    if (languageLink) {
        savePreference("language", languageLink.hreflang);
    }
});
