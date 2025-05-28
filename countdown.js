/ js/countdown.js
const targetDate = new Date("June 20, 2026 14:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
const now = new Date().getTime();
const diff = targetDate - now;
if (diff < 0) {
countdownEl.innerHTML = "The wedding is happening!";
return;
}
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);
countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
