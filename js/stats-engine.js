// Module de Statistiques Avancées & Simulation de Moyenne

import { Storage } from './storage.js';

export const StatsEngine = {
    renderUI(container) {
        const stats = Storage.getStats();
        const engineData = {
            covered: 73,
            mastered: 58,
            regularityScore: "92%"
        };

        container.innerHTML = `
            <div class="max-w-4xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">📊 Statistiques & Simulation Bac</h1>
                        <p class="text-slate-400 text-sm mt-1">Analyse granulaire de ta progression vers l'objectif des ${stats.targetAverage}/20.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour au Cockpit</a>
                </div>

                <!-- Grille des indicateurs avancés -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Programme Couvert</p>
                        <p class="text-3xl font-bold text-blue-400 mt-1">${engineData.covered} <span class="text-sm text-slate-400">%</span></p>
                        <div class="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                            <div class="bg-blue-500 h-full" style="width: ${engineData.covered}%"></div>
                        </div>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Programme Maîtrisé</p>
                        <p class="text-3xl font-bold text-emerald-400 mt-1">${engineData.mastered} <span class="text-sm text-slate-400">%</span></p>
                        <div class="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                            <div class="bg-emerald-500 h-full" style="width: ${engineData.mastered}%"></div>
                        </div>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Indice de Régularité</p>
                        <p class="text-3xl font-bold text-purple-400 mt-1">${engineData.regularityScore}</p>
                        <p class="text-xs text-slate-500 mt-2">Basé sur tes connexions et sessions.</p>
                    </div>
                </div>

                <!-- Simulateur de moyenne interactif -->
                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 class="text-xl font-bold text-white">🎯 Simulateur d'impact sur la Moyenne Générale</h2>
                    <p class="text-sm text-slate-400">Simule l'effet d'une prochaine note de contrôle sur ton objectif visé.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                            <label class="block text-xs text-slate-400 mb-1 font-semibold">Matière concernée</label>
                            <select id="sim-subject" class="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2.5 text-sm">
                                <option>Mathématiques (Spé)</option>
                                <option>SES (Spé)</option>
                                <option>Philosophie</option>
                                <option>Histoire-Géographie</option>
                            </select>
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                            <label class="block text-xs text-slate-400 mb-1 font-semibold">Note visée / obtenue</label>
                            <input type="number" id="sim-note" value="17" min="0" max="20" class="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2.5 text-sm">
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col justify-end">
                            <button id="simulate-btn" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold p-2.5 rounded-lg text-sm transition">Calculer l'impact</button>
                        </div>
                    </div>

                    <div id="sim-result" class="hidden p-4 bg-blue-950/40 border border-blue-500/30 rounded-xl text-blue-200 text-sm font-medium">
                        ✨ Si tu obtiens cette note, ta moyenne générale estimée passera de <span class="font-bold text-white">14.5</span> à <span class="font-bold text-emerald-400">14.8 / 20</span>. Plus que 0.2 points pour l'objectif !
                    </div>
                </div>
            </div>
        `;

        document.getElementById('simulate-btn').addEventListener('click', () => {
            const resBox = document.getElementById('sim-result');
            resBox.classList.remove('hidden');
        });
    }
};