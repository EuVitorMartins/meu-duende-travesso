// Adicione videos/descoberta.mp4 para ativar o player automaticamente.
const video = document.querySelector("#demo-video");
const photo = document.querySelector("#demo-photo");
const title = document.querySelector("#demo-title");
function showVideo(available) {
  video.hidden = !available;
  photo.hidden = available;
  title.textContent = available ? "Dá o play e acompanha a descoberta" : "Uma manhã de descoberta";
}
video.addEventListener("loadedmetadata", () => showVideo(true));
video.addEventListener("error", () => showVideo(false));
video.src = "videos/descoberta.mp4";
