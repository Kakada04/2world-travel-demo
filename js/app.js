/**
 * 2World Travel Cambodia — Application Controller
 * Mobile-First Page Architecture:
 * - Native browser page flows (links navigate to proper pages, zero modal traps)
 * - Adaptive Scrim-to-Solid Header
 * - Lucide icons initialization
 * - In-page tour catalog filter
 */

import { TOURS_DATA, DESTINATIONS_DATA } from './data.js';
import { renderTourCard, renderDestinationCard } from './components.js';

let isMobileMenuOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderHomeContent();
  initHeroSearch();
  initScrollEffects();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Mobile Navigation Drawer & Adaptive Header Behavior
 */
function initNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const header = document.getElementById('mainHeader');

  if (menuBtn && mobileMenu && header) {
    menuBtn.addEventListener('click', () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      menuBtn.setAttribute('aria-expanded', String(isMobileMenuOpen));
      mobileMenu.classList.toggle('hidden', !isMobileMenuOpen);
      
      // When mobile nav opens, switch header surface to solid warm sandstone
      header.classList.toggle('header-mobile-open', isMobileMenuOpen);
      
      const menuIcon = menuBtn.querySelector('i');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isMobileMenuOpen ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        isMobileMenuOpen = false;
        mobileMenu.classList.add('hidden');
        header.classList.remove('header-mobile-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        const menuIcon = menuBtn.querySelector('i');
        if (menuIcon) {
          menuIcon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }
}

/**
 * Render Data-Driven Cards on Homepage
 */
function renderHomeContent() {
  const toursContainer = document.getElementById('featuredToursGrid');
  if (toursContainer) {
    toursContainer.innerHTML = TOURS_DATA.map(tour => renderTourCard(tour)).join('');
  }

  const destinationsContainer = document.getElementById('destinationsGrid');
  if (destinationsContainer) {
    destinationsContainer.innerHTML = DESTINATIONS_DATA.map((dest, idx) => renderDestinationCard(dest, idx)).join('');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Hero Search Interaction
 */
function initHeroSearch() {
  const searchForm = document.getElementById('heroSearchForm');
  if (!searchForm) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dest = document.getElementById('heroDestSelect')?.value || '';
    const style = document.getElementById('heroStyleSelect')?.value || '';
    const duration = document.getElementById('heroDurationSelect')?.value || '';

    filterToursOnPage(dest, style, duration);

    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/**
 * Filter tours visible in grid
 */
function filterToursOnPage(dest, style, duration) {
  const toursContainer = document.getElementById('featuredToursGrid');
  if (!toursContainer) return;

  let filtered = [...TOURS_DATA];

  if (dest && dest !== 'all') {
    filtered = filtered.filter(t => t.destination.toLowerCase().includes(dest.toLowerCase()));
  }

  if (style && style !== 'all') {
    filtered = filtered.filter(t => t.style.toLowerCase().includes(style.toLowerCase()));
  }

  if (duration && duration !== 'all') {
    if (duration === 'short') {
      filtered = filtered.filter(t => t.durationDays <= 3);
    } else if (duration === 'medium') {
      filtered = filtered.filter(t => t.durationDays >= 4 && t.durationDays <= 7);
    } else if (duration === 'long') {
      filtered = filtered.filter(t => t.durationDays >= 8);
    }
  }

  if (filtered.length > 0) {
    toursContainer.innerHTML = filtered.map(tour => renderTourCard(tour)).join('');
  } else {
    toursContainer.innerHTML = `
      <div class="col-span-full p-10 text-center bg-[#F7F3EC] rounded-md border border-[rgba(60,55,45,0.10)]">
        <p class="text-sm font-semibold text-[#20231F] mb-1">No matching itineraries found</p>
        <p class="text-xs text-[#5C645F] mb-4 max-w-sm mx-auto">We customize all routes. Reach out directly for a personalized itinerary.</p>
        <a 
          href="plan-trip.html" 
          class="inline-block px-4 py-2 rounded-md text-xs font-semibold bg-[#B66E53] text-white hover:bg-[#A2583F] transition-luxury"
        >
          Plan Custom Journey
        </a>
      </div>
    `;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.filterByDestination = function(destName) {
  const destSelect = document.getElementById('heroDestSelect');
  if (destSelect) {
    for (let i = 0; i < destSelect.options.length; i++) {
      if (destSelect.options[i].text.toLowerCase().includes(destName.toLowerCase())) {
        destSelect.selectedIndex = i;
        break;
      }
    }
  }
  filterToursOnPage(destName, '', '');
  const tours = document.getElementById('tours');
  if (tours) tours.scrollIntoView({ behavior: 'smooth' });
};

window.resetToursFilter = function() {
  const toursContainer = document.getElementById('featuredToursGrid');
  if (toursContainer) {
    toursContainer.innerHTML = TOURS_DATA.map(tour => renderTourCard(tour)).join('');
  }
  const form = document.getElementById('heroSearchForm');
  if (form) form.reset();
  if (window.lucide) window.lucide.createIcons();
};

/**
 * Adaptive Header Scroll Behavior (Scrim-to-Solid after 60px)
 */
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  const handleScroll = () => {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('header-scrolled', scrolled);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
