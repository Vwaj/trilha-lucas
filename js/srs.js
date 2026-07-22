/* ============================================================
   srs.js — Repetição espaçada simplificada (sistema de caixas)
   Caixa 1 = errou recentemente, volta sempre.
   Caixa 2 = acertou uma vez, volta às vezes.
   Caixa 3 = dominado, aparece raramente.
   ============================================================ */

function getBox(state, exerciseId) {
  return state.boxes[exerciseId] || 1;
}

function answerExercise(state, exerciseId, correct) {
  const current = getBox(state, exerciseId);
  if (correct) {
    state.boxes[exerciseId] = Math.min(3, current + 1);
  } else {
    state.boxes[exerciseId] = 1;
  }
  return state;
}

/* Monta uma fila de exercícios para revisão, priorizando caixa 1,
   depois caixa 2, e só raramente caixa 3 (peso menor). */
function buildReviewQueue(state, allExercises, limit = 10) {
  const weighted = [];
  allExercises.forEach((ex) => {
    const box = getBox(state, ex.id);
    const weight = box === 1 ? 3 : box === 2 ? 1 : 0.3;
    const copies = Math.max(1, Math.round(weight * 2));
    for (let i = 0; i < copies; i++) weighted.push(ex);
  });
  // embaralha
  for (let i = weighted.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [weighted[i], weighted[j]] = [weighted[j], weighted[i]];
  }
  // remove duplicados mantendo ordem, até o limite
  const seen = new Set();
  const queue = [];
  for (const ex of weighted) {
    if (!seen.has(ex.id)) {
      seen.add(ex.id);
      queue.push(ex);
    }
    if (queue.length >= limit) break;
  }
  return queue;
}

function collectAllExercises() {
  const list = [];
  QUEST_DATA.subjects.forEach((subj) => {
    subj.missions.forEach((mission) => {
      mission.exercises.forEach((ex) => {
        list.push(Object.assign({ subjectId: subj.id, missionId: mission.id }, ex));
      });
    });
  });
  return list;
}
