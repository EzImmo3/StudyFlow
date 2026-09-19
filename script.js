// Base de données : Flashcards, Fiches de cours et QUIZ !
const database = {
    "math-spe": {
        title: "Mathématiques Spé", icon: "fa-calculator",
        cards: [
            { q: "Qu'est-ce qu'une démonstration par récurrence ?", a: "1. Initialisation : P(n0) vraie.\n2. Hérédité : Si P(k) vraie, alors P(k+1) vraie.\n3. Conclusion." },
            { q: "Étude de la convexité d'une fonction", a: "On étudie le signe de f''(x) (dérivée seconde).\nSi f''(x) ≥ 0, f est convexe.\nSi f''(x) ≤ 0, f est concave." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Chapitre : Les Fonctions</h3>
            <p class='mb-2'><b>Théorème des Valeurs Intermédiaires (TVI) :</b> Si f est continue sur [a, b], alors pour tout réel k compris entre f(a) et f(b), l'équation f(x) = k admet au moins une solution.</p>
            <p class='mb-2'><b>Corollaire du TVI :</b> Si en plus f est strictement monotone, la solution est unique.</p>
            <h3 class='text-xl font-bold text-indigo-700 mb-2 mt-4'>Chapitre : Suites Numériques</h3>
            <p class='mb-2'><b>Théorème des Gendarmes :</b> Si v(n) ≤ u(n) ≤ w(n) et que lim v(n) = lim w(n) = L, alors lim u(n) = L.</p>
        `,
        quizzes: [
            { q: "Quelle est la dérivée de ln(x) ?", options: ["e^x", "1/x", "x", "-1/x²"], correct: 1 },
            { q: "Une fonction f est convexe si et seulement si sa dérivée seconde f''(x) est :", options: ["Nulle", "Négative", "Positive", "Constante"], correct: 2 },
            { q: "Si u(n) est une suite géométrique de raison q=0.5 et u(0)=4, que vaut u(2) ?", options: ["1", "2", "0.5", "1.5"], correct: 0 }
        ]
    },
    "math-exp": {
        title: "Maths Expertes", icon: "fa-square-root-variable",
        cards: [
            { q: "Formule de Moivre (Complexes)", a: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)" },
            { q: "Théorème de Gauss (Arithmétique)", a: "Si a divise bc, et que a et b sont premiers entre eux, alors a divise c." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Nombres Complexes</h3>
            <p class='mb-2'>Forme algébrique : z = a + ib. Le conjugué est z̄ = a - ib.</p>
            <p class='mb-2'>Module : |z| = √(a² + b²)</p>
            <h3 class='text-xl font-bold text-indigo-700 mb-2 mt-4'>Arithmétique</h3>
            <p class='mb-2'><b>Identité de Bézout :</b> Deux entiers a et b sont premiers entre eux si et seulement s'il existe (u,v) de Z² tels que au + bv = 1.</p>
        `,
        quizzes: [
            { q: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correct: 0 },
            { q: "Si a et b sont premiers entre eux, quel est leur PGCD ?", options: ["0", "1", "a", "b"], correct: 1 }
        ]
    },
    "ses": {
        title: "SES Spé", icon: "fa-chart-line",
        cards: [
            { q: "Progrès technique endogène", a: "Progrès généré par l'investissement des agents (R&D, capital humain, infrastructures publiques)." },
            { q: "Avantages comparatifs (Ricardo)", a: "Chaque pays a intérêt à se spécialiser dans la production où il a le plus grand avantage ou le plus petit désavantage." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Quels sont les sources de la croissance économique ?</h3>
            <p class='mb-2'><b>Croissance extensive :</b> Accumulation des facteurs de production (Travail et Capital).</p>
            <p class='mb-2'><b>Croissance intensive :</b> Accroissement de la Productivité Globale des Facteurs (PGF), qui mesure le progrès technique.</p>
            <p class='mb-2'><b>Destruction créatrice (Schumpeter) :</b> L'innovation crée de nouveaux secteurs mais détruit les anciens devenus obsolètes.</p>
        `,
        quizzes: [
            { q: "Comment s'appelle la croissance issue de l'augmentation des facteurs de production ?", options: ["Intensive", "Endogène", "Extensive", "Exogène"], correct: 2 },
            { q: "Quel auteur a théorisé les 'avantages comparatifs' ?", options: ["Adam Smith", "David Ricardo", "Karl Marx", "Keynes"], correct: 1 }
        ]
    },
    "philo": {
        title: "Philosophie", icon: "fa-brain",
        cards: [
            { q: "Repère : Légal / Légitime", a: "Légal : Conforme à la loi positive (le droit écrit).\nLégitime : Conforme à la justice morale, au droit naturel." }
        ],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>La Conscience et l'Inconscient</h3>
            <p class='mb-2'><b>Descartes (Le Cogito) :</b> "Je pense, donc je suis". La conscience fait de l'homme un sujet pensant capable de vérité.</p>
            <p class='mb-2'><b>Freud (L'inconscient) :</b> Le "Moi n'est pas maître dans sa propre maison". Nos actions sont souvent guidées par des désirs refoulés (le Ça).</p>
        `,
        quizzes: [
            { q: "Qui a dit 'L'homme est condamné à être libre' ?", options: ["Kant", "Descartes", "Sartre", "Spinoza"], correct: 2 },
            { q: "Dans la psychanalyse de Freud, quelle instance représente les interdits intériorisés ?", options: ["Le Ça", "Le Surmoi", "Le Moi", "L'Idéal"], correct: 1 }
        ]
    },
    "hist-geo": {
        title: "Histoire-Géo", icon: "fa-earth-americas",
        cards: [{ q: "Maritimisation", a: "Processus d'accroissement des échanges par voie maritime." }],
        course: `
            <h3 class='text-xl font-bold text-indigo-700 mb-2'>Histoire : La crise de 1929</h3>
            <p class='mb-2'>Jeudi noir (24 oct 1929) à Wall Street. Krach boursier entraînant une crise économique mondiale (Grande Dépression) et chômage de masse.</p>
            <h3 class='text-xl font-bold text-indigo-700 mb-2 mt-4'>Géo : Mondialisation</h3>
            <p class='mb-2'>Processus d'intégration croissante des territoires et d'intensification des flux (marchandises, capitaux, informations).</p>
        `,
        quizzes: [
            { q: "En quelle année Roosevelt lance-t-il le New Deal ?", options: ["1929", "1933", "1936", "1940"], correct: 1 }
        ]
    },
    "emc": { title: "EMC", icon: "fa-scale-balanced", cards: [{ q: "Conseil Constitutionnel", a: "Garantir le respect de la Constitution." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>La Démocratie</h3><p>Le pouvoir du peuple, par le peuple, pour le peuple (Lincoln).</p>", quizzes: [{q:"Combien de membres composent le Conseil Constitutionnel ?", options:["9","12","15","577"], correct:0}] },
    "espagnol": { title: "Espagnol", icon: "fa-comments", cards: [{ q: "Hypothèse (Si...)", a: "Si + Imparfait du subjonctif → Conditionnel." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Expression de l'opinion</h3><p>A mi parecer, En mi opinión, Desde mi punto de vista...</p>", quizzes: [{q:"Comment traduire 'Malgré tout' ?", options:["Sin embargo","A pesar de todo","Por lo tanto","Aunque"], correct:1}] },
    "anglais": { title: "Anglais", icon: "fa-language", cards: [{ q: "Contraste", a: "However, Nevertheless, Whereas, While." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Expressing Goal</h3><p>In order to / So as to + Verb / So that + Subject + Modal.</p>", quizzes: [{q:"Lequel exprime la cause ?", options:["Therefore","Because of","Although","Meanwhile"], correct:1}] },
    "ens-svt": { title: "Ens. Sc. SVT", icon: "fa-dna", cards: [{ q: "Effet de Serre", a: "Gaz absorbant le rayonnement infrarouge de la Terre." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>Climat vs Météo</h3><p>Météo = court terme, local. Climat = long terme (30 ans), global.</p>", quizzes: [{q:"Lequel n'est PAS un gaz à effet de serre majeur ?", options:["CO2","CH4","H2O","O2"], correct:3}] },
    "ens-pc": { title: "Ens. Sc. PC", icon: "fa-atom", cards: [{ q: "Spectre d'émission", a: "Longueurs d'onde émises par un gaz excité." }], course: "<h3 class='text-xl font-bold text-indigo-700 mb-2'>L'Énergie</h3><p>L'énergie électrique E = P * Δt (Puissance x temps).</p>", quizzes: [{q:"Quelle est l'unité de la puissance ?", options:["Joule","Volt","Watt","Ampère"], correct:2}] }
};

let currentSubjectKey = "math-spe";
let currentCardIndex = 0;

// Variables pour le Quiz
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;

// Date & Compte à rebours
const dateDisplay = document.getElementById("dateDisplay");
const bacCountdown = document.getElementById("bacCountdown");
const today = new Date();
dateDisplay.innerHTML = `<i class="fa-regular fa-calendar"></i> ${today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}`;

let bacYear = today.getMonth() >= 8 ? today.getFullYear() + 1 : today.getFullYear();
const bacDate = new Date(`${bacYear}-06-15T08:00:00`);
const diffDays = Math.ceil(Math.abs(bacDate - today) / (1000 * 60 * 60 * 24));
bacCountdown.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> J-${diffDays} avant le BAC`;

// Gestion des Onglets
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'text-indigo-600', 'border-indigo-600');
            b.classList.add('text-slate-500', 'border-transparent');
        });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        
        btn.classList.add('active', 'text-indigo-600', 'border-indigo-600');
        btn.classList.remove('text-slate-500', 'border-transparent');
        document.getElementById(btn.dataset.target).classList.remove('hidden');

        // Reset Quiz if leaving quiz tab
        if (btn.dataset.target !== 'quiz') {
            resetQuizUI();
        }
    });
});

function initSubjects() {
    const subjectFilter = document.getElementById("subjectFilter");
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
    resetQuizUI(); // Reset quiz for new subject
}

function renderContent() {
    const subject = database[currentSubjectKey];
    
    // Flashcards
    document.getElementById("currentSubjectLabel").textContent = subject.title;
    document.getElementById("cardSubjectBadge").textContent = subject.title;
    document.getElementById("cardQuestion").textContent = subject.cards[currentCardIndex].q;
    document.getElementById("cardAnswer").textContent = subject.cards[currentCardIndex].a;
    document.getElementById("cardCounter").textContent = `${currentCardIndex + 1} / ${subject.cards.length}`;
    
    document.getElementById("prevBtn").disabled = currentCardIndex === 0;
    document.getElementById("nextBtn").disabled = currentCardIndex === subject.cards.length - 1;

    // Cours
    document.getElementById("courseContent").innerHTML = subject.course;
}

// Flashcard Actions
document.getElementById("flashcard").onclick = function() { this.classList.toggle("flipped"); };
document.getElementById("prevBtn").onclick = () => { if(currentCardIndex > 0) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex--; renderContent(); }, 150); } };
document.getElementById("nextBtn").onclick = () => { if(currentCardIndex < database[currentSubjectKey].cards.length - 1) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex++; renderContent(); }, 150); } };

// ----- SYSTEME DE QUIZ -----
const startScreen = document.getElementById("quizStartScreen");
const activeScreen = document.getElementById("quizActiveScreen");
const resultScreen = document.getElementById("quizResultScreen");
const questionText = document.getElementById("quizQuestionText");
const optionsContainer = document.getElementById("quizOptionsContainer");
const nextQuizBtn = document.getElementById("nextQuizBtn");
const quizProgress = document.getElementById("quizProgress");
const quizScoreDisplay = document.getElementById("quizScoreDisplay");

function resetQuizUI() {
    startScreen.classList.remove("hidden");
    activeScreen.classList.add("hidden", "flex");
    resultScreen.classList.add("hidden");
    activeScreen.classList.remove("flex"); // Tailwind toggle fix
}

document.getElementById("startQuizBtn").onclick = () => {
    currentQuizData = database[currentSubjectKey].quizzes;
    if (!currentQuizData || currentQuizData.length === 0) {
        alert("Pas de questions de quiz pour cette matière pour l'instant !");
        return;
    }
    score = 0;
    currentQuestionIndex = 0;
    
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    activeScreen.classList.remove("hidden");
    activeScreen.classList.add("flex");
    
    loadQuizQuestion();
};

function loadQuizQuestion() {
    const currentQ = currentQuizData[currentQuestionIndex];
    questionText.textContent = currentQ.q;
    quizProgress.textContent = `Question ${currentQuestionIndex + 1}/${currentQuizData.length}`;
    quizScoreDisplay.textContent = `Score : ${score}`;
    optionsContainer.innerHTML = "";
    nextQuizBtn.classList.add("hidden");

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "w-full text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 font-medium text-slate-700 transition duration-200";
        btn.textContent = opt;
        btn.onclick = () => handleQuizAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedIndex, btnElement) {
    // Désactiver tous les boutons
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);

    const correctIndex = currentQuizData[currentQuestionIndex].correct;
    
    if (selectedIndex === correctIndex) {
        btnElement.classList.remove("bg-slate-50", "hover:bg-indigo-50", "border-slate-200");
        btnElement.classList.add("bg-emerald-100", "border-emerald-500", "text-emerald-800");
        score++;
        quizScoreDisplay.textContent = `Score : ${score}`;
    } else {
        btnElement.classList.remove("bg-slate-50", "hover:bg-indigo-50", "border-slate-200");
        btnElement.classList.add("bg-rose-100", "border-rose-500", "text-rose-800");
        // Montrer la bonne réponse
        buttons[correctIndex].classList.remove("bg-slate-50", "border-slate-200");
        buttons[correctIndex].classList.add("bg-emerald-100", "border-emerald-500");
    }

    nextQuizBtn.classList.remove("hidden");
    if (currentQuestionIndex === currentQuizData.length - 1) {
        nextQuizBtn.textContent = "Voir les résultats";
        nextQuizBtn.classList.add("bg-indigo-600", "text-white", "hover:bg-indigo-700");
        nextQuizBtn.classList.remove("bg-slate-200", "text-slate-500");
    } else {
        nextQuizBtn.textContent = "Question Suivante";
        nextQuizBtn.classList.remove("bg-indigo-600", "text-white");
        nextQuizBtn.classList.add("bg-slate-200", "text-slate-500");
    }
}

nextQuizBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
};

function showQuizResults() {
    activeScreen.classList.add("hidden");
    activeScreen.classList.remove("flex");
    resultScreen.classList.remove("hidden");
    
    document.getElementById("quizFinalScore").textContent = `${score}/${currentQuizData.length}`;
    
    const title = document.getElementById("quizResultTitle");
    const icon = document.getElementById("quizResultIcon");
    
    if (score === currentQuizData.length) {
        title.textContent = "Parfait ! Mention TB assurée 🌟";
        icon.textContent = "🏆";
    } else if (score >= currentQuizData.length / 2) {
        title.textContent = "Bon travail ! Encore un petit effort 👍";
        icon.textContent = "💪";
    } else {
        title.textContent = "Il faut relire le cours ! 📖";
        icon.textContent = "🧠";
    }
}

document.getElementById("restartQuizBtn").onclick = () => {
    document.getElementById("startQuizBtn").click();
};

// Pomodoro et To-Do List (Logique inchangée mais présente)
let timerSeconds = 25 * 60; let timerInterval = null; let isTimerRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");

function updateTimerDisplay() {
    const min = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const sec = (timerSeconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
}
startTimerBtn.onclick = () => {
    if (isTimerRunning) { clearInterval(timerInterval); isTimerRunning = false; startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Reprendre`; startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600"); } 
    else { isTimerRunning = true; startTimerBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`; startTimerBtn.classList.replace("bg-indigo-600", "bg-amber-500"); timerInterval = setInterval(() => { if (timerSeconds > 0) { timerSeconds--; updateTimerDisplay(); } else { clearInterval(timerInterval); alert("Session terminée !"); } }, 1000); }
};
document.getElementById("resetTimer").onclick = () => { clearInterval(timerInterval); isTimerRunning = false; timerSeconds = 25 * 60; updateTimerDisplay(); startTimerBtn.innerHTML = `<i class="fa-solid fa-play"></i> Go`; startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600"); };

const todoForm = document.getElementById("todoForm"); const todoInput = document.getElementById("todoInput"); const todoList = document.getElementById("todoList");
let todos = JSON.parse(localStorage.getItem("studyflow2_todos")) || [{ text: "Faire 1 quiz d'entraînement", done: false }];
function saveAndRenderTodos() {
    localStorage.setItem("studyflow2_todos", JSON.stringify(todos)); todoList.innerHTML = "";
    todos.forEach((todo, idx) => {
        const li = document.createElement("li"); li.className = "flex items-center justify-between p-2 rounded-xl bg-white/60 text-xs gap-2 shadow-sm border border-white/50";
        li.innerHTML = `<span class="flex-1 cursor-pointer font-medium ${todo.done ? 'line-through text-slate-400' : 'text-slate-700'}" onclick="toggleTodo(${idx})"><i class="${todo.done ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-regular fa-circle text-slate-300'} mr-2"></i>${todo.text}</span><button onclick="deleteTodo(${idx})" class="text-slate-300 hover:text-rose-500 transition"><i class="fa-solid fa-trash"></i></button>`;
        todoList.appendChild(li);
    });
}
window.toggleTodo = (idx) => { todos[idx].done = !todos[idx].done; saveAndRenderTodos(); };
window.deleteTodo = (idx) => { todos.splice(idx, 1); saveAndRenderTodos(); };
todoForm.onsubmit = (e) => { e.preventDefault(); if (todoInput.value.trim()) { todos.push({ text: todoInput.value.trim(), done: false }); todoInput.value = ""; saveAndRenderTodos(); } };

initSubjects(); renderContent(); saveAndRenderTodos();