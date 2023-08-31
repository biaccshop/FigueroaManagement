// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });

    const answer = faqQuestion.nextElementSibling;
    answer.classList.toggle("active");
    faqQuestion.classList.toggle("active");
  });
});

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};

// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 1500,
  delay: 150
});

ScrollReveal().reveal('.header .logo', { origin: 'left' });
ScrollReveal().reveal('.hero #first', { origin: 'top', distance: '50px' });
ScrollReveal().reveal('.hero .hero-buttons', { origin: 'bottom', distance: '50px' });

ScrollReveal().reveal('.features .features-title h3', { origin: 'top', distance: '100px' });
ScrollReveal().reveal('.features .item-card', { origin: 'bottom', distance: '200px' });

ScrollReveal().reveal('.results .results-image img', { origin: 'left', distance: '100px' });
ScrollReveal().reveal('.results .results-content', { origin: 'right', distance: '100px' });

ScrollReveal().reveal('.formula .formula-content', { origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.formula .formula-testimonial .testimonial-image img', { origin: 'top', distance: '100px', duration: '4500' });

ScrollReveal().reveal('.faq .faq-content h2', { origin: 'left' });
ScrollReveal().reveal('.faq .faq-content h3', { origin: 'left' });
ScrollReveal().reveal('.faq .faq-content .question', { origin: 'left', delay: 700, distance: '100px' });

ScrollReveal().reveal('.goals .goals-content .content-box', { origin: 'right', delay: 700, distance: '100px' });