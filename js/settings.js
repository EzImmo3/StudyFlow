// StudyFlow - Module Paramètres & Gestion des Données

import { StudyStore } from './store.js';

export const SettingsManager = {
    render(container) {
        const state = StudyStore.getState();

        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6 text-white">
                <div>
                    <h1 class="text-3xl font-extrabold">⚙️ Paramètres & Données</h1>
                    <p class="text-slate-400 text-sm mt-1">Gère la sauvegarde locale et ton espace personnel StudyFlow.</p>
                </div>

                <!-- Section Profil -->
                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-4 shadow-lg">
                    <h2 class="text-xl font-bold">👤 Profil Élève</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Prénom ou Pseudo</label>
                            <input type="text" id="input-username" value="${state.user.name || ''}" placeholder="Ex: Élève Terminale" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-500">
                        </div>
                        <div>
                            <label class="block text-xs text-slate-400 mb-1">Objectif de Moyenne (/20)</label>
                            <input type="number" id="input-target" value="${state.user.targetAverage}" min="0" max="20" step="0.5" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-500">
                        </div>
                    </div>
                    <button id="btn-save-profile" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl transition cursor-pointer text-sm">
                        Enregistrer le profil
                    </button>
                    <div id="profile-status" class="text-xs text-emerald-400 font-medium"></div>
                </div>

                <!-- Section Sauvegarde & Restauration -->
                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-4 shadow-lg">
                    <h2 class="text-xl font-bold">💾 Sauvegarde & Restauration (Local-First)</h2>
                    <p class="text-sm text-slate-300">
                        StudyFlow stocke tes données directement dans ton navigateur pour garantir un accès hors-ligne instantané. Pense à exporter régulièrement ton fichier de sauvegarde.
                    </p>
                    
                    <div class="flex flex-wrap gap-4 pt-2">
                        <button id="btn-export" class="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold transition flex items-center gap-2 cursor-pointer text-sm shadow">
                            📥 Exporter mes données (JSON)
                        </button>
                        
                        <label class="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-xl font-bold transition flex items-center gap-2 cursor-pointer text-sm shadow">
                            📤 Importer une sauvegarde
                            <input type="file" id="input-import" accept=".json" class="hidden">
                        </label>
                    </div>
                    <div id="import-status" class="text-sm mt-2"></div>
                </div>
            </div>
        `;

        // Gestion de l'enregistrement du profil
        document.getElementById('btn-save-profile').addEventListener('click', () => {
            const nameInput = document.getElementById('input-username').value.trim();
            const targetInput = parseFloat(document.getElementById('input-target').value);
            
            const currentState = StudyStore.getState();
            currentState.user.name = nameInput;
            currentState.user.targetAverage = isNaN(targetInput) ? 16 : targetInput;
            StudyStore.saveState(currentState);

            const status = document.getElementById('profile-status');
            status.textContent = "Profil mis à jour avec succès !";
            setTimeout(() => { status.textContent = ""; }, 2500);
        });

        // Gestion de l'exportation
        document.getElementById('btn-export').addEventListener('click', () => {
            StudyStore.exportData();
        });

        // Gestion de l'importation
        document.getElementById('input-import').addEventListener('change', (e) => {
            const file = e.target.files[0];
            const statusDiv = document.getElementById('import-status');
            if (file) {
                StudyStore.importData(file, (success, message) => {
                    statusDiv.textContent = message;
                    statusDiv.className = success ? "text-sm mt-2 text-emerald-400 font-semibold" : "text-sm mt-2 text-rose-400 font-semibold";
                    if (success) {
                        setTimeout(() => {
                            window.location.hash = "#cockpit";
                        }, 1200);
                    }
                });
            }
        });
    }
};