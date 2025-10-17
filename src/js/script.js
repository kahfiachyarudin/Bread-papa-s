const buttonHumberger = document.getElementById("button-humberger");
const buttonClose = document.getElementById("button-close");
const nav = document.getElementById("nav");
const header = document.getElementById("siteHeader");
const buttonDark = document.getElementById("button-dark");
const html = document.querySelector("html");
const splash = document.getElementById("splash");
const batalkan = document.querySelectorAll("#batalkan");

// === Hamburger ===
buttonHumberger.addEventListener("click", () => {
  nav.classList.remove("-translate-y-full");
});

buttonClose.addEventListener("click", () => {
  nav.classList.add("-translate-y-full");
});

batalkan.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.add("-translate-y-full");
  });
});

// === Splash Intro ===
if (splash) {
  setTimeout(() => {
    splash.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => splash.style.display = "none", 500);
  }, 2000); // 2 detik logo tampil
}

// === Header muncul setelah scroll ===
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("-translate-y-full");
    header.classList.add("translate-y-0");
  } else {
    header.classList.add("-translate-y-full");
    header.classList.remove("translate-y-0");
  }
});


// === Darkmode ===
buttonDark.addEventListener('click', () => {
  if(html.classList.contains('dark')) {
     html.classList.remove('dark');
     localStorage.setItem('theme', 'light');
     buttonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round"
       class="icon icon-tabler icons-tabler-outline icon-tabler-moon">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446
       a9 9 0 1 1 -8.313 -12.454z" />
     </svg>`;
  } else {
   html.classList.add('dark');
   localStorage.setItem('theme', 'dark');
   buttonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-sun">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
     <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1
     m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7
     m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
   </svg>`;
  }
});

// === Darkmode load state ===
if(localStorage.theme === 'dark' || (!('theme' in localStorage) &&
   window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   html.classList.add('dark');
   buttonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-sun">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
     <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1
     m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7
     m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
   </svg>`;
}else{
   html.classList.remove('dark');
   buttonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-moon">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446
     a9 9 0 1 1 -8.313 -12.454z" />
   </svg>`;
}

















// testing

 // --- Elemen Global ---
const orderButtonContainers = document.querySelectorAll('#btn-order'); // ambil semua tombol dengan id sama
const orderFormSection = document.getElementById('order-form');
const closeButton = document.getElementById('closeFormButton');
const orderForm = document.getElementById('orderForm');
const feedbackElement = document.getElementById('feedback');

// **Elemen Konten Modal** untuk animasi scale
const modalContent = orderFormSection.querySelector('.w-full.max-w-lg');

// Nomor WhatsApp tujuan
const whatsappNumber = "6281234567890";

// --- Fungsi Modal ---
function showModal() {
  orderFormSection.classList.remove('hidden');

  setTimeout(() => {
    orderFormSection.classList.remove('opacity-0');
    orderFormSection.classList.add('opacity-100');

    if (modalContent) {
      modalContent.classList.remove('scale-95');
      modalContent.classList.add('scale-100');
    }
  }, 10);

  orderForm.reset();
  feedbackElement.classList.add('hidden');
}

function hideModal() {
  orderFormSection.classList.remove('opacity-100');
  orderFormSection.classList.add('opacity-0');

  if (modalContent) {
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
  }

  setTimeout(() => {
    orderFormSection.classList.add('hidden');
  }, 300);
}

// --- Fungsi WhatsApp Order ---
function handleWhatsAppOrder(event) {
  event.preventDefault();
  feedbackElement.classList.add('hidden');

  const nama = document.getElementById('nama').value.trim();
  const alamat = document.getElementById('alamat').value.trim();
  const produk = document.getElementById('produk').value.trim();
  const jumlah = document.getElementById('jumlah').value.trim();

  if (!nama || !alamat || !produk || !jumlah || produk === "") {
    feedbackElement.textContent = "Mohon lengkapi semua data formulir.";
    feedbackElement.classList.remove('hidden');
    return;
  }

  const message = `
Halo Bread Papa's! Saya ingin memesan. Berikut detailnya:

*Nama Pelanggan:* ${nama}
*Alamat Pengiriman:* ${alamat}

*Detail Pesanan:*
- Produk: ${produk}
- Jumlah: ${jumlah}

Mohon konfirmasi total harga dan proses selanjutnya. Terima kasih!
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(waLink, '_blank');
  hideModal();
}

// --- Event Listeners ---

// 1. Semua Tombol Order -> Tampilkan Modal
orderButtonContainers.forEach(button => {
  button.addEventListener('click', showModal);
});

// 2. Tombol Tutup (X) -> Sembunyikan Modal
closeButton.addEventListener('click', hideModal);

// 3. Form Submit -> Kirim ke WA dan Sembunyikan Modal
orderForm.addEventListener('submit', handleWhatsAppOrder);

// 4. Klik di luar form -> Tutup Modal
orderFormSection.addEventListener('click', (event) => {
  if (event.target === orderFormSection) hideModal();
});

// 5. Tekan ESC -> Tutup Modal
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !orderFormSection.classList.contains('hidden')) hideModal();
});

// --- Elemen Global ---
const contactUsButtons = document.querySelectorAll('#btn-contact'); // tombol untuk buka modal contact
const contactUsSection = document.getElementById('contact-form');
const contactUsCloseBtn = document.getElementById('closeContactButton');
const contactUsForm = document.getElementById('contactForm');
const contactUsFeedback = document.getElementById('feedback');

// Elemen animasi scale
const contactUsModal = contactUsSection.querySelector('.w-full.max-w-lg');

// Nomor WhatsApp tujuan
const contactWaNumber = "6281234567890";

// --- Fungsi Modal ---
function openContactUsModal() {
  contactUsSection.classList.remove('hidden');
  setTimeout(() => {
    contactUsSection.classList.remove('opacity-0');
    contactUsSection.classList.add('opacity-100');
    contactUsModal.classList.remove('scale-95');
    contactUsModal.classList.add('scale-100');
  }, 10);
  contactUsForm.reset();
  contactUsFeedback.classList.add('hidden');
}

function closeContactUsModal() {
  contactUsSection.classList.remove('opacity-100');
  contactUsSection.classList.add('opacity-0');
  contactUsModal.classList.remove('scale-100');
  contactUsModal.classList.add('scale-95');
  setTimeout(() => contactUsSection.classList.add('hidden'), 300);
}

// --- Fungsi Kirim WhatsApp ---
function sendContactUsMessage(event) {
  event.preventDefault();
  contactUsFeedback.classList.add('hidden');

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !email || !pesan) {
    contactUsFeedback.textContent = "Mohon lengkapi semua data formulir.";
    contactUsFeedback.classList.remove('hidden');
    return;
  }

  const message = `
Halo Bread Papa's 👋
Saya ingin menyampaikan pesan berikut:

*Nama:* ${nama}
*Email:* ${email}

*Pesan:*
${pesan}

Terima kasih atas perhatian Anda!
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${contactWaNumber}?text=${encodedMessage}`;
  window.open(waLink, '_blank');
  closeContactUsModal();
}

// --- Event Listeners ---
contactUsButtons.forEach(btn => btn.addEventListener('click', openContactUsModal));
contactUsCloseBtn.addEventListener('click', closeContactUsModal);
contactUsForm.addEventListener('submit', sendContactUsMessage);
contactUsSection.addEventListener('click', e => { 
  if (e.target === contactUsSection) closeContactUsModal(); 
});
document.addEventListener('keydown', e => { 
  if (e.key === 'Escape' && !contactUsSection.classList.contains('hidden')) closeContactUsModal(); 
});



const buttonFbs = document.querySelectorAll('#button-fb');

buttonFbs.forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://www.facebook.com/breadpapas', '_blank');
  });
});

const buttonWas = document.querySelectorAll('#button-wa');
const whatsappLink = 'https://wa.me/6281234567890';
buttonWas.forEach(button => {
  button.addEventListener('click', () => {
    window.open(whatsappLink, '_blank');
  });
});

const buttonIgs = document.querySelectorAll('#button-ig');
buttonIgs.forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://www.instagram.com/breadpapas', '_blank');
  });
});

const modal = document.getElementById('modal');
  const open = document.getElementById('knowMoreBtn');
  const close = document.getElementById('closeModal');

  open.onclick = () => modal.classList.remove('hidden');
  close.onclick = () => modal.classList.add('hidden');


   const slider = document.getElementById('slider');
      const dots = document.querySelectorAll('.dot');
      let index = 0;

      function showSlide(i) {
        index = i;
        slider.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach((dot, idx) => {
          dot.classList.toggle('opacity-100', idx === i);
          dot.classList.toggle('opacity-60', idx !== i);
        });
      }

      dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(dot.dataset.index));
      });

      setInterval(() => {
        index = (index + 1) % 3;
        showSlide(index);
      }, 4000);

      showSlide(0);