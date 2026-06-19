const revealBtn = document.getElementById("revealBtn");
const initialCard = document.getElementById("initialCard");
const contentCard = document.getElementById("contentCard");
const dayCounter = document.getElementById("dayCounter");
const music = document.getElementById("music");

// Ajuste aqui se quiser deixar a música mais alta ou mais baixa.
// Ex.: 0.15 = baixo, 0.35 = médio, 0.6 = alto
const MUSIC_VOLUME = 0.10;

// Data de início do contador: 18/06/2026
const startDate = new Date("2026-06-18T00:00:00-03:00");

music.volume = MUSIC_VOLUME;

function updateCounter() {
  const now = new Date();
  const diffMs = now - startDate;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  dayCounter.innerHTML = `
    ${days} dias<br>
    ${hours} horas<br>
    ${minutes} minutos<br>
    ${seconds} segundos
  `;
}

updateCounter();
setInterval(updateCounter, 1000);

revealBtn.addEventListener("click", async () => {
  initialCard.style.opacity = "0";

setTimeout(() => {
  initialCard.classList.add("hidden");

  contentCard.classList.remove("hidden");
  contentCard.classList.add("show");
}, 500);

  try {
    await music.play();
  } catch (error) {
    // Alguns navegadores podem bloquear autoplay até a interação do usuário.
    // Como o clique já aconteceu, normalmente o áudio vai tocar.
    console.warn("Não foi possível iniciar a música automaticamente:", error);
  }

  updateCounter();
});