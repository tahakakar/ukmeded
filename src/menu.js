(function(){
  function bindMenuToggle() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobileMenu') || document.getElementById('menu');
    if (!btn || !menu) return;
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('hidden')) {
        const inside = menu.contains(e.target);
        const onBtn = btn.contains(e.target);
        if (!inside && !onBtn) menu.classList.add('hidden');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') menu.classList.add('hidden');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindMenuToggle);
  } else {
    bindMenuToggle();
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
