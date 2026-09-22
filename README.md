# 2World Travel Cambodia — Customer-Facing Website Demo

A customer-facing web demo for **2World Travel (Cambodia) Ltd**, an accredited inbound Destination Management Company (DMC) and travel agency established in Phnom Penh circa 2010.

Built to serve as the visual and UX specification for the upcoming Next.js / headless CMS production rebuild.

---

## 🏛 Business & Operational Background

- **Accreditations**: Ministry of Tourism License No. `098/11`, Ministry of Commerce License No. `So. 0021KH/2010`.
- **Industry Memberships**: Active member of CATA (Cambodia Association of Travel Agents) and PATA (Pacific Asia Travel Association).
- **Core Operations**: Inbound multi-day tour packages, Seat-in-Coach (SIC) tours, inter-city bus ticketing brokerage (Giant Ibis, Mekong Express, Virak Buntham, Soriya), train ticketing, licensed multilingual tour guides, private chauffeured fleet hire, visa assistance, and corporate MICE logistics.
- **Inquiry-Driven Model**: Real-world travel operations are consultative and bespoke. The demo focuses on high-trust curation, authentic Cambodian travel narrative, and streamlined trip planning inquiries rather than simulated real-time booking engines.

---

## 🎨 Visual Identity & Design System

- **Angkor Terracotta** (`#9E472A` / `#82381F`): Inspired by the laterite stone of Banteay Srei and Cambodian sunsets.
- **Cardamom Forest Green** (`#142E27` / `#0D1E1A`): Deep tropical contrast tone.
- **Sandstone Cream** (`#FBF8F3` / `#F4EFE6`): Warm, tactile neutral backdrop.
- **Khmer Gold** (`#C38B38` / `#D4A359`): Subtle brass accents for ratings and trust badges.
- **Typography**: `Playfair Display` (editorial serif headings) paired with `Plus Jakarta Sans` (modern, legible UI text).

---

## 🛠 Tech Stack

- **HTML5**: Semantic document structure, accessible ARIA roles, and keyboard navigation.
- **Tailwind CSS**: Utility-first styling with custom theme extension for design tokens.
- **Vanilla JavaScript (ES Modules)**: Zero framework dependencies, structured data models (`js/data.js`), component renderers (`js/components.js`), and accessible interactions (`js/app.js`).

---

## 🚀 Quickstart

Open `index.html` directly in any modern browser, or run a local static server:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js npx
npx serve .
```
Then navigate to `http://localhost:3000`.

---

## 📂 Project Structure

```
├── index.html          # High-fidelity homepage demo
├── css/
│   └── styles.css      # Custom tokens, typography, animations, focus styles
├── js/
│   ├── data.js         # Normalized tour packages, destinations, and credentials
│   ├── components.js   # Reusable UI card and modal builders
│   └── app.js          # Controller handling search filtering, navigation, and modal
├── .gitignore
└── README.md
```
