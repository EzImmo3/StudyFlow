// Module Cockpit & Tableau de Bord - StudyFlow

import { StudyStore } from './store.js';

export const CockpitManager = {
    render(container) {
        const state = StudyStore.getState();
        const recommended = StudyStore.getRecommendedSession();

        // Calculer le pourcentage global de maîtrise ou de couverture
        let totalNotions = 0;
        let masteredNotions = 0;
        let fragileCount = 0;

        state.program.forEach(subject => {
            subject.chapters.forEach(chap => {
                chap.notions.forEach(notion => {
                    totalNotions++;
                    if (notion.status === 'mastered') masteredNotions++;
                    if (notion.status === 'fragile') fragileCount++;
                });
            });
        });

        const globalMasteryPercent = totalNotions > 0 ? Math.round((masteredNotions / totalNotions) * 100) : 0;

        container.innerHTML = `
            <div class="max-w-5xl mx-auto p-6 space-y-6">
                <!-- En-tête / Profil & Objectif -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl gap-4">
                    <div>
                        <span class="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-bold">Session Terminale 2026</span>
                        <h1 class="text-3xl font-extrabold text-white mt-2">StudyFlow — Cockpit 🚀</h1>
                        <p class="text-slate-400 text-sm mt-1">Système d'exploitation scolaire intelligent et interconnecté.</p>
                    </div>
                    <div class="bg-slate-900 border border-slate-700 p-4 rounded-xl text-right">
                        <p class="text-xs text-slate-400">Objectif visé</p>
                        <p class="text-2xl font-bold text-emerald-400">${state.user.targetAverage} <span class="text-sm text-slate-400">/20</span></p>
                        <p class="text-xs text-slate-500 mt-1">Moyenne actuelle estimée : <strong class="text-white">${state.user.currentAverage}/20</strong></p>
                    </div>
                </div>

                <!-- Bloc Moteur Adaptatif : À faire maintenant -->
                <div class="bg-gradient-to-r from-indigo-900/80 via-blue-900/80 to-slate-900 border border-blue-500/40 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div class="space-y-1">
                        <span class="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider">🎯 Recommandation du Moteur</span>
                        <h2 class="text-2xl font-extrabold text-white mt-1">${recommended.title}</h2>
                        <p class="text-slate-300 text-sm max-w-xl">${recommended.description}</p>
                    </div>
                    <button id="btn-start-session" data-action="${recommended.action}" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shrink-0 cursor-pointer">
                      Lancer (${recommended.duration}) &rarr;
                    </button>
                </div>

                <!-- Indicateurs Clés -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Maîtrise Globale</p>
                        <p class="text-3xl font-bold text-white mt-1">${globalMasteryPercent} <span class="text-sm text-slate-400">%</span></p>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Notions Fragiles</p>
                        <p class="text-3xl font-bold text-rose-400 mt-1">${fragileCount}</p>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Erreurs Actives</p>
                        <p class="text-3xl font-bold text-amber-400 mt-1">${state.errors.filter(e => !e.resolved).length}</p>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow">
                        <p class="text-slate-400 text-sm">Série (Streak)</p>
                        <p class="text-3xl font-bold text-purple-400 mt-1">${state.user.streak} <span class="text-sm text-slate-400">j</span></p>
                    </div>
                </div>

                <!-- Raccourcis vers les Modules Cœurs -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <a href="#program" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-blue-500 transition text-sm font-semibold text-white">📚 Programme</a>
                    <a href="#errors" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-rose-500 transition text-sm font-semibold text-white">❌ Carnet d'Erreurs</a>
                    <a href="#focus" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-purple-500 transition text-sm font-semibold text-white">⏱️ Deep Work</a>
                    <a href="#stats" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-center border border-slate-700 hover:border-emerald-500 transition text-sm font-semibold text-white">📊 Progression</a>
                </div>
            </div>
        `;

        // Gestion du clic sur le bouton de session recommandée
        const actionBtn = document.getElementById('btn-start-session');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => {
                const targetAction = actionBtn.getAttribute('data-action');
                window.location.hash = `#${targetAction}`;
            });
        }
    }
};