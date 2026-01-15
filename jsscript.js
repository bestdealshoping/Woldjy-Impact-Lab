// ------------------------------
// SCROLL SMOOTH POUR LES LIENS INTERNE
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ------------------------------
// ANIMATION AU DÉFILEMENT (fade-in)
// ------------------------------
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ------------------------------
// ANIMATION DES CARTES AU HOVER
// ------------------------------
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 15px 25px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 6px 15px rgba(0,0,0,0.05)';
  });
});

// ------------------------------
// BOUTONS CTA EFFECT HOVER
// ------------------------------
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});
function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text =
    "Bonjour, je vous contacte depuis le site Woldjy Impact Lab.%0A" +
    "Nom: " + name + "%0A" +
    "Email: " + email + "%0A" +
    "Message: " + message;

  window.location.href = "https://wa.me/50942824391?text=" + encodeURIComponent(text);}
  

// ------------------------------
// MESSAGE FORMULAIRE SUBMISSION (OPTIONNEL)
// ------------------------------
// Ici, tu peux ajouter des alertes JS ou intégration AJAX
