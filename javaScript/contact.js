const web3FormsAccessKey = "1824ff46-aa33-4a85-b1d5-191e0d14e452";
const gameContactForm = document.getElementById("game-contact-form");

if (gameContactForm) {
    const category = gameContactForm.elements.category;
    const customSubject = gameContactForm.elements.custom_subject;
    const message = gameContactForm.elements.message;
    const status = document.getElementById("contact-status");
    const submitButton = gameContactForm.querySelector('button[type="submit"]');

    function updateSubject() {
        const isOther = category.value === "other";
        customSubject.closest(".form-field").hidden = !isOther;
        customSubject.disabled = !isOther;
        customSubject.required = isOther;
        customSubject.setCustomValidity("");
    }

    category.addEventListener("change", updateSubject);
    customSubject.addEventListener("input", () => customSubject.setCustomValidity(""));
    message.addEventListener("input", () => message.setCustomValidity(""));
    updateSubject();

    if (web3FormsAccessKey) {
        submitButton.disabled = false;
    } else {
        status.textContent = gameContactForm.dataset.unavailable;
    }

    gameContactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!web3FormsAccessKey || submitButton.disabled) return;

        message.setCustomValidity(message.value.trim().length < 10 ? gameContactForm.dataset.shortMessage : "");
        customSubject.setCustomValidity(category.value === "other" && customSubject.value.trim().length < 3 ? gameContactForm.dataset.shortSubject : "");
        if (!gameContactForm.reportValidity() || gameContactForm.elements.botcheck.checked) return;

        const data = Object.fromEntries(new FormData(gameContactForm));
        data.access_key = web3FormsAccessKey;
        data.subject = `My game — ${category.value === "other" ? customSubject.value.trim() : category.selectedOptions[0].textContent}`;
        data.category = category.selectedOptions[0].textContent;
        data.message = message.value.trim();
        if (!data.email) delete data.email;
        delete data.custom_subject;

        submitButton.disabled = true;
        gameContactForm.setAttribute("aria-busy", "true");
        status.textContent = gameContactForm.dataset.sending;

        try {
            const response = await fetch(gameContactForm.action, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data),
                signal: AbortSignal.timeout(20000)
            });
            const result = await response.json();
            if (!response.ok || !result.success) throw new Error();
            status.textContent = gameContactForm.dataset.success;
            gameContactForm.reset();
            updateSubject();
        } catch {
            status.textContent = gameContactForm.dataset.error;
        } finally {
            submitButton.disabled = false;
            gameContactForm.removeAttribute("aria-busy");
        }
    });
}
