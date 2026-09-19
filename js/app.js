import { initRouter } from './router.js';
import { mathsData } from '../data/maths.js';
import { mathsExpertesData } from '../data/maths-expertes.js';
import { sesData } from '../data/ses.js';
import { philosophieData } from '../data/philosophie.js';
import { histoireGeoData } from '../data/histoire-geo.js';
import { emcData } from '../data/emc.js';
import { languesData } from '../data/langues.js';
import { enseignementScientifiqueData } from '../data/enseignement-scientifique.js';

const subjects = {
  maths: mathsData,
  'maths-expertes': mathsExpertesData,
  ses: sesData,
  philosophie: philosophieData,
  'histoire-geo': histoireGeoData,
  emc: emcData,
  anglais: languesData.anglais,
  espagnol: languesData.espagnol,
  'enseignement-scientifique': enseignementScientifiqueData
};

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');

  function renderHome() {
    let html = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">`;
    Object.values(subjects).forEach(sub => {
      html += `
        <a href="#subject-${sub.id}" class="bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-blue-500 transition shadow-lg">
          <span class="text-3xl">${sub.icon}</span>
          <h2 class="text-xl font-bold text-white mt-2">${sub.title}</h2>
        </a>
      `;
    });
    html += `</div>`;
    appContainer.innerHTML = html;
  }

  function renderSubject(id) {
    const sub = subjects[id];
    if (!sub) {
      renderHome();
      return;
    }
    let html = `<div class="p-6"><a href="#" class="text-blue-400 hover:underline mb-4 inline-block">&larr; Retour aux matières</a>`;
    html += `<h1 class="text-3xl font-extrabold text-white mb-6">${sub.icon} ${sub.title}</h1>`;
    
    sub.sections.forEach(sec => {
      html += `<div class="mb-6 bg-slate-800/50 p-4 rounded-lg border border-slate-700">`;
      html += `<h3 class="text-lg font-semibold text-blue-300 mb-3">${sec.name}</h3>`;
      html += `<ul class="list-disc list-inside space-y-2 text-slate-300">`;
      sec.chapters.forEach(chap => {
        html += `<li>${chap}</li>`;
      });
      html += `</ul></div>`;
    });
    html += `</div>`;
    appContainer.innerHTML = html;
  }

  initRouter((hash) => {
    if (hash.startsWith('subject-')) {
      renderSubject(hash.replace('subject-', ''));
    } else {
      renderHome();
    }
  });

  // Initial load
  const initialHash = window.location.hash.substring(1);
  if (initialHash.startsWith('subject-')) {
    renderSubject(initialHash.replace('subject-', ''));
  } else {
    renderHome();
  }

  // Enregistrement du Service Worker pour le hors-ligne
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log("Service Worker enregistré avec succès."))
      .catch(err => console.log("Erreur Service Worker :", err));
  }
});