// Base de données complète pour tes matières de Terminale
const database = {
    "math-spe": {
        title: "Mathématiques Spé",
        icon: "fa-calculator",
        cards: [
            { q: "Qu'est-ce qu'une démonstration par récurrence ?", a: "Méthode démontrant une propriété P(n) pour tout n en 2 étapes : Initialisation [P(n0) vraie] et Hérédité [Si P(k) vraie, alors P(k+1) vraie]." },
            { q: "Comment étudier la convexité d'une fonction f ?", a: "On étudie le signe de la dérivée seconde f''(x). Si f''(x) ≥ 0, f est convexe (courbe au-dessus de ses tangentes)." },
            { q: "Formule de l'intégration par parties", a: "∫ u(x)v'(x) dx = [u(x)v(x)] - ∫ u'(x)v(x) dx" }
        ]
    },
    "math-exp": {
        title: "Maths Expertes",
        icon: "fa-square-root-variable",
        cards: [
            { q: "Formule de Moivre pour les nombres complexes", a: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)" },
            { q: "Qu'est-ce que le théorème de Bézout ?", a: "Deux entiers a et b sont premiers entre eux si et seulement s'il existe (u, v) ∈ ℤ² tels que au + bv = 1." }
        ]
    },
    "ses": {
        title: "SES Spé",
        icon: "fa-chart-line",
        cards: [
            { q: "Qu'est-ce que le progrès technique endogène ?", a: "Le progrès technique généré par les décisions des agents économiques et l'investissement (R&D, capital humain, infrastructures)." },
            { q: "Définis la mobilité sociale structurelle", a: "Mobilité sociale expliquée par le changement de la structure des emplois entre la génération des parents et celle des enfants." }
        ]
    },
    "philo": {
        title: "Philosophie",
        icon: "fa-brain",
        cards: [
            { q: "Citation de Kant sur la Vérité / Connaissance", a: "« Des pensées sans contenu sont vides, des intuitions sans concepts sont aveugles. »" },
            { q: "Distinction Repères : Absolu vs Relatif", a: "Absolu : Ce qui ne dépend de rien d'autre pour exister. Relatif : Ce qui dépend d'autre chose ou varie selon le point de vue." }
        ]
    },
    "hist-geo": {
        title: "Histoire-Géo",
        icon: "fa-earth-americas",
        cards: [
            { q: "Définition : Maritimisation", a: "Processus d'accroissement des échanges internationaux par voie maritime, au cœur de la mondialisation." },
            { q: "Date clé : Début de la Guerre Froide", a: "1947 (Doctrine Truman et Plan Marshall / Doctrine Jdanov)." }
        ]
    },
    "emc": {
        title: "EMC",
        icon: "fa-scale-balanced",
        cards: [
            { q: "Quel est le rôle du Conseil Constitutionnel ?", a: "Garantir le respect de la Constitution et contrôler la conformité des lois avant leur promulgation." }
        ]
    },
    "espagnol": {
        title: "Espagnol",
        icon: "fa-comments",
        cards: [
            { q: "Expression de l'hypothèse : « Si + Subjonctif »", a: "Si + Imparfait du subjonctif → Conditionnel (ex: Si tuviera tiempo, iría)." }
        ]
    },
    "anglais": {
        title: "Anglais",
        icon: "fa-language",
        cards: [
            { q: "Link word: expressing contrast", a: "However / Nevertheless / On the other hand / Dynamic contrast: Whereas, While." }
        ]
    },
    "ens-svt": {
        title: "Ens. Scientifique (SVT)",
        icon: "fa-dna",
        cards: [
            { q: "Qu'est-ce que l'effet de serre ?", a: "Phénomène naturel où certains gaz de l'atmosphère absorbent une partie du rayonnement infrarouge émis par la Terre." }
        ]
    },
    "ens-pc": {
        title: "Ens. Scientifique (PC)",
        icon: "fa-atom",
        cards: [
            { q: "Qu'est-ce que le spectre d'émission d'un élément ?", a: "L'ensemble des longueurs d'onde de la lumière émises par un gaz excité, propre à chaque atome." }
        ]
    }
};

let currentSubjectKey = "math-spe";
let currentCardIndex = 0;

// Elements DOM
const subjectFilter = document.getElementById("subjectFilter");
const flashcard = document.getElementById("flashcard");
const cardQuestion = document.getElementById("cardQuestion");
const cardAnswer = document.getElementById("cardAnswer");
const cardSubjectBadge = document.getElementById("cardSubjectBadge");
const currentSubjectLabel = document.getElementById("currentSubjectLabel");
const cardCounter = document.getElementById("cardCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Afficher la date
document.getElementById("dateDisplay").textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' });

// Générer le menu des matières
function initSubjects() {
    subjectFilter.innerHTML = "";
    Object.keys(database).forEach(key => {
        const item = database[key];
        const activeClass = key === currentSubjectKey ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30" : "bg-white/60 hover:bg-white/90 text-slate-700";
        
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
    flashcard.classList.remove("flipped");
    initSubjects();
    renderCard();
}

function renderCard() {
    const subject = database[currentSubjectKey];
    const card = subject.cards[currentCardIndex];

    currentSubjectLabel.textContent = subject.title;
    cardSubjectBadge.textContent = subject.title;
    cardQuestion.textContent = card.q;
    cardAnswer.textContent = card.a;
    cardCounter.textContent = `${currentCardIndex + 1} / ${subject.cards.length}`;

    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === subject.cards.length - 1;
}

// Interactivité Flashcard
flashcard.onclick = () => flashcard.classList.toggle("flipped");

prevBtn.onclick = () => {
    if (currentCardIndex > 0) {
        flashcard.classList.remove("flipped");
        setTimeout(() => { currentCardIndex--; renderCard(); }, 150);
    }
};

nextBtn.onclick = () => {
    if (currentCardIndex < database[currentSubjectKey].cards.length - 1) {
        flashcard.classList.remove("flipped");
        setTimeout(() => { currentCardIndex++; renderCard(); }, 150);
    }
};

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
        startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Lancer`;
        startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
    } else {
        isTimerRunning = true;
        startTimerBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        startTimerBtn.classList.replace("bg-indigo-600", "bg-amber-500");
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Session Pomodoro terminée ! Fais une pause de 5 minutes.");
            }
        }, 1000);
    }
};

document.getElementById("resetTimer").onclick = () => {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 25 * 60;
    updateTimerDisplay();
    startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Lancer`;
    startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
};

// To-Do List avec LocalStorage
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("studyflow_todos")) || [
    { text: "Réviser la spé Maths (Récurrence)", done: false }
];

function saveAndRenderTodos() {
    localStorage.setItem("studyflow_todos", JSON.stringify(todos));
    todoList.innerHTML = "";
    todos.forEach((todo, idx) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-2 rounded-xl bg-white/40 text-xs gap-2 border border-white/40";
        li.innerHTML = `
            <span class="flex-1 cursor-pointer ${todo.done ? 'line-through text-slate-400' : 'text-slate-700'}" onclick="toggleTodo(${idx})">${todo.text}</span>
            <button onclick="deleteTodo(${idx})" class="text-slate-400 hover:text-rose-500 transition"><i class="fa-solid fa-trash"></i></button>
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

// Initialisation au chargement
initSubjects();
renderCard();
saveAndRenderTodos();