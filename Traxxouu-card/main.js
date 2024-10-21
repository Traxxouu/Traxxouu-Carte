document.addEventListener("DOMContentLoaded", function () {
    // Add button hover effects
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Add interactive effect to social media icons
    const socialIcons = document.querySelectorAll(".reseau img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "rotate(10deg) scale(1.1)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "rotate(0deg) scale(1)";
        });
    });

    // Add click confirmation for contact button
    const contactButton = document.querySelector("a[href^='mailto']");
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();
        const userConfirmed = confirm("Voulez-vous vraiment envoyer un e-mail à Maël ?");
        if (userConfirmed) {
            window.location.href = contactButton.href;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        "Développement Web (HTML, CSS, JavaScript)",
        "Applications Réactives avec React.js",
        "Optimisation UX/UI",
        "Automatisation avec Python",
        "Responsive Design",
        "Intégration de systèmes d'authentification",
        "Base de données (MySQL)"
    ];

    let skillIndex = 0;
    let charIndex = 0;
    const typedTextElement = document.getElementById("typed-text");
    const cursorElement = document.getElementById("cursor");

    function type() {
        if (charIndex < skills[skillIndex].length) {
            typedTextElement.textContent += skills[skillIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); 
        } else {
            setTimeout(erase, 2000); 
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = skills[skillIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); 
        } else {
            skillIndex = (skillIndex + 1) % skills.length;
            setTimeout(type, 500);
        }
    }

    setTimeout(type, 1000); 
});