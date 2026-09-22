/**
 * 2World Travel Cambodia — Application Controller
 * Manages DOM rendering, Lucide icons, accessible modal dialogs, and instant filter updates.
 */

import { TOURS_DATA, DESTINATIONS_DATA, COMPANY_INFO } from './data.js';
import { renderTourCard, renderDestinationCard, renderInquiryModal } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModal();
  renderHomeContent();
  initHeroSearch();
  initScrollEffects();
  
  // Initialize Lucide icons on page load
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Mobile Drawer & Navigation Behavior
 */
function initNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      // Update menu icon
      const menuIcon = menuBtn.querySelector('i');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
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

  // Inject modal into DOM if not present
  if (!document.getElementById('inquiryModal')) {
    const modalWrapper = document.createElement('div');
    modalWrapper.innerHTML = renderInquiryModal();
    document.body.appendChild(modalWrapper.firstElementChild);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Modal System with Accessible Focus & Keyboard Support
 */
function initModal() {
  window.openInquiryModal = function(tourCode = '', tourTitle = '') {
    const modal = document.getElementById('inquiryModal');
    const form = document.getElementById('inquiryForm');
    const success = document.getElementById('inquirySuccess');
    const tourInput = document.getElementById('tourInterest');

    if (!modal) return;

    if (form) form.classList.remove('hidden');
    if (success) success.classList.add('hidden');
    if (tourInput) {
      tourInput.value = tourCode ? `${tourTitle} (${tourCode})` : '';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }

    setTimeout(() => {
      const firstInput = document.getElementById('clientName');
      if (firstInput) firstInput.focus();
    }, 50);
  };

  window.closeInquiryModal = function() {
    const modal = document.getElementById('inquiryModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.handleInquirySubmit = function(event) {
    event.preventDefault();
    const form = document.getElementById('inquiryForm');
    const success = document.getElementById('inquirySuccess');

    if (form && success) {
      form.classList.add('hidden');
      success.classList.remove('hidden');
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeInquiryModal();
    }
  });

  document.addEventListener('click', (e) => {
    const modal = document.getElementById('inquiryModal');
    if (modal && e.target === modal) {
      window.closeInquiryModal();
    }
  });
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
      <div class="col-span-full p-10 text-center bg-white rounded-md border border-stone-200">
        <p class="text-sm font-semibold text-slateText-900 mb-1">No matching itineraries found</p>
        <p class="text-xs text-slateText-500 mb-4 max-w-sm mx-auto">We customize all routes. Inquire directly for a tailor-made schedule.</p>
        <button 
          type="button" 
          onclick="window.resetToursFilter()" 
          class="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-terracotta-500 text-white hover:bg-terracotta-600 transition-luxury"
        >
          Reset Filters
        </button>
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
 * Header Scroll
 */
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('border-stone-300');
      header.classList.remove('border-sandstone-200');
    } else {
      header.classList.remove('border-stone-300');
      header.classList.add('border-sandstone-200');
    }
  });
}
