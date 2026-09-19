// StudyFlow - Store Global & Moteur Pédagogique Interconnecté

const STORAGE_KEY = 'studyflow_ultimate_state';

const defaultState = {
    user: {
        name: "",
        targetAverage: 16,
        currentAverage: 0,
        streak: 0,
        totalStudyTimeMinutes: 0
    },
    program: [],
    errors: [],
    flashcards: [],
    events: []
};

export const StudyStore = {
    getState() {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            this.saveState(defaultState);
            return defaultState;
        }
        return JSON.parse(data);
    },

    saveState(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },

    // 🧬 Enregistre une erreur et rétrograde la notion associée
    recordError(notionId, errorData) {
        const state = this.getState();
        
        state.errors.unshift({
            id: Date.now(),
            notionId,
            ...errorData,
            resolved: false,
            count: 1
        });

        state.program.forEach(subject => {
            subject.chapters.forEach(chap => {
                chap.notions.forEach(notion => {
                    if (notion.id === notionId) {
                        notion.mastery = Math.max(0, notion.mastery - 20);
                        notion.status = notion.mastery < 50 ? "fragile" : "correct";
                    }
                });
            });
        });

        this.saveState(state);
    },

    // Valide une notion suite à une révision réussie
    validateNotion(notionId) {
        const state = this.getState();
        state.program.forEach(subject => {
            subject.chapters.forEach(chap => {
                chap.notions.forEach(notion => {
                    if (notion.id === notionId) {
                        notion.mastery = Math.min(100, notion.mastery + 25);
                        if (notion.mastery >= 80) notion.status = "mastered";
                        else if (notion.mastery >= 50) notion.status = "correct";
                    }
                });
            });
        });
        this.saveState(state);
    },

    // Génère la séance "À faire maintenant"
    getRecommendedSession() {
        const state = this.getState();
        const activeErrors = state.errors.filter(e => !e.resolved);

        if (state.program.length === 0) {
            return {
                title: "📚 Initialiser votre programme",
                duration: "5 min",
                description: "Ajoutez vos premières matières ou chargez le programme officiel pour activer le moteur pédagogique.",
                action: "settings"
            };
        }

        if (activeErrors.length > 0) {
            return {
                title: "🔴 Session de Réparation d'Urgence",
                duration: "15 min",
                description: `Tu as ${activeErrors.length} erreur(s) active(s) à corriger pour sécuriser tes points.`,
                action: "errors"
            };
        }

        return {
            title: "🎯 Séance de découverte du programme",
            duration: "25 min",
            description: "Commencez à travailler vos notions prioritaires du jour.",
            action: "program"
        };
    },

    // 📚 Charge le programme officiel de Terminale par défaut
    loadDefaultTerminaleProgram() {
        const defaultProgram = [
            {
                id: "maths",
                name: "Mathématiques (Spé)",
                icon: "🔵",
                progress: 0,
                chapters: [
                    {
                        id: "m_suites",
                        name: "Suites numériques",
                        notions: [
                            { id: "notion_limites", name: "Limite d'une suite", status: "fragile", mastery: 20 },
                            { id: "notion_recurrence", name: "Démonstration par récurrence", status: "correct", mastery: 50 }
                        ]
                    },
                    {
                        id: "m_derivees",
                        name: "Continuité et Dérivabilité",
                        notions: [
                            { id: "notion_tvm", name: "Théorème des valeurs intermédiaires", status: "fragile", mastery: 30 }
                        ]
                    }
                ]
            },
            {
                id: "ses",
                name: "SES (Spé)",
                icon: "🟢",
                progress: 0,
                chapters: [
                    {
                        id: "ses_croissance",
                        name: "Croissance, innovation et emploi",
                        notions: [
                            { id: "notion_pgf", name: "Productivité globale des facteurs", status: "correct", mastery: 60 },
                            { id: "notion_schumpeter", name: "Destruction créatrice", status: "mastered", mastery: 85 }
                        ]
                    }
                ]
            },
            {
                id: "philo",
                name: "Philosophie",
                icon: "🟡",
                progress: 0,
                chapters: [
                    {
                        id: "philo_verite",
                        name: "La Vérité et la Conscience",
                        notions: [
                            { id: "notion_demonstration", name: "Démontrer et prouver", status: "fragile", mastery: 40 }
                        ]
                    }
                ]
            }
        ];

        const state = this.getState();
        state.program = defaultProgram;
        this.saveState(state);
    },

    // 📤 Exporte tout le state sous forme de fichier JSON
    exportData() {
        const state = this.getState();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `studyflow_backup_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    },

    // 📥 Importe et remplace le state local à partir d'un fichier JSON
    importData(file, callback) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsedState = JSON.parse(event.target.result);
                if (parsedState && parsedState.user && Array.isArray(parsedState.program)) {
                    this.saveState(parsedState);
                    if (callback) callback(true, "Sauvegarde importée avec succès !");
                } else {
                    if (callback) callback(false, "Format de fichier invalide.");
                }
            } catch (err) {
                if (callback) callback(false, "Erreur lors de la lecture du fichier JSON.");
            }
        };
        reader.readAsText(file);
    }
};