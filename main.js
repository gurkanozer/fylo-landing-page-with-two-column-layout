const forms = document.querySelectorAll(".form");

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

forms.forEach(form => {

    form.addEventListener("submit", (e) => {
        const email = form.elements['email'];
        if (!isValidEmail(email.value)) {
            email.classList.add("is-invalid");
            const errField = document.getElementById(`${email.id}Feedback`);
            errField.classList.add("active");
        }
        e.preventDefault();

    });
});