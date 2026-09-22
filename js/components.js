/**
 * 2World Travel Cambodia — UI Components
 * Mobile-First, Dedicated Page Flow Components:
 * - Nuanced organic surfaces (no pure #FFF or #000)
 * - Browser-native navigation (links to dedicated pages, zero modal dependencies)
 * - Lucide icons for semantic clarity
 * - Max radius: rounded-md
 * - Image-led composition
 */

/**
 * Render an individual Tour Card
 * Follows exact UX hierarchy:
 * IMAGE (16:10) -> small category/destination -> Tour Name -> Duration · Tour Code -> short description -> View Journey →
 * @param {Object} tour 
 * @returns {string} HTML markup
 */
export function renderTourCard(tour) {
  return `
    <article class="group bg-[#FAF8F5] rounded-md overflow-hidden border border-[rgba(60,55,45,0.10)] flex flex-col h-full hover:border-[#B66E53]/50 transition-luxury" data-tour-id="${tour.id}">
      <!-- Image Area (16:10 ratio) -->
      <a href="tour-detail.html?code=${tour.tourCode}" class="relative aspect-[16/10] overflow-hidden bg-[#F3EEE5] border-b border-[rgba(60,55,45,0.08)] block">
        <img 
          src="${tour.image}" 
          alt="${tour.imageAlt || tour.title}" 
          loading="lazy"
          class="w-full h-full object-cover card-image-zoom"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#20231F]/50 via-transparent to-transparent pointer-events-none"></div>
        
        <!-- Destination Tag -->
        <div class="absolute top-3 left-3 pointer-events-none">
          <span class="inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-medium bg-[#20382E] text-stone-200">
            ${tour.destination}
          </span>
        </div>
      </a>

      <!-- Content Area -->
      <div class="p-5 flex flex-col flex-grow">
        <div class="text-[11px] uppercase tracking-wider font-semibold text-[#B66E53] mb-1.5">
          ${tour.style}
        </div>

        <h3 class="font-display font-bold text-lg text-[#20231F] group-hover:text-[#B66E53] transition-colors line-clamp-1 mb-2">
          <a href="tour-detail.html?code=${tour.tourCode}">${tour.title}</a>
        </h3>

        <!-- Duration · Tour Code -->
        <div class="flex items-center text-xs text-[#5C645F] mb-3 space-x-2">
          <span class="inline-flex items-center">
            <i data-lucide="clock" class="w-3.5 h-3.5 mr-1 text-[#878E89]"></i>
            ${tour.durationDays}D / ${tour.durationNights}N
          </span>
          <span class="text-stone-300">&bull;</span>
          <span class="font-mono text-[11px] text-[#878E89]">${tour.tourCode}</span>
        </div>

        <!-- Short Description (Max 2 lines) -->
        <p class="text-xs text-[#5C645F] line-clamp-2 leading-relaxed mb-5">
          ${tour.summary}
        </p>

        <!-- Page-Based Customer Actions (Native Links, Zero Modals) -->
        <div class="mt-auto pt-4 border-t border-[rgba(60,55,45,0.06)] flex items-center justify-between">
          <a 
            href="tour-detail.html?code=${tour.tourCode}"
            class="inline-flex items-center text-xs font-semibold text-[#B66E53] hover:text-[#A2583F] transition-colors group-hover:underline"
          >
            <span>View Journey</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1"></i>
          </a>
          
          <a 
            href="plan-trip.html?tour=${encodeURIComponent(tour.tourCode)}"
            class="text-xs font-medium text-[#5C645F] hover:text-[#20231F] transition-colors"
          >
            Inquire
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render Destination Editorial Card
 * Photography-driven with essential overlay:
 * @param {Object} dest 
 * @param {number} index
 * @returns {string} HTML markup
 */
export function renderDestinationCard(dest, index) {
  const spanClass = (index === 0 || index === 3) ? 'md:col-span-2' : 'md:col-span-1';

  return `
    <div class="group relative rounded-md overflow-hidden border border-[rgba(60,55,45,0.10)] bg-[#20231F] ${spanClass} min-h-[300px] flex flex-col justify-end transition-luxury hover:border-[#CFA365]/60">
      <!-- Background Image -->
      <img 
        src="${dest.image}" 
        alt="${dest.imageAlt || dest.name}" 
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover card-image-zoom opacity-80 group-hover:opacity-90"
      />
      
      <!-- Gradient for clean text legibility -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#20231F]/90 via-[#20231F]/35 to-transparent"></div>

      <!-- Essential Info Overlay -->
      <div class="relative z-10 p-6">
        <span class="text-[11px] uppercase tracking-wider font-semibold text-[#CFA365] block mb-1">
          ${dest.subtitle}
        </span>
        <h3 class="font-display text-2xl font-bold text-white mb-3 leading-tight">
          ${dest.name}
        </h3>
        <div>
          <a 
            href="#tours" 
            onclick="window.filterByDestination('${dest.name}')"
            class="inline-flex items-center text-xs font-semibold text-white group-hover:text-[#CFA365] transition-colors"
          >
            <span>Explore ${dest.toursCount}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}
