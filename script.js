var animation = lottie.loadAnimation({
    container: document.getElementById('lottie'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://lottie.host/55c0c180-d778-4d34-954c-9038666cfb03/PQps4I3FYk.json' // the path to the animation JSON
});

animation.addEventListener('complete', function() {
    // Tạo một trang HTML mới
    var newPage = window.open("", "_self");
    // Đặt URL của trang mới
    newPage.document.location.href = "home.html";
});
