export function initRouter(onNavigate) {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1) || 'home';
    onNavigate(hash);
  });
}