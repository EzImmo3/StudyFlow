// StudyFlow - Application principale Terminale (Version Ultime complète)

import { Storage } from './storage.js';
import { StudyFlowEngine } from './engine.js';
import { StatsEngine } from './stats-engine.js';
import { FlashcardManager } from './flashcards.js';
import { QuizManager } from './quiz.js';
import { PomodoroManager } from './pomodoro.js';
import { ErrorManager } from './errors.js';
import { NotesEngine } from './notes-engine.js';
import { PlannerManager } from './planner.js';
import { ExamManager } from './exam-mode.js';
import { AssistantManager } from './assistant.js';
import { KnowledgeGraphManager } from './knowledge-graph.js';

const appContainer = document.getElementById('app');

// Gestionnaire de routes (Hash-based router)
function initRouter(callback) {
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        callback(hash);
    });
    const initialHash = window.location.hash.replace('#', '') || 'cockpit';
    callback(initialHash);
}

// Rendu du Tableau de Bord (Cockpit)
function renderCockpit() {
    const stats = Storage.getStats();
    const globalProg = StudyFlowEngine.getGlobalProgress();
    const recommended = StudyFlowEngine.getRecommendedSession('normal');

    appContainer.innerHTML = `
        <div class="max-w-5xl mx-auto p-6 space-y-6">
            <!-- En-tête / Profil -->
            <div class="flex justify-between items-center bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl">
                <div>
                    <span class="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-bold">Session Terminale 2026</span>
                    <h1 class="text-3xl font-extrabold text-white mt-2">Bienvenue sur StudyFlow 🚀</h1>
                    <p class="text-slate-400 text-sm mt-1">Ton système d'exploitation scolaire intelligent.</p>
                </div>
                <div class="text-right">
                    <p class="text-xs text-slate-400">Objectif visé</p>
                    <p class="text-2xl font-bold text-emerald-400">${stats.targetAverage} <span class="text-sm text-slate-400">/20</span></p>
                </div>
            </div>

            <!-- Bloc Moteur Adaptatif : Ce qu'il faut faire maintenant -->
            <div class="bg-gradient-to-r from-indigo-900/80 via-blue-900/80 to-slate-900 border border-blue-500/40 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div class="space-y-1">
                    <span class="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Recommandation StudyFlow Engine</span>
                    <h2 class="text-2xl font-extrabold text-white mt-1">${recommended.title}</h2>
                    <p class="text-slate-300 text-sm max-w-xl">${recommended.description}</p>
                </div>
                <a href="#focus" class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold transition shadow-lg shrink-0">
                  Lancer la session (${recommended.duration}) &rarr;
                </a>
            </div>

            <!-- Indicateurs clés -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                    <p class="text-slate-400 text-sm">Moyenne Actuelle</p>
                    <p class="text-3xl font-bold text-white mt-1">${globalProg.currentAverage} <span class="text-sm text-slate-400">/20</span></p>
                </div>
                <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                    <p class="text-slate-400 text-sm">Programme Couvert</p>
                    <p class="text-3xl font-bold text-blue-400 mt-1">${globalProg.coveredPercent} <span class="text-sm text-slate-400">%</span></p>
                </div>
                <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                    <p class="text-slate-400 text-sm">Notions Fragiles</p>
                    <p class="text-3xl font-bold text-rose-400 mt-1">${globalProg.fragileCount}</p>
                </div>
                <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                    <p class="text-slate-400 text-sm">Série (Streak)</p>
                    <p class="text-3xl font-bold text-purple-400 mt-1">${globalProg.streak} <span class="text-sm text-slate-400">j</span></p>
                </div>
            </div>

            <div class="flex justify-end space-x-4">
                <a href="#stats" class="text-sm font-semibold text-blue-400 hover:underline">Voir les statistiques avancées &rarr;</a>
            </div>

            <!-- Raccourcis Modules Principaux -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#focus" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-xl transition flex items-center space-x-4">
                    <span class="text-3xl">⏱️</span>
                    <div>
                        <h3 class="font-bold text-white">Mode Deep Work</h3>
                        <p class="text-xs text-slate-400">Pomodoro & concentration intense</p>
                    </div>
                </a>
                <a href="#errors" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-xl transition flex items-center space-x-4">
                    <span class="text-3xl">❌</span>
                    <div>
                        <h3 class="font-bold text-white">Carnet d'Erreurs</h3>
                        <p class="text-xs text-slate-400">Répare tes points faibles</p>
                    </div>
                </a>
                <a href="#notes" class="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-xl transition flex items-center space-x-4">
                    <span class="text-3xl">📖</span>
                    <div>
                        <h3 class="font-bold text-white">Fiches Intelligentes</h3>
                        <p class="text-xs text-slate-400">Cours, résumés et essentiels</p>
                    </div>
                </a>
            </div>

            <!-- Raccourcis Modules Avancés -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a href="#planner" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition text-sm font-semibold text-white">📅 Planificateur</a>
                <a href="#exam" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-rose-500 transition text-sm font-semibold text-white">🎓 Mode Bac</a>
                <a href="#assistant" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-purple-500 transition text-sm font-semibold text-white">🤖 Assistant Feynman</a>
                <a href="#graph" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-emerald-500 transition text-sm font-semibold text-white">🧩 Graphe Savoir</a>
            </div>

            <!-- Matières -->
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
                <h2 class="text-xl font-bold text-white">📚 Matières & Programmes de Terminale</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <a href="#subject-maths" class="bg-slate-900 hover:bg-blue-950/40 border border-slate-700 hover:border-blue-500/50 p-4 rounded-xl text-center transition">
                        <span class="text-3xl">🔵</span>
                        <p class="text-white font-bold text-sm mt-2">Mathématiques</p>
                    </a>
                    <a href="#subject-ses" class="bg-slate-900 hover:bg-emerald-950/40 border border-slate-700 hover:border-emerald-500/50 p-4 rounded-xl text-center transition">
                        <span class="text-3xl">🟢</span>
                        <p class="text-white font-bold text-sm mt-2">SES</p>
                    </a>
                    <a href="#subject-philosophie" class="bg-slate-900 hover:bg-purple-950/40 border border-slate-700 hover:border-purple-500/50 p-4 rounded-xl text-center transition">
                        <span class="text-3xl">🟣</span>
                        <p class="text-white font-bold text-sm mt-2">Philosophie</p>
                    </a>
                    <a href="#subject-histoire-geo" class="bg-slate-900 hover:bg-amber-950/40 border border-slate-700 hover:border-amber-500/50 p-4 rounded-xl text-center transition">
                        <span class="text-3xl">🟤</span>
                        <p class="text-white font-bold text-sm mt-2">Histoire-Géo</p>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialisation globale du routeur et de l'application
initRouter((hash) => {
    if (hash === 'focus') {
        PomodoroManager.renderUI(appContainer);
    } else if (hash === 'errors') {
        ErrorManager.renderUI(appContainer);
    } else if (hash === 'stats') {
        StatsEngine.renderUI(appContainer);
    } else if (hash === 'notes') {
        NotesEngine.renderUI(appContainer);
    } else if (hash === 'planner') {
        PlannerManager.renderUI(appContainer);
    } else if (hash === 'exam') {
        ExamManager.renderUI(appContainer);
    } else if (hash === 'assistant') {
        AssistantManager.renderUI(appContainer);
    } else if (hash === 'graph') {
        KnowledgeGraphManager.renderUI(appContainer);
    } else if (hash.startsWith('subject-')) {
        const subId = hash.replace('subject-', '');
        NotesEngine.renderSubjectView(appContainer, subId);
    } else {
        renderCockpit();
    }
});