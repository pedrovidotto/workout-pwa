// --- Boot Sequence Data ---
const bootData = [
    { id: 'hang', label: 'Passive Decompress: Dead Hang', details: '2 sets x 30 seconds', instruction: "1. Find a pull-up bar.\n2. Grip tightly and let your body hang loose.\n3. Relax your shoulders and let gravity decompress your spine.\n4. Hold for 30 seconds. Repeat twice." },
    { id: 'camel', label: 'Fluid Pump: Cat-Camel', details: '10 reps, SLOWLY', instruction: "1. Get on hands and knees.\n2. Arch your back up (Cat) while exhaling.\n3. Dip your back down (Camel) while inhaling.\n4. Move slowly to lubricate the spine." },
    { id: 'stretch', label: 'Mobilize: World’s Greatest', details: '3 reps per side', instruction: "1. Lunge forward with one leg.\n2. Place opposite hand on the floor.\n3. Rotate your chest and reach free arm to the sky.\n4. Return and straighten front leg for a hamstring stretch." },
    { id: 'hops', label: 'Ignite: Pogo Hops', details: '2 sets x 15 seconds', instruction: "1. Stand with knees slightly bent.\n2. Hop up and down using only your ankles/calves.\n3. Keep ground contact time minimal.\n4. Wake up the fast-twitch fibers." }
];

// --- ADDED: Background Process Data ---
const backgroundData = [
    { id: 'creatine', category: 'INPUT', label: 'Creatine Monohydrate', details: '5g Daily', instruction: "Essential for ATP regeneration and brain function. Take with water or post-workout carbs." },
    { id: 'algae', category: 'INPUT', label: 'Algae Oil (DHA/EPA)', details: 'Daily Dose', instruction: "Critical brain fuel for vegetarians. Supports cognitive speed and reduces inflammation." },
    { id: 'social', category: 'NETWORK', label: 'Social Anchor', details: '1 Interaction', instruction: "One meaningful human interaction before 12:00 PM to regulate circadian rhythm and mood." },
    { id: 'optic', category: 'OPTIC', label: 'Morning Walk', details: 'Outdoor Light', instruction: "Get forward optic flow (walking) and sunlight within 30 minutes of waking to set sleep clock." }
];
// --- END ADDED ---

// Workout data - Refined for 2x/Week Frequency on Arms & Calves
const workoutData = [
  { // DAY 1: Chest Crusher & Triceps
    "day": 1,
    "title": "Chest Crusher & Triceps", 
    "duration": "60-75 minutes", 
    "exercises": [ 
      { 
        "name": "Barbell Bench Press", 
        "details": "4 sets of 6-10 reps | 90-120s rest", 
        "instructions": "1. Lie flat on the bench, feet firm on the ground.\n2. Grip the bar slightly wider than shoulder-width.\n3. Lower the bar to your mid-chest in a controlled manner.\n4. Press the bar back up powerfully, stopping just short of locking elbows." 
      },
      { 
        "name": "Incline Dumbbell Press", 
        "details": "3 sets of 8-12 reps | 90s rest", 
        "instructions": "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells starting near your upper chest.\n3. Press the weights up in an arc until arms are almost extended.\n4. Lower the dumbbells slowly, feeling a stretch in your upper chest." 
      },
      { 
        "name": "Weighted Dips (Chest Focus)", 
        "details": "3 sets to Failure (aim 8-15) | 75s rest", 
        "instructions": "1. Use parallel bars, add weight if needed.\n2. Lean your torso forward significantly.\n3. Lower yourself until shoulders are slightly below elbows, feeling a chest stretch.\n4. Press back up, focusing on squeezing the chest." 
      },
      { 
        "name": "Cable Crossover (High-to-Low)", 
        "details": "3 sets of 12-15 reps | 60s rest", 
        "instructions": "1. Set pulleys to a high position.\n2. Grab handles, step slightly forward.\n3. With a slight bend in elbows, bring hands down and together in front of your lower chest/waist.\n4. Squeeze chest hard at the peak contraction.\n5. Control the return, feeling a stretch." 
      },
      {
        "name": "Cable Rope Pushdowns",
        "details": "4 sets of 10-15 reps | 60s rest", 
        "instructions": "1. Attach a rope to a high pulley.\n2. Keep elbows tucked in close to your body.\n3. Extend your arms fully, squeezing the triceps at the bottom.\n4. Spread the rope handles apart slightly at the end of the movement.\n5. Control the negative."
      }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms." }, 
    "cardio": { "name": "15 minutes moderate cardio", "details": "1 set of 15 minutes", "instructions": "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation." } 
  },
  { // DAY 2: Back & Biceps
    "day": 2,
    "title": "Back & Biceps",
    "duration": "55-65 minutes", 
    "exercises": [
      { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom." },
      { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control." },
      { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction." },
      { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps." },
      {
        "name": "Dumbbell Hammer Curls",
        "details": "3 sets of 10-15 reps | 60s rest",
        "instructions": "1. Stand holding dumbbells with palms facing your body (neutral grip).\n2. Keep elbows pinned to your sides.\n3. Curl the dumbbells up towards your shoulders.\n4. Squeeze the biceps and brachialis at the top.\n5. Lower under control."
      }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: Quads & Calves
    "day": 3,
    "title": "Quads & Calves",
    "duration": "60-75 minutes", 
    "exercises": [
      { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels." },
      { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees." },
      { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel." },
      { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it." },
      { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4: Chest & Shoulders
    "day": 4,
    "title": "Chest & Shoulders", 
    "duration": "60-70 minutes", 
    "exercises": [
      { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height." },
      { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative." },
      { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts." },
      { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "1. Lie flat on the bench.\n2. Press the dumbbells up until your arms are extended but not locked.\n3. Lower slowly, feeling a stretch in your chest." },
      { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to chest height.\n2. Step forward and bring the handles together in a wide arc.\n3. Squeeze your chest hard at the peak of the movement." }
    ],
    "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs." },
    "cardio": null
  },
  { // DAY 5: Biceps & Triceps
    "day": 5,
    "title": "Biceps & Triceps", 
    "duration": "45-55 minutes", 
    "exercises": [
      { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps." },
      { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top." },
      { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you." },
      { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip." }
    ],
    "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet." },
    "cardio": { "name": "20 minutes moderate cardio", "details": "1 set of 20 minutes", "instructions": "Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact." }
  },
  { // DAY 6: Glutes & Hamstrings
    "day": 6,
    "title": "Glutes & Hamstrings", 
    "duration": "65-75 minutes", 
    "exercises": [
      { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start." },
      { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked." },
      { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set)", "instructions": "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative." },
      { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in." },
      { 
        "name": "45-Degree Kickbacks (Cable/Band)", 
        "details": "3 sets of 15-20 reps (per leg) | 45s rest", 
        "instructions": "1. Attach an ankle strap to a low cable pulley or use a resistance band.\n2. Stand facing the machine/anchor point.\n3. Keeping your leg mostly straight, kick it back and slightly out to the side (about 45 degrees).\n4. Focus on squeezing your upper glute at the peak of the movement.\n5. Control the return to the starting position." 
      },
      {
        "name": "Seated Calf Raises",
        "details": "4 sets of 15-20 reps | 45s rest",
        "instructions": "1. Position yourself on the machine with pads on your lower thighs.\n2. Lower the weight slowly to get a deep stretch in your calves.\n3. Press up onto the balls of your feet as high as possible.\n4. Squeeze the calves at the top. Focus on the soleus muscle."
      }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 7: Back, Shoulders & Traps
    "day": 7,
    "title": "Back, Shoulders & Traps", 
    "duration": "45-55 minutes", 
    "exercises": [
      { "name": "Machine Lat Pulldown (Neutral Grip)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Use a machine with handles allowing a neutral grip (palms facing each other).\n2. Pull the handles down towards your chest, driving your elbows down and back.\n3. Squeeze your lats at the bottom.\n4. Control the ascent, feeling a stretch." },
      { "name": "Seated Cable Row (Wide Grip)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Use a wide bar attachment on a seated cable row machine.\n2. Pull the bar towards your mid-torso, keeping your chest up and back straight.\n3. Focus on squeezing your upper back muscles together.\n4. Slowly return to the starting position." },
      { "name": "Dumbbell Lateral Raise", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "1. Stand with dumbbells at your sides, palms facing in.\n2. Raise the dumbbells out to your sides with a slight bend in your elbows.\n3. Lead with your elbows, keeping your pinkies slightly higher than your thumbs.\n4. Stop when your arms are parallel to the floor.\n5. Lower slowly." },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "1. Set a rope attachment on a cable pulley at head height.\n2. Grab the ropes with an overhand grip and step back.\n3. Pull the ropes towards your face, aiming your hands towards your ears.\n4. Squeeze your rear delts and upper back at the peak.\n5. Control the return." },
      { "name": "Dumbbell Shrugs", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Stand holding heavy dumbbells at your sides.\n2. Elevate your shoulders straight up towards your ears.\n3. Do not roll your shoulders forward or backward.\n4. Squeeze your traps hard at the top.\n5. Lower slowly." }
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
const backgroundList = document.getElementById("background-list"); // ADDED

// State
let progress = {};
let completedDays = []; 
let bootStatus = { date: '', items: [] }; 
let backgroundStatus = { date: '', items: [] }; // ADDED: Background status
let longPressTimer;
const LONG_PRESS_DURATION = 500;
let activeTimer = null;
let restPeriodEndTime = null;

// LocalStorage Keys
const PROGRESS_KEY = "workoutSysProgress";
const COMPLETED_DAYS_KEY = "workoutSysCompletedDays"; 
const TIMER_END_KEY = "restPeriodEndTime";
const THEME_KEY = "workoutSysTheme";
const BOOT_KEY = "workoutSysBootStatus"; 
const BACKGROUND_KEY = "workoutSysBackgroundStatus"; // ADDED

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

// --- Timer, Haptic Functions ---
function triggerHapticFeedback() { if ('vibrate' in navigator) { navigator.vibrate(50); } }

function clearTimerState() {
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
    }
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

        if (timeLeft <= 0) {
            clearTimerState(); 
            triggerHapticFeedback();
        } else {
            timeLeft--;
        }
    };

    updateTimer(); 
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem(TIMER_END_KEY);
    if (!endTime) {
        clearTimerState(); 
        return;
    }

    const remainingTime = Math.round((parseInt(endTime, 10) - Date.now()) / 1000);

    if (remainingTime > 0) {
        startOnScreenTimer(remainingTime); 
    } else {
        clearTimerState();
    }
}


// --- Core & Helper Functions ---
function loadProgress() {
    try {
        const savedProgress = localStorage.getItem(PROGRESS_KEY);
        progress = savedProgress ? JSON.parse(savedProgress) : {};
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        updateProgressBars(); 
        updateCompletedSectionVisibility();
    } catch (e) { console.error("Could not save progress:", e); }
}

function loadCompletedDays() {
    try {
        const savedDays = localStorage.getItem(COMPLETED_DAYS_KEY);
        completedDays = savedDays ? JSON.parse(savedDays) : [];
    } catch (e) { console.error("Could not load completed days:", e); completedDays = []; }
}

function saveCompletedDays() {
    try {
        localStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(completedDays));
    } catch (e) { console.error("Could not save completed days:", e); }
}

// --- Boot Sequence Logic ---
function loadBootStatus() {
    try {
        const saved = JSON.parse(localStorage.getItem(BOOT_KEY));
        const today = new Date().toDateString(); 
        if (saved && saved.date === today) {
            bootStatus = saved;
        } else {
            bootStatus = { date: today, items: [] }; 
            saveBootStatus();
        }
    } catch (e) { 
        bootStatus = { date: new Date().toDateString(), items: [] }; 
    }
    renderBootList();
    updateBootVisuals();
}

function saveBootStatus() {
    localStorage.setItem(BOOT_KEY, JSON.stringify(bootStatus));
    updateBootVisuals();
}

function toggleBootItem(id) {
    if (bootStatus.items.includes(id)) {
        bootStatus.items = bootStatus.items.filter(i => i !== id);
    } else {
        bootStatus.items.push(id);
    }
    saveBootStatus();
    renderBootList(); 
    triggerHapticFeedback();
}

function updateBootVisuals() {
    const isComplete = bootStatus.items.length === bootData.length;
    if (isComplete) {
        bootSequenceBtn.classList.add('complete');
        document.getElementById('boot-btn-text').textContent = "SYSTEM ONLINE";
    } else {
        bootSequenceBtn.classList.remove('complete');
        document.getElementById('boot-btn-text').textContent = "INITIALIZE BOOT SEQUENCE";
    }
}

function renderBootList() {
    bootList.innerHTML = '';
    bootData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'boot-item';
        
        const isChecked = bootStatus.items.includes(item.id);
        
        li.innerHTML = `
            <div class="boot-checkbox ${isChecked ? 'checked' : ''}">
                ${isChecked ? '✓' : ''}
            </div>
            <div class="boot-details">
                <div class="boot-label">${item.label}</div>
                <div class="boot-meta">${item.details}</div>
            </div>
            <button class="info-btn" aria-label="Open instruction for ${item.label}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </button>
        `;
        
        li.addEventListener('click', (e) => {
            if (e.target.closest('.info-btn')) return;
            toggleBootItem(item.id)
        });

        const infoBtn = li.querySelector('.info-btn');
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            openInfoModal(item.label, item.instruction);
        });

        bootList.appendChild(li);
    });
}

function openBootModal() {
    bootModalOverlay.classList.remove("hidden");
    bootModalOverlay.setAttribute('aria-hidden', 'false');
}
function closeBootModal() {
    bootModalOverlay.classList.add("hidden");
    bootModalOverlay.setAttribute('aria-hidden', 'true');
}

// --- ADDED: Background Process Logic (similar to Boot Sequence) ---
function loadBackgroundStatus() {
    try {
        const saved = JSON.parse(localStorage.getItem(BACKGROUND_KEY));
        const today = new Date().toDateString(); 
        if (saved && saved.date === today) {
            backgroundStatus = saved;
        } else {
            backgroundStatus = { date: today, items: [] }; 
            saveBackgroundStatus();
        }
    } catch (e) { 
        backgroundStatus = { date: new Date().toDateString(), items: [] }; 
    }
    renderBackgroundList();
}

function saveBackgroundStatus() {
    localStorage.setItem(BACKGROUND_KEY, JSON.stringify(backgroundStatus));
}

function toggleBackgroundItem(id) {
    if (backgroundStatus.items.includes(id)) {
        backgroundStatus.items = backgroundStatus.items.filter(i => i !== id);
    } else {
        backgroundStatus.items.push(id);
    }
    saveBackgroundStatus();
    renderBackgroundList(); 
    triggerHapticFeedback();
}

function renderBackgroundList() {
    backgroundList.innerHTML = '';
    backgroundData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'boot-item'; // Reuse boot styles
        
        const isChecked = backgroundStatus.items.includes(item.id);
        
        li.innerHTML = `
            <div class="boot-checkbox ${isChecked ? 'checked' : ''}">
                ${isChecked ? '✓' : ''}
            </div>
            <div class="boot-details">
                <div class="boot-label"><span class="background-category">[${item.category}]</span> ${item.label}</div>
                <div class="boot-meta">${item.details}</div>
            </div>
            <button class="info-btn" aria-label="Open instruction for ${item.label}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </button>
        `;
        
        li.addEventListener('click', (e) => {
            if (e.target.closest('.info-btn')) return;
            toggleBackgroundItem(item.id)
        });

        const infoBtn = li.querySelector('.info-btn');
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            openInfoModal(item.label, item.instruction);
        });

        backgroundList.appendChild(li);
    });
}
// --- END ADDED ---


function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+).*?s\s*rest/); 
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1; 
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of \d+\s+minutes/i);
     if (match) return 1;
    console.warn("Could not parse sets from details:", details, "Defaulting to 1");
    return 1; 
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

        const dayData = workoutData[dataIndex];

        if (!dayData || !dayData.exercises || dayData.exercises.length === 0) { 
            btn.style.setProperty('--progress', '0%'); 
            return; 
        }
        
        let totalSetsForDay = 0, completedSetsForDay = 0;
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSetsForDay += parseSets(ex.details); completedSetsForDay += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSetsForDay += parseSets(dayData.abFinisher.details); completedSetsForDay += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSetsForDay += parseSets(dayData.cardio.details); completedSetsForDay += progress[id] || 0; }
        
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

// --- Event Handlers & Interaction ---
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
            if (currentActive && currentActive !== card) { 
                currentActive.classList.remove('exercise-active');
            }
            card.classList.add('exercise-active');
             
            if (newCompletedCount < totalSets && !wasFullyCompleted) { 
                let previousSibling = card.previousElementSibling;
                let titleElement = null;
                while (previousSibling) {
                    if (previousSibling.classList.contains('category-title')) {
                        titleElement = previousSibling;
                        break;
                    }
                    previousSibling = previousSibling.previousElementSibling;
                }
                if (titleElement) {
                    titleElement.after(card);
                }
            }
        }
    } else { // 'decrement'
        const potentialCount = Math.max(0, currentCompleted - 1);
        if (potentialCount < currentCompleted) {
            newCompletedCount = potentialCount; 
            if (card.classList.contains('exercise-active') && activeTimer) {
               clearTimerState();
            }
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
    } 
    else if (shouldStartTimer && newCompletedCount >= totalSets) {
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

    const cardTypeClass = card.classList.contains('exercise-item') ? 'exercise-item'
                        : card.classList.contains('ab-finisher') ? 'ab-finisher'
                        : 'cardio-session';
    
    let targetTitleElement = null;
    let sectionTitleText = "";
    let sectionOrder = 0; 

    if (cardTypeClass === 'exercise-item') {
        sectionTitleText = "Main Workout";
        sectionOrder = 0;
    } else if (cardTypeClass === 'ab-finisher') {
        sectionTitleText = "Ab Finisher";
        sectionOrder = 1;
    } else if (cardTypeClass === 'cardio-session') {
        sectionTitleText = "Post-Workout Cardio";
        sectionOrder = 2;
    }

    const titles = exerciseList.querySelectorAll('.category-title');
    titles.forEach(title => {
        if (title.textContent === sectionTitleText) {
            targetTitleElement = title;
        }
    });

    if (!targetTitleElement) {
        targetTitleElement = document.createElement("h3");
        targetTitleElement.className = "category-title";
        targetTitleElement.textContent = sectionTitleText;
        
        let anchorElement = null;
        if (sectionOrder === 1) { 
            const mainItems = exerciseList.querySelectorAll('.exercise-item');
            if (mainItems.length > 0) {
                anchorElement = mainItems[mainItems.length - 1];
            } else if (titles.length > 0 && titles[0].textContent === "Main Workout") {
                 anchorElement = titles[0]; 
            }
        } else if (sectionOrder === 2) { 
            const abItems = exerciseList.querySelectorAll('.ab-finisher');
            if (abItems.length > 0) {
                anchorElement = abItems[abItems.length - 1];
            } else if (titles.length > 0) { 
                 titles.forEach(t => { 
                    if(t.textContent === "Ab Finisher") anchorElement = t; 
                });
            }
            if (!anchorElement) { 
                 const mainItems = exerciseList.querySelectorAll('.exercise-item');
                 if (mainItems.length > 0) anchorElement = mainItems[mainItems.length - 1];
            }
        }
        
        if (anchorElement) {
            anchorElement.after(targetTitleElement);
        } else if (sectionOrder === 0) {
            exerciseList.prepend(targetTitleElement); 
        } else {
            exerciseList.appendChild(targetTitleElement); 
        }
    }

    if (targetTitleElement) {
        targetTitleElement.after(card);
    } else {
        exerciseList.appendChild(card);
        console.warn("Could not find or create correct section title, appending card to end.");
    }

    addCardListeners(card, false); 
    updateCompletedSectionVisibility();
}

// --- Completion Celebration ---
function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    const allItems = [
        ...(dayData.exercises ? dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })) : []), 
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (!allItems || allItems.length === 0) return; 

    const isDayComplete = allItems.every(item => {
        const totalSets = parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        if (!completedDays.includes(activeDayIndex)) {
            completedDays.push(activeDayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks(); 
        }

        const validDayIndices = workoutData
            .map((d, i) => (d.exercises && d.exercises.length > 0) ? i : -1)
            .filter(i => i !== -1);

        const isWeekComplete = validDayIndices.every(i => completedDays.includes(i));

        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        if (isWeekComplete) {
            setTimeout(() => {
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


// --- DOM Rendering & Listener Management ---
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (card.parentElement === exerciseList) { 
                handleSeriesUpdate(card, progressId, totalSets, 'increment');
            }
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler;
    }

    const contextHandler = (e) => {
        e.preventDefault();
        handleSeriesUpdate(card, progressId, totalSets, 'decrement');
    };
    card.addEventListener('contextmenu', contextHandler);
    card._contextHandler = contextHandler;

    let longPressTimeoutId = null;
    const touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = setTimeout(() => {
            e.preventDefault();
            handleSeriesUpdate(card, progressId, totalSets, 'decrement');
            longPressTimeoutId = null;
        }, LONG_PRESS_DURATION);
    };
     const clearLongPress = () => {
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = null;
    };

    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress);
    card.addEventListener('touchmove', clearLongPress); 

    card._touchStartHandler = touchStartHandler;
    card._touchEndHandler = clearLongPress; 
    card._touchMoveHandler = clearLongPress;

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            const exerciseName = card.querySelector('h3').textContent;
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
            if (exerciseData) {
                openInfoModal(exerciseData.name, exerciseData.instructions);
            } else {
                 console.error("Could not find exercise data for modal:", progressId);
            }
        };
        if (infoBtn._infoClickHandler) {
            infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        }
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler;
    }
}


function removeCardListeners(card) {
    if (card._clickHandler) card.removeEventListener('click', card._clickHandler);
    if (card._contextHandler) card.removeEventListener('contextmenu', card._contextHandler);
    if (card._touchStartHandler) card.removeEventListener('touchstart', card._touchStartHandler);
    if (card._touchEndHandler) {
         card.removeEventListener('touchend', card._touchEndHandler);
         card.removeEventListener('touchcancel', card._touchEndHandler); 
    }
    if (card._touchMoveHandler) card.removeEventListener('touchmove', card._touchMoveHandler);

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._infoClickHandler) {
        infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
    }
    card._clickHandler = null; card._contextHandler = null;
    card._touchStartHandler = null; card._touchEndHandler = null; card._touchMoveHandler = null;
    if (infoBtn) infoBtn._infoClickHandler = null;
}


const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    li.innerHTML = `
        <span class="set-counter">0/${totalSets}</span>
        <div class="exercise-details">
            <h3>${exercise.name}</h3>
            <p>${exercise.details}</p>
        </div>
        <button class="info-btn" aria-label="Open exercise info for ${exercise.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </button>`;

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
        const totalSets = parseSets(item.details);
        const completedSets = progress[progressId] || 0;
        return completedSets < totalSets;
    });

    let sectionTitleElement = null;
    if (activeItems.length > 0) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement);
    }

    const elements = (Array.isArray(items)
        ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum))
        : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);

    elements.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) {
            completedList.appendChild(el); 
        } else {
             if (sectionTitleElement) {
                exerciseList.appendChild(el); 
             } else {
                 exerciseList.appendChild(el); 
             }
        }
    });
};


function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;

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
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        btn.classList.remove("active")
    });
    
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) {
        currentActive.classList.remove('exercise-active');
    }
    
    clearTimerState(); 
    
    renderWorkout(dayIndex); 
}

// --- Modal Functions --- 
function openInfoModal(title, instructions) { 
    infoModalOverlay.classList.remove("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'false');
    infoModalTitle.textContent = title; 
    infoModalInstructions.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = instructions || "No instructions available."; 
    infoModalInstructions.appendChild(p);
}
function closeInfoModal() { 
    infoModalOverlay.classList.add("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'true');
}
function openResetModal() { 
    resetModalOverlay.classList.remove("hidden");
    resetModalOverlay.setAttribute('aria-hidden', 'false');
}
function closeResetModal() { 
    resetModalOverlay.classList.add("hidden");
    resetModalOverlay.setAttribute('aria-hidden', 'true');
}


// --- App Initialization ---
function init() {
    loadTheme(); 
    loadProgress();
    loadCompletedDays(); 
    loadBootStatus(); 
    loadBackgroundStatus(); // ADDED
    
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });

    const dayLabels = ["M", "T", "W", "T", "F", "S", "S"]; 
    workoutData.forEach((day, index) => {
        const label = dayLabels[index] || `D${index + 1}`; 
        
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = label; 
        btn.appendChild(textSpan);
        btn.dataset.day = index; 
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <clipPath id="half-clip">
              <rect x="0" y="0" width="10" height="20" />
            </clipPath>
          </defs>
          <circle cx="10" cy="10" r="9" class="svg-bg-circle"/>
          <circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/>
        </svg>
    `;
    themeToggleBtn.setAttribute('aria-label', 'Switch theme'); 
    themeToggleBtn.addEventListener("click", toggleTheme); 

    bootSequenceBtn.addEventListener("click", openBootModal);
    bootModalCloseBtn.addEventListener("click", closeBootModal);
    bootModalOverlay.addEventListener("click", e => { if (e.target === bootModalOverlay) closeBootModal(); });

    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        completedDays = []; 
        saveProgress(); 
        saveCompletedDays(); 
        
        const currentActive = document.querySelector('.exercise-active');
        if (currentActive) {
            currentActive.classList.remove('exercise-active');
        }
        clearTimerState(); 
        
        const activeDayIndex = parseInt(document.querySelector(".day-btn.active")?.dataset.day || 0, 10);
        renderWorkout(activeDayIndex); 
        updateDayButtonCompletionMarks(); 
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    
    const today = new Date().getDay(); 
    const initialDayIndex = today === 0 ? 6 : today - 1; 
    
    setActiveDay(initialDayIndex); 
    updateDayButtonCompletionMarks(); 
    checkTimerOnFocus(); 
}

init();
