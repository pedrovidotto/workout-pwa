/**
 * WORKOUT.SYS CORE LOGIC
 * Includes: Workout Tracker, Boot Sequence, Background Processes, Safe Mode, Timer
 */

// --- CONFIGURATION & DATA ---
const CONFIG = {
    longPressDuration: 500,
    safeModeInterval: 4, // Weeks
};

// Data: Boot Sequence (Daily Reset)
const bootData = [
    { id: 'hang', label: 'Passive Decompress', details: '2 sets x 30s', instruction: "Dead hang from bar. Relax shoulders. Decompress spine." },
    { id: 'camel', label: 'Fluid Pump', details: '10 reps, Slow', instruction: "Cat-Camel flow on hands and knees. Lubricate synovial fluid." },
    { id: 'stretch', label: 'Mobilize', details: 'World\'s Greatest', instruction: "Lunge, rotate chest to sky, straighten leg. 3 reps per side." },
    { id: 'hops', label: 'Ignite', details: 'Pogo Hops 2x15s', instruction: "Ankle hops. Minimal ground contact time. Wake up CNS." }
];

// Data: Background Processes (Daily Reset)
const backgroundData = [
    { id: 'creatine', category: 'INPUT', label: 'Creatine', details: '5g Daily', instruction: "Take with water or post-workout meal for ATP regeneration." },
    { id: 'algae', category: 'INPUT', label: 'Algae Oil', details: 'DHA/EPA', instruction: "Brain fuel. Reduces inflammation." },
    { id: 'social', category: 'NETWORK', label: 'Social Anchor', details: '1 Interaction', instruction: "Meaningful conversation before 12:00 PM." },
    { id: 'optic', category: 'OPTIC', label: 'Optic Flow', details: 'Morning Walk', instruction: "Outdoor light and forward movement within 30mins of waking." }
];

// Data: Workout Split (Weekly Reset)
const workoutData = [
  { day: 1, title: "Chest Crusher", duration: "60-75m", exercises: [
      { name: "Barbell Bench Press", details: "4 sets of 6-10 reps | 90s rest", instructions: "Heavy compound. Mid-chest." },
      { name: "Incline Dumbbell Press", details: "3 sets of 8-12 reps | 90s rest", instructions: "Upper chest focus." },
      { name: "Weighted Dips", details: "3 sets to Failure | 75s rest", instructions: "Lean forward. Lower chest." },
      { name: "Cable Crossover", details: "3 sets of 12-15 reps | 60s rest", instructions: "High to low. Squeeze." },
      { name: "Cable Rope Pushdowns", details: "4 sets of 10-15 reps | 60s rest", instructions: "Triceps isolation." }
    ], abFinisher: { name: "Cable Crunches", details: "3 sets of 15-20 reps | 45s rest", instructions: "Kneeling." }, cardio: { name: "15 min Cardio", details: "Moderate", instructions: "Incline walk." }
  },
  { day: 2, title: "Back & Biceps", duration: "55-65m", exercises: [
      { name: "Weighted Pull-ups", details: "4 sets of 8-12 reps | 90s rest", instructions: "Vertical pull." },
      { name: "Barbell Row", details: "4 sets of 8-12 reps | 90s rest", instructions: "Horizontal pull. Heavy." },
      { name: "Chest-Supported Row", details: "3 sets of 10-15 reps | 75s rest", instructions: "Isolation pull." },
      { name: "Straight-Arm Pulldown", details: "3 sets of 12-15 reps | 60s rest", instructions: "Lat isolation." },
      { name: "Hammer Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: "Brachialis/Forearm." }
    ], abFinisher: null, cardio: null
  },
  { day: 3, title: "Quads & Calves", duration: "60-75m", exercises: [
      { name: "Barbell Squat", details: "4 sets of 8-12 reps | 120s rest", instructions: "High bar or low bar." },
      { name: "Leg Press", details: "4 sets of 10-15 reps | 90s rest", instructions: "Volume." },
      { name: "Bulgarian Split Squat", details: "3 sets of 10-12 reps | 75s rest", instructions: "Unilateral stability." },
      { name: "Leg Extensions", details: "3 sets of 15-20 reps | 60s rest", instructions: "Isolation burn." },
      { name: "Standing Calf Raise", details: "5 sets of 10-15 reps | 45s rest", instructions: "Heavy." }
    ], abFinisher: null, cardio: null
  },
  { day: 4, title: "Chest & Shoulders", duration: "60-70m", exercises: [
      { name: "Seated DB Press", details: "4 sets of 8-12 reps | 90s rest", instructions: "Overhead pressing." },
      { name: "Cable Lateral Raise", details: "4 sets of 12-15 reps | 60s rest", instructions: "Side delts." },
      { name: "Reverse Pec Deck", details: "4 sets of 15-20 reps | 60s rest", instructions: "Rear delts." },
      { name: "Flat DB Press", details: "3 sets of 8-12 reps | 75s rest", instructions: "Volume chest." },
      { name: "Cable Flys", details: "3 sets of 12-15 reps | 60s rest", instructions: "Squeeze." }
    ], abFinisher: { name: "Decline Reverse Crunch", details: "3 sets of 12-15 reps", instructions: "Lower abs." }, cardio: null
  },
  { day: 5, title: "Biceps & Triceps", duration: "45-55m", exercises: [
      { name: "Close-Grip Bench", details: "4 sets of 8-12 reps | 90s rest", instructions: "Compound triceps." },
      { name: "Barbell Curls", details: "4 sets of 8-12 reps | 75s rest", instructions: "Compound biceps." },
      { name: "Overhead Extension", details: "3 sets of 10-15 reps | 60s rest", instructions: "Long head triceps." },
      { name: "Incline DB Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: "Long head biceps." },
      { name: "Superset: Pushdown/Curl", details: "3 sets of 12-15 reps | 60s rest", instructions: "Pump." }
    ], abFinisher: { name: "Landmine Twists", details: "3 sets 10 reps/side", instructions: "Obliques." }, cardio: { name: "20 min Cardio", details: "Moderate", instructions: "Bike/Elliptical." }
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
      { name: "Zone 2 Cardio", details: "30-45 mins", instructions: "Nasal breathing. Recovery." },
      { name: "Tissue Work", details: "10-15 mins", instructions: "Foam roll thoracic, lats, quads." },
      { name: "Box Breathing", details: "5 mins", instructions: "4-4-4-4 tempo. Downregulate." }
    ], abFinisher: null, cardio: null
  }
];

// --- STATE MANAGEMENT ---
const AppState = {
    progress: {}, // { "day1-exercise-0": 2, ... }
    completedDays: [], // [0, 1, 2] (Indices)
    boot: { date: '', items: [] },
    background: { date: '', items: [] },
    theme: 'dark',
    weekCount: 1,
    
    load: function() {
        this.progress = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
        this.completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
        this.theme = localStorage.getItem('workoutSysTheme') || 'dark';
        this.weekCount = parseInt(localStorage.getItem('workoutSysWeekCount') || '1', 10);
        
        // Date-sensitive loads
        const today = new Date().toDateString();
        
        const savedBoot = JSON.parse(localStorage.getItem('workoutSysBootStatus'));
        this.boot = (savedBoot && savedBoot.date === today) ? savedBoot : { date: today, items: [] };
        
        const savedBg = JSON.parse(localStorage.getItem('workoutSysBackgroundStatus'));
        this.background = (savedBg && savedBg.date === today) ? savedBg : { date: today, items: [] };
        
        // Persist resets immediately
        if (this.boot.date === today) this.save('boot');
        if (this.background.date === today) this.save('background');
    },

    save: function(key) {
        if (key === 'progress') localStorage.setItem('workoutSysProgress', JSON.stringify(this.progress));
        if (key === 'completedDays') localStorage.setItem('workoutSysCompletedDays', JSON.stringify(this.completedDays));
        if (key === 'boot') localStorage.setItem('workoutSysBootStatus', JSON.stringify(this.boot));
        if (key === 'background') localStorage.setItem('workoutSysBackgroundStatus', JSON.stringify(this.background));
        if (key === 'theme') localStorage.setItem('workoutSysTheme', this.theme);
        if (key === 'weekCount') localStorage.setItem('workoutSysWeekCount', this.weekCount);
    },

    resetWeek: function() {
        this.progress = {};
        this.completedDays = [];
        this.weekCount++;
        this.save('progress');
        this.save('completedDays');
        this.save('weekCount');
        Timer.clear();
    }
};

// --- TIMER ENGINE ---
const Timer = {
    interval: null,
    endTime: null,
    el: document.getElementById('timer-display'),
    
    start: function(seconds) {
        if (seconds <= 0) return;
        this.clear(); // Clear existing
        
        this.endTime = Date.now() + (seconds * 1000);
        localStorage.setItem('restPeriodEndTime', this.endTime);
        this.el.classList.remove('hidden');
        
        this.tick(); // Immediate update
        this.interval = setInterval(() => this.tick(), 1000);
    },
    
    tick: function() {
        const remaining = Math.ceil((this.endTime - Date.now()) / 1000);
        
        if (remaining <= 0) {
            this.clear();
            if (navigator.vibrate) navigator.vibrate(50);
        } else {
            const m = Math.floor(remaining / 60).toString().padStart(2, '0');
            const s = (remaining % 60).toString().padStart(2, '0');
            this.el.textContent = `${m}:${s}`;
        }
    },
    
    clear: function() {
        if (this.interval) clearInterval(this.interval);
        this.interval = null;
        this.endTime = null;
        localStorage.removeItem('restPeriodEndTime');
        this.el.classList.add('hidden');
    },
    
    restore: function() {
        const savedEnd = localStorage.getItem('restPeriodEndTime');
        if (savedEnd) {
            const remaining = Math.ceil((parseInt(savedEnd) - Date.now()) / 1000);
            if (remaining > 0) {
                this.endTime = parseInt(savedEnd);
                this.el.classList.remove('hidden');
                this.tick();
                this.interval = setInterval(() => this.tick(), 1000);
            } else {
                this.clear();
            }
        }
    }
};

// --- LOGIC HELPERS ---
const isSafeMode = () => AppState.weekCount % CONFIG.safeModeInterval === 0;

const parseSets = (details) => {
    if (isSafeMode()) return 1; // SAFE MODE OVERRIDE
    if (!details) return 1;
    const match = details.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
};

const parseRest = (details) => {
    const match = details.match(/\|\s*(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
};

// --- RENDERERS ---
const UI = {
    renderApp: function() {
        // Theme
        document.body.dataset.theme = AppState.theme;
        document.body.classList.toggle('safe-mode', isSafeMode());
        document.querySelector('meta[name="theme-color"]').content = AppState.theme === 'light' ? '#f2ece7' : '#2d2a27';
        
        // Buttons
        const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
        const nav = document.getElementById('day-selector');
        nav.innerHTML = '';
        workoutData.forEach((d, i) => {
            const btn = document.createElement('button');
            btn.className = `day-btn ${AppState.completedDays.includes(i) ? 'day-complete' : ''}`;
            btn.innerHTML = `<span>${dayLabels[i]}</span>`;
            btn.onclick = () => UI.setActiveDay(i);
            nav.appendChild(btn);
        });

        // Theme Toggle SVG
        document.getElementById('theme-toggle-btn').innerHTML = `<svg width="18" height="18" viewBox="0 0 20 20" class="fg"><circle cx="10" cy="10" r="9" style="fill:none;stroke:currentColor;stroke-width:1.5"/><path d="M10 1a9 9 0 0 1 0 18z" style="fill:currentColor"/></svg>`;
        
        // Boot & Background Lists
        this.renderChecklist('boot-list', bootData, AppState.boot.items, (id) => {
            const idx = AppState.boot.items.indexOf(id);
            if(idx > -1) AppState.boot.items.splice(idx, 1); else AppState.boot.items.push(id);
            AppState.save('boot');
            UI.updateBootButton();
        });
        
        this.renderChecklist('background-list', backgroundData, AppState.background.items, (id) => {
            const idx = AppState.background.items.indexOf(id);
            if(idx > -1) AppState.background.items.splice(idx, 1); else AppState.background.items.push(id);
            AppState.save('background');
        });
        
        this.updateBootButton();
    },

    setActiveDay: function(index) {
        document.querySelectorAll('.day-btn').forEach((b, i) => b.classList.toggle('active', i === index));
        this.renderWorkout(index);
        Timer.clear(); // Switch day = stop timer
    },

    renderWorkout: function(dayIndex) {
        const data = workoutData[dayIndex];
        const container = document.getElementById('exercise-list');
        const completedContainer = document.getElementById('completed-list');
        
        // Header
        document.getElementById('workout-title').innerHTML = `<span class="workout-day-num">${data.day}.</span> ${data.title}`;
        document.getElementById('workout-duration').textContent = isSafeMode() ? "// SAFE MODE: RECOVERY WEEK" : `// EST. TIME: ${data.duration}`;
        
        container.innerHTML = '';
        completedContainer.innerHTML = '';

        // Helper to build list
        const buildList = (exercises, typeStr) => {
            if (!exercises) return;
            const list = Array.isArray(exercises) ? exercises : [exercises];
            
            // Render category title if items exist
            if (list.length > 0) {
                 const h3 = document.createElement('h3');
                 h3.className = 'category-title';
                 h3.textContent = typeStr === 'ex' ? 'Main Workout' : (typeStr === 'ab' ? 'Ab Finisher' : 'Post-Workout Cardio');
                 // Only append title if there are uncompleted items, or logic to manage completed section titles
                 container.appendChild(h3);
            }

            list.forEach((ex, i) => {
                const id = `day${data.day}-${typeStr}-${i}`;
                const total = parseSets(ex.details);
                const current = AppState.progress[id] || 0;
                
                const li = document.createElement('li');
                li.className = (typeStr === 'ex' ? 'exercise-item' : (typeStr === 'ab' ? 'ab-finisher' : 'cardio-session'));
                if (current >= total) li.classList.add('fully-completed');
                
                li.innerHTML = `
                    <span class="set-counter ${current >= total ? 'sets-complete' : ''}">${current}/${total}</span>
                    <div class="exercise-details"><h3>${ex.name}</h3><p>${ex.details}</p></div>
                    <button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
                `;

                // Logic
                const handleClick = (dir) => {
                    let next = current;
                    if (dir === 'inc') {
                        if (current < total) {
                            next++;
                            Timer.start(parseRest(ex.details)); // ALWAYS start timer on increment if not finished
                            // Visual Active State
                            document.querySelectorAll('.exercise-active').forEach(el => el.classList.remove('exercise-active'));
                            li.classList.add('exercise-active');
                            // Move to top of section logic (omitted for brevity, can add back)
                        }
                    } else {
                        if (current > 0) {
                            next--;
                            Timer.clear(); // Stop timer on decrement
                        }
                    }

                    if (next !== current) {
                        AppState.progress[id] = next;
                        AppState.save('progress');
                        
                        // Check Day Completion
                        const allItems = [...(data.exercises||[]).map((_,x)=>`day${data.day}-ex-${x}`), ...(data.abFinisher?[`day${data.day}-ab-0`]:[]), ...(data.cardio?[`day${data.day}-cardio-0`]:[])];
                        const isDayDone = allItems.every(itemId => {
                             // Need to fetch max sets for each to compare. 
                             // Simplified: Just re-render.
                             return true; 
                        });
                        
                        UI.renderWorkout(dayIndex); // Re-render to sort
                        UI.checkCompletion(dayIndex);
                    }
                };

                li.addEventListener('click', (e) => { if (!e.target.closest('.info-btn')) handleClick('inc'); });
                li.addEventListener('contextmenu', (e) => { e.preventDefault(); handleClick('dec'); });
                // Long press logic handled by simple timeout in actual implementation
                
                li.querySelector('.info-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    document.getElementById('info-modal-title').textContent = ex.name;
                    document.getElementById('info-modal-instructions').innerHTML = `<p>${ex.instructions}</p>`;
                    document.getElementById('info-modal-overlay').classList.remove('hidden');
                });

                if (current >= total) {
                    li.classList.remove('exercise-active'); // Remove active bar if complete
                    completedContainer.appendChild(li);
                } else {
                    container.appendChild(li);
                }
            });
        };

        buildList(data.exercises, 'ex');
        buildList(data.abFinisher, 'ab');
        buildList(data.cardio, 'cardio');
        
        document.getElementById('completed-title').classList.toggle('hidden', completedContainer.children.length === 0);
    },

    renderChecklist: function(containerId, data, activeItems, toggleFn) {
        const list = document.getElementById(containerId);
        list.innerHTML = '';
        data.forEach(item => {
            const li = document.createElement('li');
            li.className = 'boot-item';
            const isChecked = activeItems.includes(item.id);
            li.innerHTML = `
                <div class="boot-checkbox ${isChecked ? 'checked' : ''}">${isChecked ? '✓' : ''}</div>
                <div class="boot-details"><div class="boot-label">${item.category ? `<span class="background-category">[${item.category}]</span>` : ''}${item.label}</div><div class="boot-meta">${item.details}</div></div>
                <button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
            `;
            li.addEventListener('click', (e) => { if (!e.target.closest('.info-btn')) { toggleFn(item.id); this.renderChecklist(containerId, data, activeItems, toggleFn); } });
            li.querySelector('.info-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('info-modal-title').textContent = item.label;
                document.getElementById('info-modal-instructions').innerHTML = `<p>${item.instruction}</p>`;
                document.getElementById('info-modal-overlay').classList.remove('hidden');
            });
            list.appendChild(li);
        });
    },

    updateBootButton: function() {
        const isComplete = AppState.boot.items.length === bootData.length;
        const btn = document.getElementById('boot-sequence-btn');
        btn.classList.toggle('complete', isComplete);
        document.getElementById('boot-btn-text').textContent = isComplete ? "SYSTEM ONLINE" : "INITIALIZE BOOT SEQUENCE";
    },

    checkCompletion: function(dayIndex) {
        const data = workoutData[dayIndex];
        // Calculate total sets vs progress
        let allIds = [];
        if (data.exercises) data.exercises.forEach((_, i) => allIds.push({id: `day${data.day}-ex-${i}`, sets: parseSets(workoutData[dayIndex].exercises[i].details)}));
        if (data.abFinisher) allIds.push({id: `day${data.day}-ab-0`, sets: parseSets(data.abFinisher.details)});
        if (data.cardio) allIds.push({id: `day${data.day}-cardio-0`, sets: parseSets(data.cardio.details)});

        const isComplete = allIds.every(x => (AppState.progress[x.id] || 0) >= x.sets);
        
        if (isComplete && !AppState.completedDays.includes(dayIndex)) {
            AppState.completedDays.push(dayIndex);
            AppState.save('completedDays');
            // Update nav button
            document.querySelectorAll('.day-btn')[dayIndex].classList.add('day-complete');
            
            // Check Week
            const meaningfulDays = workoutData.map((d, i) => (d.exercises && d.exercises.length > 0) ? i : -1).filter(i => i > -1);
            const weekDone = meaningfulDays.every(i => AppState.completedDays.includes(i));
            
            if (weekDone) {
                document.getElementById('completion-title').textContent = "// WEEK COMPLETE";
                document.getElementById('completion-message').textContent = "SYSTEM RESETTING...";
                document.getElementById('completion-overlay').classList.remove('hidden');
                setTimeout(() => {
                    AppState.resetWeek();
                    location.reload();
                }, 4000);
            }
        }
    }
};

// --- EVENTS ---
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
    AppState.save('theme');
    UI.renderApp();
});

document.getElementById('boot-sequence-btn').addEventListener('click', () => {
    document.getElementById('boot-modal-overlay').classList.remove('hidden');
});

document.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(el => el.classList.add('hidden'));
}));

document.getElementById('reset-button').addEventListener('click', () => document.getElementById('reset-modal-overlay').classList.remove('hidden'));
document.getElementById('cancel-reset-btn').addEventListener('click', () => document.getElementById('reset-modal-overlay').classList.add('hidden'));
document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    AppState.resetWeek();
    location.reload();
});

// Init
AppState.load();
Timer.restore();
UI.renderApp();
const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
UI.setActiveDay(todayIndex);
