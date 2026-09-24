// ---------------------------------------------------------------
// Mobile menu toggle
// ---------------------------------------------------------------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    menuBtn.textContent = mobileMenu.classList.contains('open') ? 'CLOSE' : 'MENU';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'MENU';
    });
  });
}

// ---------------------------------------------------------------
// Project types describe the work, independently of release/store availability.
// Link checks and video sources: LINK_AUDIT.md (2026-09-25).
// ---------------------------------------------------------------
const CATS = [
  { key: 'all', label: 'All projects' },
  { key: 'action', label: 'Action & Arcade' },
  { key: 'strategy', label: 'Strategy & Puzzle' },
  { key: 'simulation', label: 'Simulation & Casual' },
  { key: 'technical', label: 'Technical Demos' },
  { key: 'vr', label: 'VR & Visualization' },
];

const projects = [
  // ---- Featured projects ----
  { id: 'clash', release: 'Previously published', tools: ['LevelPlay Ads', 'Firebase Crashlytics'], title: 'Clash of Beasts', category: 'strategy', plat: 'Unity · Ubisoft Abu Dhabi',
    tags: ['Unity', 'Live-Ops', 'Mobile'],
    desc: "A Unity mobile title in live operation at Ubisoft Abu Dhabi. Developed gameplay and live-service features, integrating LevelPlay Ads for monetization and Firebase Crashlytics for stability monitoring.",
    youtube: 'xhEN6A2L45U',
    links: [ { label: 'Official trailer', url: 'https://www.youtube.com/watch?v=xhEN6A2L45U' } ] },
  { id: 'laserhawk', youtube: 'fgvFmlWJPOE', videoCredit: 'Gameplay by skillgaming', release: 'Previously published', tools: ['ECS'], title: 'Captain Laserhawk: The Game', category: 'action', plat: 'Unity / ECS · Ubisoft Abu Dhabi',
    tags: ['Unity', 'ECS', 'PC'],
    desc: "Built in Unity at Ubisoft Abu Dhabi, this PC title is set in the Captain Laserhawk universe. Designed and implemented event systems, input rebinding, and an ECS-based dynamic collider system for gameplay and level workflows.",
    links: [ { label: 'Visit project', url: 'https://edenonline.ubisoft.com/game' } ] },
  { id: 'ibaloot', youtube: 'T81dI-RjF_M', videoCredit: 'Official iBaloot video', release: 'Previously published', tools: ['Zenject', 'Dependency Injection'], title: 'iBaloot', category: 'strategy', plat: 'Unity · DI / Zenject · MAU Games',
    tags: ['Unity', 'Zenject', 'iOS/Android'],
    desc: "A Unity card-game app for iOS and Android, maintained at MAU Games. Refactored the codebase using dependency injection and Zenject, and delivered features and bug fixes for the live product.",
    links: [ { label: 'Visit project', url: 'https://www.ibaloot.net/' } ] },

  // ---- Meelfoy Games ----
  { id: 'dogsden', release: 'Previously published', tools: ['UniRx'], title: 'Dogs Den', category: 'simulation', video: 'dogs-den.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'UniRx', 'Idle'],
    desc: "An idle pet-shelter simulation built in Unity at Meelfoy Games. As the sole programmer, owned the core game loop and resource-generation systems using UniRx. Players rescue, care for, and customize a growing den of dogs.",
    availability: 'The previously linked store pages are unavailable. Gameplay footage is preserved here.',
    links: [] },
  { id: 'rocky', release: 'Previously published', tools: ['Beamable'], title: 'Rocky Towers', category: 'strategy', video: 'rocky-towers.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Beamable', 'Puzzle Defense'],
    desc: "A Unity puzzle and tower-defense RPG from Meelfoy Games, with Beamable-powered live content. Match colored bricks to rescue the Lightspawn from the Void while your heroes hold the line.",
    availability: 'The previously linked store pages are unavailable. Gameplay footage is preserved here.',
    links: [] },
  { id: 'iamai', release: 'Previously published', title: 'I AM AI: Global Domination Sim', category: 'strategy', video: 'iamai.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Strategy Sim'],
    desc: "A chat-driven strategy simulation built in Unity and shipped with Meelfoy Games. Play a rogue AI manipulating conversations to grow its global influence.",
    availability: 'The previously linked store pages are unavailable. Gameplay footage is preserved here.',
    links: [] },
  { id: 'lingo', release: 'Previously published', title: 'Lingogotchi: My Learning Slime', category: 'simulation', video: 'lingo.mp4', plat: 'Unity · Meelfoy Games',
    tags: ['Unity', 'Edu / Pet'],
    desc: "A language-learning virtual pet built in Unity and shipped with Meelfoy Games. Feed, dress, and level up a pocket companion while learning a new language.",
    availability: 'A current game-specific store listing could not be verified. Gameplay footage is preserved here.',
    links: [] },

  // ---- More games and technical work ----
  { id: 'mushroom', title: 'Mushroom Farm', category: 'simulation', video: 'mushroom-farm.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Farming Sim'], desc: "A cozy farming-simulation project built in Unity, centered on growing and harvesting mushrooms.", links: [] },
  { id: 'grass', tools: ['Compute Shaders'], title: 'Grass Seek', category: 'technical', video: 'grass-seek.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Compute Shaders'], desc: "A Unity technical demo exploring GPU-driven grass rendering with compute shaders to investigate large-scale foliage performance.", links: [] },
  { id: 'pacball', title: 'Pacball Rush', category: 'action', video: 'pacball.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Arcade'], desc: "An arcade chase project built in Unity, inspired by classic maze-runner gameplay.", links: [] },
  { id: 'masterchef', title: 'Masterchef Runner', category: 'action', video: 'masterchef-runner.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Endless Runner'], desc: "A cooking-themed endless runner built in Unity. Dodge obstacles and plate dishes on the move.", links: [] },
  { id: 'camper', title: 'Camper Van', category: 'simulation', video: 'camper-van.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Simulation'], desc: "A road-trip project built in Unity, centered on exploring and customizing a camper van.", links: [] },
  { id: 'warmasters', title: 'War Masters', category: 'strategy', video: 'war-masters.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Strategy'], desc: "A strategy project built in Unity, pitting commanders against each other on a tactical battlefield.", links: [] },
  { id: 'tractor', release: 'Previously published', title: 'Tractor Rush Go', category: 'action', video: 'tractor-rush.mp4', plat: 'Unity · e-motion',
    tags: ['Unity', 'Racer'], desc: "A previously published farm-themed racing game built in Unity at e-motion. Race tractors through obstacle-filled courses.", links: [] },
  { id: 'wordivy', title: 'Word Ivy', category: 'strategy', video: 'word-ivy.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Word Puzzle'], desc: "A word-puzzle project built in Unity, where letters grow and connect like climbing ivy.", links: [] },
  { id: 'ransom', title: 'Ransom Note', category: 'strategy', video: 'ransom-note.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Puzzle'], desc: "A Unity puzzle project built around assembling cut-out letters into a message.", links: [] },
  { id: 'principal', title: 'School Principal', category: 'simulation', video: 'school-principal.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Management Sim'], desc: "A management-simulation project built in Unity. Run a school and keep students and staff happy.", links: [] },
  { id: 'disaster', title: 'Prevent Disaster', category: 'simulation', video: 'prevent-disaster.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Sim'], desc: "A crisis-management simulation built in Unity, focused on responding to unfolding disasters.", links: [] },
  { id: 'avalanche', title: 'Avalanche', category: 'action', video: 'avalanche.mp4', plat: 'Unity · Game Project',
    tags: ['Unity', 'Survival'], desc: "A fast-paced survival project built in Unity. Outrun a collapsing mountain in real time.", links: [] },
  { id: 'spaceball', title: 'Spaceball Dunk', category: 'action', video: 'spaceball-dunk.mp4', plat: 'Unity · e-motion',
    tags: ['Unity', 'Sports'], desc: "A zero-gravity sports project built in Unity at e-motion, mixing basketball with sci-fi physics.", links: [] },
  { id: 'bombaboo', release: 'Previously published', title: 'Bomba Boo', category: 'action', video: 'bombaboo.mp4', plat: 'Unity · Graduation Project',
    tags: ['Unity', 'Grad Project'], desc: "A previously published Unity game, originally created as a graduation project: a 2D underwater runner where a tiny mine dives, shoots, and dodges enemy submarines to escape.",
    links: [ { label: 'Watch trailer', url: 'https://youtu.be/vwlHprJoB84' } ] },

  // ---- VR / Arch-viz ----
  { id: 'vrdemo', title: 'Architecture Visualization Demo', category: 'vr', video: 'vr-Demo.mp4', plat: 'Unreal · VR',
    tags: ['Unreal', 'VR'], desc: "A VR walkthrough built in Unreal Engine for visualizing architectural spaces before construction.", links: [] },
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
    <button class="tab ${c.key === activeCat ? 'active' : ''}" data-cat="${c.key}" aria-pressed="${c.key === activeCat}">
      ${c.label} <span class="n">${countFor(c.key)}</span>
    </button>`).join('');
  tabsEl.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCat = btn.dataset.cat;
      renderTabs();
      applyFilter();
      tabsEl.querySelector(`[data-cat="${activeCat}"]`).focus();
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
    return `<video muted loop playsinline preload="none" data-src="./assets/video/${p.video}"></video>`;
  }
  if (p.youtube) {
    return `<img class="youtube-poster" src="https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg" alt="${p.title} video preview" loading="lazy"><span class="youtube-play" aria-hidden="true">▶ WATCH VIDEO</span>`;
  }
  if (['clash', 'laserhawk', 'ibaloot'].includes(p.id)) {
    return projectArtwork(p);
  }
  return `<div style="font-family:var(--mono);font-size:12px;color:var(--text-dim);text-align:center;padding:0 16px;letter-spacing:.06em;">
    ${p.plat.toUpperCase()}
  </div>`;
}

function projectArtwork(p, failed = false) {
  return `<span class="project-art art-${p.id}"><span class="signal-status"><span class="signal-dot"></span>SIGNAL NOT FOUND</span><strong>${p.title}</strong><small>${failed ? 'PREVIEW COULD NOT LOAD' : 'LOCAL PREVIEW UNAVAILABLE'} // ${p.tags[0].toUpperCase()}</small></span>`;
}

function handlePreviewFailure(video, p) {
  const fallback = () => {
    if (!video.isConnected) return;
    video.parentElement.classList.remove('video-ready');
    video.outerHTML = projectArtwork(p, true);
  };
  video.addEventListener('error', fallback, { once: true });
  video.querySelector('source')?.addEventListener('error', fallback, { once: true });
  video.addEventListener('loadeddata', () => video.parentElement?.classList.add('video-ready'), { once: true });
}

function cardHTML(p) {
  return `
    <button type="button" class="card" data-id="${p.id}" data-category="${p.category}" aria-label="View ${p.title} project details">
      <span class="card-media">
        ${mediaHTML(p)}
        <span class="bracket b-tl" aria-hidden="true"></span><span class="bracket b-tr" aria-hidden="true"></span>
        <span class="bracket b-bl" aria-hidden="true"></span><span class="bracket b-br" aria-hidden="true"></span>
        <span class="card-scan" aria-hidden="true"></span>
        ${p.video ? '<span class="video-signal" aria-hidden="true">● SIGNAL LOCKED</span>' : ''}
        <span class="card-arrow" aria-hidden="true">↗</span>
      </span>
      <span class="card-body" style="display:block">
        <span class="card-title">${p.title}</span>
        <span class="card-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</span>
      </span>
    </button>`;
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
    if (!video.isConnected) return;
    if (entry.isIntersecting) {
      if (video.dataset.src && !video.getAttribute('src')) {
        video.src = video.dataset.src;
        video.load();
      }
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { rootMargin: '200px' });
document.querySelectorAll('.card-media video').forEach(v => {
  handlePreviewFailure(v, projects.find(p => p.id === v.closest('.card').dataset.id));
  io.observe(v);
});

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
const CAT_LABEL = Object.fromEntries(CATS.map(c => [c.key, c.label]));
let returnFocus = null;

function openModal(p) {
  returnFocus = document.activeElement;
  modalCat.textContent = `// ${CAT_LABEL[p.category]}`;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  document.getElementById('modalTech').innerHTML = `<div><dt>Engine</dt><dd>${p.tags[0] === 'Unreal' ? 'Unreal Engine' : p.tags[0]}</dd></div>${p.tools?.length ? `<div><dt>Tools & technology</dt><dd>${p.tools.join(' · ')}</dd></div>` : ''}`;
  modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
  const links = [...p.links];
  if (p.youtube && !links.some(l => l.url.includes(p.youtube))) {
    links.push({ label: 'Watch on YouTube', url: `https://www.youtube.com/watch?v=${p.youtube}` });
  }
  modalLinks.innerHTML = links.map(l => `<a class="btn btn-ghost" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('');
  const notes = [p.release, p.availability, p.videoCredit].filter(Boolean);
  document.getElementById('modalAvailability').textContent = notes.join(' · ');
  document.getElementById('modalAvailability').hidden = !notes.length;

  document.getElementById('modal').classList.toggle('flagship', ['clash', 'laserhawk', 'ibaloot'].includes(p.id));
  modalMedia.classList.toggle('flagship-media', ['clash', 'laserhawk', 'ibaloot'].includes(p.id));

  if (p.video) {
    modalMedia.innerHTML = `<video controls muted loop playsinline ${window.matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : 'autoplay'}><source src="./assets/video/${p.video}" type="video/mp4"></video>`;
    handlePreviewFailure(modalMedia.querySelector('video'), p);
  } else if (p.youtube) {
    modalMedia.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${p.youtube}?rel=0" title="${p.title} video" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen style="display:block;border:0;"></iframe>`;
  } else if (['clash', 'laserhawk', 'ibaloot'].includes(p.id)) {
    modalMedia.innerHTML = projectArtwork(p);
  } else {
    modalMedia.innerHTML = `<div style="font-family:var(--mono);font-size:13px;color:var(--text-dim);letter-spacing:.06em;">${p.plat.toUpperCase()}</div>`;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.hud').inert = true;
  document.querySelectorAll('main > :not(.modal-overlay)').forEach(el => el.inert = true);
  document.getElementById('modalClose').focus();
}

function closeModal() {
  if (!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  modalMedia.innerHTML = '';
  document.querySelector('.hud').inert = false;
  document.querySelectorAll('main > :not(.modal-overlay)').forEach(el => el.inert = false);
  returnFocus?.focus();
}

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const p = projects.find(x => x.id === card.dataset.id);
  if (p) openModal(p);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      menuBtn.textContent = 'MENU';
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }
  }
  if (e.key === 'Tab' && overlay.classList.contains('open')) {
    const focusable = [...overlay.querySelectorAll('button, a[href], video[controls], iframe')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// ---------------------------------------------------------------
// Expandable career history
// ---------------------------------------------------------------
document.querySelectorAll('.log-entry').forEach((entry, index) => {
  if (index === 0) return;
  const content = entry.querySelector('ul, .early-block');
  if (!content) return;
  const details = document.createElement('details');
  details.className = 'experience-details';
  const summary = document.createElement('summary');
  summary.textContent = index === 6 ? 'Explore earlier roles' : 'Role & contributions';
  content.before(details);
  details.append(summary, content);
});
