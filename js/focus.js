// StudyFlow - Module Deep Work & Minuteur Pomodoro

import { StudyStore } from './store.js';

let timerInterval = null;
let timeLeft = 25 * 60; // 25 minutes par défaut
let isRunning = false;

export const FocusManager = {
    render(container) {
        const state = StudyStore.getState();
        const totalMinutes = state.user.totalStudyTimeMinutes || 0;
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;

        container.innerHTML = `
            <div class="max-w-3xl mx-auto p-6 space-y-6 text-white text-center">
                <div>
                    <h1 class="text-3xl font-extrabold">⏱️ Espace Deep Work</h1>
                    <p class="text-slate-400 text-sm mt-1">Plonge en concentration profonde sans distraction pour valider tes notions.</p>
                </div>

                <!-- Minuteur Principal -->
                <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-6 max-w-xl mx-auto">
                    <div class="flex justify-center gap-3">
                        <button id="btn-mode-25" class="bg-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer">Pomodoro (25m)</button>
                        <button id="btn-mode-50" class="bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer">Deep Work (50m)</button>
                    </div>

                    <div id="timer-display" class="text-6xl font-black tracking-widest text-blue-400 font-mono py-4">
                        25:00
                    </div>

                    <div class="flex justify-center gap-4">
                        <button id="btn-start-timer" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow">
                            Lancer 🚀
                        </button>
                        <button id="btn-reset-timer" class="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer">
                            Réinitialiser 🔄
                        </button>
                    </div>
                </div>

                <!-- Statistiques de Temps -->
                <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl max-w-xl mx-auto flex justify-between items-center">
                    <span class="text-slate-400 text-sm">Temps total de concentration cumulé :</span>
                    <span class="text-xl font-bold text-emerald-400">${hours}h ${mins}m</span>
                </div>
            </div>
        `;

        const display = document.getElementById('timer-display');
        const startBtn = document.getElementById('btn-start-timer');
        const resetBtn = document.getElementById('btn-reset-timer');

        const updateDisplay = () => {
            const m = Math.floor(timeLeft / 60);
            const s = timeLeft % 60;
            display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };

        // Gestion du bouton Lancer / Pause
        startBtn.addEventListener('click', () => {
            if (!isRunning) {
                isRunning = true;
                startBtn.textContent = "Pause ⏸️";
                startBtn.className = "bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow";

                timerInterval = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay();
                    } else {
                        clearInterval(timerInterval);
                        isRunning = false;
                        alert("Session de Deep Work terminée ! Bravo, ton temps a été enregistré.");
                        
                        // Enregistrer le temps dans le store (+25 min ou +50 min)
                        const currentState = StudyStore.getState();
                        currentState.user.totalStudyTimeMinutes = (currentState.user.totalStudyTimeMinutes || 0) + 25;
                        StudyStore.saveState(currentState);

                        timeLeft = 25 * 60;
                        startBtn.textContent = "Lancer 🚀";
                        startBtn.className = "bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow";
                        updateDisplay();
                        this.render(container);
                    }
                }, 1000);
            } else {
                isRunning = false;
                clearInterval(timerInterval);
                startBtn.textContent = "Reprendre 🚀";
                startBtn.className = "bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow";
            }
        });

        // Bouton Réinitialiser
        resetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
            updateDisplay();
            startBtn.textContent = "Lancer 🚀";
            startBtn.className = "bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow";
        });

        // Changement de mode (25m / 50m)
        document.getElementById('btn-mode-25').addEventListener('click', () => {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
            updateDisplay();
            startBtn.textContent = "Lancer 🚀";
        });

        document.getElementById('btn-mode-50').addEventListener('click', () => {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 50 * 60;
            updateDisplay();
            startBtn.textContent = "Lancer 🚀";
        });
    }
};