var animation = lottie.loadAnimation({
    container: document.getElementById('lottie'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false, // Đặt giá trị này thành false để animation không tự động chạy
    path: 'https://lottie.host/55c0c180-d778-4d34-954c-9038666cfb03/PQps4I3FYk.json' // the path to the animation JSON
});

// Thêm sự kiện click vào thẻ img
document.getElementById('startAnimation').addEventListener('click', function() {
    animation.play(); // Bắt đầu chạy animation khi người dùng nhấp vào thẻ img
});

animation.addEventListener('complete', function() {
    // Chuyển hướng người dùng đến một trang khác sau khi hoàn thành animation
    window.location.href = "home.html";
});
