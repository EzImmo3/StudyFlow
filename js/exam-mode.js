// Module Mode Bac & Examens Blancs

export const ExamManager = {
    renderUI(container) {
        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6 text-center">
                <div class="flex justify-between items-center text-left">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">🎓 Objectif Bac — Mode Examen</h1>
                        <p class="text-slate-400 text-sm mt-1">Interface minimaliste sans distraction avec chronomètre strict.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour</a>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-10 rounded-2xl shadow-xl space-y-6">
                    <span class="text-5xl">⏳</span>
                    <h2 class="text-2xl font-bold text-white">Épreuve de Spécialité — Sujet Blanc</h2>
                    <p class="text-slate-300 text-sm max-w-lg mx-auto">Tu disposes de 3h30 pour rédiger ta composition ou résoudre les exercices. Le chronomètre se lancera dès que tu cliqueras.</p>
                    <button id="start-exam-btn" class="bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg">
                        Lancer le Mode Examen
                    </button>
                </div>
            </div>
        `;

        document.getElementById('start-exam-btn').addEventListener('click', () => {
            container.innerHTML = `
                <div class="max-w-3xl mx-auto p-6 space-y-6">
                    <div class="flex justify-between items-center bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span class="text-white font-bold">⏱️ Temps restant : <span class="text-rose-400">03:29:45</span></span>
                        <a href="#" class="text-xs bg-slate-700 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-slate-600">Abandonner / Quitter</a>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl space-y-4">
                        <h3 class="text-xl font-bold text-white">Exercice 1 : Restitution organisée des connaissances</h3>
                        <p class="text-slate-300 text-sm">Rédige ta réponse de manière structurée avec introduction, parties et conclusion.</p>
                        <textarea class="w-full h-64 bg-slate-900 border border-slate-700 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-blue-500" placeholder="Écris ta composition ici..."></textarea>
                    </div>
                </div>
            `;
        });
    }
};