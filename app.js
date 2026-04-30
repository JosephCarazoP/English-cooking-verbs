const verbRows = [
  ['mash','Triturar','/mash/','Basic','mashed','the potatoes','🥔'],
  ['cut','Cortar','/kat/','Basic','cut','the vegetables','🔪'],
  ['chop','Picar','/chop/','Basic','chopped','the onions','🧅'],
  ['slice','Rebanar','/slais/','Basic','sliced','the bread','🍞'],
  ['dice','Cortar en cubitos','/dais/','Intermediate','diced','the carrots','🥕'],
  ['peel','Pelar','/pil/','Basic','peeled','the apple','🍎'],
  ['boil','Hervir','/boil/','Basic','boiled','the eggs','🥚'],
  ['fry','Freír','/frai/','Basic','fried','the chicken','🍗'],
  ['bake','Hornear','/beik/','Basic','baked','a cake','🍰'],
  ['roast','Asar al horno','/roust/','Intermediate','roasted','the vegetables','🥦'],
  ['grill','Asar a la parrilla','/gril/','Basic','grilled','the steak','🥩'],
  ['mix','Mezclar','/miks/','Basic','mixed','the ingredients','🥣'],
  ['stir','Revolver','/ster/','Basic','stirred','the soup','🍲'],
  ['whisk','Batir con batidor','/wisk/','Intermediate','whisked','the eggs','🥚'],
  ['blend','Licuar','/blend/','Basic','blended','the fruit','🍓'],
  ['pour','Verter','/por/','Basic','poured','the milk','🥛'],
  ['drain','Escurrir','/drein/','Intermediate','drained','the pasta','🍝'],
  ['season','Sazonar','/si-zon/','Basic','seasoned','the soup','🧂'],
  ['taste','Probar','/teist/','Basic','tasted','the sauce','🥄'],
  ['serve','Servir','/serv/','Basic','served','the meal','🍽️'],
  ['melt','Derretir','/melt/','Basic','melted','the butter','🧈'],
  ['grate','Rallar','/greit/','Intermediate','grated','the cheese','🧀'],
  ['knead','Amasar','/nid/','Intermediate','kneaded','the dough','🥖'],
  ['steam','Cocinar al vapor','/stim/','Intermediate','steamed','the broccoli','🥦'],
  ['simmer','Cocinar a fuego lento','/si-mer/','Intermediate','simmered','the sauce','🍅'],
  ['spread','Untar','/spred/','Basic','spread','butter on toast','🧈'],
  ['measure','Medir','/me-zher/','Basic','measured','the flour','🥄'],
  ['sprinkle','Espolvorear','/sprin-kol/','Intermediate','sprinkled','salt on the salad','🧂'],
  ['rinse','Enjuagar','/rins/','Basic','rinsed','the rice','🍚'],
  ['wash','Lavar','/wash/','Basic','washed','the lettuce','🥬'],
  ['soak','Remojar','/souk/','Intermediate','soaked','the beans','🫘'],
  ['marinate','Marinar','/ma-ri-neit/','Advanced','marinated','the fish','🐟'],
  ['preheat','Precalentar','/pri-hit/','Intermediate','preheated','the oven','🔥'],
  ['sauté','Saltear','/so-tei/','Advanced','sautéed','the mushrooms','🍄'],
  ['caramelize','Caramelizar','/ka-ra-me-laiz/','Advanced','caramelized','the onions','🧅'],
  ['broil','Asar con calor superior','/broil/','Advanced','broiled','the fish','🐟'],
  ['toast','Tostar','/toust/','Basic','toasted','the bread','🍞'],
  ['shred','Desmenuzar','/shred/','Intermediate','shredded','the chicken','🍗'],
  ['mince','Picar finamente','/mins/','Advanced','minced','the garlic','🧄'],
  ['crush','Machacar','/krash/','Intermediate','crushed','the garlic','🧄'],
  ['squeeze','Exprimir','/skwis/','Basic','squeezed','the lemon','🍋'],
  ['fold','Incorporar suavemente','/fould/','Advanced','folded','the cream into the batter','🥣'],
  ['beat','Batir','/bit/','Basic','beat','the eggs','🥚'],
  ['whip','Batir hasta espumar','/wip/','Intermediate','whipped','the cream','🍦'],
  ['glaze','Glasear','/gleiz/','Advanced','glazed','the donuts','🍩'],
  ['coat','Cubrir','/kout/','Intermediate','coated','the chicken with flour','🍗'],
  ['stuff','Rellenar','/staf/','Intermediate','stuffed','the peppers','🫑'],
  ['skewer','Ensartar','/skiu-er/','Advanced','skewered','the meat','🍢'],
  ['flip','Voltear','/flip/','Basic','flipped','the pancake','🥞'],
  ['turn','Dar vuelta','/tern/','Basic','turned','the steak','🥩'],
  ['heat','Calentar','/hit/','Basic','heated','the soup','🍲'],
  ['cool','Enfriar','/kul/','Basic','cooled','the cookies','🍪'],
  ['freeze','Congelar','/friz/','Intermediate','froze','the leftovers','🧊'],
  ['defrost','Descongelar','/di-frost/','Intermediate','defrosted','the meat','🥩'],
  ['reheat','Recalentar','/ri-hit/','Basic','reheated','the pasta','🍝'],
  ['plate','Emplatar','/pleit/','Advanced','plated','the dessert','🍮'],
  ['garnish','Decorar un plato','/gar-nish/','Advanced','garnished','the soup with herbs','🌿'],
  ['tenderize','Ablandar','/ten-der-aiz/','Advanced','tenderized','the meat','🥩'],
  ['strain','Colar','/strein/','Intermediate','strained','the broth','🥣'],
  ['sift','Tamizar','/sift/','Advanced','sifted','the flour','🌾'],
  ['grease','Engrasar','/gris/','Intermediate','greased','the pan','🍳'],
  ['line','Forrar','/lain/','Intermediate','lined','the tray with paper','📄'],
  ['crack','Romper','/krak/','Basic','cracked','the eggs','🥚'],
  ['scramble','Revolver huevos','/skram-bol/','Intermediate','scrambled','the eggs','🍳'],
  ['poach','Escalfar','/pouch/','Advanced','poached','the eggs','🥚'],
  ['braise','Brasear','/breiz/','Advanced','braised','the beef','🥘'],
  ['stew','Guisar','/stu/','Advanced','stewed','the vegetables','🍲'],
  ['smoke','Ahumar','/smouk/','Advanced','smoked','the ribs','🍖'],
  ['ferment','Fermentar','/fer-ment/','Advanced','fermented','the cabbage','🥬'],
  ['preserve','Conservar','/pri-zerv/','Advanced','preserved','the fruit','🍑'],
  ['pickle','Encurtir','/pi-kol/','Advanced','pickled','the cucumbers','🥒']
];

const utensilRows = [
  ['knife','Cuchillo','/naif/','Basic','cut vegetables','on the cutting board','🔪'],
  ['spoon','Cuchara','/spun/','Basic','taste soup','next to the bowl','🥄'],
  ['fork','Tenedor','/fork/','Basic','eat salad','on the plate','🍴'],
  ['spatula','Espátula','/spa-chu-la/','Basic','flip pancakes','beside the pan','🥞'],
  ['whisk','Batidor de mano','/wisk/','Intermediate','beat eggs','inside the mixing bowl','🥚'],
  ['pan','Sartén','/pan/','Basic','fry eggs','on the stove','🍳'],
  ['pot','Olla','/pot/','Basic','boil pasta','full of soup','🍲'],
  ['bowl','Tazón','/boul/','Basic','mix ingredients','on the counter','🥣'],
  ['cutting board','Tabla de cortar','/ka-ting bord/','Basic','chop onions','clean and dry','🧅'],
  ['blender','Licuadora','/blen-der/','Basic','make smoothies','on the counter','🥤'],
  ['oven','Horno','/a-ven/','Basic','bake bread','preheated','🔥'],
  ['stove','Cocina','/stouv/','Basic','cook soup','hot','♨️'],
  ['grater','Rallador','/grei-ter/','Intermediate','grate cheese','in the drawer','🧀'],
  ['peeler','Pelador','/pi-ler/','Basic','peel potatoes','very sharp','🥔'],
  ['colander','Escurridor','/ko-lan-der/','Intermediate','drain pasta','in the sink','🍝'],
  ['measuring cup','Taza medidora','/me-zher-ing kap/','Basic','measure milk','full of water','🥛'],
  ['rolling pin','Rodillo','/rou-ling pin/','Intermediate','roll dough','on the flour','🥖'],
  ['tongs','Pinzas','/tongs/','Basic','turn meat','near the grill','🥩'],
  ['ladle','Cucharón','/lei-dol/','Intermediate','serve soup','inside the pot','🍲'],
  ['tray','Bandeja','/trei/','Basic','carry food','in the oven','🥐'],
  ['saucepan','Cacerola','/sos-pan/','Intermediate','make sauce','small but useful','🍅'],
  ['frying pan','Sartén para freír','/frai-ing pan/','Basic','fry eggs','hot','🍳'],
  ['baking sheet','Bandeja para hornear','/bei-king shit/','Intermediate','bake cookies','in the oven','🍪'],
  ['mixing bowl','Tazón para mezclar','/mik-sing boul/','Basic','make batter','full of flour','🥣'],
  ['wooden spoon','Cuchara de madera','/wu-den spun/','Basic','stir sauce','in the pot','🥄'],
  ["chef's knife",'Cuchillo de chef','/shefs naif/','Intermediate','chop herbs','very sharp','🔪'],
  ['paring knife','Cuchillo pequeño','/per-ing naif/','Intermediate','peel fruit','on the board','🍎'],
  ['bread knife','Cuchillo de pan','/bred naif/','Intermediate','slice bread','has a serrated edge','🍞'],
  ['kitchen scissors','Tijeras de cocina','/ki-chen si-zorz/','Intermediate','cut herbs','clean','✂️'],
  ['can opener','Abrelatas','/kan ou-pen-er/','Basic','open cans','in the drawer','🥫'],
  ['bottle opener','Destapador','/bo-tol ou-pen-er/','Basic','open bottles','on the table','🍾'],
  ['corkscrew','Sacacorchos','/kork-skru/','Advanced','open a bottle','made of metal','🌀'],
  ['measuring spoons','Cucharas medidoras','/me-zher-ing spuns/','Basic','measure spices','hanging near the stove','🥄'],
  ['kitchen scale','Báscula de cocina','/ki-chen skeil/','Intermediate','weigh flour','showing grams','⚖️'],
  ['food processor','Procesador de alimentos','/fud pro-se-ser/','Intermediate','chop nuts','powerful','⚙️'],
  ['microwave','Microondas','/mai-kro-weiv/','Basic','reheat food','above the counter','📦'],
  ['toaster','Tostadora','/tous-ter/','Basic','toast bread','next to the kettle','🍞'],
  ['kettle','Hervidor','/ke-tol/','Basic','boil water','on the stove','☕'],
  ['strainer','Colador','/strei-ner/','Intermediate','strain broth','over the bowl','🥣'],
  ['sieve','Tamiz','/siv/','Advanced','sift flour','covered with flour','🌾'],
  ['mortar and pestle','Mortero y mano','/mor-ter and pes-tol/','Advanced','crush spices','made of stone','🧄'],
  ['apron','Delantal','/ei-pron/','Basic','protect clothes','hanging on the wall','👕'],
  ['oven mitts','Guantes de horno','/a-ven mits/','Basic','hold hot trays','on the counter','🧤'],
  ['dish towel','Paño de cocina','/dish tau-el/','Basic','dry plates','clean','🧻'],
  ['slotted spoon','Cuchara ranurada','/sla-ted spun/','Intermediate','lift vegetables','draining liquid','🥄'],
  ['potato masher','Machacador de papas','/po-tei-to ma-sher/','Intermediate','mash potatoes','in the drawer','🥔'],
  ['garlic press','Prensa de ajo','/gar-lik pres/','Intermediate','crush garlic','small','🧄'],
  ['pizza cutter','Cortador de pizza','/pit-sa ka-ter/','Basic','slice pizza','round','🍕'],
  ['thermometer','Termómetro','/ther-ma-mi-ter/','Advanced','check temperature','inside the meat','🌡️'],
  ['timer','Temporizador','/tai-mer/','Basic','track cooking time','ringing after ten minutes','⏲️'],
  ['jar','Frasco','/yar/','Basic','store sauce','full of jam','🫙'],
  ['container','Recipiente','/kon-tei-ner/','Basic','store leftovers','with a lid','📦'],
  ['lid','Tapa','/lid/','Basic','cover the pot','on the container','🥘'],
  ['plate','Plato','/pleit/','Basic','serve food','on the table','🍽️'],
  ['cup','Taza','/kap/','Basic','drink tea','next to the kettle','☕'],
  ['mug','Taza grande','/mag/','Basic','drink coffee','warm','☕'],
  ['glass','Vaso','/glas/','Basic','drink water','beside the plate','🥛'],
  ['baking dish','Molde para hornear','/bei-king dish/','Intermediate','make lasagna','hot','🥘'],
  ['casserole dish','Fuente para guisos','/ka-se-rol dish/','Advanced','cook stew','in the oven','🍲'],
  ['salad spinner','Centrifugadora de ensalada','/sa-lad spi-ner/','Advanced','dry lettuce','full of greens','🥬'],
  ['zester','Rallador fino','/zes-ter/','Advanced','grate lemon peel','beside the lemon','🍋']
];

const toTitle = (text) => text.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
const slugify = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const vocabulary = [
  ...verbRows.map(([word, translation, pronunciation, difficulty, pastForm, target, visual]) => ({
    id: `verb-${slugify(word)}`,
    word: toTitle(word),
    translation,
    pronunciation,
    category: 'Cooking Verb',
    type: 'verb',
    difficulty,
    pastForm,
    presentExample: `I ${word} ${target}.`,
    pastExample: `I ${pastForm} ${target} yesterday.`,
    visual
  })),
  ...utensilRows.map(([word, translation, pronunciation, difficulty, use, place, visual]) => ({
    id: `utensil-${slugify(word)}`,
    word: toTitle(word).replace("Chef'S", "Chef's"),
    translation,
    pronunciation,
    category: 'Kitchen Utensil',
    type: 'noun',
    difficulty,
    example1: `I use a ${word} to ${use}.`,
    example2: `The ${word} is ${place}.`,
    visual
  }))
];

const STORAGE_KEYS = {
  learned: 'kitchenEnglish.learnedIds',
  viewed: 'kitchenEnglish.viewedIds',
  theme: 'kitchenEnglish.theme'
};

const state = {
  search: '',
  category: 'All',
  difficulty: 'All',
  onlyUnlearned: false,
  learned: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.learned) || '[]')),
  viewed: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.viewed) || '[]')),
  currentItem: null
};

const els = {
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  difficultyFilter: document.getElementById('difficultyFilter'),
  unlearnedToggle: document.getElementById('unlearnedToggle'),
  resetProgress: document.getElementById('resetProgress'),
  cardsGrid: document.getElementById('cardsGrid'),
  emptyState: document.getElementById('emptyState'),
  resultTitle: document.getElementById('resultTitle'),
  resultCount: document.getElementById('resultCount'),
  progressPercent: document.getElementById('progressPercent'),
  progressFill: document.getElementById('progressFill'),
  totalWords: document.getElementById('totalWords'),
  viewedWords: document.getElementById('viewedWords'),
  learnedWords: document.getElementById('learnedWords'),
  modal: document.getElementById('detailsModal'),
  closeModal: document.getElementById('closeModal'),
  modalVisual: document.getElementById('modalVisual'),
  modalCategory: document.getElementById('modalCategory'),
  modalTitle: document.getElementById('modalTitle'),
  modalDifficulty: document.getElementById('modalDifficulty'),
  modalTranslation: document.getElementById('modalTranslation'),
  modalPronunciation: document.getElementById('modalPronunciation'),
  modalPast: document.getElementById('modalPast'),
  pastBlock: document.getElementById('pastBlock'),
  speakBtn: document.getElementById('speakBtn'),
  modalLearnedBtn: document.getElementById('modalLearnedBtn'),
  exampleLabel1: document.getElementById('exampleLabel1'),
  exampleLabel2: document.getElementById('exampleLabel2'),
  modalExample1: document.getElementById('modalExample1'),
  modalExample2: document.getElementById('modalExample2')
};

function saveProgress() {
  localStorage.setItem(STORAGE_KEYS.learned, JSON.stringify([...state.learned]));
  localStorage.setItem(STORAGE_KEYS.viewed, JSON.stringify([...state.viewed]));
}

function normalizeText(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filteredVocabulary() {
  const query = normalizeText(state.search.trim());
  return vocabulary.filter(item => {
    const haystack = normalizeText([
      item.word, item.translation, item.pronunciation, item.category, item.difficulty,
      item.pastForm, item.presentExample, item.pastExample, item.example1, item.example2
    ].join(' '));
    return (!query || haystack.includes(query)) &&
      (state.category === 'All' || item.category === state.category) &&
      (state.difficulty === 'All' || item.difficulty === state.difficulty) &&
      (!state.onlyUnlearned || !state.learned.has(item.id));
  });
}

function markViewed(id) {
  if (!state.viewed.has(id)) {
    state.viewed.add(id);
    saveProgress();
    updateProgress();
  }
}

function toggleLearned(id, keepModalOpen = false) {
  if (state.learned.has(id)) state.learned.delete(id);
  else {
    state.learned.add(id);
    state.viewed.add(id);
  }
  saveProgress();
  render();
  if (keepModalOpen) {
    const item = vocabulary.find(entry => entry.id === id);
    if (item) openDetails(item, false);
  }
}

function updateProgress() {
  const total = vocabulary.length;
  const viewed = state.viewed.size;
  const learned = state.learned.size;
  const percent = total ? Math.round((learned / total) * 100) : 0;
  els.totalWords.textContent = total;
  els.viewedWords.textContent = viewed;
  els.learnedWords.textContent = learned;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
}

function cardTemplate(item) {
  const isLearned = state.learned.has(item.id);
  const isVerb = item.type === 'verb';
  const backExtra = isVerb
    ? `<div><span>Pasado</span><strong>${item.pastForm}</strong></div>`
    : `<div><span>Tipo</span><strong>Kitchen utensil</strong></div>`;
  return `
    <article class="flip-card" data-id="${item.id}">
      <div class="flip-inner">
        <div class="card-face card-front">
          <div class="card-top">
            <span class="tag">${item.category}</span>
            <span class="card-emoji" aria-hidden="true">${item.visual}</span>
          </div>
          <div class="word">
            <h3>${item.word}</h3>
            <p>${item.difficulty} · toca para girar</p>
          </div>
          <span class="tap-hint">Flip card →</span>
        </div>
        <div class="card-face card-back">
          <div class="card-top">
            <span class="tag ${isLearned ? 'learned' : ''}">${isLearned ? '✓ Aprendida' : item.type === 'verb' ? 'Verb' : 'Utensil'}</span>
            <span class="card-emoji" aria-hidden="true">${item.visual}</span>
          </div>
          <div class="card-data">
            <div><span>Español</span><strong>${item.translation}</strong></div>
            <div><span>Pronunciación</span><strong>${item.pronunciation}</strong></div>
            ${backExtra}
          </div>
          <div class="card-actions">
            <button class="card-btn" type="button" data-action="details" data-id="${item.id}">Details</button>
            <button class="learn-btn ${isLearned ? 'active' : ''}" type="button" data-action="learned" data-id="${item.id}">${isLearned ? 'Aprendida' : 'Aprender'}</button>
          </div>
        </div>
      </div>
    </article>`;
}

function render() {
  const items = filteredVocabulary();
  els.cardsGrid.innerHTML = items.map(cardTemplate).join('');
  els.emptyState.hidden = items.length !== 0;
  els.resultCount.textContent = `${items.length} palabra${items.length === 1 ? '' : 's'}`;

  const titleParts = [];
  if (state.category !== 'All') titleParts.push(state.category === 'Cooking Verb' ? 'Cooking Verbs' : 'Kitchen Utensils');
  if (state.difficulty !== 'All') titleParts.push(state.difficulty);
  if (state.onlyUnlearned) titleParts.push('No aprendidas');
  els.resultTitle.textContent = titleParts.length ? titleParts.join(' · ') : 'Todas las palabras';
  updateProgress();
}

function openDetails(item, mark = true) {
  state.currentItem = item;
  if (mark) markViewed(item.id);
  const isVerb = item.type === 'verb';
  const isLearned = state.learned.has(item.id);

  els.modalVisual.textContent = item.visual;
  els.modalCategory.textContent = item.category;
  els.modalTitle.textContent = item.word;
  els.modalDifficulty.textContent = item.difficulty;
  els.modalTranslation.textContent = item.translation;
  els.modalPronunciation.textContent = item.pronunciation;
  els.pastBlock.style.display = isVerb ? 'block' : 'none';
  els.modalPast.textContent = isVerb ? item.pastForm : '-';
  els.exampleLabel1.textContent = isVerb ? 'Presente' : 'Uso normal';
  els.exampleLabel2.textContent = isVerb ? 'Pasado' : 'Contexto de cocina';
  els.modalExample1.textContent = isVerb ? item.presentExample : item.example1;
  els.modalExample2.textContent = isVerb ? item.pastExample : item.example2;
  els.modalLearnedBtn.textContent = isLearned ? '✓ Aprendida' : 'Marcar aprendida';
  els.modalLearnedBtn.classList.toggle('active', isLearned);

  els.modal.classList.add('open');
  els.modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDetails() {
  els.modal.classList.remove('open');
  els.modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  state.currentItem = null;
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    alert('Tu navegador no soporta Text-to-Speech.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  els.themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (savedTheme) return setTheme(savedTheme);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

els.themeToggle.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

els.searchInput.addEventListener('input', event => {
  state.search = event.target.value;
  render();
});

els.categoryFilter.addEventListener('change', event => {
  state.category = event.target.value;
  render();
});

els.difficultyFilter.addEventListener('change', event => {
  state.difficulty = event.target.value;
  render();
});

els.unlearnedToggle.addEventListener('click', () => {
  state.onlyUnlearned = !state.onlyUnlearned;
  els.unlearnedToggle.classList.toggle('active', state.onlyUnlearned);
  els.unlearnedToggle.setAttribute('aria-pressed', String(state.onlyUnlearned));
  render();
});

els.resetProgress.addEventListener('click', () => {
  if (!confirm('¿Quieres borrar todo el progreso?')) return;
  state.learned.clear();
  state.viewed.clear();
  saveProgress();
  render();
});

els.cardsGrid.addEventListener('click', event => {
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    const item = vocabulary.find(entry => entry.id === actionButton.dataset.id);
    if (!item) return;
    if (actionButton.dataset.action === 'details') openDetails(item);
    if (actionButton.dataset.action === 'learned') toggleLearned(item.id);
    return;
  }
  const card = event.target.closest('.flip-card');
  if (!card) return;
  card.classList.toggle('flipped');
  markViewed(card.dataset.id);
});

els.closeModal.addEventListener('click', closeDetails);
els.modal.addEventListener('click', event => {
  if (event.target === els.modal) closeDetails();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && els.modal.classList.contains('open')) closeDetails();
});

els.speakBtn.addEventListener('click', () => {
  if (state.currentItem) speakWord(state.currentItem.word);
});

els.modalLearnedBtn.addEventListener('click', () => {
  if (state.currentItem) toggleLearned(state.currentItem.id, true);
});

initTheme();
render();
