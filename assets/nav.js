// Mobile navigation toggle
(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const links     = document.querySelector('.nav__links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Mark active link based on current page
  const current = location.pathname.split('/').pop() || 'index.html';
  links.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    const hrefFile = (href === '/' || href === './') ? 'index.html' : href;
    if (hrefFile === current) {
      a.classList.add('active');
    }
  });
})();
