// Base de données complète ultra-riche
const defaultDatabase = {
    "math-spe": {
        title: "Mathématiques Spé", icon: "fa-calculator",
        cards: [
            { q: "Qu'est-ce qu'une démonstration par récurrence ?", a: "1. Initialisation : P(n0) vraie.\n2. Hérédité : Si P(k) vraie, alors P(k+1) vraie.\n3. Conclusion.", interval: 1 },
            { q: "Étude de la convexité d'une fonction", a: "On étudie le signe de f''(x) (dérivée seconde).\nSi f''(x) ≥ 0, f est convexe.", interval: 1 }
        ],
        course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Analyse & Suites</h3><p class='mb-2'><b>TVI (Théorème des Valeurs Intermédiaires) :</b> Si f est continue sur [a,b], pour tout k compris entre f(a) et f(b), l'équation f(x)=k admet au moins une solution sur [a,b].</p>",
        quizzes: [
            { q: "Quelle est la dérivée de ln(x) sur ]0, +∞[ ?", options: ["e^x", "1/x", "x", "-1/x²"], correct: 1 },
            { q: "Une fonction f est convexe si sa dérivée seconde f''(x) est :", options: ["Nulle", "Négative", "Positive", "Constante"], correct: 2 }
        ]
    },
    "math-exp": {
        title: "Maths Expertes", icon: "fa-square-root-variable",
        cards: [{ q: "Formule de Moivre", a: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)", interval: 1 }],
        course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Nombres Complexes</h3><p>Forme exponentielle : z = r * e^(iθ)</p>",
        quizzes: [{ q: "Quel est le module de z = 3 + 4i ?", options: ["5", "7", "12", "25"], correct: 0 }]
    },
    "ses": {
        title: "SES Spé", icon: "fa-chart-line",
        cards: [{ q: "Progrès technique endogène", a: "Généré par l'investissement des agents (R&D, capital humain, innovations).", interval: 1 }],
        course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Croissance Économique</h3><p>Accumulation des facteurs + Productivité Globale des Facteurs (PGF).</p>",
        quizzes: [{ q: "Quel auteur a théorisé les 'avantages comparatifs' ?", options: ["Adam Smith", "David Ricardo", "Marx", "Keynes"], correct: 1 }]
    },
    "philo": {
        title: "Philosophie", icon: "fa-brain",
        cards: [{ q: "Légal vs Légitime", a: "Légal = conforme au droit positif. Légitime = conforme à la justice morale.", interval: 1 }],
        course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>La Liberté & La Justice</h3><p>Descartes : Cogito ergo sum. Spinoza : La liberté c'est la conscience de la nécessité.</p>",
        quizzes: [{ q: "Qui a écrit 'L'homme est condamné à être libre' ?", options: ["Kant", "Descartes", "Sartre", "Spinoza"], correct: 2 }]
    },
    "hist-geo": { title: "Histoire-Géo", icon: "fa-earth-americas", cards: [{ q: "Maritimisation", a: "Processus d'accroissement des échanges par voie maritime.", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Mondialisation</h3><p>Interdépendance accrue des économies et des territoires.</p>", quizzes: [{ q: "Date de signature du traité de Maastricht ?", options: ["1957", "1992", "2002", "1989"], correct: 1 }] },
    "emc": { title: "EMC", icon: "fa-scale-balanced", cards: [{ q: "Rôle du Conseil Constitutionnel", a: "Vérifier la conformité des lois à la Constitution.", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>La Démocratie</h3><p>Souveraineté populaire et séparation des pouvoirs.</p>", quizzes: [{ q: "Combien de membres composent le Conseil Constitutionnel ?", options: ["9", "12", "15", "577"], correct: 0 }] },
    "espagnol": { title: "Espagnol", icon: "fa-comments", cards: [{ q: "Conditionnel hypothétique", a: "Si + Imparfait du subjonctif → Conditionnel simple.", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Argumentation</h3><p>Expresiones de contraste : Sin embargo, A pesar de todo.</p>", quizzes: [{ q: "Traduire 'Malgré tout'", options: ["Sin embargo", "A pesar de todo", "Por lo tanto", "Aunque"], correct: 1 }] },
    "anglais": { title: "Anglais", icon: "fa-language", cards: [{ q: "Nuance de contraste", a: "However, Nevertheless, Whereas, Although.", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Essay Writing</h3><p>Structure : Introduction with Hook, Thesis statement, Body paragraphs, Conclusion.</p>", quizzes: [{ q: "Lequel exprime une cause ?", options: ["Therefore", "Due to / Because of", "Although", "Meanwhile"], correct: 1 }] },
    "ens-svt": { title: "Ens. Sc. SVT", icon: "fa-dna", cards: [{ q: "Effet de Serre additionnel", a: "Amplification par les activités humaines (GES : CO2, CH4, N2O).", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Climat & Durabilité</h3><p>Bilan radiatif de la Terre.</p>", quizzes: [{ q: "Quel gaz n'est pas considéré comme un GES majeur ?", options: ["Dioxyde de carbone", "Méthane", "Azote (N2)", "Vapeur d'eau"], correct: 2 }] },
    "ens-pc": { title: "Ens. Sc. PC", icon: "fa-atom", cards: [{ q: "Relation Énergie-Puissance", a: "E = P * Δt (Énergie en Joules, Puissance en Watts, Temps en secondes).", interval: 1 }], course: "<h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-2'>Son & Lumière</h3><p>Intensité sonore et niveau d'intensité en décibels (dB).</p>", quizzes: [{ q: "Quelle est l'unité de la puissance électrique ?", options: ["Joule", "Volt", "Watt", "Ampère"], correct: 2 }] }
};

// Stockage centralisé et persistant
let database = JSON.parse(localStorage.getItem("studyflow_avant_garde_db")) || defaultDatabase;
let currentSubjectKey = "math-spe";
let currentCardIndex = 0;
let currentQuizData = [], currentQuestionIndex = 0, score = 0;

let userStats = JSON.parse(localStorage.getItem("studyflow_avant_garde_stats")) || { streak: 1, lastLogin: new Date().toDateString(), totalQuizzes: 0, totalCardsViewed: 0 };
let masteryLevels = JSON.parse(localStorage.getItem("studyflow_avant_garde_mastery")) || {};
let errorCarnet = JSON.parse(localStorage.getItem("studyflow_avant_garde_errors")) || [];
let controlsList = JSON.parse(localStorage.getItem("studyflow_avant_garde_controls")) || [
    { title: "Bac Blanc de Philosophie", date: "2026-04-12" }
];

// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("studyflow_dark") === "true") document.documentElement.classList.add("dark");

darkModeToggle.onclick = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("studyflow_dark", document.documentElement.classList.contains("dark"));
};

// Streak & Dates Bac
const todayStr = new Date().toDateString();
if (userStats.lastLogin !== todayStr) {
    userStats.streak++;
    userStats.lastLogin = todayStr;
    localStorage.setItem("studyflow_avant_garde_stats", JSON.stringify(userStats));
}
document.getElementById("streakDisplay").textContent = `${userStats.streak} jours`;

const today = new Date();
document.getElementById("dateDisplay").innerHTML = `<i class="fa-regular fa-calendar mr-1"></i> ${today.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}`;
let bacYear = today.getMonth() >= 6 ? today.getFullYear() + 1 : today.getFullYear();
const bacDate = new Date(`${bacYear}-06-15T08:00:00`);
const diffDays = Math.ceil(Math.abs(bacDate - today) / (1000 * 60 * 60 * 24));
document.getElementById("bacCountdown").innerHTML = `<i class="fa-solid fa-hourglass-half mr-1"></i> J-${diffDays} Bac`;

// Gestion des onglets
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'text-indigo-600', 'dark:text-indigo-400', 'border-indigo-600');
            b.classList.add('text-slate-500', 'dark:text-slate-400', 'border-transparent');
        });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        
        btn.classList.add('active', 'text-indigo-600', 'dark:text-indigo-400', 'border-indigo-600');
        btn.classList.remove('text-slate-500', 'dark:text-slate-400', 'border-transparent');
        document.getElementById(btn.dataset.target).classList.remove('hidden');

        if(btn.dataset.target === 'errors') renderErrorCarnet();
        if(btn.dataset.target === 'planning') renderControls();
        if(btn.dataset.target !== 'quiz') resetQuizUI();
    });
});

// Initialisation des matières
function initSubjects() {
    const subjectFilter = document.getElementById("subjectFilter");
    subjectFilter.innerHTML = "";
    Object.keys(database).forEach(key => {
        const item = database[key];
        const activeClass = key === currentSubjectKey ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25" : "bg-white/70 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800";
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
    resetQuizUI();
}

function renderContent() {
    const subject = database[currentSubjectKey];
    document.getElementById("currentSubjectLabel").textContent = subject.title;
    document.getElementById("cardSubjectBadge").textContent = subject.title;
    
    if (subject.cards.length > 0) {
        document.getElementById("cardQuestion").textContent = subject.cards[currentCardIndex].q;
        document.getElementById("cardAnswer").textContent = subject.cards[currentCardIndex].a;
        document.getElementById("cardCounter").textContent = `${currentCardIndex + 1} / ${subject.cards.length}`;
        document.getElementById("spacedModeIndicator").textContent = `Rappel : +${subject.cards[currentCardIndex].interval || 1}j`;
    } else {
        document.getElementById("cardQuestion").textContent = "Aucune flashcard. Créez-en une !";
        document.getElementById("cardAnswer").textContent = "--";
        document.getElementById("cardCounter").textContent = "0 / 0";
    }
    
    document.getElementById("prevBtn").disabled = currentCardIndex === 0;
    document.getElementById("nextBtn").disabled = currentCardIndex >= subject.cards.length - 1;
    document.getElementById("courseContent").innerHTML = subject.course;
    
    document.getElementById("masterySelect").value = masteryLevels[currentSubjectKey] || "À débuter";
    updateGlobalStats();
}

// Maîtrise & Statistiques
document.getElementById("masterySelect").onchange = (e) => {
    masteryLevels[currentSubjectKey] = e.target.value;
    localStorage.setItem("studyflow_avant_garde_mastery", JSON.stringify(masteryLevels));
    updateGlobalStats();
};

function updateGlobalStats() {
    document.getElementById("statTotalQuizzes").textContent = userStats.totalQuizzes;
    document.getElementById("statTotalCardsViewed").textContent = userStats.totalCardsViewed;
    const mastered = Object.values(masteryLevels).filter(val => val === "Maîtrisé").length;
    const totalSubjects = Object.keys(database).length;
    document.getElementById("statMasteredCount").textContent = `${mastered} / ${totalSubjects}`;
    const pct = Math.round((mastered / totalSubjects) * 100);
    document.getElementById("masteryProgressBar").style.width = `${pct}%`;
}

// Flashcard Actions & Spaced Repetition (Algorithme SM-2 simplifié)
document.getElementById("flashcard").onclick = function() { 
    this.classList.toggle("flipped"); 
    userStats.totalCardsViewed++;
    localStorage.setItem("studyflow_avant_garde_stats", JSON.stringify(userStats));
    updateGlobalStats();
};

window.rateCard = (days) => {
    const subject = database[currentSubjectKey];
    if(subject.cards.length > 0) {
        subject.cards[currentCardIndex].interval = days;
        localStorage.setItem("studyflow_avant_garde_db", JSON.stringify(database));
        alert(`Carte enregistrée ! Prochaine révision dans ${days} jour(s).`);
        if(currentCardIndex < subject.cards.length - 1) currentCardIndex++;
        document.getElementById("flashcard").classList.remove("flipped");
        setTimeout(renderContent, 150);
    }
};

document.getElementById("prevBtn").onclick = () => { if(currentCardIndex > 0) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex--; renderContent(); }, 150); } };
document.getElementById("nextBtn").onclick = () => { if(currentCardIndex < database[currentSubjectKey].cards.length - 1) { document.getElementById("flashcard").classList.remove("flipped"); setTimeout(() => { currentCardIndex++; renderContent(); }, 150); } };

// --- MODAL AJOUT CARTE ---
const cardModal = document.getElementById("cardModal");
document.getElementById("openCardModalBtn").onclick = () => cardModal.classList.remove("hidden") || cardModal.classList.add("flex");
document.getElementById("closeCardModal").onclick = () => cardModal.classList.add("hidden") || cardModal.classList.remove("flex");

document.getElementById("addCardForm").onsubmit = (e) => {
    e.preventDefault();
    const q = document.getElementById("newCardQ").value.trim();
    const a = document.getElementById("newCardA").value.trim();
    if(q && a) {
        database[currentSubjectKey].cards.push({ q, a, interval: 1 });
        localStorage.setItem("studyflow_avant_garde_db", JSON.stringify(database));
        document.getElementById("newCardQ").value = "";
        document.getElementById("newCardA").value = "";
        cardModal.classList.add("hidden"); cardModal.classList.remove("flex");
        renderContent();
        alert("Flashcard ajoutée avec succès !");
    }
};

// --- QUIZ & CARNET D'ERREURS ---
const startScreen = document.getElementById("quizStartScreen");
const activeScreen = document.getElementById("quizActiveScreen");
const resultScreen = document.getElementById("quizResultScreen");

function resetQuizUI() {
    startScreen.classList.remove("hidden");
    activeScreen.classList.add("hidden"); activeScreen.classList.remove("flex");
    resultScreen.classList.add("hidden");
}

document.getElementById("startQuizBtn").onclick = () => {
    currentQuizData = database[currentSubjectKey].quizzes;
    if (!currentQuizData || currentQuizData.length === 0) { alert("Aucun quiz disponible pour cette matière."); return; }
    score = 0; currentQuestionIndex = 0;
    startScreen.classList.add("hidden");
    activeScreen.classList.remove("hidden"); activeScreen.classList.add("flex");
    loadQuizQuestion();
};

function loadQuizQuestion() {
    const q = currentQuizData[currentQuestionIndex];
    document.getElementById("quizQuestionText").textContent = q.q;
    document.getElementById("quizProgress").textContent = `Question ${currentQuestionIndex + 1}/${currentQuizData.length}`;
    document.getElementById("quizScoreDisplay").textContent = `Score : ${score}`;
    const optsContainer = document.getElementById("quizOptionsContainer");
    optsContainer.innerHTML = "";
    document.getElementById("nextQuizBtn").classList.add("hidden");

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition shadow-sm";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx, btn, q);
        optsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIdx, btn, questionObj) {
    const buttons = document.getElementById("quizOptionsContainer").querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);
    const correct = questionObj.correct;

    if (selectedIdx === correct) {
        btn.classList.add("bg-emerald-100", "dark:bg-emerald-950", "border-emerald-500", "text-emerald-800", "dark:text-emerald-300");
        score++;
    } else {
        btn.classList.add("bg-rose-100", "dark:bg-rose-950", "border-rose-500", "text-rose-800", "dark:text-rose-300");
        buttons[correct].classList.add("bg-emerald-100", "dark:bg-emerald-950", "border-emerald-500");
        if(!errorCarnet.some(e => e.q === questionObj.q)) {
            errorCarnet.push({ subject: database[currentSubjectKey].title, q: questionObj.q, a: questionObj.options[correct] });
            localStorage.setItem("studyflow_avant_garde_errors", JSON.stringify(errorCarnet));
            document.getElementById("errorBadgeCount").textContent = errorCarnet.length;
        }
    }
    document.getElementById("nextQuizBtn").classList.remove("hidden");
}

document.getElementById("nextQuizBtn").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuizQuestion();
    } else {
        activeScreen.classList.add("hidden"); activeScreen.classList.remove("flex");
        resultScreen.classList.remove("hidden");
        document.getElementById("quizFinalScore").textContent = `${score}/${currentQuizData.length}`;
        userStats.totalQuizzes++;
        localStorage.setItem("studyflow_avant_garde_stats", JSON.stringify(userStats));
        updateGlobalStats();
    }
};

document.getElementById("restartQuizBtn").onclick = () => document.getElementById("startQuizBtn").click();

function renderErrorCarnet() {
    const container = document.getElementById("errorListContent");
    document.getElementById("errorBadgeCount").textContent = errorCarnet.length;
    if (errorCarnet.length === 0) {
        container.innerHTML = "<p class='text-xs text-slate-400 italic text-center py-6'>Aucune erreur enregistrée. Excellent travail ! 🌟</p>";
        return;
    }
    container.innerHTML = "";
    errorCarnet.forEach((err, idx) => {
        const div = document.createElement("div");
        div.className = "p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50 text-xs flex justify-between items-center gap-2";
        div.innerHTML = `<div><span class='font-bold text-rose-700 dark:text-rose-400'>[${err.subject}]</span> <p class='text-slate-700 dark:text-slate-300 font-medium mt-0.5'>${err.q}</p><p class='text-emerald-700 dark:text-emerald-400 text-[11px] mt-1'>Réponse : ${err.a}</p></div><button onclick="removeError(${idx})" class="text-slate-400 hover:text-rose-600 p-1"><i class="fa-solid fa-check"></i></button>`;
        container.appendChild(div);
    });
}

window.removeError = (idx) => {
    errorCarnet.splice(idx, 1);
    localStorage.setItem("studyflow_avant_garde_errors", JSON.stringify(errorCarnet));
    renderErrorCarnet();
};

window.clearErrors = () => {
    errorCarnet = [];
    localStorage.setItem("studyflow_avant_garde_errors", JSON.stringify(errorCarnet));
    renderErrorCarnet();
};

// --- PLANNING & CONTRÔLES ---
const controlModal = document.getElementById("controlModal");
document.getElementById("openControlModalBtn").onclick = () => controlModal.classList.remove("hidden") || controlModal.classList.add("flex");
document.getElementById("closeControlModal").onclick = () => controlModal.classList.add("hidden") || controlModal.classList.remove("flex");

document.getElementById("addControlForm").onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("ctrlTitle").value.trim();
    const date = document.getElementById("ctrlDate").value;
    if(title && date) {
        controlsList.push({ title, date });
        localStorage.setItem("studyflow_avant_garde_controls", JSON.stringify(controlsList));
        document.getElementById("ctrlTitle").value = "";
        document.getElementById("ctrlDate").value = "";
        controlModal.classList.add("hidden"); controlModal.classList.remove("flex");
        renderControls();
    }
};

function renderControls() {
    const container = document.getElementById("controlListContainer");
    if(controlsList.length === 0) {
        container.innerHTML = "<p class='text-xs text-slate-400 italic text-center py-4'>Aucun contrôle planifié.</p>";
        return;
    }
    container.innerHTML = "";
    controlsList.sort((a,b) => new Date(a.date) - new Date(b.date)).forEach((ctrl, idx) => {
        const div = document.createElement("div");
        div.className = "p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 text-xs flex justify-between items-center";
        div.innerHTML = `<div><span class='font-bold text-purple-700 dark:text-purple-300'>${ctrl.title}</span><p class='text-slate-500 dark:text-slate-400 text-[11px] mt-0.5'><i class='fa-regular fa-calendar mr-1'></i> Échéance : ${ctrl.date}</p></div><button onclick="removeControl(${idx})" class="text-slate-400 hover:text-rose-500"><i class="fa-solid fa-trash"></i></button>`;
        container.appendChild(div);
    });
}

window.removeControl = (idx) => {
    controlsList.splice(idx, 1);
    localStorage.setItem("studyflow_avant_garde_controls", JSON.stringify(controlsList));
    renderControls();
};

// --- RECHERCHE GLOBALE ---
const globalSearchInput = document.getElementById("globalSearchInput");
const globalSearchResults = document.getElementById("globalSearchResults");

globalSearchInput.oninput = (e) => {
    const query = e.target.value.toLowerCase().trim();
    if(query.length < 2) {
        globalSearchResults.classList.add("hidden");
        return;
    }
    globalSearchResults.innerHTML = "";
    let matches = [];
    Object.keys(database).forEach(key => {
        const subj = database[key];
        subj.cards.forEach(c => {
            if(c.q.toLowerCase().includes(query) || c.a.toLowerCase().includes(query)) {
                matches.push({ subject: subj.title, text: c.q, key });
            }
        });
    });

    if(matches.length === 0) {
        globalSearchResults.innerHTML = "<p class='text-xs text-slate-400 text-center py-2'>Aucun résultat trouvé.</p>";
    } else {
        matches.slice(0, 5).forEach(m => {
            const div = document.createElement("div");
            div.className = "p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-xs";
            div.innerHTML = `<span class='font-bold text-indigo-600 dark:text-indigo-400'>[${m.subject}]</span> <p class='text-slate-700 dark:text-slate-300 truncate'>${m.text}</p>`;
            div.onclick = () => {
                selectSubject(m.key);
                globalSearchResults.classList.add("hidden");
                globalSearchInput.value = "";
            };
            globalSearchResults.appendChild(div);
        });
    }
    globalSearchResults.classList.remove("hidden");
};

// --- EXPORT / IMPORT ---
window.exportData = () => {
    const backup = { database, userStats, masteryLevels, errorCarnet, controlsList };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "studyflow_backup.json";
    a.click();
};

window.importData = (event) => {
    const file = event.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if(data.database) database = data.database;
            if(data.userStats) userStats = data.userStats;
            if(data.masteryLevels) masteryLevels = data.masteryLevels;
            if(data.errorCarnet) errorCarnet = data.errorCarnet;
            if(data.controlsList) controlsList = data.controlsList;
            
            localStorage.setItem("studyflow_avant_garde_db", JSON.stringify(database));
            localStorage.setItem("studyflow_avant_garde_stats", JSON.stringify(userStats));
            localStorage.setItem("studyflow_avant_garde_mastery", JSON.stringify(masteryLevels));
            localStorage.setItem("studyflow_avant_garde_errors", JSON.stringify(errorCarnet));
            localStorage.setItem("studyflow_avant_garde_controls", JSON.stringify(controlsList));
            
            alert("Profil importé avec succès !");
            location.reload();
        } catch(err) {
            alert("Erreur lors de l'importation du fichier JSON.");
        }
    };
    reader.readAsText(file);
};

// --- POMODORO ---
let selectedMinutes = 25;
let timerSeconds = selectedMinutes * 60, timerInterval = null, isTimerRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const pomodoroDurationSelect = document.getElementById("pomodoroDuration");

pomodoroDurationSelect.onchange = (e) => {
    if(!isTimerRunning) {
        selectedMinutes = parseInt(e.target.value);
        timerSeconds = selectedMinutes * 60;
        updateTimerDisplay();
    }
};

function updateTimerDisplay() {
    const min = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const sec = (timerSeconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
}

startTimerBtn.onclick = () => {
    pomodoroDurationSelect.disabled = true;
    if (isTimerRunning) {
        clearInterval(timerInterval); isTimerRunning = false;
        startTimerBtn.innerHTML = `<i class="fa-solid fa-play mr-1"></i> Démarrer`;
        startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
    } else {
        isTimerRunning = true;
        startTimerBtn.innerHTML = `<i class="fa-solid fa-pause mr-1"></i> Pause`;
        startTimerBtn.classList.replace("bg-indigo-600", "bg-amber-500");
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--; updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                pomodoroDurationSelect.disabled = false;
                alert("Session Deep Work terminée ! Prenez une pause méritée.");
                timerSeconds = selectedMinutes * 60;
                updateTimerDisplay();
                startTimerBtn.innerHTML = `<i class="fa-solid fa-play mr-1"></i> Démarrer`;
                startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
            }
        }, 1000);
    }
};

document.getElementById("resetTimer").onclick = () => {
    clearInterval(timerInterval); isTimerRunning = false;
    pomodoroDurationSelect.disabled = false;
    timerSeconds = selectedMinutes * 60;
    updateTimerDisplay();
    startTimerBtn.innerHTML = `<i class="fa-solid fa-play mr-1"></i> Démarrer`;
    startTimerBtn.classList.replace("bg-amber-500", "bg-indigo-600");
};

// --- TO-DO LIST ---
const todoForm = document.getElementById("todoForm"), todoInput = document.getElementById("todoInput"), todoList = document.getElementById("todoList");
let todos = JSON.parse(localStorage.getItem("studyflow_avant_garde_todos")) || [{ text: "Valider 1 session de flashcards", done: false }];
function saveAndRenderTodos() {
    localStorage.setItem("studyflow_avant_garde_todos", JSON.stringify(todos));
    todoList.innerHTML = "";
    todos.forEach((t, idx) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 text-xs gap-2 border border-slate-200/50 dark:border-slate-800";
        li.innerHTML = `<span class="flex-1 cursor-pointer font-medium ${t.done ? 'line-through text-slate-400 dark:text-slate-600' : 'text-slate-700 dark:text-slate-300'}" onclick="toggleTodo(${idx})">${t.text}</span><button onclick="deleteTodo(${idx})" class="text-slate-300 hover:text-rose-500"><i class="fa-solid fa-trash"></i></button>`;
        todoList.appendChild(li);
    });
}
window.toggleTodo = (i) => { todos[i].done = !todos[i].done; saveAndRenderTodos(); };
window.deleteTodo = (i) => { todos.splice(i, 1); saveAndRenderTodos(); };
todoForm.onsubmit = (e) => { e.preventDefault(); if(todoInput.value.trim()) { todos.push({ text: todoInput.value.trim(), done: false }); todoInput.value=""; saveAndRenderTodos(); } };

initSubjects(); renderContent(); saveAndRenderTodos(); renderErrorCarnet(); renderControls();