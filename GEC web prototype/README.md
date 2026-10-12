# GEC Student Hub Prototype

A high-performance, responsive, and modern student dashboard built from the ground up to completely replace legacy institutional portals. Built independently as a full-stack project, this platform eliminates legacy frame bottlenecks and rigid tables in favor of a lightning-fast, card-based interface.

Live Deployment: https://raj-gec-studenthub.netlify.app/

---

## Core Features

### 1. Multi-Tier Fluid Responsiveness
The interface transitions cleanly across device tiers using four distinct layout breakpoint rules, ensuring students can check schedules and notifications natively on mobile viewports:

* Desktop (> 1140px): Grand-scale dashboard configuration utilizing a clean repeat(4, 1fr) CSS Grid component framework.
* Tablet (880px – 1140px): Reflows automatically into a sharp 3-column system to maximize content density.
* Phone (547px – 880px): Snaps down into a dynamic 2-column layout, automatically scaling typography headers from 45px down to 25px to ensure zero boundary clipping.
* Ultra-Mobile (< 547px): Restructures layout card footprints down to a tight, adaptive 140px resolution configuration.

### 2. Global Tokenized Theme Control (Dark & Light Mode)
Unlike legacy systems that require complex element-by-element iteration loops, this system implements Root-Level Design Tokenization for instantaneous styling shifts:

* Zero DOM Engine Inefficiencies: Toggles a singular .dark target state directly on the body container, allowing standard CSS variables (--darkback, --lightback) to distribute layout styling variables instantly via native browser inheritance.
* Persistent Native State Memory: Utilizes standard web container localStorage logic to track and evaluate the user's color selection, completely preventing high-glare white flashing sequences between active session refreshes.

### 3. Bare-Metal Component Creation
Built exclusively with vanilla web primitives (HTML5, CSS3, Pure DOM JavaScript) to maintain an exceptionally lightweight code footprint. Features dynamic template container rendering using memory-isolated operations (document.createElement) to guarantee hyper-fast interface responsiveness.

---

## Project Architecture

```bash
├── index.html      # Component Architecture & Document Layout
├── style.css       # Layout Variables, Media Engine & Design Tokens
└── script.js       # Persistent State Controller & DOM Manager
```

---

## Installation & Local Setup

Clone the repository directly onto your local terminal layout to evaluate the engineering metrics locally:

```bash
# Clone this repository
git clone https://github.com

# Navigate into the deployment workspace
cd your-repository-name

# Open the layout architecture in your browser environment
```

---

## Engineering Specifications

* Frontend UI Framework: Pure Semantic HTML5 Layout Structure
* Layout Distribution Engine: Modern CSS Custom Grid & Responsive Design Inversion
* State Controller Operations: Light/Dark Theme Memory Cache Engine (localStorage)
* System Runtime Mechanics: Vanilla ECMA Client-Side Scripting

---

Engineered independently. Built with clean architectural execution logic.
