/* boot.js · liga a casca e abre a tela do endereço */
(function () {
  document.documentElement.lang = 'es-MX';
  setSession(!!store.get('in', 0));
  mountShell();
  render();
})();
