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
    customSubject.addEventListener("input", function () {
        customSubject.setCustomValidity("");
    });
    message.addEventListener("input", function () {
        message.setCustomValidity("");
    });
    updateSubject();

    if (web3FormsAccessKey) {
        submitButton.disabled = false;
    } else {
        status.textContent = gameContactForm.dataset.unavailable;
    }

    gameContactForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        if (!web3FormsAccessKey || submitButton.disabled) return;

        message.setCustomValidity("");
        customSubject.setCustomValidity("");
        if (message.value.trim().length < 10) {
            message.setCustomValidity(gameContactForm.dataset.shortMessage);
        }
        if (category.value === "other" && customSubject.value.trim().length < 3) {
            customSubject.setCustomValidity(gameContactForm.dataset.shortSubject);
        }
        if (!gameContactForm.reportValidity() || gameContactForm.elements.botcheck.checked) return;

        const categoryName = category.options[category.selectedIndex].textContent;
        let subject = categoryName;
        if (category.value === "other") subject = customSubject.value.trim();
        const data = {
            access_key: web3FormsAccessKey,
            name: gameContactForm.elements.name.value,
            subject: "My game — " + subject,
            category: categoryName,
            message: message.value.trim()
        };
        if (gameContactForm.elements.email.value) {
            data.email = gameContactForm.elements.email.value;
        }

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
