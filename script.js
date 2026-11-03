// ============================================================
// Aionis Solutions — Interações da landing page
// ============================================================

// Chave pública do Web3Forms. Sem ela, o formulário abre o WhatsApp com os dados.
var WEB3FORMS_KEY = ''; // [PREENCHER: access key do Web3Forms]
var WHATSAPP_NUMBER = '5512996049308';

// Marcadores [PREENCHER] só aparecem em dev (?dev ou localhost).
if (/[?&]dev\b/.test(location.search) || /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
  document.documentElement.classList.add('dev');
}

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Menu mobile ----
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function setMenu(open) {
    if (!toggle || !mobileNav) return;
    mobileNav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileNav.hidden) { setMenu(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  // ---- Scroll-spy ----
  var links = document.querySelectorAll('.nav-list a, .mobile-nav a');
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    (map[id] = map[id] || []).push(a);
  });
  var ids = Object.keys(map);
  var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  function spy() {
    var line = window.innerHeight * 0.35;
    var current = '';
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s.id;
    });
    // Seções sem item de menu (problema, quem-entrega, faq...) não devem zerar o destaque de forma estranha.
    setActive(current);
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { spy(); ticking = false; });
  }, { passive: true });
  spy();

  // ---- Máscara de WhatsApp ----
  var wa = document.getElementById('whatsapp');
  if (wa) {
    wa.addEventListener('input', function () {
      var d = wa.value.replace(/\D/g, '').slice(0, 11);
      var out = d;
      if (d.length > 10) out = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
      else if (d.length > 6) out = '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
      else if (d.length > 2) out = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      else if (d.length) out = '(' + d;
      wa.value = out;
    });
  }

  // ---- Formulário ----
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  function setNote(text, type) {
    if (!note) return;
    note.textContent = text;
    note.className = 'form-note ' + (type || '');
  }

  function openWhatsApp(data) {
    var lines = [
      'Olá! Vim pelo site da Aionis.',
      'Nome: ' + data.name,
      data.company ? 'Empresa: ' + data.company : '',
      'WhatsApp: ' + data.whatsapp,
      'E-mail: ' + data.email,
      'Quero resolver: ' + data.subject,
      data.message ? 'Mensagem: ' + data.message : ''
    ].filter(Boolean);
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.botcheck && form.botcheck.checked) return;

      var data = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        whatsapp: form.whatsapp.value.trim(),
        email: form.email.value.trim(),
        subject: form.subject.value,
        message: form.message.value.trim()
      };

      [form.name, form.whatsapp, form.email, form.subject].forEach(function (f) { f.removeAttribute('aria-invalid'); });
      function fail(field, msg) {
        field.setAttribute('aria-invalid', 'true');
        field.focus();
        setNote(msg, 'error');
      }

      if (!data.name) return fail(form.name, 'Informe seu nome.');
      if (data.whatsapp.replace(/\D/g, '').length < 10) return fail(form.whatsapp, 'Informe um WhatsApp com DDD.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return fail(form.email, 'Digite um e-mail válido.');
      if (!data.subject) return fail(form.subject, 'Escolha o que você quer resolver.');
      if (!form.lgpd.checked) return fail(form.lgpd, 'Aceite o consentimento para enviar.');

      var done = 'Recebemos seu contato. Retornamos em até 1 dia útil.';

      if (!WEB3FORMS_KEY) {
        openWhatsApp(data);
        setNote('Abrimos o WhatsApp com os seus dados. Envie a mensagem para concluir.', 'success');
        form.reset();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      setNote('Enviando...', '');
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Contato pelo site: ' + data.subject,
          from_name: 'Site Aionis',
          name: data.name,
          company: data.company,
          whatsapp: data.whatsapp,
          email: data.email,
          interesse: data.subject,
          message: data.message,
          consentimento_lgpd: 'sim'
        })
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (!j.success) throw new Error('falha');
          setNote(done, 'success');
          form.reset();
        })
        .catch(function () {
          setNote('Não foi possível enviar agora. Abrimos o WhatsApp para você.', 'error');
          openWhatsApp(data);
        })
        .finally(function () { btn.disabled = false; });
    });
  }
});
