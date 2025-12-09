// --- Boot Sequence Data ---
const bootData = [
    { id: 'hang', label: 'Passive Decompress: Dead Hang', details: '2 sets x 30 seconds', instruction: "1. Find a pull-up bar.\n2. Grip tightly and let your body hang loose.\n3. Relax your shoulders and let gravity decompress your spine.\n4. Hold for 30 seconds. Repeat twice." },
    { id: 'camel', label: 'Fluid Pump: Cat-Camel', details: '10 reps, SLOWLY', instruction: "1. Get on hands and knees.\n2. Arch your back up (Cat) while exhaling.\n3. Dip your back down (Camel) while inhaling.\n4. Move slowly to lubricate the spine." },
    { id: 'stretch', label: 'Mobilize: World’s Greatest', details: '3 reps per side', instruction: "1. Lunge forward with one leg.\n2. Place opposite hand on the floor.\n3. Rotate your chest and reach free arm to the sky.\n4. Return and straighten front leg for a hamstring stretch." },
    { id: 'hops', label: 'Ignite: Pogo Hops', details: '2 sets x 15 seconds', instruction: "1. Stand with knees slightly bent.\n2. Hop up and down using only your ankles/calves.\n3. Keep ground contact time minimal.\n4. Wake up the fast-twitch fibers." }
];

// --- Background Process Data ---
const backgroundData = [
    { id: 'creatine', category: 'INPUT', label: 'Creatine Monohydrate', details: '5g Daily', instruction: "Essential for ATP regeneration and brain function. Take with water or post-workout carbs." },
    { id: 'algae', category: 'INPUT', label: 'Algae Oil (DHA/EPA)', details: 'Daily Dose', instruction: "Critical brain fuel for vegetarians. Supports cognitive speed and reduces inflammation." },
    { id: 'social', category: 'NETWORK', label: 'Social Anchor', details: '1 Interaction', instruction: "One meaningful human interaction before 12:00 PM to regulate circadian rhythm and mood." },
    { id: 'optic', category: 'OPTIC', label: 'Morning Walk', details: 'Outdoor Light', instruction: "Get forward optic flow (walking) and sunlight within 30 minutes of waking to set sleep clock." }
];

// --- Workout Data (Day 7 Optimized for Recovery) ---
const workoutData = [
  { // DAY 1
    "day": 1,
    "title": "Chest Crusher & Triceps", 
    "duration": "60-75 minutes", 
    "exercises": [ 
      { "name": "Barbell Bench Press", "details": "4 sets of 6-10 reps | 90-120s rest", "instructions": "Lie flat, feet firm. Grip slightly wider than shoulders. Lower to mid-chest controlled. Press up powerfully." },
      { "name": "Incline Dumbbell Press", "details": "3 sets of 8-12 reps | 90s rest", "instructions": "Bench at 30-45 deg. Press in an arc. Lower slowly feeling upper chest stretch." },
      { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure (aim 8-15) | 75s rest", "instructions": "Lean forward significantly. Lower until shoulders below elbows. Press up squeezing chest." },
      { "name": "Cable Crossover (High-to-Low)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "High pulleys. Bring hands down/together in front of waist. Squeeze hard. Control return." },
      { "name": "Cable Rope Pushdowns", "details": "4 sets of 10-15 reps | 60s rest", "instructions": "Elbows tucked. Extend fully, squeezing triceps. Spread rope at bottom." }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "Kneel facing pulley. Crunch down bringing ribs to pelvis. Contract abs." }, 
    "cardio": { "name": "15 minutes moderate cardio", "details": "1 set of 15 minutes", "instructions": "StairMaster or incline treadmill. Steady pace." } 
  },
  { // DAY 2
    "day": 2,
    "title": "Back & Biceps",
    "duration": "55-65 minutes", 
    "exercises": [
      { "name": "Weighted Pull-ups", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "Grip wider than shoulders. Drive elbows down/back. Squeeze back at top. Full extension bottom." },
      { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "Hinge hips, back straight. Pull to lower stomach. Squeeze shoulder blades. Lower controlled." },
      { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "Lie on pad. Pull handles retracting blades/driving elbows. Squeeze hard." },
      { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Straight bar, high pulley. Arms straight, pull down in arc to thighs. Focus on lats." },
      { "name": "Dumbbell Hammer Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "Neutral grip. Elbows pinned. Curl towards shoulders. Squeeze biceps/brachialis." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3
    "day": 3,
    "title": "Quads & Calves",
    "duration": "60-75 minutes", 
    "exercises": [
      { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "Bar on upper back. Chest up. Squat below parallel. Drive up through heels." },
      { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "Feet shoulder-width. Lower to 90 degrees. Press up, don't lock knees." },
      { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "Rear foot on bench. Lower back knee to floor. Drive up through front heel." },
      { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "Squeeze quads hard at top. Control weight lowering." },
      { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "Deep stretch at bottom. Press up high on toes. Pause at top." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4
    "day": 4,
    "title": "Chest & Shoulders", 
    "duration": "60-70 minutes", 
    "exercises": [
      { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "Back supported. Press overhead. Lower slowly to ear level." },
      { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "Stand side-on. Raise arm out leading with elbow. Control negative." },
      { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "Face machine. Drive arms back/out. Squeeze rear delts." },
      { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "Lie flat. Press up. Lower slowly feeling stretch." },
      { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Chest height pulleys. Bring handles together in arc. Squeeze." }
    ],
    "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Lie on decline bench. Lift hips off bench using lower abs." },
    "cardio": null
  },
  { // DAY 5
    "day": 5,
    "title": "Biceps & Triceps", 
    "duration": "45-55 minutes", 
    "exercises": [
      { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "Narrow grip. Elbows tucked. Press focusing on triceps." },
      { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "Elbows pinned. Curl without swinging. Squeeze at top." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "High pulley, rope. Extend arms overhead. Stretch triceps." },
      { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "Seated incline. Arms hang back. Curl rotating palms up." },
      { "name": "Superset: Pushdowns & Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest", "instructions": "Pushdowns: Spread rope. Hammer Curls: Neutral grip." }
    ],
    "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "Rotate barbell from core, pivoting feet." },
    "cardio": { "name": "20 minutes moderate cardio", "details": "1 set of 20 minutes", "instructions": "Stationary bike or elliptical. Low impact." }
  },
  { // DAY 6
    "day": 6,
    "title": "Glutes & Hamstrings", 
    "duration": "65-75 minutes", 
    "exercises": [
      { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "Hinge hips, back flat, legs slight bend. Lower bar until hamstring stretch. Drive hips forward." },
      { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "Upper back on bench. Drive hips up. Squeeze glutes hard. Chin tucked." },
      { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set)", "instructions": "Squeeze at peak. Control negative." },
      { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "Lean forward. Control movement in and out." },
      { "name": "45-Degree Kickbacks", "details": "3 sets of 15-20 reps (per leg) | 45s rest", "instructions": "Cable/Band. Kick back and out 45 deg. Squeeze upper glute." },
      { "name": "Seated Calf Raises", "details": "4 sets of 15-20 reps | 45s rest", "instructions": "Deep stretch. Press up high. Focus on soleus." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 7: SYSTEM DEFRAG (RECOVERY)
    "day": 7,
    "title": "System Defrag", 
    "duration": "30-45 minutes", 
    "exercises": [
      { "name": "Zone 2 Cardio", "details": "30-45 mins | Continuous", "instructions": "Brisk walk, incline treadmill, or bike. Keep heart rate low (120-130bpm). Focus on nasal breathing." },
      { "name": "Tissue Work (Foam Roll)", "details": "10-15 mins", "instructions": "Focus on Thoracic spine, Lats, Quads, and Calves. Spend time on tender spots." },
      { "name": "Box Breathing", "details": "5 mins", "instructions": "Sit quietly. Inhale 4s, Hold 4s, Exhale 4s, Hold 4s. Downregulate the Central Nervous System." }
    ],
    "abFinisher": null,
    "cardio": null
  }
];

// DOM Elements
const daySelector = document.getElementById("day-selector");
const workoutTitle = document.getElementById("workout-title");
const workoutDuration = document.getElementById("workout-duration");
const exerciseList = document.getElementById("exercise-list"); 
const completedList = document.getElementById("completed-list"); 
const completedTitle = document.getElementById("completed-title"); 
const resetButton = document.getElementById("reset-button");
const timerDisplay = document.getElementById('timer-display');
const infoModalOverlay = document.getElementById("info-modal-overlay");
const infoModalCloseBtn = document.getElementById("info-modal-close-btn");
const infoModalTitle = document.getElementById("info-modal-title");
const infoModalInstructions = document.getElementById("info-modal-instructions");
const resetModalOverlay = document.getElementById("reset-modal-overlay");
const confirmResetBtn = document.getElementById("confirm-reset-btn");
const cancelResetBtn = document.getElementById("cancel-reset-btn");
const completionOverlay = document.getElementById("completion-overlay");
const completionTitleEl = document.getElementById("completion-title"); 
const completionMessage = document.getElementById("completion-message");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const bootSequenceBtn = document.getElementById("boot-sequence-btn");
const bootModalOverlay = document.getElementById("boot-modal-overlay");
const bootModalCloseBtn = document.getElementById("boot-modal-close-btn");
const bootList = document.getElementById("boot-list");
const backgroundList = document.getElementById("background-list");

// State
let progress = {};
let completedDays = []; 
let bootStatus = { date: '', items: [] }; 
let backgroundStatus = { date: '', items: [] }; 
let weekCount = 1; // ADDED: Track weeks for Safe Mode
let activeTimer = null;
let restPeriodEndTime = null;

// LocalStorage Keys
const PROGRESS_KEY = "workoutSysProgress";
const COMPLETED_DAYS_KEY = "workoutSysCompletedDays"; 
const TIMER_END_KEY = "restPeriodEndTime";
const THEME_KEY = "workoutSysTheme";
const BOOT_KEY = "workoutSysBootStatus"; 
const BACKGROUND_KEY = "workoutSysBackgroundStatus";
const WEEK_COUNT_KEY = "workoutSysWeekCount"; // ADDED

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Theme Functions ---
function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.body.dataset.theme = savedTheme;
    const themeColor = savedTheme === 'light' ? '#f2ece7' : '#2d2a27';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

function toggleTheme() {
    const currentTheme = document.body.dataset.theme || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
    const themeColor = newTheme === 'light' ? '#f2ece7' : '#2d2a27';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

// --- Timer ---
function triggerHapticFeedback() { if ('vibrate' in navigator) { navigator.vibrate(50); } }

function clearTimerState() {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    timerDisplay.classList.add('hidden');
    localStorage.removeItem(TIMER_END_KEY);
    restPeriodEndTime = null;
}

function startOnScreenTimer(durationSeconds) {
    clearTimerState(); 
    if (durationSeconds <= 0) return; 
    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem(TIMER_END_KEY, restPeriodEndTime);
    let timeLeft = durationSeconds;
    timerDisplay.classList.remove('hidden');
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (timeLeft <= 0) { clearTimerState(); triggerHapticFeedback(); } 
        else { timeLeft--; }
    };
    updateTimer(); 
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem(TIMER_END_KEY);
    if (!endTime) { clearTimerState(); return; }
    const remainingTime = Math.round((parseInt(endTime, 10) - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); } 
    else { clearTimerState(); }
}

// --- Data Loading ---
function loadProgress() {
    try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } 
    catch (e) { progress = {}; }
}
function saveProgress() {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    updateProgressBars(); 
    updateCompletedSectionVisibility();
}
function loadCompletedDays() {
    try { completedDays = JSON.parse(localStorage.getItem(COMPLETED_DAYS_KEY)) || []; } 
    catch (e) { completedDays = []; }
}
function saveCompletedDays() {
    localStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(completedDays));
}
// ADDED: Load Week Count
function loadWeekCount() {
    const saved = localStorage.getItem(WEEK_COUNT_KEY);
    weekCount = saved ? parseInt(saved, 10) : 1;
}

// --- Boot/Background Logic (Abbreviated for brevity, same as before) ---
function loadBootStatus() {
    try {
        const saved = JSON.parse(localStorage.getItem(BOOT_KEY));
        const today = new Date().toDateString(); 
        bootStatus = (saved && saved.date === today) ? saved : { date: today, items: [] };
        if (bootStatus.date === today) saveBootStatus(); // Ensure date is saved
    } catch (e) { bootStatus = { date: new Date().toDateString(), items: [] }; }
    renderBootList();
    updateBootVisuals();
}
function saveBootStatus() { localStorage.setItem(BOOT_KEY, JSON.stringify(bootStatus)); updateBootVisuals(); }
function toggleBootItem(id) {
    bootStatus.items.includes(id) ? bootStatus.items = bootStatus.items.filter(i=>i!==id) : bootStatus.items.push(id);
    saveBootStatus(); renderBootList(); triggerHapticFeedback();
}
function updateBootVisuals() {
    const isComplete = bootStatus.items.length === bootData.length;
    bootSequenceBtn.classList.toggle('complete', isComplete);
    document.getElementById('boot-btn-text').textContent = isComplete ? "SYSTEM ONLINE" : "INITIALIZE BOOT SEQUENCE";
}
function renderBootList() {
    bootList.innerHTML = '';
    bootData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'boot-item';
        const isChecked = bootStatus.items.includes(item.id);
        li.innerHTML = `<div class="boot-checkbox ${isChecked?'checked':''}">${isChecked?'✓':''}</div><div class="boot-details"><div class="boot-label">${item.label}</div><div class="boot-meta">${item.details}</div></div><button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>`;
        li.addEventListener('click', (e) => { if(!e.target.closest('.info-btn')) toggleBootItem(item.id); });
        li.querySelector('.info-btn').addEventListener('click', (e) => { e.stopPropagation(); openInfoModal(item.label, item.instruction); });
        bootList.appendChild(li);
    });
}
function openBootModal() { bootModalOverlay.classList.remove("hidden"); bootModalOverlay.setAttribute('aria-hidden', 'false'); }
function closeBootModal() { bootModalOverlay.classList.add("hidden"); bootModalOverlay.setAttribute('aria-hidden', 'true'); }

function loadBackgroundStatus() {
    try {
        const saved = JSON.parse(localStorage.getItem(BACKGROUND_KEY));
        const today = new Date().toDateString(); 
        backgroundStatus = (saved && saved.date === today) ? saved : { date: today, items: [] };
        if (backgroundStatus.date === today) saveBackgroundStatus();
    } catch (e) { backgroundStatus = { date: new Date().toDateString(), items: [] }; }
    renderBackgroundList();
}
function saveBackgroundStatus() { localStorage.setItem(BACKGROUND_KEY, JSON.stringify(backgroundStatus)); }
function toggleBackgroundItem(id) {
    backgroundStatus.items.includes(id) ? backgroundStatus.items = backgroundStatus.items.filter(i=>i!==id) : backgroundStatus.items.push(id);
    saveBackgroundStatus(); renderBackgroundList(); triggerHapticFeedback();
}
function renderBackgroundList() {
    backgroundList.innerHTML = '';
    backgroundData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'boot-item';
        const isChecked = backgroundStatus.items.includes(item.id);
        li.innerHTML = `<div class="boot-checkbox ${isChecked?'checked':''}">${isChecked?'✓':''}</div><div class="boot-details"><div class="boot-label"><span class="background-category">[${item.category}]</span> ${item.label}</div><div class="boot-meta">${item.details}</div></div><button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>`;
        li.addEventListener('click', (e) => { if(!e.target.closest('.info-btn')) toggleBackgroundItem(item.id); });
        li.querySelector('.info-btn').addEventListener('click', (e) => { e.stopPropagation(); openInfoModal(item.label, item.instruction); });
        backgroundList.appendChild(li);
    });
}

function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+).*?s\s*rest/); 
    return match ? parseInt(match[1], 10) : 0;
}
function parseSets(details) {
    if (!details) return 1; 
    let match = details.match(/^(\d+)\s+sets/);
    if (!match) match = details.match(/^(\d+)\s+sets to Failure/i); // fix order
    if (!match) match = details.match(/^1\s+set of/i);
    return match ? parseInt(match[1], 10) : 1; 
}


// --- UI Update Functions ---
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn) => {
        if (btn.id === 'theme-toggle-btn') return; 
        const dataIndex = btn.dataset.day ? parseInt(btn.dataset.day, 10) : null; 
        if (dataIndex === null) return; 

        // Safe Mode Override for Calculation
        const isSafeMode = weekCount % 4 === 0;
        const dayData = workoutData[dataIndex];

        if (!dayData || !dayData.exercises || dayData.exercises.length === 0) { 
            btn.style.setProperty('--progress', '0%'); 
            return; 
        }
        
        let totalSetsForDay = 0, completedSetsForDay = 0;
        
        // Use logic consistent with Safe Mode
        const getSets = (details) => isSafeMode ? 1 : parseSets(details);

        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSetsForDay += getSets(ex.details); completedSetsForDay += Math.min(progress[id] || 0, getSets(ex.details)); });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSetsForDay += getSets(dayData.abFinisher.details); completedSetsForDay += Math.min(progress[id] || 0, getSets(dayData.abFinisher.details)); }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSetsForDay += getSets(dayData.cardio.details); completedSetsForDay += Math.min(progress[id] || 0, getSets(dayData.cardio.details)); }
        
        const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

function updateDayButtonCompletionMarks() {
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        const dayIndex = parseInt(btn.dataset.day, 10);
        if (!isNaN(dayIndex)) { 
             if (completedDays.includes(dayIndex)) {
                btn.classList.add('day-complete');
            } else {
                btn.classList.remove('day-complete');
            }
        }
    });
}

function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// --- Event Handlers ---
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount = currentCompleted; 
    let shouldStartTimer = false; 

    if (direction === 'increment') {
        const potentialCount = Math.min(totalSets, currentCompleted + 1);
        if (potentialCount > currentCompleted) {
            newCompletedCount = potentialCount; 
            shouldStartTimer = true; 
            triggerHapticFeedback();
            const currentActive = document.querySelector('.exercise-active');
            if (currentActive && currentActive !== card) { currentActive.classList.remove('exercise-active'); }
            card.classList.add('exercise-active');
            if (newCompletedCount < totalSets && !wasFullyCompleted) { 
                let previousSibling = card.previousElementSibling;
                let titleElement = null;
                while (previousSibling) {
                    if (previousSibling.classList.contains('category-title')) { titleElement = previousSibling; break; }
                    previousSibling = previousSibling.previousElementSibling;
                }
                if (titleElement) titleElement.after(card);
            }
        }
    } else { // 'decrement'
        const potentialCount = Math.max(0, currentCompleted - 1);
        if (potentialCount < currentCompleted) {
            newCompletedCount = potentialCount; 
            if (card.classList.contains('exercise-active') && activeTimer) clearTimerState();
        }
    }

    if (newCompletedCount !== currentCompleted) {
        progress[progressId] = newCompletedCount;
        saveProgress(); 
    }
    
    if (shouldStartTimer && newCompletedCount < totalSets) {
        const exerciseDetailsText = card.querySelector('.exercise-details p')?.textContent || '';
        const restTime = parseRestTime(exerciseDetailsText);
        startOnScreenTimer(restTime);
    } else if (shouldStartTimer && newCompletedCount >= totalSets) {
        clearTimerState();
    }

    const isNowFullyCompleted = newCompletedCount >= totalSets;
    updateCardVisuals(card, progressId, totalSets); 

    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card); 
        checkDayCompletion(); 
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card);
        const dayIndex = parseInt(card.closest('[data-day]')?.dataset.day ?? document.querySelector('.day-btn.active')?.dataset.day ?? -1, 10);
        if (dayIndex !== -1 && completedDays.includes(dayIndex)) {
            completedDays = completedDays.filter(d => d !== dayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks();
        }
    }
}

function animateAndMoveToCompleted(card) {
    card.classList.add('reordering');
    card.classList.remove('exercise-active'); 
    removeCardListeners(card); 
    setTimeout(() => {
        completedList.appendChild(card);
        card.classList.remove('reordering');
        addCardListeners(card, true); 
        updateCompletedSectionVisibility();
    }, 300);
}

function moveFromCompletedToActive(card) {
    removeCardListeners(card); 
    const cardTypeClass = card.classList.contains('exercise-item') ? 'exercise-item' : card.classList.contains('ab-finisher') ? 'ab-finisher' : 'cardio-session';
    let targetTitleElement = null;
    let sectionTitleText = "";
    let sectionOrder = 0; 

    if (cardTypeClass === 'exercise-item') { sectionTitleText = "Main Workout"; sectionOrder = 0; } 
    else if (cardTypeClass === 'ab-finisher') { sectionTitleText = "Ab Finisher"; sectionOrder = 1; } 
    else if (cardTypeClass === 'cardio-session') { sectionTitleText = "Post-Workout Cardio"; sectionOrder = 2; }

    const titles = exerciseList.querySelectorAll('.category-title');
    titles.forEach(title => { if (title.textContent === sectionTitleText) targetTitleElement = title; });

    if (!targetTitleElement) {
        targetTitleElement = document.createElement("h3");
        targetTitleElement.className = "category-title";
        targetTitleElement.textContent = sectionTitleText;
        let anchorElement = null;
        if (sectionOrder === 1) { 
            const mainItems = exerciseList.querySelectorAll('.exercise-item');
            if (mainItems.length > 0) anchorElement = mainItems[mainItems.length - 1];
            else if (titles.length > 0 && titles[0].textContent === "Main Workout") anchorElement = titles[0]; 
        } else if (sectionOrder === 2) { 
            const abItems = exerciseList.querySelectorAll('.ab-finisher');
            if (abItems.length > 0) anchorElement = abItems[abItems.length - 1];
            else if (titles.length > 0) titles.forEach(t => { if(t.textContent === "Ab Finisher") anchorElement = t; });
            if (!anchorElement) { 
                 const mainItems = exerciseList.querySelectorAll('.exercise-item');
                 if (mainItems.length > 0) anchorElement = mainItems[mainItems.length - 1];
            }
        }
        if (anchorElement) anchorElement.after(targetTitleElement);
        else if (sectionOrder === 0) exerciseList.prepend(targetTitleElement); 
        else exerciseList.appendChild(targetTitleElement); 
    }

    if (targetTitleElement) targetTitleElement.after(card);
    else exerciseList.appendChild(card);

    addCardListeners(card, false); 
    updateCompletedSectionVisibility();
}

function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    
    // Logic: A day is "complete" if all exercises have progress >= totalSets
    // Safe Mode Note: 'totalSets' here will be 1 if Safe Mode is active (handled by createExerciseItem logic)
    
    const allItems = [
        ...(dayData.exercises ? dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })) : []), 
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (!allItems || allItems.length === 0) return; 

    // --- MODIFIED: Ensure check uses Safe Mode logic ---
    const isSafeMode = weekCount % 4 === 0;
    const isDayComplete = allItems.every(item => {
        const totalSets = isSafeMode ? 1 : parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        if (!completedDays.includes(activeDayIndex)) {
            completedDays.push(activeDayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks(); 
        }

        const validDayIndices = workoutData.map((d, i) => (d.exercises && d.exercises.length > 0) ? i : -1).filter(i => i !== -1);
        const isWeekComplete = validDayIndices.every(i => completedDays.includes(i));

        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        if (isWeekComplete) {
            setTimeout(() => {
                // Increment week count on reset
                weekCount++;
                localStorage.setItem(WEEK_COUNT_KEY, weekCount);
                
                progress = {};
                completedDays = []; 
                localStorage.removeItem(PROGRESS_KEY);
                localStorage.removeItem(COMPLETED_DAYS_KEY); 
                localStorage.removeItem(TIMER_END_KEY);
                location.reload(); 
            }, 5000);
        } else { 
            setTimeout(() => completionOverlay.classList.add('hidden'), 4000); 
        }
    }
}

// --- DOM Listener Management ---
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);
    if (!isCompleted) {
         card.addEventListener('click', card._clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (card.parentElement === exerciseList) handleSeriesUpdate(card, progressId, totalSets, 'increment');
         });
    }
    card.addEventListener('contextmenu', card._contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); });
    
    let longPressTimeoutId = null;
    card.addEventListener('touchstart', card._touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = setTimeout(() => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); }, LONG_PRESS_DURATION);
    }, { passive: false });
    card.addEventListener('touchend', card._touchEndHandler = () => { if (longPressTimeoutId) clearTimeout(longPressTimeoutId); });
    card.addEventListener('touchcancel', card._touchEndHandler);
    card.addEventListener('touchmove', card._touchMoveHandler = () => { if (longPressTimeoutId) clearTimeout(longPressTimeoutId); });

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        infoBtn.addEventListener('click', infoBtn._infoClickHandler = (e) => {
            e.stopPropagation();
            const exerciseName = card.querySelector('h3').textContent;
            // Parse ID to find data
            const dayNum = parseInt(progressId.match(/day(\d+)/)[1], 10);
            const type = progressId.match(/-([a-z]+)-/)[1];
            const index = parseInt(progressId.match(/-(\d+)$/)[1], 10);
            const dayData = workoutData.find(d => d.day === dayNum);
            let exerciseData;
            if (dayData) {
                 if (type === 'exercise') exerciseData = dayData.exercises[index];
                 else if (type === 'ab') exerciseData = dayData.abFinisher;
                 else if (type === 'cardio') exerciseData = dayData.cardio;
            }
            if (exerciseData) openInfoModal(exerciseData.name, exerciseData.instructions);
        });
    }
}

function removeCardListeners(card) {
    if (card._clickHandler) card.removeEventListener('click', card._clickHandler);
    if (card._contextHandler) card.removeEventListener('contextmenu', card._contextHandler);
    if (card._touchStartHandler) card.removeEventListener('touchstart', card._touchStartHandler);
    if (card._touchEndHandler) { card.removeEventListener('touchend', card._touchEndHandler); card.removeEventListener('touchcancel', card._touchEndHandler); }
    if (card._touchMoveHandler) card.removeEventListener('touchmove', card._touchMoveHandler);
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._infoClickHandler) infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
    card._clickHandler = null; card._contextHandler = null; card._touchStartHandler = null; card._touchEndHandler = null; card._touchMoveHandler = null;
    if (infoBtn) infoBtn._infoClickHandler = null;
}

const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    
    // --- ADDED: Safe Mode Logic ---
    const isSafeMode = weekCount % 4 === 0;
    const totalSets = isSafeMode ? 1 : parseSets(exercise.details);
    // --- END ADDED ---
    
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    li.innerHTML = `<span class="set-counter">0/${totalSets}</span><div class="exercise-details"><h3>${exercise.name}</h3><p>${exercise.details}</p></div><button class="info-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>`;

    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;
    addCardListeners(li, isInitiallyCompleted);
    updateCardVisuals(li, progressId, totalSets);
    return li;
};

const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;
    const activeItems = (Array.isArray(items) ? items : [items]).filter((item, i) => {
        const progressId = `day${dayNum}-${idType}-${i}`;
        const isSafeMode = weekCount % 4 === 0;
        const totalSets = isSafeMode ? 1 : parseSets(item.details);
        return (progress[progressId] || 0) < totalSets;
    });

    let sectionTitleElement = null;
    if (activeItems.length > 0) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement);
    }
    const elements = (Array.isArray(items) ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum)) : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);
    elements.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) completedList.appendChild(el);
        else if (sectionTitleElement) exerciseList.appendChild(el);
        else exerciseList.appendChild(el);
    });
};

function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data:", dayIndex); return; }

    const isSafeMode = weekCount % 4 === 0;
    
    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = isSafeMode ? `// SAFE MODE: DELOAD WEEK (1 SET ONLY)` : `// EST. DURATION: ${dayData.duration.toUpperCase()}`;

    // Apply Safe Mode Visuals to Container
    if (isSafeMode) {
        document.body.classList.add('safe-mode');
    } else {
        document.body.classList.remove('safe-mode');
    }

    exerciseList.innerHTML = ""; 
    completedList.innerHTML = ""; 

    if (!dayData.exercises || dayData.exercises.length === 0) { 
        workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title || 'Rest Day'}`; 
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON RECOVERY.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }
    updateCompletedSectionVisibility(); 
}

function setActiveDay(dayIndex) { 
    document.querySelectorAll(".day-btn").forEach(btn => { if (btn.id !== 'theme-toggle-btn') btn.classList.remove("active"); });
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) currentActive.classList.remove('exercise-active');
    clearTimerState(); 
    renderWorkout(dayIndex); 
}

function init() {
    loadTheme(); loadProgress(); loadCompletedDays(); loadBootStatus(); loadBackgroundStatus(); loadWeekCount();
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkTimerOnFocus(); });
    const dayLabels = ["M", "T", "W", "T", "F", "S", "S"]; 
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const span = document.createElement("span"); span.textContent = dayLabels[index] || `D${index+1}`; btn.appendChild(span);
        btn.dataset.day = index; 
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    themeToggleBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><clipPath id="half-clip"><rect x="0" y="0" width="10" height="20" /></clipPath></defs><circle cx="10" cy="10" r="9" class="svg-bg-circle"/><circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/></svg>`;
    themeToggleBtn.addEventListener("click", toggleTheme); 
    bootSequenceBtn.addEventListener("click", openBootModal);
    bootModalCloseBtn.addEventListener("click", closeBootModal);
    bootModalOverlay.addEventListener("click", e => { if (e.target === bootModalOverlay) closeBootModal(); });
    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {}; completedDays = []; weekCount = 1; // Explicit manual reset resets week count too
        saveProgress(); saveCompletedDays(); localStorage.setItem(WEEK_COUNT_KEY, weekCount);
        clearTimerState(); 
        renderWorkout(parseInt(document.querySelector(".day-btn.active")?.dataset.day || 0, 10)); 
        updateDayButtonCompletionMarks(); 
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    
    const today = new Date().getDay(); const initialDayIndex = today === 0 ? 6 : today - 1; 
    setActiveDay(initialDayIndex); updateDayButtonCompletionMarks(); checkTimerOnFocus(); 
}
init();
