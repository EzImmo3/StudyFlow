/* ═══════════════════════════════════════
   TABS
═══════════════════════════════════════ */
function initTabs(tabBtns, panels) {
  tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels[i].classList.add('active');
    });
  });
}

function initSubTabs(container) {
  const tabs = container.querySelectorAll('.sub-tab');
  const panels = container.querySelectorAll('.sub-panel');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      panels[i].classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════
   QUIZ ENGINE
═══════════════════════════════════════ */
class Quiz {
  constructor(container, questions) {
    this.container = container;
    this.questions = this.shuffle([...questions]);
    this.idx = 0;
    this.score = 0;
    this.answered = false;
    this.render();
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    if (this.idx >= this.questions.length) { this.showResult(); return; }
    const q = this.questions[this.idx];
    const pct = Math.round((this.idx / this.questions.length) * 100);
    this.container.innerHTML = `
      <div class="quiz-wrap">
        <div class="score-row">
          <span class="score-label">${this.idx + 1}/${this.questions.length}</span>
          <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${pct}%"></div></div>
          <span class="score-label">Score : ${this.score}</span>
        </div>
        <div class="quiz-card">
          <div class="quiz-q-label">Question ${this.idx + 1}</div>
          <div class="quiz-q-text">${q.q}</div>
          <div class="quiz-opts">
            ${q.opts.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}
          </div>
          <div class="quiz-feedback" id="qfb"></div>
          <button class="btn-next" id="qnxt">Question suivante →</button>
        </div>
      </div>`;

    this.container.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => this.answer(parseInt(btn.dataset.i)));
    });
    document.getElementById('qnxt').addEventListener('click', () => { this.idx++; this.answered = false; this.render(); });
  }

  answer(chosen) {
    if (this.answered) return;
    this.answered = true;
    const q = this.questions[this.idx];
    const ok = chosen === q.ans;
    if (ok) this.score++;
    this.container.querySelectorAll('.quiz-opt').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add('correct');
      else if (i === chosen) btn.classList.add('wrong');
    });
    const fb = document.getElementById('qfb');
    fb.className = 'quiz-feedback ' + (ok ? 'feedback-ok' : 'feedback-ko');
    fb.textContent = (ok ? '✓ Correct ! ' : '✗ Pas tout à fait. ') + q.exp;
    fb.style.display = 'block';
    const nxt = document.getElementById('qnxt');
    nxt.style.display = 'inline-block';
    nxt.textContent = this.idx + 1 < this.questions.length ? 'Question suivante →' : 'Voir le résultat →';
  }

  showResult() {
    const pct = Math.round((this.score / this.questions.length) * 100);
    let msg = pct >= 80 ? 'Excellent travail ! 🎉' : pct >= 60 ? 'Bon résultat, continue ! 💪' : 'Relis les fiches et recommence 📖';
    this.container.innerHTML = `
      <div class="quiz-result">
        <div class="result-score">${this.score}/${this.questions.length}</div>
        <div class="result-msg">${msg} (${pct}%)</div>
        <button class="btn-retry" onclick="">Recommencer</button>
      </div>`;
    this.container.querySelector('.btn-retry').addEventListener('click', () => {
      this.questions = this.shuffle([...this.questions]);
      this.idx = 0; this.score = 0; this.answered = false;
      this.render();
    });
  }
}

/* ═══════════════════════════════════════
   FLASHCARD ENGINE
═══════════════════════════════════════ */
class Flashcards {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
    this.idx = 0;
    this.flipped = false;
    this.render();
  }

  render() {
    const c = this.cards[this.idx];
    this.container.innerHTML = `
      <div class="flash-wrap">
        <div class="flash-counter">${this.idx + 1} / ${this.cards.length}</div>
        <div class="flashcard-scene">
          <div class="flashcard ${this.flipped ? 'flipped' : ''}" id="fc">
            <div class="fc-face">
              <div class="fc-face-label">Question</div>
              <div class="fc-face-text">${c.q}</div>
              <div class="fc-hint">← cliquer pour voir la réponse →</div>
            </div>
            <div class="fc-face fc-back">
              <div class="fc-face-label">Réponse</div>
              <div class="fc-face-text">${c.a}</div>
            </div>
          </div>
        </div>
        <div class="flash-nav">
          <button id="fc-prev">← Précédente</button>
          <button id="fc-next">Suivante →</button>
        </div>
      </div>`;
    document.getElementById('fc').addEventListener('click', () => { this.flipped = !this.flipped; this.render(); });
    document.getElementById('fc-prev').addEventListener('click', () => { this.idx = (this.idx - 1 + this.cards.length) % this.cards.length; this.flipped = false; this.render(); });
    document.getElementById('fc-next').addEventListener('click', () => { this.idx = (this.idx + 1) % this.cards.length; this.flipped = false; this.render(); });
  }
}

/* ═══════════════════════════════════════
   ANNALES: toggle correction
═══════════════════════════════════════ */
function toggleCorr(btn) {
  const panel = btn.nextElementSibling;
  panel.classList.toggle('open');
  btn.textContent = panel.classList.contains('open') ? 'Masquer la correction ↑' : 'Voir la correction ↓';
}

/* ═══════════════════════════════════════
   NAVBAR ACTIVE LINK
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(a => {
    if (path.includes(a.getAttribute('href').replace('./', ''))) {
      a.classList.add('active');
    }
  });
});
