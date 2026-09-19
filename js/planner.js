// Module Planificateur & Calendrier Intelligent

export const PlannerManager = {
    getEvents() {
        const saved = localStorage.getItem('studyflow_events');
        return saved ? JSON.parse(saved) : [
            { id: 1, title: "DS de Mathématiques (Suites)", date: "2026-06-15", subject: "maths" },
            { id: 2, title: "Bac Blanc de SES", date: "2026-06-20", subject: "ses" }
        ];
    },

    saveEvents(events) {
        localStorage.setItem('studyflow_events', JSON.stringify(events));
    },

    renderUI(container) {
        const events = this.getEvents();

        container.innerHTML = `
            <div class="max-w-4xl mx-auto p-6 space-y-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-extrabold text-white">📅 Planificateur & Échéances Bac</h1>
                        <p class="text-slate-400 text-sm mt-1">Le moteur répartit tes révisions en fonction de tes prochains contrôles.</p>
                    </div>
                    <a href="#" class="text-blue-400 hover:underline text-sm font-medium">&larr; Retour au Cockpit</a>
                </div>

                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 class="text-xl font-bold text-white">Prochains Contrôles & Épreuves</h2>
                    <div class="space-y-3">
                        ${events.map(ev => `
                            <div class="bg-slate-900 border border-slate-700 p-4 rounded-xl flex justify-between items-center">
                                <div>
                                    <h3 class="font-bold text-white text-base">${ev.title}</h3>
                                    <p class="text-xs text-blue-400 mt-1">Prévu le : ${ev.date}</p>
                                </div>
                                <span class="bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs px-3 py-1 rounded-full font-semibold">Planifié</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};