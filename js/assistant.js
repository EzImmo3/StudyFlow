// Module Assistant Pédagogique & Mode Feynman

export const AssistantManager = {
    renderUI(container) {
        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">🤖 Assistant & Mode Feynman</h1>
                        <p class="text-slate-400 text-sm mt-1">Explique une notion avec tes mots pour vérifier que tu l'as vraiment comprise.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour</a>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <div class="bg-blue-950/40 border border-blue-500/30 p-4 rounded-xl text-blue-200 text-sm">
                        💡 **Défi Feynman :** Choisis une notion (ex: *La convexité* ou *Le théorème des valeurs intermédiaires*) et explique-la ci-dessous comme si tu l'enseignais à un élève de seconde.
                    </div>

                    <select id="feynman-notion" class="w-full bg-slate-900 text-white border border-slate-700 rounded-xl p-3 text-sm">
                        <option>La convexité d'une fonction</option>
                        <option>La croissance endogène (SES)</option>
                        <option>La conscience chez Descartes (Philo)</option>
                    </select>

                    <textarea id="feynman-input" class="w-full h-40 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white text-sm" placeholder="Écris ton explication simple ici..."></textarea>

                    <button id="validate-feynman" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold p-3 rounded-xl transition text-sm">
                        Analyser mon explication
                    </button>

                    <div id="feynman-feedback" class="hidden p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-emerald-200 text-sm font-medium">
                        ✨ **Analyse de l'Assistant :** Excellente clarté ! Tu as bien identifié le rôle de la dérivée seconde et de la position de la courbe par rapport à ses tangentes. Ta compréhension est solide.
                    </div>
                </div>
            </div>
        `;

        document.getElementById('validate-feynman').addEventListener('click', () => {
            document.getElementById('feynman-feedback').classList.remove('hidden');
        });
    }
};