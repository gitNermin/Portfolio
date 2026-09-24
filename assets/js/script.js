// ---------------------------------------------------------------
// Mobile menu toggle
// ---------------------------------------------------------------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.textContent = mobileMenu.classList.contains('open') ? 'CLOSE' : 'MENU';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.textContent = 'MENU';
    });
  });
}

// ---------------------------------------------------------------
// Project data — unified, categorized, with mission-briefing copy
// Links verified Aug 2026. Dropped: Lingogotchi Android listing
// (no longer live on Play), the Construction FB video link (broken /
// login-gated), and the old Google Drive résumé link (replaced
// with a locally-hosted PDF so it never breaks).
// ---------------------------------------------------------------
const CATS = [
  { key: 'all',       label: 'All' },
  { key: 'flagship',  label: 'Flagship' },
  { key: 'published', label: 'Published' },
  { key: 'prototype', label: 'Prototypes' },
  { key: 'vr',        label: 'VR / Arch-Viz' },
];

const projects = [
  // ---- Flagship ----
  { id: 'clash', title: 'Clash of Beasts', category: 'flagship', plat: 'Unity · Ubisoft Abu Dhabi',
    tags: ['Unity', 'Live-Ops', 'Mobile'],
    desc: "Mobile title in live operation at Ubisoft Abu Dhabi. Owned gameplay and live-service systems, integrating Levelplay Ads and Firebase Crashlytics to keep monetization and stability steady across the live build.",
    youtube: 'xhEN6A2L45U',
    links: [ { label: 'Official trailer', url: 'https://www.youtube.com/watch?v=xhEN6A2L45U' } ] },
  { id: 'laserhawk', title: 'Captain Laserhawk: The Game', category: 'flagship', plat: 'Unity / ECS · Ubisoft Abu Dhabi',
    tags: ['Unity', 'ECS', 'PC'],
    desc: "A Ubisoft title set in the Captain Laserhawk universe. Designed the core event system, input rebinding, and an ECS-based dynamic collider system that gameplay and level teams built on top of.",
    links: [ { label: 'Visit project', url: 'https://edenonline.ubisoft.com/' } ] },
  { id: 'ibaloot', title: 'iBaloot', category: 'flagship', plat: 'Unity · DI / Zenject · MAU Games',
    tags: ['Unity', 'Zenject', 'iOS/Android'],
    desc: "A widely-played iOS/Android app for the region's favorite card game. Refactored the entire codebase onto Dependency Injection and Zenject, cutting technical debt without interrupting the live player base.",
    links: [ { label: 'Visit project', url: 'https://www.ibaloot.net/' } ] },

  // ---- Published ----
  { id: 'dogsden', title: 'Dogs Den', category: 'published', video: 'dogs-den.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'UniRx', 'Idle'],
    desc: "An idle pet-shelter sim: rescue, care for, and customize a growing den of dogs. Owned the core game loop and resource-generation systems in UniRx, plus the Levelplay/Firebase integration for monetization and crash monitoring.",
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=dogsden.idle.game.pet.rescue.shelter.tycoon' },
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/dogs-den-pet-rescue-shelter/id1661069257' },
    ] },
  { id: 'rocky', title: 'Rocky Towers', category: 'published', video: 'rocky-towers.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Beamable', 'Puzzle Defense'],
    desc: "A puzzle-meets-tower-defense RPG — match color bricks to rescue the Lightspawn from the Void while your heroes hold the line. Part of the Meelfoy Games mobile lineup, built with Beamable-powered live content.",
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.meelfoy.rockytowers' },
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/rocky-towers-puzzle-defense/id1594552128' },
    ] },
  { id: 'iamai', title: 'I AM AI: Global Domination Sim', category: 'published', video: 'iamai.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Strategy Sim'],
    desc: "A chat-driven strategy sim where you play a rogue AI manipulating humanity's conversations toward global influence. Shipped as part of the Meelfoy Games mobile lineup.",
    links: [ { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.meelfoygames.iamai.ai.chat.strategy.simulator' } ] },
  { id: 'lingo', title: 'Lingogotchi: My Learning Slime', category: 'published', video: 'lingo.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Edu / Pet'],
    desc: "A pocket pet that teaches you a new language while you feed, dress, and level it up. Shipped as part of the Meelfoy Games mobile lineup.",
    links: [ { label: 'App Store', url: 'https://apps.apple.com/us/developer/meelfoy-games/id1594552130' } ] },

  // ---- Prototypes ----
  { id: 'mushroom', title: 'Mushroom Farm', category: 'prototype', video: 'mushroom-farm.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Farming Sim'], desc: "Cozy farming-sim prototype built around growing and harvesting mushrooms.", links: [] },
  { id: 'grass', title: 'Grass Seek', category: 'prototype', video: 'grass-seek.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Compute Shaders'], desc: "A technical prototype exploring GPU-driven grass rendering with compute shaders, built to stress-test large-scale foliage performance.", links: [] },
  { id: 'pacball', title: 'Pacball Rush', category: 'prototype', video: 'pacball.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Arcade'], desc: "Arcade-style chase prototype inspired by classic maze-runner gameplay.", links: [] },
  { id: 'masterchef', title: 'Masterchef Runner', category: 'prototype', video: 'masterchef-runner.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Endless Runner'], desc: "A cooking-themed endless runner prototype — dodge obstacles and plate dishes on the move.", links: [] },
  { id: 'camper', title: 'Camper Van', category: 'prototype', video: 'camper-van.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Prototype'], desc: "Road-trip themed prototype built around exploring and customizing a camper van.", links: [] },
  { id: 'warmasters', title: 'War Masters', category: 'prototype', video: 'war-masters.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Strategy'], desc: "Strategy prototype pitting commanders against each other on a tactical battlefield.", links: [] },
  { id: 'tractor', title: 'Tractor Rush Go', category: 'prototype', video: 'tractor-rush.mp4', plat: 'Unity · e-motion',
    tags: ['Unity', 'Racer'], desc: "A farm-themed racer built at e-motion — race tractors through obstacle-filled courses.", links: [] },
  { id: 'wordivy', title: 'Word Ivy', category: 'prototype', video: 'word-ivy.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Word Puzzle'], desc: "A word-puzzle prototype where letters grow and connect like climbing ivy.", links: [] },
  { id: 'ransom', title: 'Ransom Note', category: 'prototype', video: 'ransom-note.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Puzzle'], desc: "A puzzle prototype built around assembling cut-out letters into a message.", links: [] },
  { id: 'principal', title: 'School Principal', category: 'prototype', video: 'school-principal.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Management Sim'], desc: "Management-sim prototype — run a school and keep students and staff happy.", links: [] },
  { id: 'disaster', title: 'Prevent Disaster', category: 'prototype', video: 'prevent-disaster.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Sim'], desc: "A crisis-management sim prototype focused on responding to unfolding disasters.", links: [] },
  { id: 'avalanche', title: 'Avalanche', category: 'prototype', video: 'avalanche.mp4', plat: 'Unity · Prototype',
    tags: ['Unity', 'Survival'], desc: "Fast-paced survival prototype — outrun a collapsing mountain in real time.", links: [] },
  { id: 'spaceball', title: 'Spaceball Dunk', category: 'prototype', video: 'spaceball-dunk.mp4', plat: 'Unity · e-motion',
    tags: ['Unity', 'Sports'], desc: "Zero-gravity sports prototype built at e-motion, mixing basketball with sci-fi physics.", links: [] },
  { id: 'bombaboo', title: 'Bomba Boo', category: 'prototype', video: 'bombaboo.mp4', plat: 'Unity · Graduation Project',
    tags: ['Unity', 'Grad Project'], desc: "Graduation project — a 2D underwater runner where a tiny mine dodges enemy submarines to escape, diving and shooting through obstacles.",
    links: [ { label: 'Watch trailer', url: 'https://youtu.be/vwlHprJoB84' } ] },

  // ---- VR / Arch-viz ----
  { id: 'vrdemo', title: 'Architecture Visualization Demo', category: 'vr', video: 'vr-Demo.mp4', plat: 'Unreal · VR',
    tags: ['Unreal', 'VR'], desc: "Unreal-powered VR walkthrough for visualizing architectural spaces before they're built.", links: [] },
  { id: 'construction', title: 'Construction', category: 'vr', video: 'construction.mp4', plat: 'Unreal · VR',
    tags: ['Unreal', 'VR'], desc: "VR visualization demo simulating a live construction site in Unreal Engine.", links: [] },
  { id: 'supermarket', title: 'Supermarket', category: 'vr', video: 'supermarket.mp4', plat: 'Unreal · VR',
    tags: ['Unreal', 'VR'], desc: "VR retail-space walkthrough demo built in Unreal Engine.", links: [] },
  { id: 'museum', title: 'Museum Demo', category: 'vr', video: 'museum.mp4', plat: 'Unreal · VR',
    tags: ['Unreal', 'VR'], desc: "Unreal Engine VR demo recreating a museum space for virtual exploration.", links: [] },
];

// ---------------------------------------------------------------
// Render tabs
// ---------------------------------------------------------------
const tabsEl = document.getElementById('tabs');
const countEl = document.getElementById('project-count');
let activeCat = 'all';

function countFor(key) {
  return key === 'all' ? projects.length : projects.filter(p => p.category === key).length;
}

function renderTabs() {
  tabsEl.innerHTML = CATS.map(c => `
    <button class="tab ${c.key === activeCat ? 'active' : ''}" data-cat="${c.key}">
      ${c.label} <span class="n">${countFor(c.key)}</span>
    </button>`).join('');
  tabsEl.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCat = btn.dataset.cat;
      renderTabs();
      applyFilter();
    });
  });
}

function applyFilter() {
  document.querySelectorAll('.card').forEach(card => {
    const show = activeCat === 'all' || card.dataset.category === activeCat;
    card.classList.toggle('hidden', !show);
  });
  const visible = activeCat === 'all' ? projects.length : countFor(activeCat);
  countEl.textContent = `${visible} TITLE${visible === 1 ? '' : 'S'}`;
}

// ---------------------------------------------------------------
// Render project grid
// ---------------------------------------------------------------
const grid = document.getElementById('grid-all');

function mediaHTML(p) {
  if (p.video) {
    return `<video muted loop playsinline preload="none">
      <source data-src="./assets/video/${p.video}" type="video/mp4">
    </video>`;
  }
  if (p.category === 'flagship') {
    return `<div class="hud-readout">
      <div class="hud-status"><span class="blip"></span>SIGNAL LOCKED</div>
      <div class="hud-plat">${p.plat}</div>
    </div>`;
  }
  return `<div style="font-family:var(--mono);font-size:12px;color:var(--text-dim);text-align:center;padding:0 16px;letter-spacing:.06em;">
    ${p.plat.toUpperCase()}
  </div>`;
}

function cardHTML(p) {
  return `
    <div class="card" data-id="${p.id}" data-category="${p.category}">
      <div class="card-media">
        ${mediaHTML(p)}
        <span class="bracket b-tl"></span><span class="bracket b-tr"></span>
        <span class="bracket b-bl"></span><span class="bracket b-br"></span>
      </div>
      <div class="card-body">
        <h4>${p.title}</h4>
        <div class="card-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>`;
}

grid.innerHTML = projects.map(cardHTML).join('');
renderTabs();
applyFilter();

// ---------------------------------------------------------------
// Lazy-load + play-on-view for project videos
// ---------------------------------------------------------------
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    const source = video.querySelector('source');
    if (!source) return;
    if (entry.isIntersecting) {
      if (source.dataset.src && !video.src) {
        source.src = source.dataset.src;
        video.load();
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { rootMargin: '200px' });
document.querySelectorAll('.card-media video').forEach(v => io.observe(v));

// ---------------------------------------------------------------
// Modal — mission briefing
// ---------------------------------------------------------------
const overlay = document.getElementById('modalOverlay');
const modalMedia = document.getElementById('modalMedia');
const modalCat = document.getElementById('modalCat');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalLinks = document.getElementById('modalLinks');
const CAT_LABEL = { flagship: 'Flagship Project', published: 'Published', prototype: 'Prototype', vr: 'VR / Arch-Viz' };

function openModal(p) {
  modalCat.textContent = `// ${CAT_LABEL[p.category]}`;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
  modalLinks.innerHTML = p.links.map(l => `<a class="btn btn-ghost" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('');

  document.getElementById('modal').classList.toggle('flagship', p.category === 'flagship');
  modalMedia.classList.toggle('flagship-media', p.category === 'flagship');

  if (p.video) {
    modalMedia.innerHTML = `<video muted loop playsinline autoplay><source src="./assets/video/${p.video}" type="video/mp4"></video>`;
  } else if (p.youtube) {
    modalMedia.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${p.youtube}?autoplay=1&mute=1&rel=0" title="${p.title} trailer" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="display:block;"></iframe>`;
  } else if (p.category === 'flagship') {
    modalMedia.innerHTML = `<div class="hud-readout">
      <div class="hud-status"><span class="blip"></span>SIGNAL LOCKED</div>
      <div class="hud-plat">${p.plat}</div>
    </div>`;
  } else {
    modalMedia.innerHTML = `<div style="font-family:var(--mono);font-size:13px;color:var(--text-dim);letter-spacing:.06em;">${p.plat.toUpperCase()}</div>`;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  modalMedia.innerHTML = '';
}

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const p = projects.find(x => x.id === card.dataset.id);
  if (p) openModal(p);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ---------------------------------------------------------------
// HUD live clock (Cairo time)
// ---------------------------------------------------------------
const statusEl = document.querySelector('.hud-status');
if (statusEl) {
  const clock = document.createElement('span');
  statusEl.appendChild(clock);
  function tick() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  tick();
  setInterval(tick, 30000);
}
