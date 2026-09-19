// StudyFlow - Routeur Central (SPA)

import { CockpitManager } from './cockpit.js';
import { SettingsManager } from './settings.js';
import { ProgramManager } from './program.js';
import { ErrorManager } from './errors.js';
import { FocusManager } from './focus.js';
import { FlashcardManager } from './flashcards.js';

const routes = {
    '': CockpitManager,
    'home': CockpitManager,
    'cockpit': CockpitManager,
    'settings': SettingsManager,
    'program': ProgramManager,
    'errors': ErrorManager,
    'focus': FocusManager,
    'flashcards': FlashcardManager,
};

export const Router = {
    init(onNavigate) {
        const handleRoute = () => {
            const fullHash = window.location.hash.substring(1) || 'home';
            const container = document.getElementById('app');

            // 1. Découpage pour gérer les routes avec paramètres (ex: flashcards/Suites)
            const parts = fullHash.split('/');
            const route = parts[0];
            const param = parts[1] ? decodeURIComponent(parts[1]) : null;

            // 2. Appel de ton callback optionnel si nécessaire
            if (typeof onNavigate === 'function') {
                onNavigate(fullHash);
            }

            if (!container) {
                console.error("Conteneur #app introuvable dans le DOM.");
                return;
            }

            // Nettoyer le contenu précédent
            container.innerHTML = '';

            // Trouver le module associé à la route
            const activeModule = routes[route] || routes['cockpit'];

            if (activeModule && typeof activeModule.render === 'function') {
                activeModule.render(container);
            } else if (route === 'flashcards') {
                // Cas spécifique pour les flashcards avec paramètre de chapitre
                FlashcardManager.renderReviewUI(container, param);
            } else {
                container.innerHTML = `
                    <div class="max-w-xl mx-auto p-12 text-center text-white space-y-4">
                        <h1 class="text-2xl font-bold">🚧 Module en cours de construction</h1>
                        <p class="text-slate-400 text-sm">Cette vue sera bientôt connectée au moteur pédagogique.</p>
                        <a href="#cockpit" class="inline-block bg-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm">Retour au Cockpit</a>
                    </div>
                `;
            }

            // Mettre à jour l'état actif dans la barre de navigation
            this.updateActiveNav(route);
        };

        window.addEventListener('hashchange', handleRoute);
        window.addEventListener('load', handleRoute);
    },

    updateActiveNav(hash) {
        document.querySelectorAll('nav a, aside a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${hash}` || href === `#/${hash}` || href === hash) {
                link.classList.add('bg-blue-600/20', 'text-blue-400', 'border-blue-500/50');
                link.classList.remove('text-slate-400', 'border-transparent');
            } else {
                link.classList.remove('bg-blue-600/20', 'text-blue-400', 'border-blue-500/50');
                link.classList.add('text-slate-400', 'border-transparent');
            }
        });
    }
};

// Rétrocompatibilité avec ton ancienne fonction si appelée directement
export function initRouter(onNavigate) {
    Router.init(onNavigate);
}