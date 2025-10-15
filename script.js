const quizForm = document.getElementById("quizForm");
const mugContainer = document.getElementById("mug-container");
const mug = document.getElementById("mug");
const emojiText = document.getElementById("emojiText");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");

const emojis = {
  katt: "🐱",
  hund: "🐶",
  häst: "🐴",
  fisk: "🐟",
  fågel: "🐦",
  bläckfisk: "🐙",
  solros: "🌸",
  tulpaner: "🌷",
  vallmo: "🌸",
  ros: "🌹",
  blåsippor: "🌸",
  "dont forget me": "🌸",
  steak: "🥩",
  pommes: "🍟",
  köttbullar: "🍝",
  pata: "🍽️",
  schoklad: "🍫",
  kaffe: "☕",
  milkshake: "🥤",
  jordgubbmjölk: "🥛",
  vin: "🍷",
  öl: "🍺",
  fiol: "🎻",
  saxofon: "🎷",
  piano: "🎹",
  gitarr: "🎸",
  trummor: "🥁",
  triangel: "🔺",
  glass: "🍦",
  kanelbullar: "🥐",
  "kokos bollar": "🍪",
  godis: "🍬",
  "gott och blandat": "🍭",
  kladdkaka: "🍰",
};

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const color = document.getElementById("color").value;
  const selections = [
    "animal",
    "flower",
    "food",
    "drink",
    "instrument",
    "sweet",
  ].map((id) => document.getElementById(id).value);

  mug.style.background = color;
  mug.innerHTML = "☕";
  emojiText.innerHTML = selections
    .map((s) => emojis[s] || "🌸")
    .join(" ");

  quizForm.classList.add("hidden");
  mugContainer.classList.remove("hidden");
});

resetBtn.addEventListener("click", () => {
  quizForm.classList.remove("hidden");
  mugContainer.classList.add("hidden");
});

downloadBtn.addEventListener("click", async () => {
  const canvas = await html2canvas(mugContainer);
  const link = document.createElement("a");
  link.download = "min_mugg.png";
  link.href = canvas.toDataURL();
  link.click();
});
