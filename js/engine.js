// StudyFlow Engine - Le Cerveau Intelligent de l'App

import { Storage } from './storage.js';
import { FlashcardManager } from './flashcards.js';

export const StudyFlowEngine = {
    // Calcule la progression globale et par matière
    getGlobalProgress() {
        const stats = Storage.getStats();
        const errors = Storage.getErrors();
        const cards = FlashcardManager.getCards();

        // Simulation de calculs intelligents basés sur les données locales
        const totalNotionsCount = 120; // Nombre total estimé de notions au programme de Terminale
        const masteredCards = cards.filter(c => c.repetitions >= 2).length;
        
        const coveredPercent = Math.min(100, Math.round((cards.length / totalNotionsCount) * 100));
        const masteredPercent = Math.min(100, Math.round((masteredCards / totalNotionsCount) * 100));
        const fragileCount = errors.filter(e => !e.resolved).length;

        return {
            coveredPercent,
            masteredPercent,
            fragileCount,
            streak: stats.streak,
            currentAverage: stats.currentAverage,
            targetAverage: stats.targetAverage
        };
    },

    // Génère la recommandation personnalisée selon le mode choisi ("J'ai 10 min", "Contrôle demain", etc.)
    getRecommendedSession(mode = 'normal') {
        const errors = Storage.getErrors().filter(e => !e.resolved);
        const cards = FlashcardManager.getCards();
        const dueCards = cards.filter(c => c.nextReview <= Date.now());

        if (mode === 'emergency' || errors.length > 0) {
            return {
                title: "🔴 Session Urgence & Erreurs",
                duration: "15 min",
                description: `Tu as ${errors.length} erreur(s) non résolue(s) et ${dueCards.length} flashcard(s) en retard. C'est la priorité absolue pour sécuriser tes points.`,
                actionType: "errors",
                targetCount: errors.length
            };
        }

        if (mode === 'fast_10') {
            return {
                title: "⚡ Flash Session (10 min)",
                duration: "10 min",
                description: "5 flashcards de révision espacée + 1 quiz rapide pour maintenir ta série active.",
                actionType: "flashcards",
                targetCount: 5
            };
        }

        return {
            title: "🎯 Séance d'optimisation équilibrée",
            duration: "30 min",
            description: "Revue des notions du jour, un point sur le carnet d'erreurs et un bloc Deep Work.",
            actionType: "balanced",
            targetCount: 10
        };
    },

    // Analyse les prérequis d'une notion (ex: Convexité -> Dérivation)
    checkPrerequisites(notionName) {
        const dependencyMap = {
            "Convexité": ["Dérivation", "Variations de fonctions"],
            "Équations différentielles": ["Primitives"],
            "Loi binomiale": ["Schéma de Bernoulli", "Probabilités conditionnelles"]
        };

        return dependencyMap[notionName] || [];
    }
};