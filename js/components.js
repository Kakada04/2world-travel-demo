/**
 * 2World Travel Cambodia — UI Components
 * Flat, editorial, modern travel components:
 * - Zero emoji
 * - Lucide icons for semantic clarity
 * - Max radius: rounded-md
 * - Minimal text, high scannability
 */

/**
 * Render an individual Tour Card
 * Follows exact UX hierarchy:
 * IMAGE -> small category/destination -> Tour Name -> Duration · Tour Code -> short description -> View Journey →
 * @param {Object} tour 
 * @returns {string} HTML markup
 */
export function renderTourCard(tour) {
  return `
    <article class="group bg-white rounded-md overflow-hidden border border-stone-200 flex flex-col h-full hover:border-stone-400 transition-luxury" data-tour-id="${tour.id}">
      <!-- Image Area -->
      <div class="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-200">
        <img 
          src="${tour.image}" 
          alt="${tour.imageAlt || tour.title}" 
          loading="lazy"
          class="w-full h-full object-cover card-image-zoom"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        
        <!-- Subtle Top Destination Tag -->
        <div class="absolute top-3 left-3 pointer-events-none">
          <span class="inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-medium bg-forest-900 text-stone-200">
            ${tour.destination}
          </span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-5 flex flex-col flex-grow">
        <div class="text-[11px] uppercase tracking-wider font-semibold text-terracotta-500 mb-1.5">
          ${tour.style}
        </div>

        <h3 class="font-display font-bold text-lg text-slateText-900 group-hover:text-terracotta-500 transition-colors line-clamp-1 mb-2">
          ${tour.title}
        </h3>

        <!-- Duration · Tour Code -->
        <div class="flex items-center text-xs text-slateText-500 mb-3 space-x-2">
          <span class="inline-flex items-center">
            <i data-lucide="clock" class="w-3.5 h-3.5 mr-1 text-slateText-400"></i>
            ${tour.durationDays}D / ${tour.durationNights}N
          </span>
          <span class="text-stone-300">&bull;</span>
          <span class="font-mono text-[11px] text-slateText-400">${tour.tourCode}</span>
        </div>

        <!-- Short Description (Max 2 lines) -->
        <p class="text-xs text-slateText-500 line-clamp-2 leading-relaxed mb-5">
          ${tour.summary}
        </p>

        <!-- Single Clear Action -->
        <div class="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <button 
            type="button"
            onclick="window.openInquiryModal('${tour.tourCode}', '${tour.title.replace(/'/g, "\\'")}')"
            class="inline-flex items-center text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors group-hover:underline"
          >
            <span>Inquire About Route</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1"></i>
          </button>
          
          <span class="text-[11px] text-slateText-400 font-medium">${tour.boardBasis}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render Destination Editorial Card
 * Photography-driven with minimal, essential overlay:
 * Destination + Short descriptor (zero paragraphs over photos)
 * @param {Object} dest 
 * @param {number} index
 * @returns {string} HTML markup
 */
export function renderDestinationCard(dest, index) {
  const spanClass = (index === 0 || index === 3) ? 'md:col-span-2' : 'md:col-span-1';

  return `
    <div class="group relative rounded-md overflow-hidden border border-stone-300 bg-stone-900 ${spanClass} min-h-[300px] flex flex-col justify-end transition-luxury hover:border-stone-400">
      <!-- Background Image -->
      <img 
        src="${dest.image}" 
        alt="${dest.imageAlt || dest.name}" 
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover card-image-zoom opacity-80 group-hover:opacity-90"
      />
      
      <!-- Gradient for clean text legibility -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

      <!-- Essential Info Overlay (No Paragraphs) -->
      <div class="relative z-10 p-6">
        <span class="text-[11px] uppercase tracking-wider font-semibold text-khmerGold-400 block mb-1">
          ${dest.subtitle}
        </span>
        <h3 class="font-display text-2xl font-bold text-white mb-3 leading-tight">
          ${dest.name}
        </h3>
        <div>
          <a 
            href="#tours" 
            onclick="window.filterByDestination('${dest.name}')"
            class="inline-flex items-center text-xs font-semibold text-white group-hover:text-khmerGold-400 transition-colors"
          >
            <span>Explore ${dest.toursCount}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Inquiry Modal Element (Flat, Zero-Emoji, Semantic Lucide Icons)
 * @returns {string} HTML markup
 */
export function renderInquiryModal() {
  return `
    <div id="inquiryModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 overflow-y-auto modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="relative w-full max-w-xl bg-white rounded-md border border-stone-300 overflow-hidden my-8 shadow-none">
        <!-- Header -->
        <div class="bg-forest-950 text-white px-6 py-5 flex items-center justify-between border-b border-forest-900">
          <div>
            <span class="text-[10px] uppercase font-semibold tracking-wider text-khmerGold-400 block">2World Travel Cambodia</span>
            <h3 id="modalTitle" class="font-display text-xl font-bold">Plan Your Custom Journey</h3>
          </div>
          <button 
            type="button" 
            onclick="window.closeInquiryModal()"
            class="text-stone-300 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Form Body -->
        <form id="inquiryForm" class="p-6 space-y-4" onsubmit="window.handleInquirySubmit(event)">
          <!-- Notice -->
          <div class="p-3 bg-sandstone-50 border border-sandstone-200 rounded-md text-xs text-slateText-700 flex items-start space-x-2">
            <i data-lucide="shield-check" class="w-4 h-4 text-terracotta-500 flex-shrink-0 mt-0.5"></i>
            <span>
              <strong>Personalized Consultation:</strong> Itineraries are arranged directly by our Phnom Penh & Siem Reap team. No automated charges.
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="clientName" class="block text-xs font-semibold text-slateText-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                id="clientName" 
                name="clientName" 
                required 
                placeholder="Eleanor Vance" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slateText-900 placeholder-stone-400 focus:border-terracotta-500 transition-colors"
              />
            </div>
            <div>
              <label for="clientEmail" class="block text-xs font-semibold text-slateText-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                id="clientEmail" 
                name="clientEmail" 
                required 
                placeholder="eleanor@example.com" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slateText-900 placeholder-stone-400 focus:border-terracotta-500 transition-colors"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="clientPhone" class="block text-xs font-semibold text-slateText-700 mb-1">Phone / WhatsApp (Optional)</label>
              <input 
                type="tel" 
                id="clientPhone" 
                name="clientPhone" 
                placeholder="+1 555 0192" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slateText-900 placeholder-stone-400 focus:border-terracotta-500 transition-colors"
              />
            </div>
            <div>
              <label for="tourInterest" class="block text-xs font-semibold text-slateText-700 mb-1">Tour or Destination</label>
              <input 
                type="text" 
                id="tourInterest" 
                name="tourInterest" 
                placeholder="e.g. South Coast Explorer (2WT-SCE-7D6N)" 
                class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slateText-900 placeholder-stone-400 focus:border-terracotta-500 transition-colors"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label for="travelMonth" class="block text-xs font-semibold text-slateText-700 mb-1">Travel Season</label>
              <select 
                id="travelMonth" 
                name="travelMonth" 
                class="w-full px-3 py-2 rounded-md border border-stone-300 bg-white text-xs sm:text-sm text-slateText-900 focus:border-terracotta-500 transition-colors"
              >
                <option value="Flexible">Flexible / Undecided</option>
                <option value="Cool Season">Nov – Feb (Cool / Dry)</option>
                <option value="Warm Season">Mar – May (Warm)</option>
                <option value="Green Season">Jun – Oct (Green Season)</option>
              </select>
            </div>
            <div>
              <label for="travelersAdults" class="block text-xs font-semibold text-slateText-700 mb-1">Adults (12+)</label>
              <input 
                type="number" 
                id="travelersAdults" 
                name="travelersAdults" 
                min="1" 
                max="50" 
                value="2" 
                class="w-full px-3 py-2 rounded-md border border-stone-300 bg-white text-xs sm:text-sm text-slateText-900 focus:border-terracotta-500 transition-colors"
              />
            </div>
            <div>
              <label for="hotelStandard" class="block text-xs font-semibold text-slateText-700 mb-1">Accommodation</label>
              <select 
                id="hotelStandard" 
                name="hotelStandard" 
                class="w-full px-3 py-2 rounded-md border border-stone-300 bg-white text-xs sm:text-sm text-slateText-900 focus:border-terracotta-500 transition-colors"
              >
                <option value="Boutique 4-Star">Boutique Heritage (4-Star)</option>
                <option value="Luxury 5-Star">Luxury Resort (5-Star)</option>
                <option value="Comfort 3-Star">Comfort Standard (3-Star)</option>
                <option value="Transport Only">Transport & Guides Only</option>
              </select>
            </div>
          </div>

          <div>
            <label for="clientNotes" class="block text-xs font-semibold text-slateText-700 mb-1">Trip Details & Requirements</label>
            <textarea 
              id="clientNotes" 
              name="clientNotes" 
              rows="3" 
              placeholder="Guide languages, travel pace, special interests or dietary requirements..." 
              class="w-full px-3.5 py-2 rounded-md border border-stone-300 bg-white text-sm text-slateText-900 placeholder-stone-400 focus:border-terracotta-500 transition-colors"
            ></textarea>
          </div>

          <!-- Direct Phone Reference -->
          <div class="pt-1 flex items-center justify-between text-xs text-slateText-500">
            <span class="flex items-center">
              <i data-lucide="phone" class="w-3.5 h-3.5 mr-1 text-slateText-400"></i>
              Office: <a href="tel:+85523222727" class="text-slateText-800 font-semibold ml-1 underline">+855 23 222 727</a>
            </span>
            <span class="text-slateText-400">Response within 24 hours</span>
          </div>

          <!-- Actions -->
          <div class="pt-3 border-t border-stone-200 flex items-center justify-end space-x-3">
            <button 
              type="button" 
              onclick="window.closeInquiryModal()" 
              class="px-4 py-2 rounded-md text-xs font-semibold text-slateText-600 hover:bg-stone-100 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="px-5 py-2 rounded-md text-xs font-semibold bg-terracotta-500 text-white hover:bg-terracotta-600 transition-luxury flex items-center"
            >
              <span>Send Inquiry</span>
              <i data-lucide="send" class="w-3.5 h-3.5 ml-1.5"></i>
            </button>
          </div>
        </form>

        <!-- Success Confirmation State -->
        <div id="inquirySuccess" class="hidden p-8 text-center space-y-4">
          <div class="w-10 h-10 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
            <i data-lucide="check" class="w-5 h-5"></i>
          </div>
          <h4 class="font-display text-xl font-bold text-slateText-900">Inquiry Received</h4>
          <p class="text-xs sm:text-sm text-slateText-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting <strong>2World Travel Cambodia</strong>. Our travel team will review your details and send a personalized itinerary proposal.
          </p>
          <div class="pt-2">
            <button 
              type="button" 
              onclick="window.closeInquiryModal()" 
              class="px-5 py-2 rounded-md text-xs font-semibold bg-forest-900 text-white hover:bg-forest-800 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
