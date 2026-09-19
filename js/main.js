import { StudyStore } from './store.js';
import { Router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialiser le store global
    StudyStore.init();

    // 2. Lancer le routeur
    Router.init();
});