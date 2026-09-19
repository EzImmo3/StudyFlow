// StudyFlow - Module Programme & Gestion des Notions

import { StudyStore } from './store.js';

export const ProgramManager = {
    render(container) {
        const state = StudyStore.getState();
        const program = state.program;

        if (!program || program.length === 0) {
            container.innerHTML = `
                <div class="max-w-2xl mx-auto p-12 text-center text-white space-y-6">
                    <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-4">
                        <h2 class="text-2xl font-bold">📚 Ton programme est vide</h2>
                        <p class="text-slate-400 text-sm">
                            Tu commences avec un état vierge. Tu peux charger instantanément le programme officiel de Terminale pour activer toutes les matières (Maths, SES, Philo, etc.).
                        </p>
                        <button id="btn-load-program" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg cursor-pointer">
                            📥 Charger le programme officiel de Terminale
                        </button>
                    </div>
                </div>
            `;

            document.getElementById('btn-load-program').addEventListener('click', () => {
                StudyStore.loadDefaultTerminaleProgram();
                this.render(container); // Re-rendre la vue proprement
            });
            return;
        }

        // Si le programme contient des données
        let html = `
            <div class="max-w-5xl mx-auto p-6 space-y-8 text-white">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 class="text-3xl font-extrabold">📚 Programme de Terminale</h1>
                        <p class="text-slate-400 text-sm mt-1">Pilotage et suivi de la maîtrise par notion.</p>
                    </div>
                    <button id="btn-reset-program" class="text-xs text-rose-400 hover:text-rose-300 underline cursor-pointer">
                        Réinitialiser le programme
                    </button>
                </div>

                <div class="space-y-6">
        `;

        program.forEach(subject => {
            html += `
                <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg space-y-4">
                    <div class="flex items-center gap-3 border-b border-slate-700 pb-3">
                        <span class="text-2xl">${subject.icon}</span>
                        <h2 class="text-xl font-bold">${subject.name}</h2>
                    </div>
                    <div class="space-y-4">
            `;

            subject.chapters.forEach(chap => {
                html += `
                    <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
                        <h3 class="font-semibold text-slate-200 text-sm uppercase tracking-wide">${chap.name}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                `;

                chap.notions.forEach(notion => {
                    let statusBadge = '';
                    if (notion.status === 'mastered') {
                        statusBadge = '<span class="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold">Maîtrisé</span>';
                    } else if (notion.status === 'fragile') {
                        statusBadge = '<span class="text-xs bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-full font-semibold">Fragile</span>';
                    } else {
                        statusBadge = '<span class="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-semibold">Correct</span>';
                    }

                    html += `
                        <div class="bg-slate-800 border border-slate-700 p-3 rounded-lg flex items-center justify-between gap-2">
                            <div>
                                <p class="font-medium text-sm text-white">${notion.name}</p>
                                <p class="text-xs text-slate-400 mt-0.5">Maîtrise : ${notion.mastery}%</p>
                            </div>
                            <div class="flex items-center gap-2">
                                ${statusBadge}
                                <button data-notion-id="${notion.id}" class="btn-validate bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 text-xs px-2.5 py-1.5 rounded-lg transition cursor-pointer font-bold" title="Valider / Réviser">
                                    +
                                </button>
                            </div>
                        </div>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Gérer les clics sur les boutons de validation de notion
        container.querySelectorAll('.btn-validate').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const notionId = e.currentTarget.getAttribute('data-notion-id');
                StudyStore.validateNotion(notionId);
                this.render(container); // Rafraîchir la vue instantanément
            });
        });

        // Gérer la réinitialisation du programme
        const resetBtn = document.getElementById('btn-reset-program');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm("Veux-tu vraiment vider ton programme ?")) {
                    const state = StudyStore.getState();
                    state.program = [];
                    StudyStore.saveState(state);
                    this.render(container);
                }
            });
        }
    }
};