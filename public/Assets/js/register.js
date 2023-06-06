const $ = document;

const btn_sendCode = $.querySelector('#btn_sendCode');
const allContent = $.querySelectorAll('.tab_content');
let counter;
let timer;

const showBoxOTPCode = (e) => {
    e.preventDefault();
    
    const mainContentID = e.target.dataset.id;
    const findMainContent = $.querySelector(`#${mainContentID}`);
    
    btn_sendCode.setAttribute('disabled', '');
    
    allContent.forEach(content => content.classList.remove('d-block'));
    
    findMainContent.classList.add('d-block');
};

const startTimer = (second) => {
    counter = parseInt(second);
    timer = setInterval("tick()", 1000);
}

const tick = () => {
    let second = counter;
    if (second > 0) {
        counter--;
    } else {
        clearInterval(timer);
    }

    let mins = Math.floor(second / 60);
    second %= 60;

    const newTime = (mins < 10 ? "0" : "") + mins + ":" + (second < 10 ? "0" : "") + second;

    document.querySelector("#countdown").innerHTML = newTime;
}

startTimer(1 * 75); // 01:14 minutes in seconds
    
btn_sendCode.addEventListener('click', (e) => showBoxOTPCode(e));