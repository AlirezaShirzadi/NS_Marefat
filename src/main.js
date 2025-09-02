import './style.css'
import './../node_modules/preline/dist/preline.js'
import './js/slider.js'

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind("[data-fancybox]", {})
Fancybox.bind("[data-fancybox='intro-videos']", {})
Fancybox.bind("[data-fancybox='ielts']", {})

// Timeline (About page)
import './js/timeline.js'

// --- AOS: Animate On Scroll ---
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS and auto-apply to sections
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Add default AOS attributes to all sections that don't have any
    const sections = Array.from(document.querySelectorAll('main section, section'));
    sections.forEach((el, idx) => {
      if (!el.getAttribute('data-aos')) {
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-duration', '700');
        el.setAttribute('data-aos-easing', 'ease-out-cubic');
        el.setAttribute('data-aos-offset', '80');
        el.setAttribute('data-aos-once', 'true');
        // gentle stagger per section
        el.setAttribute('data-aos-delay', String((idx % 6) * 50));
      }
    });

    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 80,
      delay: 0,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });

    // Refresh after all assets load to ensure positions are correct
    window.addEventListener('load', () => {
      setTimeout(() => AOS.refreshHard(), 100);
    });
  } catch (err) {
    console.error('AOS init error:', err);
  }
});
