/**
 * Progressive enhancements that are purely visual:
 *  - scroll-reveal for elements marked `.reveal`
 *  - a `is-scrolled` flag on the header once the page leaves the top
 *
 * Both are additive. The `js-reveal` class is only added when an
 * IntersectionObserver is actually available, so content is never left hidden
 * by a failure or an old browser.
 */

const REVEAL_OPTIONS = { rootMargin: '0px 0px -10% 0px', threshold: 0.08 };

let observer = null;

export function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-reveal');

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, REVEAL_OPTIONS);
}

/** Called after each page render; picks up the new page's elements. */
export function observeReveals(root) {
  if (!observer) return;
  for (const el of root.querySelectorAll('.reveal:not(.is-visible)')) {
    observer.observe(el);
  }
}

/** Toggles `is-scrolled` on the header, used for its solid/transparent states. */
export function initHeaderScrollState(header) {
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}
