// Efek scroll smooth
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi scroll muncul
const items = document.querySelectorAll('.about-item, .portfolio-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

items.forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
});

// --------------------------
// Data untuk about section
// --------------------------
const aboutItems = document.querySelectorAll('.about-item');

// Teks awal
const defaultTexts = [
    "Full Name",
    "Education",
    "Pekerjaan",
    "Contact",
    "Hobi",
    "Alamat"
];

// Teks detail
const detailTexts = [
    "Fachry Ginanjar Wirakusumah",
    "S1 Desain Komunikasi Visual",
    "Desain Grafis",
    "+62-895-*67*-****",
    "Membaca Buku",
    "Jl. Contoh No. 123, Bandung"
];

// Tambahkan interaksi klik
aboutItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Tambah animasi fade
        item.classList.add('fade');
        
        setTimeout(() => {
            // Cek apakah teksnya default atau detail
            if (item.textContent === defaultTexts[index]) {
                item.textContent = detailTexts[index];
            } else {
                item.textContent = defaultTexts[index];
            }
            item.classList.remove('fade');
        }, 300); // waktu fade
    });
});

// Lightbox: ambil semua gambar di portfolio
const portfolioImages = document.querySelectorAll('.portfolio-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

portfolioImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // tampilkan modal
        lightboxImg.src = img.src; // ambil gambar yang diklik
    });
});

// Tutup lightbox saat klik tombol close
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Tutup saat klik di luar gambar
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
