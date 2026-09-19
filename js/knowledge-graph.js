// Module Graphe de Connaissances

export const KnowledgeGraphManager = {
    renderUI(container) {
        container.innerHTML = `
            <div class="max-w-4xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">🧩 Graphe de Connaissances</h1>
                        <p class="text-slate-400 text-sm mt-1">Visualise comment les notions s'articulent et dépendent les unes des autres.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour</a>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-6 text-center">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-slate-900 p-5 rounded-xl border border-slate-700 space-y-2">
                            <span class="text-xs text-blue-400 font-bold">PRÉREQUIS</span>
                            <h3 class="text-white font-bold text-base">1. Dérivation</h3>
                            <p class="text-xs text-slate-400">Maîtrisée (100%)</p>
                        </div>
                        <div class="flex items-center justify-center text-slate-500 text-2xl font-bold">&rarr;</div>
                        <div class="bg-slate-900 p-5 rounded-xl border border-blue-500/50 space-y-2 shadow-lg">
                            <span class="text-xs text-emerald-400 font-bold">NOTION CIBLE</span>
                            <h3 class="text-white font-bold text-base">2. Convexité & Inflexion</h3>
                            <p class="text-xs text-slate-400">En cours d'apprentissage (🟡)</p>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mt-4">Si tu bloques sur la convexité, le graphe indique de réviser d'abord la dérivation.</p>
                </div>
            </div>
        `;
    }
};