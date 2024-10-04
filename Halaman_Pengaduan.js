// pengaduan.js

document.getElementById('pengaduanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Display form data for demonstration purposes (you may want to send it to a server instead)
    console.log('Pengaduan submitted:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Show success notification
    showSuccessNotification();

    this.reset();
});

function showSuccessNotification() {
    document.getElementById('success-notification').style.display = 'block';
}

function hideSuccessNotification() {
    document.getElementById('success-notification').style.display = 'none';
    window.location.href = 'Halaman_Beranda.html';
}
