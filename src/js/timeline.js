// Timeline scroll progress (About page)
// Encapsulated in its own module for cleaner code structure

(function initTimeline() {
  if (typeof window === 'undefined') return;

  const onReady = () => {
    const timeline = document.querySelector('.section-about-timeline .timeline');
    if (!timeline) return;

    const progressEl = timeline.querySelector('.timeline-progress');
    const nodes = Array.from(timeline.querySelectorAll('.timeline-item .node'));

    const update = () => {
      const containerRect = timeline.getBoundingClientRect();
      const pageY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const containerTop = pageY + containerRect.top; // absolute doc Y
      const containerHeight = timeline.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      // Anchor point to feel natural
      const viewportAnchor = pageY + window.innerHeight * 0.35;

      let h = 0;
      if (viewportAnchor > containerTop) {
        h = Math.min(containerHeight, viewportAnchor - containerTop);
        if (viewportAnchor >= containerBottom) h = containerHeight;
      }
      h = Math.max(0, h);

      if (progressEl) progressEl.style.height = `${h}px`;

      // Activate nodes reached by the progress line
      nodes.forEach((node) => {
        const nodeRect = node.getBoundingClientRect();
        // node center relative to timeline container
        const nodeCenterFromContainer = (nodeRect.top - containerRect.top) + nodeRect.height / 2;
        if (nodeCenterFromContainer <= h + 1) {
          node.classList.add('is-active');
        } else {
          node.classList.remove('is-active');
        }
      });
    };

    // Use a single IntersectionObserver to trigger updates
    const io = new IntersectionObserver(update, { root: null, threshold: [0, 0.25, 0.5, 0.75, 1] });
    io.observe(timeline);
    nodes.forEach((n) => io.observe(n));

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Initial calculation
    setTimeout(update, 50);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
