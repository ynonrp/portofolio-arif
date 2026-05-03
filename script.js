// Lightbox — klik gambar untuk memperbesar
document.querySelectorAll('.card-img img').forEach(function (img) {
  img.addEventListener('click', function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = this.src;
    lightbox.classList.add('active');
  });
});

// Tutup lightbox
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Tutup dengan tombol Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});