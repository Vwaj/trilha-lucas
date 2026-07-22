/* ============================================================
   sounds.js — Trilha sonora e efeitos sonoros sintetizados
   Tudo gerado por código via Web Audio API — sem arquivos de
   áudio externos, sem dependências, sem risco de direito autoral.
   ============================================================ */

let audioCtx = null;
let audioEnabled = true; // controla música + efeitos juntos
let musicPlaying = false;
let musicTimer = null;
let musicStep = 0;

const AUDIO_PREF_KEY = "estudapp_audio_v1";

function loadAudioPref() {
  try {
    const raw = localStorage.getItem(AUDIO_PREF_KEY);
    if (raw !== null) audioEnabled = JSON.parse(raw);
  } catch (e) { /* mantém padrão */ }
}
function saveAudioPref() {
  try { localStorage.setItem(AUDIO_PREF_KEY, JSON.stringify(audioEnabled)); } catch (e) {}
}
loadAudioPref();

function ensureAudioCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
}

/* toca uma nota simples com envelope (ataque rápido, decaimento suave) */
function playTone(freq, startTime, duration, type = "square", gain = 0.12) {
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, startTime);
  g.gain.linearRampToValueAtTime(gain, startTime + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(g).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.03);
}

/* ---------------- efeitos sonoros ---------------- */
function sfxCorrect() {
  if (!audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  playTone(523.25, t, 0.12, "square", 0.11);       // C5
  playTone(659.25, t + 0.09, 0.12, "square", 0.11); // E5
  playTone(783.99, t + 0.18, 0.20, "square", 0.13); // G5
}

function sfxWrong() {
  if (!audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  playTone(220.0, t, 0.16, "sawtooth", 0.09);
  playTone(174.61, t + 0.13, 0.24, "sawtooth", 0.09);
}

function sfxLevelUp() {
  if (!audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => playTone(f, t + i * 0.1, 0.18, "square", 0.13));
}

function sfxComplete() {
  if (!audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  const t = ctx.currentTime;
  [392.0, 523.25, 659.25].forEach((f, i) => playTone(f, t + i * 0.13, 0.22, "triangle", 0.12));
}

function sfxTap() {
  if (!audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  playTone(880, ctx.currentTime, 0.05, "sine", 0.05);
}

/* ---------------- trilha de fundo (loop calmo em arpejo) ---------------- */
const MUSIC_PATTERN = [261.63, 329.63, 392.0, 329.63, 293.66, 349.23, 440.0, 349.23];
const STEP_SECONDS = 0.46;

function scheduleMusicStep() {
  if (!musicPlaying) return;
  const ctx = ensureAudioCtx();
  if (ctx) {
    const freq = MUSIC_PATTERN[musicStep % MUSIC_PATTERN.length];
    playTone(freq, ctx.currentTime, STEP_SECONDS * 0.85, "triangle", 0.035);
  }
  musicStep++;
  musicTimer = setTimeout(scheduleMusicStep, STEP_SECONDS * 1000);
}

function startMusic() {
  if (musicPlaying || !audioEnabled) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  musicPlaying = true;
  musicStep = 0;
  scheduleMusicStep();
}

function stopMusic() {
  musicPlaying = false;
  clearTimeout(musicTimer);
}

function toggleAudio() {
  audioEnabled = !audioEnabled;
  saveAudioPref();
  if (audioEnabled) startMusic();
  else stopMusic();
  return audioEnabled;
}

/* inicia áudio no primeiro toque do usuário (política de autoplay dos navegadores) */
function initAudioOnFirstGesture() {
  const start = () => {
    ensureAudioCtx();
    if (audioEnabled) startMusic();
    document.removeEventListener("pointerdown", start);
  };
  document.addEventListener("pointerdown", start, { once: true });
}
initAudioOnFirstGesture();

/* pausa a música quando o app vai pra segundo plano (economiza bateria) */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopMusic();
  else if (audioEnabled) startMusic();
});
