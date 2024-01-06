document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            const headerOffset = 120;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            });
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById("back-to-top-btn");
    backToTopBtn.addEventListener("click", () => {
        window.scroll({ top: 0, behavior: "smooth" });
    });

    // Show/hide back to top button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Submit contact form using AJAX
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        fetch("contact_form.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            const responseMessage = document.createElement("p");
            responseMessage.textContent = data;
            responseMessage.classList.add("form-response");
            contactForm.appendChild(responseMessage);
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
});
