clockDiv = document.querySelector('.clock')

const time = () => {
    const clock = new Date;
    const hour = clock.getHours();
    const min = clock.getMinutes();
    const sec = clock.getSeconds();
    clockDiv.textContent = `${hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};

setInterval(() => {
    time()
}, 1000);