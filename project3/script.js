const clock = document.getElementById('clock')

setInterval(function () {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);