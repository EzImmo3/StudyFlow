// StudyFlow - Module Carnet d'Erreurs Intelligent

import { StudyStore } from './store.js';

export const ErrorManager = {
    render(container) {
        const state = StudyStore.getState();
        const errors = state.errors || [];
        const activeErrors = errors.filter(e => !e.resolved);
        
        container.innerHTML = `
            <div class="max-w-4xl mx-auto p-6 space-y-6">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">❌ Carnet d'Erreurs</h1>
                        <p class="text-slate-400 text-sm mt-1">Chaque erreur est une donnée : comprends-la, répare-la, progresse.</p>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold text-white">
                        Erreurs actives : <span class="text-rose-400">${activeErrors.length}</span> / ${errors.length}
                    </div>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 class="text-xl font-bold text-white">Liste des erreurs</h2>
                    
                    <div class="space-y-3">
                        ${errors.length === 0 ? `
                            <div class="bg-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center space-y-2">
                                <span class="text-3xl">🎉</span>
                                <p class="text-slate-300 font-medium">Aucune erreur enregistrée.</p>
                                <p class="text-slate-500 text-xs">Excellent travail, continue ainsi !</p>
                            </div>
                        ` : ''}

                        ${errors.map(err => `
                            <div class="bg-slate-900/60 border ${err.resolved ? 'border-slate-800 opacity-60' : 'border-slate-700'} p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition">
                                <div class="space-y-2">
                                    <div class="flex flex-wrap items-center gap-2">
                                        <span class="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-semibold">${err.subject || 'Général'}</span>
                                        <span class="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">${err.chapter || 'Notion'}</span>
                                        <span class="text-xs ${err.resolved ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'} px-2.5 py-1 rounded-full font-semibold">
                                            ${err.resolved ? 'Résolue ✅' : 'À réparer 🔴'}
                                        </span>
                                    </div>
                                    <p class="text-slate-200 font-medium">${err.text || err.description || "Erreur non spécifiée"}</p>
                                    ${err.correction ? `<p class="text-xs text-emerald-400">Correction : ${err.correction}</p>` : ''}
                                </div>
                                ${!err.resolved ? `
                                    <button data-id="${err.id}" class="resolve-err-btn bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer shadow">
                                        Marquer comme réparé ✅
                                    </button>
                                ` : `
                                    <span class="text-xs text-slate-500 italic shrink-0">Corrigé</span>
                                `}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Gestion de la résolution d'une erreur au clic
        container.querySelectorAll('.resolve-err-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number(e.currentTarget.getAttribute('data-id'));
                const currentState = StudyStore.getState();
                
                currentState.errors = currentState.errors.map(err => {
                    if (err.id === id) {
                        err.resolved = true;
                        // Remonter la maîtrise de la notion associée si elle existe
                        if (err.notionId) {
                            currentState.program.forEach(subject => {
                                subject.chapters.forEach(chap => {
                                    chap.notions.forEach(notion => {
                                        if (notion.id === err.notionId) {
                                            notion.mastery = Math.min(100, notion.mastery + 20);
                                            if (notion.mastery >= 50) notion.status = "correct";
                                        }
                                    });
                                });
                            });
                        }
                    }
                    return err;
                });

                StudyStore.saveState(currentState);
                this.render(container); // Actualiser la vue en temps réel
            });
        });
    }
};

// Rétrocompatibilité avec ton ancien nom de méthode si besoin
export const ErrorsManager = ErrorManager;