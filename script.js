document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // MOBILE MENU
    // ==============================

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });

        // Close menu after clicking a link
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });
    }


    // ==============================
    // CONTACT FORM
    // ==============================

    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                showMessage(
                    contactMessage,
                    "Please fill in all required fields.",
                    "error"
                );
                return;
            }

            const inquiry = {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
                date: new Date().toLocaleString()
            };

            // Save the enquiry in the visitor's browser
            const inquiries =
                JSON.parse(localStorage.getItem("drimoriaInquiries")) || [];

            inquiries.push(inquiry);

            localStorage.setItem(
                "drimoriaInquiries",
                JSON.stringify(inquiries)
            );

            showMessage(
                contactMessage,
                "Thank you for contacting DRIMORIA. Your message has been recorded.",
                "success"
            );

            contactForm.reset();
        });
    }


    // ==============================
    // HELPER FOR FORM MESSAGES
    // ==============================

    function showMessage(element, message, type) {
        if (!element) return;

        element.textContent = message;
        element.className = "form-message " + type;

        setTimeout(function () {
            element.textContent = "";
            element.className = "form-message";
        }, 6000);
    }


    // ==============================
    // SMOOTH SCROLLING
    // ==============================

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // ==============================
    // CURRENT YEAR
    // ==============================

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

});
