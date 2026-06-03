// TABS
function initTabs(barSel, panelSel) {
  const btns = document.querySelectorAll(barSel + ' .tab-btn');
  const panels = document.querySelectorAll(panelSel);
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const t = document.getElementById(btn.dataset.tab);
    if (t) t.classList.add('active');
  }));
}

// QUIZ ENGINE
function createQuiz(containerId, questions) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let idx = 0, score = 0;
  function render() {
    if (idx >= questions.length) {
      container.innerHTML = `<div class="quiz-end"><h3>${score >= Math.ceil(questions.length*0.7) ? '🎉 Bravo !' : '📚 Continue !'}</h3><p>Score : <strong>${score} / ${questions.length}</strong></p><button class="quiz-next" onclick="location.reload()">Recommencer</button></div>`;
      return;
    }
    const q = questions[idx];
    const pct = Math.round((idx / questions.length) * 100);
    container.innerHTML = `<div class="quiz-wrap"><div class="quiz-progress"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><span class="quiz-counter">${idx+1} / ${questions.length}</span><span class="quiz-score-badge">${score} pts</span></div><div class="quiz-card"><div class="quiz-q">${q.q}</div><div class="quiz-options">${q.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}</div><div id="qfb" style="display:none"></div><div id="qnxt" style="display:none"><button class="quiz-next" id="qnb">${idx+1<questions.length?'Question suivante →':'Voir le résultat →'}</button></div></div></div>`;
    let done = false;
    container.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
      if (done) return; done = true;
      const chosen = parseInt(btn.dataset.i);
      container.querySelectorAll('.quiz-opt').forEach((b,i) => { b.disabled=true; if(i===q.ans) b.classList.add('correct'); else if(i===chosen) b.classList.add('wrong'); });
      if (chosen === q.ans) score++;
      const fb = document.getElementById('qfb');
      fb.className = 'quiz-feedback ' + (chosen===q.ans?'feedback-ok':'feedback-ko');
      fb.textContent = (chosen===q.ans?'✓ Correct ! ':'✗ Pas tout à fait. ') + q.exp;
      fb.style.display = 'block';
      document.getElementById('qnxt').style.display = 'block';
      document.getElementById('qnb').addEventListener('click', () => { idx++; render(); });
    }));
  }
  render();
}

// FLASHCARD ENGINE
function createFlashcards(containerId, cards, backClass) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let idx = 0;
  function render() {
    const c = cards[idx];
    container.innerHTML = `<div class="flash-wrap"><div class="flash-meta">${idx+1} / ${cards.length}</div><div class="flashcard-scene" id="fcs"><div class="flashcard-inner" id="fci"><div class="fc-side fc-front"><span class="fc-side-label">Question</span><span class="fc-text">${c.q}</span><span class="fc-hint">← cliquer pour retourner →</span></div><div class="fc-side ${backClass}"><span class="fc-side-label">Réponse</span><span class="fc-text">${c.a}</span></div></div></div><div class="fc-controls"><button class="fc-btn" id="fcp">← Précédent</button><span class="fc-count">${idx+1} / ${cards.length}</span><button class="fc-btn" id="fcn">Suivant →</button></div></div>`;
    document.getElementById('fcs').addEventListener('click', () => document.getElementById('fci').classList.toggle('flipped'));
    document.getElementById('fcp').addEventListener('click', () => { idx=(idx-1+cards.length)%cards.length; render(); });
    document.getElementById('fcn').addEventListener('click', () => { idx=(idx+1)%cards.length; render(); });
  }
  render();
}

// ANNALES TOGGLE
function initAnnales() {
  document.querySelectorAll('.annale-toggle').forEach(btn => btn.addEventListener('click', () => {
    const box = btn.nextElementSibling;
    box.classList.toggle('open');
    btn.textContent = box.classList.contains('open') ? 'Masquer la correction ↑' : 'Voir les éléments de correction ↓';
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-nav a').forEach(l => { if (l.href === window.location.href) l.classList.add('active'); });
  initAnnales();
});
