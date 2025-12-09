// --- CONFIGURATION ---
const LONG_PRESS_DURATION = 500;
const SAFE_MODE_WEEKS = 4;

// --- DATA: Boot & Background ---
const bootData = [
    { id: 'hang', label: 'Passive Decompress', details: '2 sets x 30s', instruction: "Hang from a bar. Relax shoulders." },
    { id: 'camel', label: 'Fluid Pump', details: '10 reps, Slow', instruction: "Cat-Camel flow on hands and knees." },
    { id: 'stretch', label: 'Mobilize', details: 'World\'s Greatest', instruction: "Lunge, rotate chest to sky, straighten leg." },
    { id: 'hops', label: 'Ignite', details: 'Pogo Hops 2x15s', instruction: "Ankle hops. Minimize ground contact." }
];

const backgroundData = [
    { id: 'creatine', category: 'INPUT', label: 'Creatine', details: '5g Daily', instruction: "Take with water or post-workout meal." },
    { id: 'algae', category: 'INPUT', label: 'Algae Oil', details: 'DHA/EPA', instruction: "Brain fuel. Reduces inflammation." },
    { id: 'social', category: 'NETWORK', label: 'Social Anchor', details: '1 Interaction', instruction: "Meaningful conversation before 12:00 PM." },
    { id: 'optic', category: 'OPTIC', label: 'Optic Flow', details: 'Morning Walk', instruction: "Outdoor light within 30mins of waking." }
];

// --- DATA: Workouts ---
const workoutData = [
  { day: 1, title: "Chest Crusher", duration: "60-75m", exercises: [
      { name: "Barbell Bench Press", details: "4 sets of 6-10 reps | 90-120s rest", instructions: "Heavy compound. Mid-chest." },
      { name: "Incline Dumbbell Press", details: "3 sets of 8-12 reps | 90s rest", instructions: "Upper chest focus." },
      { name: "Weighted Dips", details: "3 sets to Failure | 75s rest", instructions: "Lean forward. Lower chest." },
      { name: "Cable Crossover", details: "3 sets of 12-15 reps | 60s rest", instructions: "High to low. Squeeze." },
      { name: "Cable Rope Pushdowns", details: "4 sets of 10-15 reps | 60s rest", instructions: "Triceps isolation." }
    ], abFinisher: { name: "Cable Crunches", details: "3 sets of 15-20 reps", instructions: "Kneeling." }, cardio: { name: "15 min Cardio", details: "Moderate", instructions: "Incline walk." }
  },
  { day: 2, title: "Back & Biceps", duration: "55-65m", exercises: [
      { name: "Weighted Pull-ups", details: "4 sets of 8-12 reps | 90s rest", instructions: "Vertical pull." },
      { name: "Barbell Row", details: "4 sets of 8-12 reps | 90s rest", instructions: "Horizontal pull." },
      { name: "Chest-Supported Row", details: "3 sets of 10-15 reps | 75s rest", instructions: "Isolation pull." },
      { name: "Straight-Arm Pulldown", details: "3 sets of 12-15 reps | 60s rest", instructions: "Lat isolation." },
      { name: "Hammer Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: "Brachialis." }
    ], abFinisher: null, cardio: null
  },
  { day: 3, title: "Quads & Calves", duration: "60-75m", exercises: [
      { name: "Barbell Squat", details: "4 sets of 8-12 reps | 120s rest", instructions: "High bar or low bar." },
      { name: "Leg Press", details: "4 sets of 10-15 reps | 90s rest", instructions: "Volume." },
      { name: "Bulgarian Split Squat", details: "3 sets of 10-12 reps | 75s rest", instructions: "Unilateral." },
      { name: "Leg Extensions", details: "3 sets of 15-20 reps | 60s rest", instructions: "Isolation." },
      { name: "Standing Calf Raise", details: "5 sets of 10-15 reps | 45s rest", instructions: "Heavy." }
    ], abFinisher: null, cardio: null
  },
  { day: 4, title: "Chest & Shoulders", duration: "60-70m", exercises: [
      { name: "Seated DB Press", details: "4 sets of 8-12 reps | 90s rest", instructions: "Overhead." },
      { name: "Cable Lateral Raise", details: "4 sets of 12-15 reps | 60s rest", instructions: "Side delts." },
      { name: "Reverse Pec Deck", details: "4 sets of 15-20 reps | 60s rest", instructions: "Rear delts." },
      { name: "Flat DB Press", details: "3 sets of 8-12 reps | 75s rest", instructions: "Volume." },
      { name: "Cable Flys", details: "3 sets of 12-15 reps | 60s rest", instructions: "Squeeze." }
    ], abFinisher: { name: "Decline Reverse Crunch", details: "3 sets of 12-15 reps", instructions: "Lower abs." }, cardio: null
  },
  { day: 5, title: "Biceps & Triceps", duration: "45-55m", exercises: [
      { name: "Close-Grip Bench", details: "4 sets of 8-12 reps | 90s rest", instructions: "Triceps compound." },
      { name: "Barbell Curls", details: "4 sets of 8-12 reps | 75s rest", instructions: "Biceps compound." },
      { name: "Overhead Extension", details: "3 sets of 10-15 reps | 60s rest", instructions: "Long head." },
      { name: "Incline DB Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: "Stretch." },
      { name: "Superset: Pushdown/Curl", details: "3 sets of 12-15 reps | 60s rest", instructions: "Pump." }
    ], abFinisher: { name: "Landmine Twists", details: "3 sets 10 reps/side", instructions: "Obliques." }, cardio: { name: "20 min Cardio", details: "Moderate", instructions: "Bike." }
  },
  { day: 6, title: "Glutes & Hams", duration: "65-75m", exercises: [
      { name: "RDLs", details: "4 sets of 8-12 reps | 120s rest", instructions: "Hamstring stretch." },
      { name: "Hip Thrusts", details: "4 sets of 8-12 reps | 90s rest", instructions: "Glute contraction." },
      { name: "Leg Curls", details: "4 sets of 12-15 reps | 75s rest", instructions: "Hamstring isolation." },
      { name: "Hip Abduction", details: "4 sets of 15-20 reps | 60s rest", instructions: "Glute medius." },
      { name: "45-Deg Kickback", details: "3 sets of 15-20 reps | 45s rest", instructions: "Glute max." },
      { name: "Seated Calf Raise", details: "4 sets of 15-20 reps | 45s rest", instructions: "Soleus." }
    ], abFinisher: null, cardio: null
  },
  { day: 7, title: "System Defrag", duration: "30-45m", exercises: [
      { name: "Zone 2 Cardio", details: "30-45 mins", instructions: "Recovery." },
      { name: "Tissue Work", details: "10-15 mins", instructions: "Foam roll." },
      { name: "Box Breathing", details: "5 mins", instructions: "Downregulate." }
    ], abFinisher: null, cardio: null
  }
];

// --- STATE MANAGEMENT ---
let progress = JSON.parse(localStorage.getItem("workoutSysProgress")) || {};
let completedDays = JSON.parse(localStorage.getItem("workoutSysCompletedDays")) || [];
let weekCount = parseInt(localStorage.getItem("workoutSysWeekCount") || '1', 10);
let activeTimer = null;

// Daily Resets (Boot/Background)
const today = new Date().toDateString();
let bootStatus = JSON.parse(localStorage.getItem("workoutSysBootStatus")) || { date: today, items: [] };
if (bootStatus.date !== today) bootStatus = { date: today, items: [] };

let backgroundStatus = JSON.parse(localStorage.getItem("workoutSysBackgroundStatus")) || { date: today, items: [] };
if (backgroundStatus.date !== today) backgroundStatus = { date: today, items: [] };

// --- HELPERS ---
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const isSafeMode = () => weekCount % SAFE_MODE_WEEKS === 0;

const parseSets = (details) => {
    if (isSafeMode()) return 1;
    const match = details.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
};

const parseRest = (details) => {
    const match = details.match(/\|\s*(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
};

// --- TIMER ENGINE ---
const Timer = {
    el: document.getElementById('timer-display'),
    start: function(seconds) {
        if (seconds <= 0) return;
        if (activeTimer) clearInterval(activeTimer);
        const endTime = Date.now() + (seconds * 1000);
        localStorage.setItem('restPeriodEndTime', endTime);
        this.el.classList.remove('hidden');
        
        const tick = () => {
            const left = Math.ceil((endTime - Date.now()) / 1000);
            if (left <= 0) {
                this.stop();
                if (navigator.vibrate) navigator.vibrate(50);
            } else {
                this.el.textContent = `${Math.floor(left / 60).toString().padStart(2, '0')}:${(left % 60).toString().padStart(2, '0')}`;
            }
        };
        tick();
        activeTimer = setInterval(tick, 1000);
    },
    stop: function() {
        if (activeTimer) clearInterval(activeTimer);
        localStorage.removeItem('restPeriodEndTime');
        this.el.classList.add('hidden');
    },
    restore: function() {
        const saved = localStorage.getItem('restPeriodEndTime');
        if (saved) {
            const left = Math.ceil((parseInt(saved) - Date.now()) / 1000);
            if (left > 0) this.start(left); else this.stop();
        }
    }
};

// --- RENDERING ---
function renderApp() {
    // Theme
    const theme = localStorage.getItem('workoutSysTheme') || 'dark';
    document.body.dataset.theme = theme;
    document.body.classList.toggle('safe-mode', isSafeMode());
    
    // Theme Toggle SVG
    document.getElementById('theme-toggle-btn').innerHTML = `<svg width="18" height="18" viewBox="0 0 20 20" class="fg"><circle cx="10" cy="10" r="9" style="fill:none;stroke:currentColor;stroke-width:1.5"/><path d="M10 1a9 9 0 0 1 0 18z" style="fill:currentColor"/></svg>`;
    
    // Day Buttons
    const labels = ["M", "T", "W", "T", "F", "S", "S"];
    const nav = document.getElementById('day-selector');
    nav.innerHTML = '';
    workoutData.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = `day-btn ${completedDays.includes(i) ? 'day-complete' : ''}`;
        btn.innerHTML = `<span>${labels[i]}</span>`;
        btn.onclick = () => setActiveDay(i);
        nav.appendChild(btn);
    });

    // Boot & Background
    renderChecklist('boot-list', bootData, bootStatus, 'workoutSysBootStatus');
    renderChecklist('background-list', backgroundData, backgroundStatus, 'workoutSysBackgroundStatus');
    
    // Update Boot Button
    const bootBtn = document.getElementById('boot-sequence-btn');
    const isBootComplete = bootStatus.items.length === bootData.length;
    bootBtn.classList.toggle('complete', isBootComplete);
    document.getElementById('boot-btn-text').textContent = isBootComplete ? "SYSTEM ONLINE" : "INITIALIZE BOOT SEQUENCE";
}

function renderChecklist(elId, data, state, key) {
    const list = document.getElementById(elId);
    list.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'boot-item';
        const checked = state.items.includes(item.id);
        li.innerHTML = `
            <div class="boot-checkbox ${checked ? 'checked' : ''}">${checked ? '✓' : ''}</div>
            <div class="boot-details"><div class="boot-label">${item.category ? `<span class="background-category">[${item.category}]</span>` : ''}${item.label}</div><div class="boot-meta">${item.details}</div></div>
            <button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
        `;
        li.addEventListener('click', (e) => {
            if (e.target.closest('.info-btn')) return;
            state.items = checked ? state.items.filter(i => i !== item.id) : [...state.items, item.id];
            save(key, state);
            renderApp(); // Re-render to update UI state
            if (navigator.vibrate) navigator.vibrate(50);
        });
        li.querySelector('.info-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('info-modal-title').textContent = item.label;
            document.getElementById('info-modal-instructions').innerHTML = `<p>${item.instruction}</p>`;
            document.getElementById('info-modal-overlay').classList.remove('hidden');
        });
        list.appendChild(li);
    });
}

function renderWorkout(dayIndex) {
    const data = workoutData[dayIndex];
    document.getElementById('workout-title').innerHTML = `<span class="workout-day-num">${data.day}.</span> ${data.title}`;
    document.getElementById('workout-duration').textContent = isSafeMode() ? "// SAFE MODE: RECOVERY WEEK" : `// EST. TIME: ${data.duration}`;
    
    const activeList = document.getElementById('exercise-list');
    const doneList = document.getElementById('completed-list');
    activeList.innerHTML = ''; doneList.innerHTML = '';

    // Helper
    const addItems = (items, type) => {
        if (!items) return;
        const arr = Array.isArray(items) ? items : [items];
        
        // Category Header (Only for active list logic, simplified here)
        if (arr.length > 0 && type !== 'ex') {
             // Optional: Add headers back if needed
        }

        arr.forEach((ex, i) => {
            const id = `day${data.day}-${type}-${i}`;
            const total = parseSets(ex.details);
            const current = progress[id] || 0;
            
            const li = document.createElement('li');
            li.className = type === 'ex' ? 'exercise-item' : (type === 'ab' ? 'ab-finisher' : 'cardio-session');
            if (current >= total) li.classList.add('fully-completed');
            
            li.innerHTML = `
                <span class="set-counter ${current >= total ? 'sets-complete' : ''}">${current}/${total}</span>
                <div class="exercise-details"><h3>${ex.name}</h3><p>${ex.details}</p></div>
                <button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
            `;

            // Interaction
            const update = (inc) => {
                let next = current;
                if (inc) {
                    if (current < total) {
                        next++;
                        // Timer logic: Start on any increment if NOT finished
                        Timer.start(parseRest(ex.details));
                        
                        // Active Bar Logic
                        document.querySelectorAll('.exercise-active').forEach(e => e.classList.remove('exercise-active'));
                        li.classList.add('exercise-active');
                        
                        // Move to top if not last set
                        if (next < total) activeList.insertBefore(li, activeList.firstChild); // Simple move to top
                    }
                } else {
                    if (current > 0) {
                        next--;
                        Timer.stop();
                    }
                }

                if (next !== current) {
                    progress[id] = next;
                    save("workoutSysProgress", progress);
                    renderWorkout(dayIndex); // Re-render to sort active/completed
                    checkDayCompletion(dayIndex);
                    if (navigator.vibrate) navigator.vibrate(50);
                }
            };

            li.addEventListener('click', (e) => { if(!e.target.closest('.info-btn')) update(true); });
            li.addEventListener('contextmenu', (e) => { e.preventDefault(); update(false); });
            
            li.querySelector('.info-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('info-modal-title').textContent = ex.name;
                document.getElementById('info-modal-instructions').innerHTML = `<p>${ex.instructions}</p>`;
                document.getElementById('info-modal-overlay').classList.remove('hidden');
            });

            if (current >= total) {
                li.classList.remove('exercise-active');
                doneList.appendChild(li);
            } else {
                activeList.appendChild(li);
            }
        });
    };

    if (!data.exercises || data.exercises.length === 0) {
        activeList.innerHTML = '<li style="padding:20px; text-align:center; color:var(--text-muted);">// REST DAY MODE ACTIVE</li>';
    } else {
        addItems(data.exercises, 'ex');
        addItems(data.abFinisher, 'ab');
        addItems(data.cardio, 'cardio');
    }
    
    document.getElementById('completed-title').classList.toggle('hidden', doneList.children.length === 0);
}

function checkDayCompletion(dayIndex) {
    const data = workoutData[dayIndex];
    if (!data.exercises || data.exercises.length === 0) return;

    // Check if everything is done
    const checkItem = (items, type) => {
        if (!items) return true;
        const arr = Array.isArray(items) ? items : [items];
        return arr.every((ex, i) => (progress[`day${data.day}-${type}-${i}`] || 0) >= parseSets(ex.details));
    };

    const isComplete = checkItem(data.exercises, 'ex') && checkItem(data.abFinisher, 'ab') && checkItem(data.cardio, 'cardio');

    if (isComplete) {
        if (!completedDays.includes(dayIndex)) {
            completedDays.push(dayIndex);
            save("workoutSysCompletedDays", completedDays);
            renderApp(); // Update nav buttons
            
            // Check Week
            const meaningfulDays = workoutData.filter(d => d.exercises && d.exercises.length > 0).length;
            if (completedDays.length >= meaningfulDays) {
                document.getElementById('completion-title').textContent = "// WEEK COMPLETE";
                document.getElementById('completion-message').textContent = "SYSTEM RESETTING...";
                document.getElementById('completion-overlay').classList.remove('hidden');
                setTimeout(() => {
                    progress = {};
                    completedDays = [];
                    weekCount++;
                    save("workoutSysProgress", progress);
                    save("workoutSysCompletedDays", completedDays);
                    save("workoutSysWeekCount", weekCount);
                    location.reload();
                }, 4000);
            }
        }
    }
}

function setActiveDay(index) {
    document.querySelectorAll('.day-btn').forEach((b, i) => {
        if(b.id !== 'theme-toggle-btn') b.classList.toggle('active', i === index);
    });
    Timer.stop();
    renderWorkout(index);
}

// --- EVENTS ---
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    const current = localStorage.getItem(THEME_KEY) || 'dark';
    localStorage.setItem(THEME_KEY, current === 'dark' ? 'light' : 'dark');
    renderApp();
});

document.getElementById('boot-sequence-btn').addEventListener('click', () => document.getElementById('boot-modal-overlay').classList.remove('hidden'));
document.getElementById('reset-button').addEventListener('click', () => document.getElementById('reset-modal-overlay').classList.remove('hidden'));
document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    progress = {}; completedDays = [];
    save("workoutSysProgress", progress);
    save("workoutSysCompletedDays", completedDays);
    location.reload();
});

document.querySelectorAll('.modal-close-btn, #cancel-reset-btn').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
}));

// Init
Timer.restore();
renderApp();
setActiveDay(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
