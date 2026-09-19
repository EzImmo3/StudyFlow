// Module Fiches de Cours Intelligentes pour StudyFlow

const SAMPLE_NOTES = {
    "maths": {
        title: "Mathématiques — Spécialité",
        chapter: "Suites et Limites",
        levels: {
            express: "5 choses à retenir :\n1. Une suite croissante majorée converge.\n2. Limite de q^n avec q > 1 donne +inf.\n3. TVI : si f continue et croissante, f(a)*f(b) < 0.\n4. Dérivée de ln(u) = u'/u.\n5. Récurrence : initialisation, hérédité, conclusion.",
            summary: "Fiche résumé : Les suites numériques permettent de modéliser des évolutions discrètes. L'étude de leur convergence repose sur les théorèmes de convergence monotone et les gendarmes.",
            full: "Cours complet : Définitions rigoureuses des limites, opérations sur les limites, formes indéterminées (inf - inf, 0 * inf, etc.), démonstrations par récurrence approfondies et applications sur les suites arithmético-géométriques."
        }
    },
    "ses": {
        title: "SES — Spécialité",
        chapter: "Croissance Économique & PGF",
        levels: {
            express: "5 choses à retenir :\n1. PIB = somme des VAB + impôts sur produits.\n2. PGF mesure l'efficacité du capital et du travail.\n3. Progrès technique est endogène.\n4. Les innovations de Schumpeter créent de la destruction créatrice.\n5. Limites écologiques de la croissance.",
            summary: "Fiche résumé : La croissance économique s'explique par l'accumulation des facteurs de production (travail, capital) et surtout par le progrès technique (PGF).",
            full: "Cours complet : Analyse détaillée des théories de la croissance (Solow, Schumpeter), rôle de l'innovation, externalités positives de la recherche et politiques publiques de soutien à la croissance."
        }
    }
};

export const NotesEngine = {
    renderUI(container) {
        container.innerHTML = `
            <div class="max-w-4xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">📖 Fiches de Cours Intelligentes</h1>
                        <p class="text-slate-400 text-sm mt-1">Adapte ton niveau de lecture : du cours détaillé à l'essentiel en 1 clic.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour au Cockpit</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="#subject-maths" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl transition space-y-2">
                        <span class="text-2xl">🔵</span>
                        <h2 class="text-xl font-bold text-white">Mathématiques</h2>
                        <p class="text-xs text-slate-400">Suites, Analyse, Probabilités, Espace</p>
                    </a>
                    <a href="#subject-ses" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl transition space-y-2">
                        <span class="text-2xl">🟢</span>
                        <h2 class="text-xl font-bold text-white">SES</h2>
                        <p class="text-xs text-slate-400">Croissance, Emploi, Protection Sociale</p>
                    </a>
                </div>
            </div>
        `;
    },

    renderSubjectView(container, subjectId) {
        const noteData = SAMPLE_NOTES[subjectId] || {
            title: "Matière — Terminale",
            chapter: "Chapitre Général",
            levels: {
                express: "5 choses à retenir :\n1. Maîtriser le vocabulaire officiel.\n2. Connaître les théorèmes clés.\n3. Savoir rédiger une démonstration.\n4. S'entraîner sur les annales du Bac.\n5. Structurer son argumentation.",
                summary: "Fiche résumé : Ce chapitre regroupe les notions fondamentales exigées à l'examen pour cette discipline.",
                full: "Cours complet : Développement exhaustif des notions, définitions formelles, exemples d'application et pièges classiques à éviter lors des épreuves écrites."
            }
        };

        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <a href="#notes" class="text-blue-400 hover:underline text-sm">&larr; Retour aux fiches</a>
                    <span class="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">${noteData.title}</span>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-6">
                    <div>
                        <h1 class="text-2xl font-bold text-white">${noteData.chapter}</h1>
                        <p class="text-slate-400 text-sm mt-1">Espace de révision multi-niveaux</p>
                    </div>

                    <!-- Sélecteur de niveau de fiche -->
                    <div class="flex bg-slate-900 p-1.5 rounded-xl border border-slate-700">
                        <button data-level="express" class="level-tab flex-1 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white transition">⚡ 5 Choses</button>
                        <button data-level="summary" class="level-tab flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition">📝 Résumé</button>
                        <button data-level="full" class="level-tab flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition">📚 Cours Complet</button>
                    </div>

                    <!-- Contenu dynamique de la fiche -->
                    <div id="note-content" class="bg-slate-900 border border-slate-700 p-5 rounded-xl text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                        ${noteData.levels.express}
                    </div>
                </div>
            </div>
        `;

        // Logique de bascule entre les niveaux de fiches
        const tabs = document.querySelectorAll('.level-tab');
        const contentBox = document.getElementById('note-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => {
                    t.classList.remove('bg-blue-600', 'text-white');
                    t.classList.add('text-slate-400');
                });
                e.target.classList.remove('text-slate-400');
                e.target.classList.add('bg-blue-600', 'text-white');

                const level = e.target.getAttribute('data-level');
                contentBox.textContent = noteData.levels[level];
            });
        });
    }
};