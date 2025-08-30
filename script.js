// Smooth scroll buttons
const byId = (id) => document.getElementById(id);
byId('scrollAbout').onclick = () => document.querySelector('#sobre').scrollIntoView({behavior:'smooth'});
byId('scrollSkills').onclick = () => document.querySelector('#habilidades').scrollIntoView({behavior:'smooth'});
byId('scrollProjects').onclick = () => document.querySelector('#projetos').scrollIntoView({behavior:'smooth'});
byId('scrollContact').onclick = () => document.querySelector('#contato').scrollIntoView({behavior:'smooth'});

// Copy email
const email = 'preencher@email.com';
byId('btnCopy').onclick = async () => {
  try {
    await navigator.clipboard.writeText(email);
    byId('btnCopy').textContent = 'Copiado!';
    setTimeout(() => (byId('btnCopy').textContent = 'Copiar e‑mail'), 1800);
  } catch (e) {
    alert('Não foi possível copiar: ' + e);
  }
};
byId('copyEmail').onclick = () => { /* link já é mailto */ };

// Year
byId('year').textContent = new Date().getFullYear();

// Filters
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    projects.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      card.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
    });
  });
});

// Modals
document.querySelectorAll('[data-modal]').forEach(btn => {
  const id = btn.dataset.modal;
  const modal = document.getElementById(id);
  btn.addEventListener('click', () => modal.showModal());
});
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', (e) => e.target.closest('dialog').close());
});

// OpenAPI modal
document.querySelectorAll('[data-openapi]').forEach(btn => {
  const id = btn.dataset.openapi;
  const modal = document.getElementById(id);
  btn.addEventListener('click', () => modal.showModal());
});

// Theme toggle (simple light/dark variant for fun)
const themeBtn = byId('themeToggle');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('light-theme', !dark);
});

// Light theme adjustments
const style = document.createElement('style');
style.textContent = `
  .light-theme {
    background: linear-gradient(180deg, #f6fbff 0%, #eef6ff 100%);
    color: #0b132b;
  }
  .light-theme .bg-grid { opacity: .35; }
  .light-theme .brand, .light-theme .subtitle, .light-theme .quick-facts, .light-theme .footer { color: #0b132b; }
  .light-theme .btn { --fg: #0b132b; --bd: rgba(11,19,43,0.25); }
  .light-theme .card, .light-theme .card.glass, .light-theme .modal-card { background: rgba(255,255,255,.8); color: #0b132b; }
  .light-theme .tags li { background: rgba(11,19,43,.06); border-color: rgba(11,19,43,.16); }
`;
document.head.appendChild(style);
