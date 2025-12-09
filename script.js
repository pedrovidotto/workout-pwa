/**
 * LIFE.OS CORE LOGIC
 */

// --- 1. DATA CONFIGURATION ---
const DATA = {
  boot: [
    { id: 'skincare', label: 'System Start', sub: 'Skincare Ritual' },
    { id: 'hang', label: 'Dead Hang', sub: '2 sets x 30s', info: 'Decompress spine before load.' },
    { id: 'cat', label: 'Cat-Camel', sub: '10 reps slowly', info: 'Lubricate synovial fluid.' },
    { id: 'optic', label: 'Optic Flow', sub: 'Commute / Walk', info: 'Set circadian rhythm.' }
  ],
  upload: [
    { id: 'smoothie', label: 'Superager Smoothie', sub: 'Protein + Creatine + Algae', info: 'Post-workout brain fuel.' },
    { id: 'social', label: 'Social Anchor', sub: '1 interaction before noon', info: 'Mood regulation.' }
  ],
  recovery: [
    { id: 'greens', label: 'Leafy Greens', sub: 'Lunch intake', info: 'Fiber & micronutrients.' },
    { id: 'cook2', label: 'Dinner Prep', sub: 'Cook process #2', info: 'Prepare for sleep.' },
    { id: 'novelty', label: 'Neuroplasticity', sub: '20m High-Frustration Learning', info: 'Fight subjective aging.' },
    { id: 'shutdown', label: 'System Shutdown', sub: 'Screens off, bag packed', info: 'Sleep hygiene.' }
  ]
};

// 6-Day Split + Rest Day
const workoutSchedule = [
  { day: 1, title: "Chest & Triceps", ex: [ 
      {n:"Bench Press", d:"4x6-10 | 90s"}, {n:"Incline DB Press", d:"3x8-12 | 90s"}, 
      {n:"Weighted Dips", d:"3xFail | 75s"}, {n:"Cable Crossover", d:"3x12-15 | 60s"}, {n:"Rope Pushdown", d:"4x10-15 | 60s"} 
    ]},
  { day: 2, title: "Back & Biceps", ex: [
      {n:"Weighted Pull-up", d:"4x8-12 | 90s"}, {n:"Barbell Row", d:"4x8-12 | 90s"}, 
      {n:"Chest Supp. Row", d:"3x10-15 | 75s"}, {n:"Straight Arm Pull", d:"3x12-15 | 60s"}, {n:"Hammer Curls", d:"3x10-15 | 60s"}
    ]},
  { day: 3, title: "Quads & Calves", ex: [
      {n:"Squat", d:"4x8-12 | 120s"}, {n:"Leg Press", d:"4x10-15 | 90s"}, 
      {n:"Split Squat", d:"3x10-12 | 75s"}, {n:"Leg Ext", d:"3x15-20 | 60s"}, {n:"Calf Raise", d:"5x10-15 | 45s"}
    ]},
  { day: 4, title: "Chest & Shoulders", ex: [
      {n:"Seated DB Press", d:"4x8-12 | 90s"}, {n:"Lateral Raise", d:"4x12-15 | 60s"}, 
      {n:"Rev Pec Deck", d:"4x15-20 | 60s"}, {n:"Flat DB Press", d:"3x8-12 | 75s"}, {n:"Cable Fly", d:"3x12-15 | 60s"}
    ]},
  { day: 5, title: "Biceps & Triceps", ex: [
      {n:"Close Grip Bench", d:"4x8-12 | 90s"}, {n:"Barbell Curl", d:"4x8-12 | 75s"}, 
      {n:"Overhead Ext", d:"3x10-15 | 60s"}, {n:"Incline Curl", d:"3x10-15 | 60s"}, {n:"Pushdown/Curl", d:"3x12-15 | 60s"}
    ]},
  { day: 6, title: "Glutes & Hams", ex: [
      {n:"RDL", d:"4x8-12 | 120s"}, {n:"Hip Thrust", d:"4x8-12 | 90s"}, 
      {n:"Leg Curl", d:"4x12-15 | 75s"}, {n:"Hip Abduction", d:"4x15-20 | 60s"}, {n:"Kickback", d:"3x15-20 | 45s"}
    ]},
  { day: 7, title: "System Defrag", ex: [] } // Rest Day
];

// --- 2. STATE MANAGEMENT ---
const STATE = {
  date: new Date().toDateString(),
  checklist: JSON.parse(localStorage.getItem('sys_checklist')) || {}, // { 'hang': true }
  workoutProgress: JSON.parse(localStorage.getItem('sys_progress')) || {}, // { 'd1-e0': 2 }
  weekCount: parseInt(localStorage.getItem('sys_week') || 1),
  theme: localStorage.getItem('sys_theme') || 'dark',
  timerEnd: localStorage.getItem('sys_timer')
};

// Daily Reset Logic
if (localStorage.getItem('sys_last_date') !== STATE.date) {
  STATE.checklist = {}; 
  localStorage.setItem('sys_checklist', JSON.stringify({}));
  localStorage.setItem('sys_last_date', STATE.date);
}

// Save Helpers
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const isSafeMode = () => STATE.weekCount % 4 === 0;

// --- 3. UI CONTROLLER ---
const UI = {
  init: () => {
    // Set Theme
    document.body.dataset.theme = STATE.theme;
    
    // Header Info
    const dateObj = new Date();
    document.getElementById('current-date').textContent = `${dateObj.getDate()}/${dateObj.getMonth()+1}`;
    document.getElementById('week-indicator').textContent = `WK ${STATE.weekCount}`;
    if (isSafeMode()) {
        document.documentElement.style.setProperty('--accent', '#33ffcc'); // Teal override
        document.getElementById('week-indicator').textContent += " [DELOAD]";
    }

    // Render Lists
    UI.renderChecklist('list-wake', DATA.boot, 'wake');
    UI.renderChecklist('list-upload', DATA.upload, 'upload');
    UI.renderChecklist('list-recovery', DATA.recovery, 'recovery');
    
    // Render Workout
    UI.renderWorkout();
    
    // Check Timer
    Timer.restore();
    
    // Open workout block by default if not done
    const status = document.getElementById('status-workout').textContent;
    if(status !== 'COMPLETE') document.getElementById('block-workout').classList.add('expanded');
  },

  renderChecklist: (elId, items, blockName) => {
    const el = document.getElementById(elId);
    el.innerHTML = items.map(item => {
      const isDone = STATE.checklist[item.id];
      return `
        <li class="check-item ${isDone ? 'completed' : ''}" onclick="Logic.toggleCheck('${item.id}', '${elId}', '${blockName}')">
          <div class="check-box">${isDone ? '✓' : ''}</div>
          <div class="item-text">
            <span class="item-label">${item.label}</span>
            <span class="item-sub">${item.sub}</span>
          </div>
          ${item.info ? `<div class="info-icon" onclick="event.stopPropagation(); UI.showInfoModal('${item.label}', '${item.info}')">?</div>` : ''}
        </li>
      `;
    }).join('');
    
    UI.updateBlockStatus(blockName, items);
  },

  updateBlockStatus: (blockName, items) => {
      const allDone = items.every(i => STATE.checklist[i.id]);
      const statusEl = document.getElementById(`status-${blockName}`);
      if(statusEl) {
          statusEl.textContent = allDone ? 'COMPLETE' : 'PENDING';
          statusEl.className = `block-status ${allDone ? 'done' : ''}`;
      }
  },

  renderWorkout: () => {
    // 0 = Monday (Fixing JS Sunday=0 issue)
    let dayIdx = new Date().getDay() - 1;
    if (dayIdx < 0) dayIdx = 6; 
    
    const wData = workoutSchedule[dayIdx];
    const isSafe = isSafeMode();

    document.getElementById('workout-day-name').textContent = wData.title.toUpperCase();
    document.getElementById('workout-est-time').textContent = isSafe ? "DELOAD" : "60 MIN";
    
    // Rest Day
    if (wData.ex.length === 0) {
        document.getElementById('exercise-list').innerHTML = '';
        document.getElementById('rest-message').classList.remove('hidden');
        document.getElementById('status-workout').textContent = "REST";
        return;
    }

    const listEl = document.getElementById('exercise-list');
    listEl.innerHTML = wData.ex.map((ex, i) => {
        const id = `d${dayIdx}-e${i}`;
        // Parse sets: "4x..." -> 4. Safe mode = 1.
        const targetSets = isSafe ? 1 : parseInt(ex.d.match(/^(\d+)/)[0]); 
        const doneSets = STATE.workoutProgress[id] || 0;
        const isDone = doneSets >= targetSets;
        
        return `
            <li class="ex-item ${isDone ? 'done' : ''}" id="row-${id}" onclick="Logic.modSet('${id}', ${targetSets}, 1, '${ex.d}')" oncontextmenu="Logic.modSet('${id}', ${targetSets}, -1); return false;">
                <div class="ex-info">
                    <h4>${ex.n}</h4>
                    <p>${ex.d}</p>
                </div>
                <div class="ex-counter ${isDone ? 'done' : ''}">${doneSets}/${targetSets}</div>
            </li>
        `;
    }).join('');
    
    // Workout Block Status
    const allDone = wData.ex.every((ex, i) => {
        const id = `d${dayIdx}-e${i}`;
        const target = isSafe ? 1 : parseInt(ex.d.match(/^(\d+)/)[0]); 
        return (STATE.workoutProgress[id]||0) >= target;
    });
    
    const statusEl = document.getElementById('status-workout');
    statusEl.textContent = allDone ? 'COMPLETE' : 'ACTIVE';
    statusEl.className = `block-status ${allDone ? 'done' : ''}`;
  },

  showInfoModal: (title, text) => {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-desc').textContent = text;
      document.getElementById('info-modal').classList.remove('hidden');
  }
};

// --- 4. LOGIC ENGINE ---
const Logic = {
  toggleCheck: (id, listId, blockName) => {
    STATE.checklist[id] = !STATE.checklist[id];
    save('sys_checklist', STATE.checklist);
    
    // Re-render specific list to update visuals
    let items = [];
    if(blockName === 'wake') items = DATA.boot;
    if(blockName === 'upload') items = DATA.upload;
    if(blockName === 'recovery') items = DATA.recovery;
    
    UI.renderChecklist(listId, items, blockName);
    
    if (navigator.vibrate) navigator.vibrate(50);
  },

  modSet: (id, max, change, detailsStr) => {
    const curr = STATE.workoutProgress[id] || 0;
    
    // Logic: Clamp between 0 and Max
    const next = Math.max(0, Math.min(max, curr + change));
    
    if (next !== curr) {
        STATE.workoutProgress[id] = next;
        save('sys_progress', STATE.workoutProgress);
        
        // Timer Trigger (Only on increment, if not finished)
        if (change > 0 && next <= max) {
             const restMatch = detailsStr.match(/\|\s*(\d+)s/);
             const restTime = restMatch ? parseInt(restMatch[1]) : 60;
             Timer.start(restTime);
             
             // Visual highlight
             document.querySelectorAll('.ex-item').forEach(el => el.classList.remove('active'));
             document.getElementById(`row-${id}`).classList.add('active');
        }
        
        // Re-render workout list
        UI.renderWorkout();
        if (navigator.vibrate) navigator.vibrate(50);
    }
  },
  
  toggleTheme: () => {
      STATE.theme = STATE.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('sys_theme', STATE.theme);
      document.body.dataset.theme = STATE.theme;
  },

  resetDay: () => {
      document.getElementById('reset-modal').classList.remove('hidden');
  },
  
  confirmReset: () => {
      STATE.workoutProgress = {}; // Clear sets
      save('sys_progress', STATE.workoutProgress);
      
      // Increment week? Logic is "Purge Weekly Progress"
      STATE.weekCount++;
      localStorage.setItem('sys_week', STATE.weekCount);
      
      location.reload();
  }
};

// --- 5. TIMER ENGINE ---
const Timer = {
    interval: null,
    el: document.getElementById('timer-overlay'),
    val: document.getElementById('timer-val'),
    
    start: (sec) => {
        if(Timer.interval) clearInterval(Timer.interval);
        
        const end = Date.now() + sec * 1000;
        localStorage.setItem('sys_timer', end);
        Timer.el.classList.remove('hidden');
        
        const tick = () => {
            const left = Math.ceil((end - Date.now())/1000);
            if (left <= 0) {
                Timer.stop(true);
            } else {
                const m = Math.floor(left/60).toString().padStart(2,'0');
                const s = (left%60).toString().padStart(2,'0');
                Timer.val.textContent = `${m}:${s}`;
            }
        };
        
        tick();
        Timer.interval = setInterval(tick, 1000);
    },
    
    stop: (vibrate) => {
        clearInterval(Timer.interval);
        localStorage.removeItem('sys_timer');
        Timer.el.classList.add('hidden');
        if(vibrate && navigator.vibrate) navigator.vibrate([50, 100, 50]);
    },
    
    restore: () => {
        const saved = localStorage.getItem('sys_timer');
        if (saved) {
            const left = Math.ceil((parseInt(saved) - Date.now())/1000);
            if (left > 0) Timer.start(left);
        }
    },
    
    check: () => { /* Alias for restore */ Timer.restore(); }
};

// --- EVENT LISTENERS ---
// Accordions
window.toggleBlock = (id) => {
    document.getElementById(id).classList.toggle('expanded');
};

// Modals
document.getElementById('modal-close-btn').onclick = () => document.getElementById('info-modal').classList.add('hidden');
document.getElementById('cancel-reset').onclick = () => document.getElementById('reset-modal').classList.add('hidden');
document.getElementById('confirm-reset').onclick = Logic.confirmReset;

// Controls
document.getElementById('theme-btn').onclick = Logic.toggleTheme;
document.getElementById('reset-day-btn').onclick = Logic.resetDay;
document.getElementById('timer-cancel').onclick = () => Timer.stop(false);

// INIT
UI.init();
