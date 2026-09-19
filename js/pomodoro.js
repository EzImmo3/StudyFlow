export const PomodoroManager = {
    renderUI(container) {
        container.innerHTML = `
            <div class="max-w-md mx-auto p-6 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl text-center space-y-6 my-8">
                <div>
                    <span class="text-3xl">⏱️</span>
                    <h2 class="text-2xl font-extrabold text-white mt-2">Mode Deep Work</h2>
                    <p class="text-slate-400 text-sm mt-1">Plonge dans une bulle de concentration intense pour réviser efficacement.</p>
                </div>
                
                <div id="timer-display" class="text-6xl font-black text-blue-400 tracking-wider my-6 font-mono">
                    25:00
                </div>

                <div class="flex justify-center gap-3">
                    <button id="start-btn" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition shadow">Démarrer</button>
                    <button id="pause-btn" class="bg-slate-700 hover:bg-slate-600 text-slate-200 px-6 py-2.5 rounded-xl font-bold transition">Pause</button>
                    <button id="reset-btn" class="bg-rose-600/20 text-rose-300 hover:bg-rose-600 hover:text-white px-4 py-2.5 rounded-xl font-bold transition">Réinitialiser</button>
                </div>

                <div class="pt-4 border-t border-slate-700">
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour au Cockpit</a>
                </div>
            </div>
        `;

        let timer = 25 * 60;
        let interval = null;
        let isRunning = false;

        const display = document.getElementById('timer-display');
        const startBtn = document.getElementById('start-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const resetBtn = document.getElementById('reset-btn');

        function updateDisplay() {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        startBtn.addEventListener('click', () => {
            if (!isRunning) {
                isRunning = true;
                interval = setInterval(() => {
                    if (timer > 0) {
                        timer--;
                        updateDisplay();
                    } else {
                        clearInterval(interval);
                        isRunning = false;
                        alert("🎉 Session Deep Work terminée ! Prends quelques minutes pour souffler.");
                    }
                }, 1000);
            }
        });

        pauseBtn.addEventListener('click', () => {
            clearInterval(interval);
            isRunning = false;
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(interval);
            isRunning = false;
            timer = 25 * 60;
            updateDisplay();
        });
    }
};