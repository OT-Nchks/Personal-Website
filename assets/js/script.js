//SHOW TIME
function updateTime() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');
    const currentTimeUTC1 = document.getElementById('currentTimeUTC1');
    const currentDay1 = document.getElementById('currentDay1');
    
    const now = new Date();
    const WATOffset = 1; 
    const WATTime = new Date(now.setHours(now.getUTCHours() + WATOffset));

    const hours = WATTime.getHours().toString().padStart(2, '0');
    const minutes = WATTime.getMinutes().toString().padStart(2, '0');
    const seconds = WATTime.getSeconds().toString().padStart(2, '0');

    currentTimeUTC.textContent = `${hours}:${minutes}:${seconds}`;
    currentTimeUTC1.textContent = `${hours}:${minutes}:${seconds}`;
    currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    currentDay1.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}
updateTime();



//NAVBAR
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});

