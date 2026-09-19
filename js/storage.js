// Gestionnaire de stockage local pour StudyFlow (Offline-first)
const STORAGE_KEYS = {
    STATS: 'studyflow_stats',
    FLASHCARDS: 'studyflow_flashcards',
    ERRORS: 'studyflow_errors',
    SESSIONS: 'studyflow_sessions'
};

export const Storage = {
    getStats() {
        const defaultStats = {
            targetAverage: 16,
            currentAverage: 14.5,
            studyTimeToday: 45,
            studyTimeWeek: 320,
            streak: 5,
            completedTasks: 3
        };
        const data = localStorage.getItem(STORAGE_KEYS.STATS);
        return data ? JSON.parse(data) : defaultStats;
    },

    saveStats(stats) {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    },

    getErrors() {
        const data = localStorage.getItem(STORAGE_KEYS.ERRORS);
        return data ? JSON.parse(data) : [
            { id: 1, subject: 'Maths', chapter: 'Limites', type: 'calcul', text: 'Erreur de signe sur la forme indéterminée', resolved: false },
            { id: 2, subject: 'SES', chapter: 'Croissance', type: 'méthode', text: 'Confus sur la distinction PIB nominal et réel', resolved: false }
        ];
    },

    saveErrors(errors) {
        localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(errors));
    }
};