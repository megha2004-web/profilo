const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'there';

    formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    contactForm.reset();
  });
}

if (viewResumeBtn) {
  viewResumeBtn.addEventListener('click', () => {
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
  });
}

// Downloads the actual resume file (keep Megha_Resume.docx next to index.html)
if (downloadResumeBtn) {
  downloadResumeBtn.addEventListener('click', () => {
    const anchor = document.createElement('a');
    anchor.href = 'Megha_Resume.docx';
    anchor.download = 'Megha_Desai_Resume.docx';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  });
}
