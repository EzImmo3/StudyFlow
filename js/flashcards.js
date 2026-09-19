// StudyFlow - Module de Flashcards & Répétition Espacée enrichi

import { StudyStore } from './store.js';

const DEFAULT_FLASHCARDS = [
    // --- MATHÉMATIQUES ---
    {
        id: 1,
        subject: 'maths',
        chapter: 'Suites',
        question: 'Qu\'est-ce qu\'une suite arithmétique ?',
        answer: 'Une suite où chaque terme s\'obtient en ajoutant un nombre fixe $r$ (la raison) au terme précédent : $u_{n+1} = u_n + r$.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 2,
        subject: 'maths',
        chapter: 'Limites des suites',
        question: 'Que dire d\'une suite croissante majorée ?',
        answer: 'Elle converge nécessairement vers une limite finie (Théorème de la convergence monotone).',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 3,
        subject: 'maths',
        chapter: 'Dérivation',
        question: 'Quelle est la dérivée de la fonction $x \\mapsto \\ln(u(x))$ ?',
        answer: 'C\'est $\\frac{u\'(x)}{u(x)}$, définie sur l\'intervalle où $u(x) > 0$.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 4,
        subject: 'maths',
        chapter: 'Loi binomiale',
        question: 'Quelles sont les conditions pour appliquer une loi binomiale $\\mathcal{B}(n, p)$ ?',
        answer: 'Répétition de $n$ épreuves de Bernoulli identiques, indépendantes, à deux issues (succès de probabilité $p$, échec $1-p$).',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },

    // --- SES ---
    {
        id: 5,
        subject: 'ses',
        chapter: 'Quelles sont les sources et les défis de la croissance économique ?',
        answer: 'La croissance économique est l\'augmentation soutenue de la valeur des biens et services (PIB) mesurée à long terme.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 6,
        subject: 'ses',
        chapter: 'Comment lutter contre le chômage ?',
        answer: 'Le chômage structurel s\'attaque par des politiques d\'allègement du coût du travail ou de formation, tandis que le chômage conjoncturel relève de politiques de relance de la demande.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 7,
        subject: 'ses',
        chapter: 'Quelles sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?',
        answer: 'La fluidité sociale désigne l\'absence de lien entre l\'origine sociale d\'un individu et sa position sociale future.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },

    // --- PHILOSOPHIE ---
    {
        id: 8,
        subject: 'philosophie',
        chapter: 'La conscience',
        answer: 'Selon Descartes, la conscience est une certitude immédiate ("Je pense, donc je suis"). C\'est la faculté de se représenter soi-même et le monde.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 9,
        subject: 'philosophie',
        chapter: 'La liberté',
        answer: 'Pour Spinoza, la liberté est une illusion si l\'on ignore les causes qui nous déterminent ; elle réside dans la compréhension de cette nécessité (l\'homme libre est conscient de ses actes).',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 10,
        subject: 'philosophie',
        chapter: 'L\'État',
        answer: 'Pour Hobbes, l\'État est issu d\'un "contrat social" né de la nécessité de sortir de l\'état de nature qui est une guerre de tous contre tous ("l\'homme est un loup pour l\'homme").',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },

    // --- HISTOIRE-GÉOGRAPHIE ---
    {
        id: 11,
        subject: 'histoire-geo',
        chapter: 'La guerre froide',
        answer: 'Conflit idéologique, géopolitique et économique (1947-1991) opposant le bloc occidental mené par les États-Unis et le bloc soviétique mené par l\'URSS.',
        interval: 1, repetitions: 0, nextReview: Date.now()
    },
    {
        id: 12,
        subject: 'histoire-geo',
        chapter: 'Mers et océans, vecteurs essentiels de la mondialisation',
        answer: 'La "maritimisation" désigne l\'accroissement des échanges internationaux par voie maritime, s\'appuyant sur des routes maritimes et des hubs portuaires stratégiques (les "chokepoints").',
        interval: 1, repetitions: 0, nextReview: Date.now()
    }
];

export const FlashcardManager = {
    getCards() {
        const state = StudyStore.getState();
        if (!state.flashcards || state.flashcards.length === 0) {
            state.flashcards = DEFAULT_FLASHCARDS;
            StudyStore.saveState(state);
        }
        return state.flashcards;
    },

    saveCards(cards) {
        const state = StudyStore.getState();
        state.flashcards = cards;
        StudyStore.saveState(state);
    },

    updateCardReview(cardId, performance) {
        let cards = this.getCards();
        const card = cards.find(c => c.id === cardId);
        if (!card) return;

        const state = StudyStore.getState();

        if (performance === 'hard') {
            card.interval = 1;
            card.repetitions = 0;
        } else if (performance === 'medium') {
            card.interval = Math.max(1, card.interval * 2);
            card.repetitions += 1;
            // Booste un peu la maîtrise du programme si relié
            this.boostMastery(state, card.chapter, 10);
        } else if (performance === 'easy') {
            card.interval = Math.max(1, card.interval * 4);
            card.repetitions += 2;
            // Booste plus fortement la maîtrise
            this.boostMastery(state, card.chapter, 20);
        }

        card.nextReview = Date.now() + (card.interval * 24 * 60 * 60 * 1000);
        this.saveCards(cards);
        StudyStore.saveState(state);
    },

    boostMastery(state, chapterName, amount) {
        if (!state.program) return;
        state.program.forEach(subject => {
            subject.chapters.forEach(chap => {
                if (chap.title.toLowerCase().includes(chapterName.toLowerCase()) || chapterName.toLowerCase().includes(chap.title.toLowerCase())) {
                    chap.notions.forEach(notion => {
                        notion.mastery = Math.min(100, notion.mastery + amount);
                        if (notion.mastery >= 50) notion.status = "correct";
                    });
                }
            });
        });
    },

    renderReviewUI(container, chapterName = null) {
        let cards = this.getCards();
        if (chapterName) {
            cards = cards.filter(c => c.chapter === chapterName);
        }

        container.innerHTML = `
            <div class="max-w-2xl mx-auto p-6 space-y-6 text-white">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold">🧠 Flashcards & Répétition</h1>
                        <p class="text-slate-400 text-sm mt-1">Ancre tes connaissances durablement en mémoire active.</p>
                    </div>
                    <button id="btn-toggle-add" class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shadow">
                        + Créer une carte
                    </button>
                </div>

                <!-- Formulaire d'ajout (masqué par défaut) -->
                <div id="add-card-modal" class="hidden bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 class="text-lg font-bold">Ajouter une nouvelle flashcard</h2>
                    <form id="form-new-card" class="space-y-3">
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Matière / ID</label>
                            <input type="text" id="new-subject" required placeholder="ex: maths, ses..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Chapitre / Notion</label>
                            <input type="text" id="new-chapter" required placeholder="ex: Suites, Dérivation..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Question (Recto)</label>
                            <textarea id="new-question" required rows="2" placeholder="Écris ta question ici..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white"></textarea>
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Réponse (Verso)</label>
                            <textarea id="new-answer" required rows="2" placeholder="Écris la réponse attendue..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white"></textarea>
                        </div>
                        <div class="flex justify-end gap-2 pt-2">
                            <button type="submit" class="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer">Enregistrer</button>
                        </div>
                    </form>
                </div>

                <div id="flashcard-container">
                    <!-- Contenu de la session injecté dynamiquement -->
                </div>
            </div>
        `;

        // Gestionnaire d'affichage du formulaire d'ajout
        const modal = document.getElementById('add-card-modal');
        document.getElementById('btn-toggle-add').addEventListener('click', () => {
            modal.classList.toggle('hidden');
        });

        document.getElementById('form-new-card').addEventListener('submit', (e) => {
            e.preventDefault();
            const sub = document.getElementById('new-subject').value.trim();
            const chap = document.getElementById('new-chapter').value.trim();
            const q = document.getElementById('new-question').value.trim();
            const a = document.getElementById('new-answer').value.trim();

            const allCards = this.getCards();
            const newCard = {
                id: Date.now(),
                subject: sub,
                chapter: chap,
                question: q,
                answer: a,
                interval: 1,
                repetitions: 0,
                nextReview: Date.now()
            };

            allCards.push(newCard);
            this.saveCards(allCards);
            modal.classList.add('hidden');
            this.renderReviewUI(container, chapterName); // Recharger
        });

        const cardContainer = document.getElementById('flashcard-container');

        if (cards.length === 0) {
            cardContainer.innerHTML = `
                <div class="p-8 text-center bg-slate-800 rounded-2xl border border-slate-700 shadow-xl space-y-3">
                    <span class="text-4xl">🎉</span>
                    <p class="text-xl font-bold">Aucune flashcard disponible !</p>
                    <p class="text-slate-400 text-sm">Crée ta première carte ci-dessus pour lancer une session.</p>
                </div>
            `;
            return;
        }

        let currentIndex = 0;

        const showCard = (index) => {
            if (index >= cards.length) {
                cardContainer.innerHTML = `
                    <div class="p-8 text-center bg-slate-800 rounded-2xl border border-slate-700 shadow-xl space-y-4">
                        <span class="text-5xl">🔥</span>
                        <h2 class="text-2xl font-bold">Séance de révision terminée !</h2>
                        <p class="text-slate-300 text-sm">Tu as renforcé ta mémorisation active pour cette session.</p>
                        <button id="btn-restart" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer shadow">Relancer une session</button>
                    </div>
                `;
                document.getElementById('btn-restart').addEventListener('click', () => showCard(0));
                return;
            }

            const card = cards[index];
            cardContainer.innerHTML = `
                <div class="space-y-6">
                    <div class="flex justify-between items-center text-xs text-slate-400">
                        <span>Chapitre : <strong class="text-slate-200">${card.chapter}</strong></span>
                        <span>Carte ${index + 1} / ${cards.length}</span>
                    </div>

                    <div id="flashcard" class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl min-h-[220px] flex flex-col justify-between cursor-pointer select-none transition-all hover:border-blue-500/50">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-blue-400">${card.subject}</span>
                            <h3 class="text-xl font-bold text-white mt-3">${card.question}</h3>
                        </div>
                        <div id="answer-container" class="hidden mt-6 pt-6 border-t border-slate-700">
                            <p class="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Réponse attendue :</p>
                            <p class="text-emerald-300 text-base leading-relaxed">${card.answer}</p>
                        </div>
                        <p class="text-xs text-slate-500 text-center mt-6">Clique sur la carte pour révéler la réponse</p>
                    </div>

                    <div id="rating-buttons" class="hidden grid grid-cols-3 gap-3">
                        <button data-perf="hard" class="rate-btn bg-rose-600/20 border border-rose-500/40 text-rose-300 hover:bg-rose-600 hover:text-white p-3 rounded-xl font-bold text-xs transition cursor-pointer shadow">🔴 À revoir (J+1)</button>
                        <button data-perf="medium" class="rate-btn bg-amber-600/20 border border-amber-500/40 text-amber-300 hover:bg-amber-600 hover:text-white p-3 rounded-xl font-bold transition text-xs cursor-pointer shadow">🟡 Moyen (J+3)</button>
                        <button data-perf="easy" class="rate-btn bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white p-3 rounded-xl font-bold transition text-xs cursor-pointer shadow">🟢 Maîtrisé (J+7+)</button>
                    </div>
                </div>
            `;

            const cardElement = document.getElementById('flashcard');
            const answerContainer = document.getElementById('answer-container');
            const ratingButtons = document.getElementById('rating-buttons');

            cardElement.addEventListener('click', () => {
                answerContainer.classList.remove('hidden');
                ratingButtons.classList.remove('hidden');
            });

            document.querySelectorAll('.rate-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const perf = e.currentTarget.getAttribute('data-perf');
                    this.updateCardReview(card.id, perf);
                    showCard(currentIndex + 1);
                });
            });
        };

        showCard(0);
    }
};

// Rétrocompatibilité
export const FlashcardsManager = FlashcardManager;