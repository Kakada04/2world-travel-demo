/**
 * 2World Travel Cambodia — UI Components
 * Flat, editorial, modern travel components adhering strictly to:
 * - Max border radius: rounded-md (or rounded-sm for small tags)
 * - Zero box-shadows / zero floating 3D effects
 * - Structure created through borders, whitespace, background contrast, and typography
 */

/**
 * Render an individual Tour Card (Flat Editorial Card)
 * @param {Object} tour 
 * @returns {string} HTML markup
 */
export function renderTourCard(tour) {
  const highlightsList = tour.highlights
    .slice(0, 3)
    .map(h => `<li class="flex items-start text-xs text-slate-600 mb-1.5"><span class="text-terracotta-500 mr-2 flex-shrink-0 font-bold">&bull;</span><span>${h}</span></li>`)
    .join('');

  return `
    <article class="group bg-white rounded-md overflow-hidden border border-stone-200 flex flex-col h-full hover:border-stone-400 transition-luxury" data-tour-id="${tour.id}">
      <!-- Image & Meta Badges -->
      <div class="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-200">
        <img 
          src="${tour.image}" 
          alt="${tour.imageAlt || tour.title}" 
          loading="lazy"
          class="w-full h-full object-cover card-image-zoom"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>
        
        <!-- Top Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span class="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-[#142E27] text-white">
            ${tour.destination}
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold bg-white text-[#9E472A] border border-stone-200 tracking-wide">
            ${tour.tourCode}
          </span>
        </div>

        <!-- Duration Tag on Image Bottom -->
        <div class="absolute bottom-3 left-3 pointer-events-none">
          <span class="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold bg-white text-slate-900 border border-stone-200">
            ${tour.durationDays}D / ${tour.durationNights}N
          </span>
        </div>
      </div>

      <!-- Content Body -->
      <div class="p-5 sm:p-6 flex flex-col flex-grow">
        <div class="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
          <span class="text-[#9E472A]">${tour.style}</span>
          <span>${tour.boardBasis}</span>
        </div>

        <h3 class="font-display font-semibold text-lg text-slate-900 group-hover:text-[#9E472A] transition-colors line-clamp-2 mb-2 leading-snug">
          ${tour.title}
        </h3>

        <p class="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          ${tour.summary}
        </p>

        <!-- Key Highlights -->
        <div class="pt-3 border-t border-stone-100 mb-4">
          <p class="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-2">Key Highlights</p>
          <ul class="space-y-1">
            ${highlightsList}
          </ul>
        </div>

        <!-- Footer / Action Area -->
        <div class="mt-auto pt-4 border-t border-stone-200 flex items-center justify-between">
          <div>
            <span class="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Pricing Basis</span>
            <span class="text-xs font-semibold text-slate-800">Tailored Quote</span>
          </div>

          <div class="flex items-center space-x-2">
            <button 
              type="button"
              onclick="window.openInquiryModal('${tour.tourCode}', '${tour.title.replace(/'/g, "\\'")}')"
              class="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#9E472A] text-white hover:bg-[#82381F] transition-luxury"
            >
              Inquire
            </button>
            <a 
              href="tour-detail.html?code=${tour.tourCode}" 
              class="inline-flex items-center justify-center px-3 py-1.5 rounded-md text-xs font-semibold bg-stone-100 text-slate-700 hover:bg-stone-200 transition-luxury border border-stone-200"
              title="View full day-by-day itinerary"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render Destination Editorial Card (Flat Magazine Composition)
 * @param {Object} dest 
 * @param {number} index
 * @returns {string} HTML markup
 */
export function renderDestinationCard(dest, index) {
  const spanClass = (index === 0 || index === 3) ? 'md:col-span-2' : 'md:col-span-1';

  return `
    <div class="group relative rounded-md overflow-hidden border border-stone-300 bg-stone-900 ${spanClass} min-h-[320px] flex flex-col justify-end transition-luxury hover:border-stone-400">
      <!-- Background Image -->
      <img 
        src="${dest.image}" 
        alt="${dest.imageAlt || dest.name}" 
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover card-image-zoom opacity-80 group-hover:opacity-90"
      />
      
      <!-- Gradient Overlay for contrast -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <!-- Top Badge -->
      <div class="absolute top-4 left-4 z-10">
        <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-semibold bg-white text-slate-900 border border-stone-200">
          ${dest.toursCount}
        </span>
      </div>

      <!-- Content -->
      <div class="relative z-10 p-6 sm:p-7">
        <p class="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
          ${dest.subtitle}
        </p>
        <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          ${dest.name}
        </h3>
        <p class="text-xs sm:text-sm text-stone-200 line-clamp-2 max-w-xl mb-3 leading-relaxed">
          ${dest.description}
        </p>
        <div>
          <a 
            href="tours.html?dest=${encodeURIComponent(dest.name)}" 
            class="inline-flex items-center text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors"
          >
            <span>Explore Tours in this Region</span>
            <svg class="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Inquiry Modal Element (Flat Dialog)
 * @returns {string} HTML markup
 */
export function renderInquiryModal() {
  return `
    <div id="inquiryModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 overflow-y-auto modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="relative w-full max-w-2xl bg-white rounded-md border border-stone-300 overflow-hidden my-8">
        <!-- Header -->
        <div class="bg-[#142E27] text-white px-6 py-5 flex items-center justify-between border-b border-stone-800">
          <div>
            <span class="text-xs uppercase font-semibold tracking-wider text-amber-300">2World Travel Cambodia</span>
            <h3 id="modalTitle" class="font-display text-xl sm:text-2xl font-bold">Plan Your Cambodian Journey</h3>
          </div>
          <button 
            type="button" 
            onclick="window.closeInquiryModal()"
            class="text-stone-300 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Form Body -->
        <form id="inquiryForm" class="p-6 sm:p-8 space-y-4" onsubmit="window.handleInquirySubmit(event)">
          <!-- Notice -->
          <div class="p-3.5 bg-stone-50 border border-stone-200 rounded-md text-xs text-slate-700 flex items-start space-x-2.5">
            <span class="text-[#9E472A] font-bold text-sm leading-none">&bull;</span>
            <span>
              <strong>Personalized Consultation:</strong> Every itinerary is custom-arranged by our Phnom Penh & Siem Reap travel team. No automated charges or simulated instant reservations.
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="clientName" class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                id="clientName" 
                name="clientName" 
                required 
                placeholder="e.g. Eleanor Vance" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:border-[#9E472A] transition-colors"
              />
            </div>
            <div>
              <label for="clientEmail" class="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                id="clientEmail" 
                name="clientEmail" 
                required 
                placeholder="eleanor@example.com" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:border-[#9E472A] transition-colors"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="clientPhone" class="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp (Optional)</label>
              <input 
                type="tel" 
                id="clientPhone" 
                name="clientPhone" 
                placeholder="+1 555 0192" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:border-[#9E472A] transition-colors"
              />
            </div>
            <div>
              <label for="tourInterest" class="block text-xs font-semibold text-slate-700 mb-1">Tour Package or Destination</label>
              <input 
                type="text" 
                id="tourInterest" 
                name="tourInterest" 
                placeholder="e.g. South Coast Explorer (2WT-SCE-7D6N)" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:border-[#9E472A] transition-colors"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label for="travelMonth" class="block text-xs font-semibold text-slate-700 mb-1">Approximate Travel Time</label>
              <select 
                id="travelMonth" 
                name="travelMonth" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 focus:border-[#9E472A] transition-colors"
              >
                <option value="Flexible / Undecided">Flexible / Undecided</option>
                <option value="November - February (Cool/Dry)">Nov - Feb (Cool / Dry)</option>
                <option value="March - May (Warm Season)">Mar - May (Warm Season)</option>
                <option value="June - October (Green Season)">Jun - Oct (Green Emerald)</option>
              </select>
            </div>
            <div>
              <label for="travelersAdults" class="block text-xs font-semibold text-slate-700 mb-1">Adults (12+)</label>
              <input 
                type="number" 
                id="travelersAdults" 
                name="travelersAdults" 
                min="1" 
                max="50" 
                value="2" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 focus:border-[#9E472A] transition-colors"
              />
            </div>
            <div>
              <label for="hotelStandard" class="block text-xs font-semibold text-slate-700 mb-1">Preferred Hotel Style</label>
              <select 
                id="hotelStandard" 
                name="hotelStandard" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 focus:border-[#9E472A] transition-colors"
              >
                <option value="Boutique Heritage (4-Star)">Boutique Heritage (4-Star)</option>
                <option value="Luxury Resort (5-Star)">Luxury Resort (5-Star)</option>
                <option value="Comfort Standard (3-Star)">Comfort Standard (3-Star)</option>
                <option value="Transport & Guiding Only">Transport & Guiding Only</option>
              </select>
            </div>
          </div>

          <div>
            <label for="clientNotes" class="block text-xs font-semibold text-slate-700 mb-1">Specific Requests or Dietary Notes</label>
            <textarea 
              id="clientNotes" 
              name="clientNotes" 
              rows="3" 
              placeholder="Tell us about your travel style, preferred languages for your guide, mobility requirements, or specific sights..." 
              class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:border-[#9E472A] transition-colors"
            ></textarea>
          </div>

          <!-- Direct Desk Details -->
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>Direct Desk: <a href="tel:+85523222727" class="text-slate-800 font-semibold underline">+855 23 222 727</a></span>
            <span class="text-amber-700 font-medium">Responses usually within 12–24 business hours</span>
          </div>

          <!-- Actions -->
          <div class="pt-3 border-t border-stone-200 flex items-center justify-end space-x-3">
            <button 
              type="button" 
              onclick="window.closeInquiryModal()" 
              class="px-4 py-2 rounded-md text-xs font-semibold text-slate-600 hover:bg-stone-100 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="px-5 py-2 rounded-md text-xs font-semibold bg-[#9E472A] text-white hover:bg-[#82381F] transition-luxury"
            >
              Send Trip Inquiry
            </button>
          </div>
        </form>

        <!-- Success Confirmation State -->
        <div id="inquirySuccess" class="hidden p-8 text-center space-y-4">
          <div class="w-12 h-12 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 class="font-display text-2xl font-bold text-slate-900">Inquiry Received</h4>
          <p class="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to <strong>2World Travel Cambodia</strong>. A member of our local travel team will review your requirements and respond via email with itinerary suggestions and transparent seasonal tariff options.
          </p>
          <div class="pt-4">
            <button 
              type="button" 
              onclick="window.closeInquiryModal()" 
              class="px-5 py-2 rounded-md text-xs font-semibold bg-[#142E27] text-white hover:bg-[#1C3F35] transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
