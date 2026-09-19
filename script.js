// Base de données complète et ultra-développée (Contenu de cours, flashcards et quiz type bac)
const defaultDatabase = {
    "math-spe": {
        title: "Mathématiques Spé", icon: "fa-calculator",
        cards: [
            { q: "Qu'est-ce qu'une démonstration par récurrence ?", a: "1. Initialisation : Prouver que P(n0) est vraie.\n2. Hérédité : Supposer P(k) vraie pour un entier k ≥ n0, et montrer que P(k+1) est vraie.\n3. Conclusion : Par récurrence, P(n) est vraie pour tout n ≥ n0.", interval: 1 },
            { q: "Étude de la convexité d'une fonction", a: "Une fonction f dérivable est convexe sur un intervalle si sa dérivée f' est croissante, ce qui équivaut à f''(x) ≥ 0. Le graphe est alors situé au-dessus de ses tangentes.", interval: 1 },
            { q: "Théorème des Valeurs Intermédiaires (TVI)", a: "Si f est continue sur [a, b], alors pour tout réel k compris entre f(a) et f(b), l'équation f(x) = k admet au moins une solution c dans [a, b].", interval: 1 },
            { q: "Limite d'une suite géométrique (q^n)", a: "- Si q > 1 : lim = +∞\n- Si -1 < q < 1 : lim = 0\n- Si q = 1 : lim = 1\n- Si q ≤ -1 : pas de limite.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Analyse, Suites & Fonctions</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Suites numériques et récurrence :</b> Le raisonnement par récurrence est un outil fondamental en terminale pour valider des propriétés sur les entiers naturels. Il est impératif de bien rédiger l'étape d'hérédité en précisant clairement l'hypothèse de récurrence.</p>
                <p><b>2. Continuité et Convexité :</b> La convexité permet d'analyser la courbure d'une fonction. Un point d'inflexion est un point où la convexité change (où la dérivée seconde s'annule en changeant de signe).</p>
                <p><b>3. Logarithme népérien et exponentielle :</b> Maîtriser les croissances comparées : lim (e^x / x) = +∞ en +∞, et lim (x * ln(x)) = 0 en 0+.</p>
            </div>
        `,
        quizzes: [
            { q: "Quelle est la dérivée de la fonction x ↦ ln(u(x)) ?", options: ["u'(x) / u(x)", "u'(x) * e^u(x)", "1 / u(x)", "u''(x) / u'(x)"], correct: 0 },
            { q: "Si une suite (u_n) est majorée et croissante, alors :", options: ["Elle diverge vers +∞", "Elle est nécessairement minorée par 0", "Elle converge vers un nombre réel L", "Elle est alternée"], correct: 2 },
            { q: "Soit f une fonction dont la dérivée seconde est strictement positive sur R. Sa courbe représentative est :", options: ["Concave", "Convexe", "Constante", "Une droite affine"], correct: 1 }
        ]
    },
    "math-exp": {
        title: "Maths Expertes", icon: "fa-square-root-variable",
        cards: [
            { q: "Forme exponentielle d'un nombre complexe", a: "z = r * e^(iθ) où r = |z| est le module et θ = arg(z) est un argument.", interval: 1 },
            { q: "Formule de Moivre", a: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) pour tout entier n.", interval: 1 },
            { q: "Divisibilité dans Z", a: "On dit que a divise b (a | b) s'il existe un entier k tel que b = a * k.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Nombres Complexes & Arithmétique</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Nombres complexes (partie 2) :</b> Les racines n-ièmes de l'unité et la résolution d'équations polynomiales dans C s'appuient fortement sur la forme trigonométrique et exponentielle.</p>
                <p><b>2. Arithmétique :</b> Le théorème de Bézout et le théorème de Gauss sont les piliers pour résoudre les équations diophantiennes et étudier les congruences.</p>
            </div>
        `,
        quizzes: [
            { q: "Quel est le module du nombre complexe z = 3 - 4i ?", options: ["1", "5", "7", "25"], correct: 1 },
            { q: "Que vaut i^2 ?", options: ["1", "-1", "i", "-i"], correct: 1 }
        ]
    },
    "ses": {
        title: "SES Spé", icon: "fa-chart-line",
        cards: [
            { q: "Qu'est-ce que la PGF (Productivité Globale des Facteurs) ?", a: "C'est la part de la croissance économique qui ne s'explique pas par l'augmentation de la quantité de travail ou de capital, mais par le progrès technique.", interval: 1 },
            { q: "Qu'appelle-t-on défaillance du marché ?", a: "Une situation où le marché alloue les ressources de manière sous-optimale (ex: externalités, biens publics, asymétries d'information).", interval: 1 },
            { q: "Politique conjoncturelle vs Structurelle", a: "Conjoncturelle : action à court terme (stabilisation de l'économie). Structurelle : action à long terme (modification du cadre de l'économie).", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Croissance, Crises & Politiques Économiques</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Sources de la croissance :</b> Accumulation du capital physique, humain et technologique (progrès technique endogène selon Schumpeter et la destruction créatrice).</p>
                <p><b>2. Justice sociale et inégalités :</b> Rôle de la protection sociale, de la fiscalité redistributive et des services collectifs dans la réduction des inégalités.</p>
            </div>
        `,
        quizzes: [
            { q: "Lequel de ces biens est un bien collectif pur (non-excluable et non-rival) ?", options: ["Une place de cinéma", "L'éclairage public", "Une voiture", "Un abonnement Netflix"], correct: 1 },
            { q: "Qui est l'auteur du concept de 'destruction créatrice' ?", options: ["John Maynard Keynes", "Joseph Schumpeter", "Adam Smith", "Thomas Piketty"], correct: 1 }
        ]
    },
    "philo": {
        title: "Philosophie", icon: "fa-brain",
        cards: [
            { q: "Légal vs Légitime", a: "Légal = ce qui est conforme aux lois écrites d'un État (droit positif). Légitime = ce qui est conforme à la justice morale et universelle.", interval: 1 },
            { q: "Déterminisme vs Libre-arbitre", a: "Déterminisme : tout effet est causé par des lois naturelles/sociales. Libre-arbitre : capacité de la volonté à s'autodéterminer indépendamment des contraintes.", interval: 1 },
            { q: "La conscience selon Descartes", a: "'Cogito, ergo sum' (Je pense, donc je suis). La conscience est la certitude première de l'existence du sujet pensant.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Notions Fondamentales du Baccalauréat</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. La Vérité & La Raison :</b> Distinction entre la vérité scientifique (démontrée/vérifiée) et les croyances ou opinions (doxa). Rôle de la méthode cartésienne.</p>
                <p><b>2. La Liberté :</b> Spinoza définit la liberté non comme une absence de cause, mais comme la conscience de la nécessité et l'affranchissement des passions tristes.</p>
            </div>
        `,
        quizzes: [
            { q: "Quel philosophe a affirmé 'On ne naît pas femme, on le devient' ?", options: ["Jean-Paul Sartre", "Simone de Beauvoir", "Hannah Arendt", "René Descartes"], correct: 1 },
            { q: "Pour Emmanuel Kant, le devoir moral repose sur :", options: ["La recherche du bonheur personnel", "L'impératif catégorique", "L'utilité sociale", "La crainte de la loi pénale"], correct: 1 }
        ]
    },
    "hist-geo": {
        title: "Histoire-Géo", icon: "fa-earth-americas",
        cards: [
            { q: "Qu'est-ce que la maritimisation ?", a: "Le processus d'accroissement des échanges internationaux par voie maritime, illustrant la littoralisation des hommes et des activités.", interval: 1 },
            { q: "La bipolarisation de la Guerre Froide", a: "Opposition entre le bloc occidental (États-Unis, capitalisme) et le bloc soviétique (URSS, communisme) de 1947 à 1991.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Mondes en mutation & Géopolitique</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Histoire :</b> Les relations internationales depuis 1945, la construction européenne, et les nouveaux enjeux de puissance au XXIe siècle.</p>
                <p><b>2. Géographie :</b> Les espaces maritimes, enjeux géostratégiques et environnementaux (la 'mer, nouveau territoire mondial').</p>
            </div>
        `,
        quizzes: [
            { q: "En quelle année s'effondre le mur de Berlin ?", options: ["1989", "1991", "1975", "1961"], correct: 0 },
            { q: "Quel canal stratégique relie la mer Méditerranée à la mer Rouge ?", options: ["Canal de Panama", "Canal de Suez", "Canal de Kiel", "Canal de Corinthe"], correct: 1 }
        ]
    },
    "emc": {
        title: "EMC", icon: "fa-scale-balanced",
        cards: [
            { q: "Le rôle du Conseil Constitutionnel en France", a: "Il veille à la conformité des lois à la Constitution (contrôle de constitutionnalité a priori et a posteriori via la QPC).", interval: 1 },
            { q: "Qu'est-ce que la QPC ?", a: "La Question Prioritaire de Constitutionnalité permet à tout justiciable de contester la constitutionnalité d'une loi applicable à son litige.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : La Démocratie & l'Engagement</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Principes démocratiques :</b> Séparation des pouvoirs (exécutif, législatif, judiciaire), pluralisme politique et respect des libertés fondamentales.</p>
                <p><b>2. L'engagement :</b> Formes de participation citoyenne (vote, militantisme, association, service civique).</p>
            </div>
        `,
        quizzes: [
            { q: "Combien de membres (les 'sages') composent le Conseil Constitutionnel ?", options: ["5", "9", "12", "15"], correct: 1 },
            { q: "Que garantit la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?", options: ["Les impôts locaux", "Les libertés individuelles et l'égalité en droits", "La gratuité des transports", "Le monopole bancaire"], correct: 1 }
        ]
    },
    "espagnol": {
        title: "Espagnol", icon: "fa-comments",
        cards: [
            { q: "Concordance des temps au subjonctif (hypothèse)", a: "Si + Imparfait du subjonctif (si tuviera) → Conditionnel simple (tendría).", interval: 1 },
            { q: "Marqueurs de concession", a: "A pesar de que + subjonctif / indicatif, Aunque + subjonctif (si l'action est incertaine).", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Grammaire & Expression Écrite</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Maîtrise du subjonctif :</b> Obligatoire après les verbes de volonté, de doute, d'émotion et les conjonctions de temps (cuando, hasta que) lorsqu'elles se projettent dans le futur.</p>
                <p><b>2. Thématiques culturelles :</b> L'engagement artistique, la mémoire historique et les défis environnementaux en Espagne et en Amérique latine.</p>
            </div>
        `,
        quizzes: [
            { q: "Traduire 'Bien qu'il pleuve' :", options: ["Aunque llueve", "Aunque llueva", "A pesar de que llueve", "Por mucho que llueve"], correct: 1 },
            { q: "Quel temps utilise-t-on après 'Ojalá que...' ?", options: ["Indicatif présent", "Subjonctif présent", "Infinitif", "Conditionnel"], correct: 1 }
        ]
    },
    "anglais": {
        title: "Anglais", icon: "fa-language",
        cards: [
            { q: "Connecteurs logiques de contraste haut niveau", a: "However, Nevertheless, Nonetheless, Whereas, Albeit, On the flip side.", interval: 1 },
            { q: "Exprimer une hypothèse complexe", a: "Had I known (Si j'avais su), Provided that (À condition que), Unless (À moins que).", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Essay Writing & Idiomatic Structures</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Structure de l'essai :</b> Introduction accrocheuse (hook), problématisation claire, arguments nuancés dans les paragraphes de développement, et conclusion ouverte.</p>
                <p><b>2. Lexique thématique :</b> Innovation technology, environmental crisis, media influence, global citizenship.</p>
            </div>
        `,
        quizzes: [
            { q: "Lequel de ces mots exprime une cause (Because of) ?", options: ["Consequently", "Owing to", "Whereas", "In spite of"], correct: 1 },
            { q: "Traduire 'À moins que tu ne viennes' :", options: ["If you come", "Unless you come", "Provided you come", "As long as you come"], correct: 1 }
        ]
    },
    "ens-svt": {
        title: "Ens. Sc. SVT", icon: "fa-dna",
        cards: [
            { q: "Le bilan radiatif de la Terre", a: "Équilibre entre l'énergie solaire absorbée par la Terre et l'énergie infrarouge réémise vers l'espace. Les GES retiennent une partie de cette chaleur.", interval: 1 },
            { q: "L'effet de serre additionnel", a: "Amplification de l'effet de serre naturel due aux émissions massives de gaz à effet de serre (CO2, CH4) par les activités humaines.", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Climat, Énergie & Cellule</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Un climat à construire :</b> Variations climatiques passées et modélisations climatiques futures.</p>
                <p><b>2. Le futur énergétique :</b> Choix énergétiques, énergies renouvelables et stockage de l'énergie.</p>
            </div>
        `,
        quizzes: [
            { q: "Quel gaz contribue le plus à l'effet de serre d'origine anthropique ?", options: ["L'azote (N2)", "Le dioxyde de carbone (CO2)", "L'argon", "L'oxygène (O2)"], correct: 1 },
            { q: "Quelle est l'unité du flux thermique terrestre moyen ?", options: ["Watts par mètre carré (W/m²)", "Joules par seconde", "Volts", "Pascal"], correct: 0 }
        ]
    },
    "ens-pc": {
        title: "Ens. Sc. PC", icon: "fa-atom",
        cards: [
            { q: "Relation Énergie, Puissance et Temps", a: "E = P × Δt (Énergie en Joules ou kWh, Puissance en Watts ou kW, Temps en secondes ou heures).", interval: 1 },
            { q: "Niveau d'intensité sonore en décibels (dB)", a: "L = 10 * log(I / I_0) où I est l'intensité sonore et I_0 = 10^-12 W/m² (seuil d'audibilité).", interval: 1 }
        ],
        course: `
            <h3 class='text-base font-bold text-indigo-600 dark:text-indigo-400 mb-3'>📚 Cours Complet : Son, Lumière & Énergie</h3>
            <div class='space-y-3 text-slate-700 dark:text-slate-300'>
                <p><b>1. Son et musique :</b> Fréquence, hauteur d'un son, timbre et intensité acoustique.</p>
                <p><b>2. Image, son et informatique :</b> Numérisation, pixels, quantification et compression des données.</p>
            </div>
        `,
        quizzes: [
            { q: "Si la puissance d'un appareil est de 1000 W et qu'il fonctionne pendant 2 heures, quelle est l'énergie consommée ?", options: ["2000 Joules", "2 kWh", "500 Wh", "200 W"], correct: 1 },
            { q: "L'atténuation géométrique d'une onde sonore dépend de :", options: ["La couleur du son", "La distance à la source", "La température de l'eau", "La masse volumique de l'air"], correct: 1 }
        ]
    }
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