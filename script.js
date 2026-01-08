// Fungsi untuk membuka WhatsApp
function bukaWA() {
    const nomorWA = "628123456789"; // GANTI DENGAN NOMOR WA KAMU
    const pesan = "Halo! Saya baru saja melihat website biodata kamu.";
    const url = "https://wa.me/081362924196" + nomorWA + "?text=" + encodeURIComponent(pesan);
    window.open(url, '_blank');
}

// Fungsi untuk membuka Instagram
function bukaIG() {
    const username = "nama_pengguna_ig"; // GANTI DENGAN USERNAME IG KAMU
    const url = "https://www.instagram.com/san_rmdhnn?igsh=MWd1eTdha3c4cTBzZg%3D%3D&utm_source=qr/" + username;
    window.open(url, '_blank');
}