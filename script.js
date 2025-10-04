// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const navbarContainer = document.getElementById('navbar-container');
const menuDesktop = document.getElementById('menu-desktop'); 

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-red/40', 'backdrop-blur-xl', 'shadow-md');
      navbarContainer.classList.remove('py-8', 'px-12');
      navbarContainer.classList.add('py-2', 'px-6');
      menuDesktop.classList.remove('text-gray-200');
      menuDesktop.classList.add('text-gray-800');
    } else {
      navbar.classList.remove('bg-white/40', 'backdrop-blur-xl', 'shadow-md');
      navbarContainer.classList.add('py-8', 'px-12');
      navbarContainer.classList.remove('py-2', 'px-6');
      menuDesktop.classList.add('text-gray-200');
      menuDesktop.classList.remove('text-gray-800');
    }
  });



// mengetik
document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.getElementById("typedText");
  const textArray = [
    "Cikruh Viral",
    "Basreng Remuk",
    
  ];
  let arrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[arrayIndex].length) {
      typedText.textContent += textArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      setTimeout(erase, 3000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      arrayIndex = (arrayIndex + 1) % textArray.length;
      setTimeout(type, 500);
    }
  }

  type();
});



// script.js — Countdown Promo (perbaikan)
document.addEventListener('DOMContentLoaded', () => {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  // elemen wrapper dan CTA (opsional)
  const countdownWrap = document.getElementById('countdown'); // wrapper yang berisi angka
  const promoSection = document.getElementById('promo'); // section promo
  const promoCta = promoSection ? promoSection.querySelector('a') : null; // pilih tombol/link pertama di promo

  // jika elemen angka tidak ada, hentikan dan beri peringatan
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    console.warn('Countdown elements (days/hours/minutes/seconds) tidak ditemukan di DOM.');
    return;
  }

  // ===== set deadline =====
  // Opsi: 3 hari dari sekarang, berakhir pada jam 23:59:59
  const promoDeadline = new Date();
  promoDeadline.setDate(promoDeadline.getDate() + 1);
  promoDeadline.setHours(23, 59, 59, 999);
  const endTime = promoDeadline.getTime();

  // helper pad 2 digit
  const pad = (n) => String(n).padStart(2, '0');

  let intervalId = null;

  function updateCountdown() {
    const now = Date.now();
    const distance = endTime - now;

    if (distance <= 0) {
      // promo berakhir
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';

      // tampilkan pesan di wrapper (opsional)
      if (countdownWrap) {
        countdownWrap.innerHTML = "<div class='text-xl font-bold text-white'>Promo sudah berakhir 😢</div>";
      }

      // disable CTA (opsional)
      if (promoCta) {
        promoCta.classList.add('opacity-50', 'pointer-events-none');
        promoCta.setAttribute('aria-disabled', 'true');
        try { promoCta.textContent = 'Promo Berakhir'; } catch(e) {}
      }

      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  // start
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});


// testimoni slider
 const slider = document.getElementById('testimonialSlider');
  const slides = slider.children;
  let index = 0;

  function showNextSlide() {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // 3 detik ganti slide



// FAQ Toggle Fix
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const symbol = btn.querySelector('span');

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        symbol.textContent = '–';
      } else {
        content.classList.add('hidden');
        symbol.textContent = '+';
      }
    });
  });
});

