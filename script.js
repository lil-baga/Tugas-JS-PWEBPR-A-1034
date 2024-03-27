var buttons = document.querySelectorAll('button')

document.getElementById('yes').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = 'teknisi.png';
    document.getElementById('pertanyaan').innerText = 'Anda Berbohong!';
    document.getElementById('container-utama').style.backgroundColor = '#E12E2E';
    document.getElementById('text').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('no').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = 'mahasiswa.png';
    document.getElementById('pertanyaan').innerText = 'Anda Benar!';
    document.getElementById('container-utama').style.backgroundColor = '#6FD240';
    document.getElementById('text').innerText = 'Anda adalah seorang Mahasiswa'
});
