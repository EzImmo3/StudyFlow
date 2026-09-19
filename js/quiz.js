// Module Quiz Interactif multi-questions pour StudyFlow

const SAMPLE_QUIZZES = {
    "Suites": [
        {
            question: "Quelle est la nature de la suite définie par u(n+1) = 2u(n) + 3 ?",
            options: ["Arithmétique", "Géométrique", "Arithmético-géométrique", "Constante"],
            correct: 2,
            explanation: "Elle combine une multiplication par un réel et l'ajout d'une constante."
        },
        {
            question: "Si une suite tend vers $+\\infty$ et qu'elle est minorée par un nombre réel M, que peut-on dire ?",
            options: ["Elle converge obligatoirement", "Elle diverge vers $+\\infty$", "Rien du tout", "Elle est périodique"],
            correct: 1,
            explanation: "Une suite croissante majorée converge, mais une suite non bornée ou tendant vers l'infini diverge vers l'infini."
        }
    ],
    "Quelles sont les sources et les défis de la croissance économique ?": [
        {
            question: "Que mesure principalement le PIB ?",
            options: ["Le bien-être général", "La production totale de biens et services marchands et non marchands", "Les inégalités de revenus", "Le niveau d'inflation"],
            correct: 1,
            explanation: "Le PIB mesure la valeur totale de la production de biens et services sur un territoire donné."
        },
        {
            question: "Qu'est-ce que la productivité globale des facteurs (PGF) ?",
            options: ["La quantité de travail totale", "L'efficacité de la combinaison productive (travail et capital)", "Le taux de marge des entreprises", "La dette publique"],
            correct: 1,
            explanation: "La PGF mesure ce qui reste de la croissance de la production une fois pris en compte l'accroissement du volume du travail et du capital."
        }
    ],
    "La conscience": [
        {
            question: "Quelle formule résume la certitude de la conscience chez Descartes ?",
            options: ["L'homme est un animal politique", "Je pense, donc je suis", "Dieu est mort", "Le moi n'est pas maître dans sa propre maison"],
            correct: 1,
            explanation: "Le cogito cartésien fonde la conscience comme première certitude incontestable."
        }
    ]
};

export const QuizManager = {
    renderUI(container, chapterName) {
        const questions = SAMPLE_QUIZZES[chapterName] || [
            {
                question: `Question d'entraînement générale sur le chapitre : ${chapterName}`,
                options: ["Option A (Fausse)", "Option B (Correcte - Bonne maîtrise)", "Option C (Fausse)", "Option D (Fausse)"],
                correct: 1,
                explanation: "Ceci est une explication type pour valider les notions fondamentales de ce chapitre."
            },
            {
                question: `Quel est l'enjeu principal de l'étude de "${chapterName}" au Bac ?`,
                options: ["Apprendre par cœur sans comprendre", "Savoir mobiliser les concepts et structurer sa pensée", "Ignorer les définitions", "Recopier le cours textuellement"],
                correct: 1,
                explanation: "L'épreuve du Bac exige la maîtrise conceptuelle et la rigueur d'argumentation."
            }
        ];

        let currentQ = 0;
        let score = 0;

        const showQuestion = () => {
            if (currentQ >= questions.length) {
                container.innerHTML = `
                    <div class="max-w-xl mx-auto p-8 bg-slate-800 border border-slate-700 rounded-2xl text-center space-y-4 my-8 shadow-xl">
                        <span class="text-5xl">🏆</span>
                        <h2 class="text-2xl font-bold text-white">Quiz Terminé !</h2>
                        <p class="text-slate-300 text-lg">Score obtenu : <span class="font-bold text-emerald-400">${score} / ${questions.length}</span></p>
                        <a href="#" class="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition">Retour au tableau de bord</a>
                    </div>
                `;
                return;
            }

            const q = questions[currentQ];
            container.innerHTML = `
                <div class="max-w-xl mx-auto p-6 space-y-6 my-6">
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-blue-400 hover:underline text-sm">&larr; Quitter</a>
                        <span class="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">Question ${currentQ + 1} / ${questions.length}</span>
                    </div>

                    <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-6">
                        <h3 class="text-xl font-bold text-white">${q.question}</h3>
                        
                        <div class="space-y-3">
                            ${q.options.map((opt, idx) => `
                                <button data-idx="${idx}" class="option-btn w-full text-left bg-slate-900 hover:bg-slate-700 border border-slate-700 p-4 rounded-xl text-slate-200 transition font-medium">
                                    ${opt}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selectedIdx = parseInt(e.target.getAttribute('data-idx'));
                    if (selectedIdx === q.correct) {
                        score++;
                        e.target.classList.remove('bg-slate-900', 'hover:bg-slate-700');
                        e.target.classList.add('bg-emerald-600/30', 'border-emerald-500', 'text-emerald-200');
                    } else {
                        e.target.classList.remove('bg-slate-900', 'hover:bg-slate-700');
                        e.target.classList.add('bg-rose-600/30', 'border-rose-500', 'text-rose-200');
                    }

                    setTimeout(() => {
                        currentQ++;
                        showQuestion();
                    }, 1400);
                });
            });
        };

        showQuestion();
    }
};