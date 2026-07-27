// ============================================================
// Aionis Solutions — Interações da landing page
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  // ---- Ano no rodapé ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Menu mobile ----
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });
    // Fecha ao clicar em um link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Fecha o menu mobile ao redimensionar para desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) closeMenu();
  });

  // ---- Formulário de contato ----
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        setNote('Por favor, preencha todos os campos.', 'error');
        return;
      }
      if (!emailOk) {
        setNote('Digite um e-mail válido.', 'error');
        return;
      }

      // Abre o cliente de e-mail com a mensagem pré-preenchida.
      var subject = encodeURIComponent('Contato pelo site — ' + name);
      var body = encodeURIComponent(
        'Nome: ' + name + '\n' +
        'E-mail: ' + email + '\n\n' +
        message
      );
      window.location.href =
        'mailto:contato@aionissolutions.com.br?subject=' + subject + '&body=' + body;

      setNote('Obrigado, ' + name + '! Abrimos seu e-mail para concluir o envio.', 'success');
      form.reset();
    });
  }

  function setNote(text, type) {
    if (!note) return;
    note.textContent = text;
    note.className = 'form-note ' + type;
  }
});
