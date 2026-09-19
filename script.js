// Base de données : Flashcards ET Fiches de cours
const database = {
    "math-spe": {
        title: "Mathématiques Spé",
        icon: "fa-calculator",
        cards: [
            { q: "Qu'est-ce qu'une démonstration par récurrence ?", a: "1. Initialisation : P(n0) vraie.\n2. Hérédité : Si P(k) vraie, alors P(k+1) vraie.\n3. Conclusion." },
            { q: "Étude de la convexité d'une fonction", a: "On étudie le signe de f''(x) (dérivée seconde).\nSi f''(x) ≥ 0, f est convexe.\nSi f''(x) ≤ 0, f est concave." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Les Suites Numériques</h3>
            <p class='mb-2'><b>Suite Arithmétique :</b> u(n) = u(0) + n*r</p>
            <p class='mb-2'><b>Suite Géométrique :</b> u(n) = u(0) * q^n</p>
            <p class='mb-4'><b>Théorème des Gendarmes :</b> Si v(n) ≤ u(n) ≤ w(n) et que lim v(n) = lim w(n) = L, alors lim u(n) = L.</p>
            <div class='bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm'>
                <i class='fa-solid fa-triangle-exclamation text-yellow-500'></i> <b>Astuce pour le 16/20 :</b> Toujours justifier la dérivabilité d'une fonction AVANT de la dériver dans ta copie.
            </div>
        `
    },
    "math-exp": {
        title: "Maths Expertes",
        icon: "fa-square-root-variable",
        cards: [
            { q: "Formule de Moivre (Complexes)", a: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)" },
            { q: "Théorème de Gauss (Arithmétique)", a: "Si a divise bc, et que a et b sont premiers entre eux, alors a divise c." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Nombres Complexes</h3>
            <p class='mb-2'>Forme algébrique : z = a + ib</p>
            <p class='mb-2'>Forme exponentielle : z = r * e^(iθ)</p>
            <p class='mb-2'>Module : |z| = √(a² + b²)</p>
            <p>Argument : cos(θ) = a/r et sin(θ) = b/r</p>
        `
    },
    "ses": {
        title: "SES Spé",
        icon: "fa-chart-line",
        cards: [
            { q: "Progrès technique endogène", a: "Progrès généré par l'investissement des agents (R&D, capital humain, infrastructures publiques)." },
            { q: "Avantages comparatifs (Ricardo)", a: "Chaque pays a intérêt à se spécialiser dans la production où il a le plus grand avantage ou le plus petit désavantage." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Croissance Économique</h3>
            <p class='mb-2'><b>Sources de la croissance :</b> Accumulation des facteurs de production (Capital et Travail) + Accroissement de la PGF (Productivité Globale des Facteurs).</p>
            <p class='mb-2'><b>Destruction créatrice (Schumpeter) :</b> L'innovation détruit les anciens secteurs obsolètes pour en créer de nouveaux plus performants.</p>
        `
    },
    "philo": {
        title: "Philosophie",
        icon: "fa-brain",
        cards: [
            { q: "Repère : Absolu vs Relatif", a: "Absolu : Ce qui ne dépend de rien (ex: la vérité mathématique).\nRelatif : Ce qui dépend d'autre chose (ex: les coutumes)." },
            { q: "Citation : La Liberté (Sartre)", a: "« L'homme est condamné à être libre. » (L'existentialisme est un humanisme)" }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Méthode de la Dissertation</h3>
            <ol class='list-decimal list-inside space-y-1 mb-4 text-sm'>
                <li><b>Analyse du sujet :</b> Définir chaque terme (Sens commun vs Sens philosophique).</li>
                <li><b>Problématisation :</b> Mettre en évidence le paradoxe caché de la question.</li>
                <li><b>Plan dialectique classique :</b> Thèse (Oui/Non), Antithèse (Nuance), Synthèse (Dépassement de la contradiction).</li>
            </ol>
            <p class='text-sm italic'>Pour avoir 16 en philo, il faut problématiser, pas juste recracher des auteurs !</p>
        `
    },
    "hist-geo": { title: "Histoire-Géo", icon: "fa-earth-americas", cards: [{ q: "Maritimisation", a: "Accroissement des échanges internationaux par voie maritime (90% du commerce mondial)." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Mondialisation</h3><p>Cours à compléter ici...</p>" },
    "emc": { title: "EMC", icon: "fa-scale-balanced", cards: [{ q: "Conseil Constitutionnel", a: "Garantir le respect de la Constitution et contrôler la conformité des lois." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>La Démocratie</h3><p>Cours à compléter ici...</p>" },
    "espagnol": { title: "Espagnol", icon: "fa-comments", cards: [{ q: "Hypothèse (Si...)", a: "Si + Imparfait du subjonctif → Conditionnel (Si tuviera, iría)." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Vocabulaire de l'argumentation</h3><p>Por un lado... por otro lado...</p>" },
    "anglais": { title: "Anglais", icon: "fa-language", cards: [{ q: "Contraste", a: "However, Nevertheless, Whereas, While." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Essay Structure</h3><p>Introduction, Body Paragraphs, Conclusion.</p>" },
    "ens-svt": { title: "Ens. Scientifique SVT", icon: "fa-dna", cards: [{ q: "Effet de Serre", a: "Gaz absorbant le rayonnement infrarouge de la Terre." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Le Climat</h3><p>Différence entre climat et météo...</p>" },
    "ens-pc": { title: "Ens. Scientifique PC", icon: "fa-atom", cards: [{ q: "Spectre d'émission", a: "Longueurs d'onde émises par un gaz excité, propre à chaque atome." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>L'énergie</h3><p>E = P * Δt</p>" }
};

let currentSubjectKey = "math-spe";
let currentCardIndex = 0;

// Date & Compte à rebours du BAC (Mi-Juin de l'année scolaire en cours)
const dateDisplay = document.getElementById("dateDisplay");
const bacCountdown = document.getElementById("bacCountdown");
const today = new Date();
dateDisplay.innerHTML = `<i class="fa-regular fa-calendar"></i> ${today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}`;

// Calcul du compte à rebours (Ex: Bac le 15 Juin 2027 pour l'année 2026-2027)
let bacYear = today.getMonth() >= 8 ? today.getFullYear() + 1 : today.getFullYear();
const bacDate = new Date(`${bacYear}-06-15T08:00:00`);
const diffTime = Math.abs(bacDate - today);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
bacCountdown.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> J-${diffDays} avant le BAC`;

// Gestion des Onglets (Tabs)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Enlever l'actif partout
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'text-indigo-600', 'border-indigo-600');
            b.classList.add('text-slate-500', 'border-transparent');
        });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        
        // Mettre actif celui cliqué
        btn.classList.add('active', 'text-indigo-600', 'border-indigo-600');
        btn.classList.remove('text-slate-500', 'border-transparent');
        document.getElementById(btn.dataset.target).classList.remove('hidden');
    });
});

// Menu des matières
const subjectFilter = document.getElementById("subjectFilter");
function initSubjects() {
    subjectFilter.innerHTML = "";
    Object.keys(database).forEach(key => {
        const item = database[key];
        const activeClass = key === currentSubjectKey ? "bg-indigo-600 text-white shadow-md" : "bg-white/60 hover:bg-white/90 text-slate-700";
        const btn = document.createElement("button");
        btn.className = `px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition duration-200 ${activeClass}`;
        btn.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.title}`;
        btn.onclick = () => selectSubject(key);
        subjectFilter.appendChild(btn);
    });
}

function selectSubject(key) {
    currentSubjectKey = key;
    currentCardIndex = 0;
    document.getElementById("flashcard").classList.remove("flipped");
    initSubjects();
    renderContent();
}

function renderContent() {
    const subject = database[currentSubjectKey];
    
    // MAJ Flashcards
    document.getElementById("currentSubjectLabel").textContent = subject.title;
    document.getElementById("cardSubjectBadge").textContent = subject.title;
    document.getElementById("cardQuestion").textContent = subject.cards[currentCardIndex].q;
    document.getElementById("cardAnswer").textContent = subject.cards[currentCardIndex].a;
    document.getElementById("cardCounter").textContent = `${currentCardIndex + 1} / ${subject.cards.length}`;
    
    document.getElementById("prevBtn").disabled = currentCardIndex === 0;
    document.getElementById("nextBtn").disabled = currentCardIndex === subject.cards.length - 1;

    // MAJ Fiches de cours
    document.getElementById("courseContent").innerHTML = subject.course || "<p class='text-slate-500 italic'>Fiche de cours en cours de rédaction...</p>";
}

// Interactivité Flashcard
document.getElementById("flashcard").onclick = function() { this.classList.toggle("flipped"); };
document.getElementById("prevBtn").onclick = () => { if(currentCardIndex > 0) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex--; renderContent(); }, 150); } };
document.getElementById("nextBtn").onclick = () => { if(currentCardIndex < database[currentSubjectKey].cards.length - 1) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex++; renderContent(); }, 150); } };

// Pomodoro Timer
let timerSeconds = 25 * 60;
let timerInterval = null;
let isTimerRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");

function updateTimerDisplay() {
    const min = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const sec = (timerSeconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
}

startTimerBtn.onclick = () => {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Reprendre`;
        startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
    } else {
        isTimerRunning = true;
        startTimerBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        startTimerBtn.classList.replace("bg-indigo-600", "bg-amber-500");
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) { timerSeconds--; updateTimerDisplay(); } 
            else { clearInterval(timerInterval); alert("Session Deep Work terminée ! Prends 5 min de pause."); }
        }, 1000);
    }
};

document.getElementById("resetTimer").onclick = () => {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 25 * 60;
    updateTimerDisplay();
    startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Go`;
    startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
};

// To-Do List avec LocalStorage
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
let todos = JSON.parse(localStorage.getItem("studyflow2_todos")) || [{ text: "Faire 1 fiche méthode SES", done: false }];

function saveAndRenderTodos() {
    localStorage.setItem("studyflow2_todos", JSON.stringify(todos));
    todoList.innerHTML = "";
    todos.forEach((todo, idx) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-2 rounded-xl bg-white/60 text-xs gap-2 shadow-sm border border-white/50";
        li.innerHTML = `
            <span class="flex-1 cursor-pointer font-medium ${todo.done ? 'line-through text-slate-400' : 'text-slate-700'}" onclick="toggleTodo(${idx})">
                <i class="${todo.done ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-300'} mr-2"></i>${todo.text}
            </span>
            <button onclick="deleteTodo(${idx})" class="text-slate-300 hover:text-rose-500 transition"><i class="fa-solid fa-trash"></i></button>
        `;
        todoList.appendChild(li);
    });
}

window.toggleTodo = (idx) => { todos[idx].done = !todos[idx].done; saveAndRenderTodos(); };
window.deleteTodo = (idx) => { todos.splice(idx, 1); saveAndRenderTodos(); };

todoForm.onsubmit = (e) => {
    e.preventDefault();
    if (todoInput.value.trim()) {
        todos.push({ text: todoInput.value.trim(), done: false });
        todoInput.value = "";
        saveAndRenderTodos();
    }
};

// Initialisation
initSubjects();
renderContent();
saveAndRenderTodos();