import { Storage } from './storage.js';

export const ErrorManager = {
    renderUI(container) {
        const errors = Storage.getErrors();
        
        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">❌ Carnet d'Erreurs</h1>
                        <p class="text-slate-400 text-sm mt-1">Chaque erreur est une donnée : comprends-la, répare-la, progresse.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour au Cockpit</a>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 class="text-xl font-bold text-white">Erreurs en cours (${errors.filter(e => !e.resolved).length})</h2>
                    
                    <div class="space-y-3">
                        ${errors.length === 0 ? `<p class="text-slate-400">Aucune erreur enregistrée. Excellent travail !</p>` : ''}
                        ${errors.map(err => `
                            <div class="bg-slate-900/60 border border-slate-700 p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-semibold">${err.subject}</span>
                                        <span class="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">${err.chapter}</span>
                                        <span class="text-xs bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-full font-semibold">Type : ${err.type}</span>
                                    </div>
                                    <p class="text-slate-200 mt-2 font-medium">${err.text}</p>
                                </div>
                                <button data-id="${err.id}" class="resolve-err-btn bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition shrink-0">
                                    Marquer comme réparé ✅
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll('.resolve-err-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                let updatedErrors = errors.map(err => err.id === id ? { ...err, resolved: true } : err);
                Storage.saveErrors(updatedErrors);
                this.renderUI(container);
            });
        });
    }
};